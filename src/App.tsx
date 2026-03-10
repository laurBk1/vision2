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
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [location, setLocation] = useState({
    hash: window.location.hash,
    path: window.location.pathname,
  });

  // Ascultăm butonul înapoi/înainte al browserului
  useEffect(() => {
    const handlePopState = () => {
      setLocation({
        hash: window.location.hash,
        path: window.location.pathname,
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const { hash, path } = location;

  const isTermsPage = hash === '#terms' || path === '/terms';
  const isPrivacyPage = hash === '#privacy' || path === '/privacy';

  // Scroll la top pentru Terms/Privacy
  useEffect(() => {
    if (isTermsPage || isPrivacyPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [isTermsPage, isPrivacyPage]);

  // Scroll la secțiune pentru link-urile din meniu
  useEffect(() => {
    if (!isTermsPage && !isPrivacyPage) {
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
  }, [hash, path, isTermsPage, isPrivacyPage]);

  if (isTermsPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <Terms />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  if (isPrivacyPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <Privacy />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

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
    </div>
  );
}

export default App;