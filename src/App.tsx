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

function App() {
  // Verificăm dacă suntem pe pagina de termeni
  const isTermsPage = window.location.hash === '#terms';

  useEffect(() => {
    // Scroll la top când se încarcă pagina de termeni - FORȚAT
    if (isTermsPage) {
      // Forțăm scroll la top imediat
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Și încă o dată după un mic delay pentru siguranță
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 50);
    }
  }, [isTermsPage]);

  // Adăugăm un useEffect suplimentar pentru a forța scroll la top
  useEffect(() => {
    if (isTermsPage) {
      // Forțăm scroll la top de fiecare dată când componenta se re-renderează
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  });

  if (isTermsPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <Terms />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;