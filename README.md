# VisionEdit — visionedit.ro

React + Vite + Tailwind, **prerenderat la build (SSG)** și hidratat în browser.

```bash
npm install
npm run dev        # dezvoltare (fără prerender)
npm run build      # vite build + SSR bundle + scripts/prerender.mjs  -> dist/
npm run typecheck  # tsc
npm run lint
```

## Cum funcționează SEO-ul
- `src/seo.ts` = sursă unică pentru title/description/breadcrumb per rută (client + build).
- `scripts/prerender.mjs` scrie `dist/<rută>/index.html` cu HTML complet + meta + JSON-LD, și `dist/404.html` (noindex, servit cu status 404 real de Netlify).
- Rută nouă: adaug-o în `src/seo.ts` (PAGE_META), în `src/App.tsx` (Route) și în `public/sitemap.xml`.
- Headerele de securitate/CSP/redirecturile sunt DOAR în `netlify.toml`.

## Fișiere care trebuie să existe în `public/` (lipseau din arhivă)
`logo.webp`, `favicon.ico`, `favicon-96x96.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`,
`anpc-visionedit.ro.webp`, `sol-visionedit.ro.png`.
