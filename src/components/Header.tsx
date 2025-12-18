import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Verificăm dacă suntem pe pagina de termeni
  const isTermsPage = window.location.hash === '#terms';
  const isPrivacyPage = window.location.hash === '#privacy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Servicii', href: '#services' },
    { name: 'Portofoliu', href: '#portfolio' },
    { name: 'Proces', href: '#process' },
    { name: 'Prețuri', href: '#pricing' },
    { name: 'Despre', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    // Dacă suntem pe pagina de termeni, navigăm înapoi la home
    if (window.location.hash === '#terms' || window.location.hash === '#privacy') {
      window.location.hash = '';
      window.location.reload();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigare normală pe aceeași pagină
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (window.location.hash === '#terms' || window.location.hash === '#privacy') {
      window.location.hash = '';
      window.location.reload();
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (window.location.hash === '#terms' || window.location.hash === '#privacy') {
      window.location.hash = '';
      window.location.reload();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Forțăm scroll la top înainte de navigare
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.location.hash = '#terms';
    // Delay mic pentru a permite hash-ul să se seteze
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  // Pentru pagina de termeni, forțăm întotdeauna fundalul albastru închis
  const headerBackground = (isTermsPage || isPrivacyPage)
    ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' 
    : (isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo and Brand */}
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src="/logo.webp" 
              alt="VisionEdit România Logo" 
              className="h-10 md:h-12 w-auto"
              width="150"
              height="50"
              loading="eager"
            />
            <div className="text-white">
              <div className="text-lg md:text-xl font-bold text-shadow-sm">VisionEdit</div>
              <div className="text-xs md:text-sm text-blue-300 font-semibold">România</div>
            </div>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 py-4 shadow-xl border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 font-semibold"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button 
                onClick={handleContactClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-lg"
                aria-label="Începe proiectul tău"
              >
                Începe Proiectul
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;