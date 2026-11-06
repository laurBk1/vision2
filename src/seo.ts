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
    title: 'VisionEdit România - Editare Video Profesională | TikTok, Reels, FB Ads, Shorts',
    description:
      'Editare video profesională în România: TikTok, Instagram Reels, Facebook Ads, YouTube Shorts. Preț de la 185 lei/video, fără TVA. Cere o ofertă gratuită.',
  },
  '/services': {
    name: 'Servicii',
    title: 'Servicii Editare Video Profesională | VisionEdit România',
    description:
      'Servicii de editare video pentru TikTok, Instagram Reels, Facebook Ads și YouTube Shorts: montaj, subtitrări, sound design, color grading și hook viral. Cere ofertă.',
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
    title: 'Prețuri Editare Video | Pachete și Tarife VisionEdit România',
    description:
      'Prețuri transparente pentru editare video: de la 185 lei/video, fără TVA. Pachete pentru TikTok, Reels, Facebook Ads și YouTube Shorts. Alege pachetul potrivit.',
  },
  '/about': {
    name: 'Despre noi',
    title: 'Despre VisionEdit | Studio de Editare Video din România',
    description:
      'Despre VisionEdit: studio românesc de editare video scurtă pentru TikTok, Reels și Shorts. Cine suntem și cum transformăm clipurile tale în conținut care vinde.',
  },
  '/contact': {
    name: 'Contact',
    title: 'Contact VisionEdit | Solicită Ofertă de Editare Video',
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

/** Normalizează calea: fără trailing slash, fără query/hash, minuscule. */
export function normalizePath(pathname: string): string {
  let p = pathname.split('?')[0].split('#')[0].toLowerCase();
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p || '/';
}

export function breadcrumbSchema(path: string) {
  const items: Array<Record<string, unknown>> = [
    { '@type': 'ListItem', position: 1, name: 'Acasă', item: `${SITE_URL}/` },
  ];
  const meta = PAGE_META[path];
  if (path !== '/' && meta?.name) {
    items.push({ '@type': 'ListItem', position: 2, name: meta.name, item: `${SITE_URL}${path}` });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}
