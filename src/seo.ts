// Sursă UNICĂ de adevăr pentru SEO: folosită de App.tsx (client),
// de entry-server.tsx și de scripts/prerender.mjs (build).
export const SITE_URL = 'https://visionedit.ro';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  title: string;
  description: string;
  name?: string; // nume pentru breadcrumb
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Editare Video Social Media, Reclame & Clipuri Corporate | VisionEdit',
    description:
      'Editare video pentru social media (TikTok, Reels, Shorts), reclame video, prezentări de produse și clipuri corporate. De la 185 lei/video, fără TVA. Cere ofertă.',
  },
  '/services': {
    name: 'Servicii',
    title: 'Servicii Editare Video – TikTok, Reels, Shorts, Ads | VisionEdit',
    description:
      'Servicii de editare video pentru social media, reclame video, prezentări de produse și clipuri corporate: montaj, subtitrări, sound design și color grading. Cere ofertă.',
  },
  '/portfolio': {
    name: 'Portofoliu',
    title: 'Portofoliu Editare Video | Proiecte VisionEdit România',
    description:
      'Vezi cum lucrează VisionEdit: editare video pentru TikTok, Reels, Facebook Ads și YouTube Shorts, cu confidențialitate totală pentru clienți.',
  },
  '/process': {
    name: 'Proces',
    title: 'Cum Lucrăm | Procesul de Editare Video VisionEdit',
    description:
      'Află cum funcționează colaborarea cu VisionEdit: brief, planificare, producție și livrare. Proces simplu, rapid și transparent, 100% online.',
  },
  '/pricing': {
    name: 'Prețuri',
    title: 'Prețuri Editare Video România – de la 185 lei/video | VisionEdit',
    description:
      'Prețuri transparente pentru editare video: de la 185 lei/video, fără TVA. Pachete pentru TikTok, Reels, Facebook Ads și YouTube Shorts. Alege pachetul potrivit.',
  },
  '/about': {
    name: 'Despre noi',
    title: 'Despre VisionEdit – Studio Editare Video București, Ilfov',
    description:
      'Despre VisionEdit: studio românesc de editare video pentru social media, reclame, prezentări de produse și clipuri corporate. Cine suntem și cum lucrăm.',
  },
  '/contact': {
    name: 'Contact',
    title: 'Contact Studio Editare Video București, Ilfov | VisionEdit',
    description:
      'Contactează VisionEdit pentru o ofertă personalizată de editare video. Răspundem în maximum 24h. Telefon: +40 767 082 106 | Email: contact@visionedit.ro',
  },
  '/faq': {
    name: 'FAQ',
    title: 'Întrebări Frecvente despre Editare Video | VisionEdit România',
    description:
      'Răspunsuri la întrebările frecvente despre editare video la VisionEdit: termene, formate, revizuiri, plăți, facturare și drepturi de autor.',
  },
  '/terms': {
    name: 'Termeni și condiții',
    title: 'Termeni și Condiții | VisionEdit România',
    description:
      'Termenii și condițiile serviciilor VisionEdit România: contracte, plăți, drepturi de autor și politica de revizuiri.',
  },
  '/privacy': {
    name: 'Politica de confidențialitate',
    title: 'Politica de Confidențialitate | VisionEdit România',
    description:
      'Politica de confidențialitate VisionEdit: cum colectăm, folosim și protejăm datele tale personale conform GDPR.',
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: 'Pagina nu a fost găsită | VisionEdit România',
  description: 'Pagina căutată nu există. Revino la pagina principală VisionEdit.',
};

/**
 * Normalizează calea pentru lookup în PAGE_META: fără trailing slash, fără query/hash, minuscule.
 * `/index.html` și `/<ruta>/index.html` sunt tratate ca ruta lor (altfel clientul le-ar marca
 * greșit „noindex" și ar șterge canonical-ul).
 */
export function normalizePath(pathname: string): string {
  let p = pathname.split('?')[0].split('#')[0].toLowerCase();
  p = p.replace(/\/index\.html?$/, '/');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p || '/';
}

/**
 * URL-ul public canonic al unei rute: ÎNTOTDEAUNA cu slash la final.
 * Motiv: build-ul produce dist/<ruta>/index.html, iar Netlify servește aceste pagini la `/<ruta>/`
 * și redirecționează `/<ruta>` -> `/<ruta>/`. Canonical, sitemap, schema și linkurile interne
 * trebuie să indice direct URL-ul final (fără redirect), altfel Google raportează „Page with redirect".
 */
export function canonicalPath(path: string): string {
  const p = normalizePath(path);
  return p === '/' ? '/' : `${p}/`;
}

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${canonicalPath(path)}`;
}

export function breadcrumbSchema(path: string) {
  const items: Array<Record<string, unknown>> = [
    { '@type': 'ListItem', position: 1, name: 'Acasă', item: `${SITE_URL}/` },
  ];
  const meta = PAGE_META[path];
  if (path !== '/' && meta?.name) {
    items.push({ '@type': 'ListItem', position: 2, name: meta.name, item: canonicalUrl(path) });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}
