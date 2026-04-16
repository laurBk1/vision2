import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

// ─── Meta tags per pagină ────────────────────────────────────────────────────
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'VisionEdit România - Editare Video Profesională | YouTube Shorts, Reels, TikTok',
    description: 'VisionEdit oferă servicii profesionale de editare video în România: YouTube Shorts, Instagram Reels, TikTok. Transformăm ideile tale în conținut captivant, optimizat SEO, care atrage și vinde.',
  },
  '/services': {
    title: 'Servicii Editare Video Profesională | VisionEdit România',
    description: 'Descoperă serviciile profesionale de editare video VisionEdit: YouTube Shorts, Instagram Reels, TikTok, videoclipuri corporate și conținut social media. Calitate premium la prețuri accesibile.',
  },
  '/portfolio': {
    title: 'Portofoliu Editare Video | Proiecte VisionEdit România',
    description: 'Vezi portofoliul VisionEdit: proiecte de editare video pentru clienți din România. YouTube Shorts, Reels, TikTok și videoclipuri corporate realizate profesional.',
  },
  '/process': {
    title: 'Cum Lucrăm | Procesul de Editare Video VisionEdit',
    description: 'Află cum funcționează procesul de editare video la VisionEdit: de la brief și materiale brute, până la livrarea finală. Simplu, rapid și transparent.',
  },
  '/pricing': {
    title: 'Prețuri Editare Video | Pachete și Tarife VisionEdit România',
    description: 'Prețuri transparente pentru editare video profesională: pachete pentru YouTube Shorts, Instagram Reels, TikTok și conținut corporate. Alege pachetul potrivit pentru afacerea ta.',
  },
  '/about': {
    title: 'Despre VisionEdit | Studio de Editare Video din România',
    description: 'Află povestea VisionEdit: cine suntem, ce ne motivează și de ce sute de clienți din România au ales serviciile noastre de editare video pentru creșterea prezenței online.',
  },
  '/contact': {
    title: 'Contact VisionEdit | Solicită Ofertă de Editare Video',
    description: 'Contactează VisionEdit pentru o ofertă personalizată de editare video. Răspundem în maxim 24h. Telefon: +40 767 082 106 | Email: contact@visionedit.ro',
  },
  '/faq': {
    title: 'Întrebări Frecvente despre Editare Video | VisionEdit România',
    description: 'Găsești răspunsuri la cele mai frecvente întrebări despre serviciile de editare video VisionEdit: termene, formate, revizuiri, plăți și colaborare.',
  },
  '/terms': {
    title: 'Termeni și Condiții | VisionEdit România',
    description: 'Termenii și condițiile de utilizare ale serviciilor VisionEdit România. Informații despre contracte, plăți, drepturi de autor și politica de revizuiri.',
  },
  '/privacy': {
    title: 'Politica de Confidențialitate | VisionEdit România',
    description: 'Politica de confidențialitate VisionEdit: cum colectăm, folosim și protejăm datele tale personale conform GDPR.',
  },
};

function updateHead(pathname: string) {
  const meta = PAGE_META[pathname] || PAGE_META['/'];
  const canonical = `https://visionedit.ro${pathname === '/' ? '/' : pathname}`;

  document.title = meta.title;

  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector) as HTMLElement | null;
    if (!el) {
      el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
      const parts = selector.match(/\[([^\]=]+)="([^"]+)"\]/);
      if (parts) el.setAttribute(parts[1], parts[2]);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('link[rel="canonical"]', 'href', canonical);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);
}

// ─── ScrollToTop: scroll sus la fiecare navigare ─────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    updateHead(pathname);
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
  }, [pathname]);
  return null;
}

// ─── Pagina principală (Home) ────────────────────────────────────────────────
function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="process"><Process /></div>
        <div id="pricing"><Pricing /></div>
        <div id="about"><About /></div>
        <Testimonials />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Services ─────────────────────────────────────────────────────────
function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <Services />
        <div id="pricing"><Pricing /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Portfolio ─────────────────────────────────────────────────────────
function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <Portfolio />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Process ───────────────────────────────────────────────────────────
function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <Process />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Pricing ───────────────────────────────────────────────────────────
function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <Pricing />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina About ─────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <About />
        <Testimonials />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Contact ───────────────────────────────────────────────────────────
function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina FAQ ───────────────────────────────────────────────────────────────
function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main><FAQ /></main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Terms ─────────────────────────────────────────────────────────────
function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main><Terms /></main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── Pagina Privacy ───────────────────────────────────────────────────────────
function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={true} />
      <main><Privacy /></main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        {/* Fallback: orice altă rută → Home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
