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

  // Lazy initializer SINCRON — citește hash-ul direct la primul render
  // Fără requestAnimationFrame, fără delay — fix Firefox
  const [location, setLocation] = useState(() => ({
    hash: window.location.hash,
    path: window.location.pathname,
  }));

  useEffect(() => {
    const updateLocation = () => setLocation({
      hash: window.location.hash,
      path: window.location.pathname,
    });
    window.addEventListener('popstate', updateLocation);
    window.addEventListener('hashchange', updateLocation);
    return () => {
      window.removeEventListener('popstate', updateLocation);
      window.removeEventListener('hashchange', updateLocation);
    };
  }, []);

  const { hash, path } = location;

  const isTermsPage = hash === '#terms' || path === '/terms';
  const isPrivacyPage = hash === '#privacy' || path === '/privacy';
  const isFaqPage = hash === '#faq' || path === '/faq';
  const isSpecialPage = isTermsPage || isPrivacyPage || isFaqPage;

  // Fix Firefox: forțează overflow-y: scroll pe <html> pentru paginile speciale
  // Firefox nu activează compositor thread pentru position:fixed fără scrollbar activ
  // Asta cauzează că headerul apare invizibil până la primul scroll/hover
  useEffect(() => {
    if (isSpecialPage) {
      document.documentElement.style.overflowY = 'scroll';
    } else {
      document.documentElement.style.overflowY = '';
    }
    return () => {
      document.documentElement.style.overflowY = '';
    };
  }, [isSpecialPage]);

  // Scroll la top pentru Terms/Privacy/FAQ
  useEffect(() => {
    if (isTermsPage || isPrivacyPage || isFaqPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [hash, path]);

  // Scroll la secțiune pentru link-urile din meniu
  useEffect(() => {
    if (!isTermsPage && !isPrivacyPage && !isFaqPage) {
      const targetId = hash ? hash.replace('#', '') : (path !== '/' ? path.replace('/', '') : null);
      if (targetId) {
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [hash, path, isTermsPage, isPrivacyPage, isFaqPage]);

  if (isTermsPage) {
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

  if (isFaqPage) {
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

  if (isPrivacyPage) {
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

  return (
    <div className="min-h-screen">
      <Header isSpecialPage={false} />
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
