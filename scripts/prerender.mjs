// scripts/prerender.mjs
//
// Rulează după `vite build` și `vite build --ssr`.
// Pentru fiecare rută randează aplicația React la HTML real (SSR), apoi o injectează în
// dist/<ruta>/index.html cu <title>, meta, canonical, Open Graph, JSON-LD (breadcrumb, FAQ) corecte.
// Rezultat: Google, Bing, crawlerii AI și preview-urile sociale (care NU rulează JS) văd tot conținutul.
// Clientul hidratează (hydrateRoot) același HTML.
//
// Generează și dist/404.html (noindex) — Netlify îl servește cu status HTTP 404 real.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

const { PAGE_META, NOT_FOUND_META, SITE_URL, breadcrumbSchema, faqSections } =
  (await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)).meta;



let template = readFileSync(resolve(dist, 'index.html'), 'utf-8');

// CSS-ul propriu (mic, ~54 KB / 9 KB gzip) se pune direct în HTML: pagina nu mai poate apărea
// fără stiluri dacă fișierul CSS e întrerupt (ex. refresh-uri repetate în Firefox) și dispare
// cererea blocantă de randare.
template = template.replace(
  /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/,
  (_m, href) => {
    const css = readFileSync(resolve(dist, href.slice(1)), 'utf-8');
    if (css.includes('</style')) throw new Error('[prerender] CSS conține </style');
    return `<style>${css}</style>`;
  }
);
if (!template.includes('<style>') ) throw new Error('[prerender] Nu am putut insera CSS-ul inline');

const esc = (t) =>
  String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const jsonLd = (obj, id) =>
  `<script type="application/ld+json"${id ? ` id="${id}"` : ''}>${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSections.flatMap((s) =>
      s.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\n/g, ' ') },
      }))
    ),
  };
}

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`[prerender] Nu găsesc în template: ${label}`);
  return html.replace(regex, () => replacement);
}

function build(path, meta, { index = true } = {}) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const appHtml = render(path);
  let html = template;

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`, 'title');
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(meta.description)}">`, 'description');
  html = setTag(html, /<meta name="robots"[^>]*>/,
    `<meta name="robots" content="${index ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow'}">`, 'robots');
  html = setTag(html, /<link rel="canonical"[^>]*>/, index ? `<link rel="canonical" href="${canonical}" />` : '', 'canonical');
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`, 'og:url');
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(meta.title)}" />`, 'og:title');
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(meta.description)}" />`, 'og:description');
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`, 'twitter:title');
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`, 'twitter:description');

  let extra = '';
  if (index) extra += jsonLd(breadcrumbSchema(path), 'breadcrumb-schema');
  if (path === '/faq') extra += jsonLd(faqSchema(), 'faq-page-schema');
  html = html.replace('</head>', () => `${extra}\n  </head>`);

  html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, '#root');
  return html;
}

function write(relPath, html) {
  const file = resolve(dist, relPath);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf-8');
  console.log(`[prerender] dist/${relPath}  (${(html.length / 1024).toFixed(1)} KB)`);
}

for (const path of Object.keys(PAGE_META)) {
  write(path === '/' ? 'index.html' : `${path.slice(1)}/index.html`, build(path, PAGE_META[path]));
}
// 404 real: Netlify servește dist/404.html cu status 404
write('404.html', build('/__404__', NOT_FOUND_META, { index: false }));

rmSync(ssrDir, { recursive: true, force: true });
console.log('[prerender] Gata.');
