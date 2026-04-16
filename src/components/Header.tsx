import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, Zap, Clapperboard, BookImage, GitMerge, BadgeDollarSign, Users, Mail, ChevronRight, HelpCircle } from 'lucide-react';

const menuButtonStyle = `
  @keyframes menuPulseRing {
    0%   { transform: scale(1);    opacity: 0; }
    15%  { transform: scale(1.05); opacity: 0.65; }
    70%  { transform: scale(1.5);  opacity: 0.15; }
    100% { transform: scale(1.6);  opacity: 0; }
  }
  @keyframes menuBorderSpin {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .menu-btn-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    .menu-btn-wrapper {
      display: none !important;
    }
  }
  .menu-btn-wrapper::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(135deg, #2563eb, #7c3aed, #2563eb);
    background-size: 200% 200%;
    animation: menuBorderSpin 2.5s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.85;
  }
  .menu-btn-wrapper.open::before {
    opacity: 0;
  }
  .menu-pulse-ring {
    position: absolute;
    inset: -6px;
    border-radius: 14px;
    border: 2px solid rgba(99, 102, 241, 0.7);
    animation: menuPulseRing 2s ease-out 3;
    animation-fill-mode: forwards;
    pointer-events: none;
  }
  .menu-pulse-ring.open {
    display: none;
  }
  .menu-close-ring {
    position: absolute;
    inset: -5px;
    border-radius: 14px;
    border: 2px solid rgba(239, 68, 68, 0.65);
    animation: menuPulseRing 2s ease-out 3;
    animation-fill-mode: forwards;
    pointer-events: none;
  }
`;

const navItems = [
  { name: 'Servicii',  path: '/services',  icon: Clapperboard  },
  { name: 'Portofoliu',path: '/portfolio', icon: BookImage      },
  { name: 'Proces',    path: '/process',   icon: GitMerge       },
  { name: 'Prețuri',   path: '/pricing',   icon: BadgeDollarSign},
  { name: 'Despre',    path: '/about',     icon: Users          },
  { name: 'FAQ',       path: '/faq',       icon: HelpCircle     },
  { name: 'Contact',   path: '/contact',   icon: Mail           },
];

const Header = ({ isSpecialPage = false }: { isSpecialPage?: boolean; currentPage?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSpecialPage) setIsScrolled(true);
  }, [isSpecialPage]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = isSpecialPage || isMenuOpen || isScrolled;

  // Paginile care NU există ca secțiuni pe homepage — navighează mereu direct
  const standalonePages = ['/faq', '/privacy', '/terms'];

  // Navighează la o secțiune din homepage sau la o pagină dedicată
  const handleSectionNav = (path: string, sectionId: string) => {
    setIsMenuOpen(false);
    // Pagini standalone (nu sunt secțiuni pe homepage) — navighează direct mereu
    if (standalonePages.includes(path)) {
      navigate(path);
      return;
    }
    if (location.pathname === '/') {
      // Suntem pe home — scroll direct la secțiune
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        navigate(path);
      }
    } else {
      // Pe o altă pagină — navighează la pagina dedicată
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: isSolid ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
    backdropFilter: isSolid ? 'blur(8px)' : 'none',
    WebkitBackdropFilter: isSolid ? 'blur(8px)' : 'none',
    boxShadow: isSolid ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
    transform: 'translateZ(0)',
    willChange: 'background-color, backdrop-filter',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={headerStyle}>
      <style>{menuButtonStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionNav(item.path, item.path.replace('/', ''))}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleSectionNav('/contact', 'contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-bold text-sm xl:text-base transition-colors duration-200 flex items-center space-x-2 shadow-lg"
              aria-label="Începe proiectul tău"
            >
              <span>Începe Proiectul</span>
              <Zap className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className={`menu-btn-wrapper lg:hidden ${isMenuOpen ? 'open' : ''}`}>
            {!isMenuOpen && <div className="menu-pulse-ring" />}
            {isMenuOpen && <div className="menu-close-ring" />}
            <button
              className="relative text-white p-2 rounded-lg transition-all duration-200"
              style={{ background: isMenuOpen ? 'rgba(255,255,255,0.08)' : 'rgba(37,99,235,0.12)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden mb-3 shadow-2xl border border-white/10 rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}
          >
            <div
              className="px-5 py-3 border-b border-white/10 flex items-center justify-between"
              style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.15) 0%, rgba(147,51,234,0.15) 100%)' }}
            >
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Navigare</p>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-80" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-80" />
              </div>
            </div>

            <div className="py-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleSectionNav(item.path, item.path.replace('/', ''))}
                    className="group flex items-center w-full px-5 py-3.5 transition-all duration-200 hover:bg-white/5 border-b border-white/5 last:border-b-0"
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-xl mr-3 flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: index % 2 === 0
                          ? 'linear-gradient(135deg, rgba(37,99,235,0.35), rgba(37,99,235,0.12))'
                          : 'linear-gradient(135deg, rgba(147,51,234,0.35), rgba(147,51,234,0.12))'
                      }}
                    >
                      <Icon className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                    <span className="flex-1 text-left text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-200">
                      {item.name === 'FAQ' ? 'FAQ — Întrebări frecvente' : item.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                );
              })}
            </div>

            <div
              className="px-5 py-4 border-t border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(147,51,234,0.08) 100%)' }}
            >
              <button
                onClick={() => handleSectionNav('/contact', 'contact')}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }}
              >
                <span>Începe Proiectul</span>
                <Zap className="h-4 w-4" />
              </button>
              <p className="text-center text-gray-500 text-xs mt-3 font-medium">
                Tot ce ai nevoie, într-un singur loc
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
