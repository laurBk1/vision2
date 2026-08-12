// scripts/generate-static-pages.js
//
// De ce există acest script:
// Site-ul este un SPA (React + Vite). În mod normal, TOATE rutele
// (/, /services, /pricing, /contact etc.) livrează exact același
// index.html, iar titlul/meta description corecte apar abia după ce
// se execută JavaScript în browser (vezi App.tsx -> updateHead()).
//
// Problema: Google (și mai ales alți roboți / preview-uri sociale care
// NU execută JS — WhatsApp, Facebook, unele instrumente SEO) văd inițial
// titlul și descrierea paginii principale pe toate rutele. Asta slăbește
// semnalele de conținut unic per pagină și poate încetini indexarea.
//
// Ce face scriptul:
// După `vite build`, generează câte un index.html STATIC pentru fiecare
// rută (ex: dist/services/index.html), cu <title>, meta description,
// canonical și Open Graph deja corecte în HTML brut — fără să aștepte JS.
// Restul aplicației (bundle-ul JS) rămâne neschimbat, deci React preia
// controlul normal după încărcare (hidratare) și site-ul funcționează
// exact ca înainte pentru utilizatori.
//
// Netlify servește automat fișierul static de la calea exactă
// (ex: /services/index.html) înaintea regulilor de redirect SPA,
// deci nu necesită nicio configurare suplimentară.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const templatePath = resolve(distDir, 'index.html');

if (!existsSync(templatePath)) {
  console.error('[generate-static-pages] Nu găsesc dist/index.html — rulează întâi "vite build".');
  process.exit(1);
}

const SITE_URL = 'https://visionedit.ro';

// Trebuie ținut sincronizat manual cu PAGE_META din src/App.tsx
const ROUTES = [
  {
    path: '/services',
    title: 'Servicii Editare Video Profesională | VisionEdit România',
    description: 'Descoperă serviciile profesionale de editare video VisionEdit: YouTube Shorts, Instagram Reels, TikTok, videoclipuri corporate și conținut social media. Calitate premium la prețuri accesibile.',
  },
  {
    path: '/portfolio',
    title: 'Portofoliu Editare Video | Proiecte VisionEdit România',
    description: 'Vezi portofoliul VisionEdit: proiecte de editare video pentru clienți din România. YouTube Shorts, Reels, TikTok și videoclipuri corporate realizate profesional.',
  },
  {
    path: '/process',
    title: 'Cum Lucrăm | Procesul de Editare Video VisionEdit',
    description: 'Află cum funcționează procesul de editare video la VisionEdit: de la brief și materiale brute, până la livrarea finală. Simplu, rapid și transparent.',
  },
  {
    path: '/pricing',
    title: 'Prețuri Editare Video | Pachete și Tarife VisionEdit România',
    description: 'Prețuri transparente pentru editare video profesională: pachete pentru YouTube Shorts, Instagram Reels, TikTok și conținut corporate. Alege pachetul potrivit pentru afacerea ta.',
  },
  {
    path: '/about',
    title: 'Despre VisionEdit | Studio de Editare Video din România',
    description: 'Află povestea VisionEdit: cine suntem, ce ne motivează și de ce sute de clienți din România au ales serviciile noastre de editare video pentru creșterea prezenței online.',
  },
  {
    path: '/contact',
    title: 'Contact VisionEdit | Solicită Ofertă de Editare Video',
    description: 'Contactează VisionEdit pentru o ofertă personalizată de editare video. Răspundem în maxim 24h. Telefon: +40 767 082 106 | Email: contact@visionedit.ro',
  },
  {
    path: '/faq',
    title: 'Întrebări Frecvente despre Editare Video | VisionEdit România',
    description: 'Găsești răspunsuri la cele mai frecvente întrebări despre serviciile de editare video VisionEdit: termene, formate, revizuiri, plăți și colaborare.',
  },
  {
    path: '/terms',
    title: 'Termeni și Condiții | VisionEdit România',
    description: 'Termenii și condițiile de utilizare ale serviciilor VisionEdit România. Informații despre contracte, plăți, drepturi de autor și politica de revizuiri.',
  },
  {
    path: '/privacy',
    title: 'Politica de Confidențialitate | VisionEdit România',
    description: 'Politica de confidențialitate VisionEdit: cum colectăm, folosim și protejăm datele tale personale conform GDPR.',
  },
];

const template = readFileSync(templatePath, 'utf-8');

function buildHtmlFor(route) {
  const canonical = `${SITE_URL}${route.path}`;
  let html = template;

  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?">/s,
    `<meta name="description" content="${route.description}">`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/s,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/s,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  return html;
}

for (const route of ROUTES) {
  const outDir = resolve(distDir, route.path.replace(/^\//, ''));
  const outFile = resolve(outDir, 'index.html');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, buildHtmlFor(route), 'utf-8');
  console.log(`[generate-static-pages] Generat: dist${route.path}/index.html`);
}

console.log(`[generate-static-pages] Gata — ${ROUTES.length} pagini statice generate.`);
