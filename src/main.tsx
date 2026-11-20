import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// `/index.html` și `/<ruta>/index.html` nu sunt rute ale aplicației: curățăm URL-ul înainte de router,
// ca să nu se afișeze pagina 404 (și ca Google să nu vadă duplicate ale paginilor canonice).
// Pe Netlify există și un redirect 301 server-side (netlify.toml); aceasta e plasa de siguranță.
if (/\/index\.html?$/i.test(window.location.pathname)) {
  window.history.replaceState(
    null,
    '',
    window.location.pathname.replace(/index\.html?$/i, '') + window.location.search + window.location.hash,
  );
}

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// HTML-ul prerenderat (build) se hidratează; în dev (fără prerender) se randează normal.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
