import { useEffect, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import NotFound from './components/NotFound';
import SeoIntro from './components/SeoIntro';
import { PAGE_META, NOT_FOUND_META, SITE_URL, normalizePath, breadcrumbSchema } from './seo';

// ─── Actualizare <head> la navigarea client-side ─────────────────────────────
// (la încărcarea inițială, HTML-ul prerenderat conține deja valorile corecte)
function setTag(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaByName = (name: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute('name', name);
  return el;
};
const metaByProp = (prop: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute('property', prop);
  return el;
};

function updateHead(rawPath: string) {
  const path = normalizePath(rawPath);
  const known = Object.prototype.hasOwnProperty.call(PAGE_META, path);
  const meta = known ? PAGE_META[path] : NOT_FOUND_META;
  const canonical = known ? `${SITE_URL}${path === '/' ? '/' : path}` : `${SITE_URL}/`;

  document.title = meta.title;
  setTag('meta[name="description"]', 'content', meta.description, metaByName('description'));
  setTag('meta[name="robots"]', 'content',
    known ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow',
    metaByName('robots'));
  if (known) {
    setTag('link[rel="canonical"]', 'href', canonical, () => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      return el;
    });
  } else {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  }
  setTag('meta[property="og:title"]', 'content', meta.title, metaByProp('og:title'));
  setTag('meta[property="og:description"]', 'content', meta.description, metaByProp('og:description'));
  setTag('meta[property="og:url"]', 'content', canonical, metaByProp('og:url'));
  setTag('meta[name="twitter:title"]', 'content', meta.title, metaByName('twitter:title'));
  setTag('meta[name="twitter:description"]', 'content', meta.description, metaByName('twitter:description'));

  let script = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-schema';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(breadcrumbSchema(known ? path : '/'));
}

// ─── ScrollToTop + actualizare head la fiecare navigare ──────────────────────
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    updateHead(pathname);
  }, [pathname]);
  return null;
}

// ─── Layout comun ────────────────────────────────────────────────────────────
function Layout({ children, special = true }: { children: ReactNode; special?: boolean }) {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={special} />
      {children}
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// Pe pagini standalone, H1-ul este vizibil (titlul secțiunii principale).
// Contact/Pricing/etc. incluse ca secțiuni secundare folosesc H2.
function HomePage() {
  return (
    <Layout special={false}>
      <main>
        <div id="home"><Hero /></div>
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
        <SeoIntro />
      </main>
    </Layout>
  );
}

const ServicesPage = () => (
  <Layout>
    <main className="pt-24"><Services asH1 /><Pricing /><Contact /></main>
  </Layout>
);
const PortfolioPage = () => (
  <Layout>
    <main className="pt-24"><Portfolio asH1 /><Contact /></main>
  </Layout>
);
const ProcessPage = () => (
  <Layout>
    <main className="pt-24"><Process asH1 /><Contact /></main>
  </Layout>
);
const PricingPage = () => (
  <Layout>
    <main className="pt-24"><Pricing asH1 /><Contact /></main>
  </Layout>
);
const AboutPage = () => (
  <Layout>
    <main className="pt-24"><About asH1 /><Testimonials /><Contact /></main>
  </Layout>
);
const ContactPage = () => (
  <Layout>
    <main className="pt-24"><Contact asH1 /></main>
  </Layout>
);
const FAQPage = () => (
  <Layout><main><FAQ /></main></Layout>
);
const TermsPage = () => (
  <Layout><main><Terms /></main></Layout>
);
const PrivacyPage = () => (
  <Layout><main><Privacy /></main></Layout>
);

// ─── Rute (comune pentru client și server) ───────────────────────────────────
export function AppRoutes() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
