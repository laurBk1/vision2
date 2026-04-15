import { useEffect, useState } from 'react';
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

// Helper: determină pagina curentă din URL (path SAU hash)
function getCurrentPage() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  if (path === '/terms' || hash === '#terms') return 'terms';
  if (path === '/privacy' || hash === '#privacy') return 'privacy';
  if (path === '/faq' || hash === '#faq') return 'faq';
  if (path === '/pricing' || hash === '#pricing') return 'pricing';
  if (path === '/contact' || hash === '#contact') return 'contact';
  return 'home';
}

function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
      document.body.style.maxWidth = '';
    };
  }, []);

  const [page, setPage] = useState(() => getCurrentPage());

  useEffect(() => {
    const updatePage = () => setPage(getCurrentPage());
    window.addEventListener('hashchange', updatePage);
    window.addEventListener('popstate', updatePage);
    return () => {
      window.removeEventListener('hashchange', updatePage);
      window.removeEventListener('popstate', updatePage);
    };
  }, []);

  const isSpecialPage = page === 'terms' || page === 'privacy' || page === 'faq';

  // Scroll la top pentru paginile speciale
  useEffect(() => {
    if (isSpecialPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [page]);

  // Scroll la secțiune pentru paginile cu anchor (pricing, contact)
  useEffect(() => {
    if (page === 'pricing' || page === 'contact') {
      const timer = setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [page]);

  if (page === 'terms') {
    return (
      <div className="min-h-screen">
        <Header isSpecialPage={true} currentPage="terms" />
        <main><Terms /></main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    );
  }

  if (page === 'faq') {
    return (
      <div className="min-h-screen">
        <Header isSpecialPage={true} currentPage="faq" />
        <main><FAQ /></main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    );
  }

  if (page === 'privacy') {
    return (
      <div className="min-h-screen">
        <Header isSpecialPage={true} currentPage="privacy" />
        <main><Privacy /></main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    );
  }

  // Pagina principală
  return (
    <div className="min-h-screen">
      <Header isSpecialPage={false} currentPage={page} />
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

export default App;
