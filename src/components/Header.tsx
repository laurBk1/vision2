import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap, Clapperboard, BookImage, GitMerge, BadgeDollarSign, Users, Mail, ChevronRight, HelpCircle } from 'lucide-react';

const SPECIAL_HASHES = ['#faq', '#terms', '#privacy'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, forceRender] = useState(0);
  const hashRef = useRef(window.location.hash);

  // Sincronizăm hashRef la orice schimbare și forțăm re-render
  useEffect(() => {
    const sync = () => {
      hashRef.current = window.location.hash;
      forceRender(n => n + 1);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Citim hash-ul DIRECT — fără state intermediar, fără delay
  const currentHash = window.location.hash;
  const isSpecialPage = SPECIAL_HASHES.includes(currentHash);

  const navItems = [
    { name: 'Servicii', href: '#services', icon: Clapperboard },
    { name: 'Portofoliu', href: '#portfolio', icon: BookImage },
    { name: 'Proces', href: '#process', icon: GitMerge },
    { name: 'Prețuri', href: '#pricing', icon: BadgeDollarSign },
    { name: 'Despre', href: '#about', icon: Users },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleNavClick = (href: string) => {
    if (SPECIAL_HASHES.includes(href)) {
      window.location.hash = href;
      setIsMenuOpen(false);
      return;
    }
    if (SPECIAL_HASHES.includes(window.location.hash)) {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.querySelector(href) as HTMLElement;
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (SPECIAL_HASHES.includes(window.location.hash)) {
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('contact');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (SPECIAL_HASHES.includes(window.location.hash)) {
      window.location.hash = '';
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isSolid = isSpecialPage || isMenuOpen || isScrolled;
  const headerStyle: React.CSSProperties = {
    backgroundColor: isSolid ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
    backdropFilter: isSolid ? 'blur(8px)' : 'none',
    WebkitBackdropFilter: isSolid ? 'blur(8px)' : 'none',
    boxShadow: isSolid ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    transform: 'translateZ(0)',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={headerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/logo.webp"
              alt="VisionEdit România Logo"
              className="h-14 md:h-16 w-auto"
              width="294"
              height="98"
              loading="eager"
              fetchPriority="high"
            />
            <div className="text-white">
              <div className="text-lg md:text-xl font-bold text-shadow-sm">VisionEdit</div>
              <div className="text-xs md:text-sm text-blue-300 font-semibold">România</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-bold text-sm xl:text-base transition-colors duration-200 flex items-center space-x-2 shadow-lg"
              aria-label="Începe proiectul tău"
            >
              <span>Începe Proiectul</span>
              <Zap className="h-4 w-4" />
            </button>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden shadow-2xl border border-white/10 rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}
          >
            <div className="px-5 py-4 border-b border-white/10"
              style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.15) 0%, rgba(147,51,234,0.15) 100%)' }}
            >
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Navigare</p>
            </div>
            <div className="py-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center w-full px-5 py-3 transition-all duration-200 hover:bg-white/5 border-b border-white/5 last:border-b-0"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl mr-3 transition-all duration-200 group-hover:scale-110"
                      style={{ background: index % 2 === 0
                        ? 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))'
                        : 'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(147,51,234,0.1))'
                      }}
                    >
                      <Icon className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                    <span className="flex-1 text-left text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-200">
                      {item.name === 'FAQ' ? 'FAQ — Întrebări frecvente' : item.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
