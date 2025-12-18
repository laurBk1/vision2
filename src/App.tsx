import React, { useEffect } from 'react';
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
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const hash = window.location.hash;
  const isTermsPage = hash === '#terms';
  const isPrivacyPage = hash === '#privacy';

  // 1. Logica pentru paginile speciale (Terms/Privacy)
  useEffect(() => {
    if (isTermsPage || isPrivacyPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [isTermsPage, isPrivacyPage]);

  // 2. Logica pentru TOATE link-urile din sitemap (#services, #portfolio, #about, etc.)
  useEffect(() => {
    if (!isTermsPage && !isPrivacyPage && hash) {
      // Așteptăm un mic delay pentru ca elementele să fie randate pe pagină
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [hash, isTermsPage, isPrivacyPage]);

  if (isTermsPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <Terms />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  if (isPrivacyPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <Privacy />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="process"><Process /></div>
      <div id="pricing"><Pricing /></div>
      <div id="about"><About /></div>
      <Testimonials />
      <div id="contact"><Contact /></div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;