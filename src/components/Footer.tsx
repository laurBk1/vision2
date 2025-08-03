import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href: string) => {
    // Dacă suntem pe pagina de termeni, navigăm înapoi la home
    if (window.location.hash === '#terms') {
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

  const handleLogoClick = () => {
    if (window.location.hash === '#terms') {
      window.location.hash = '';
      window.location.reload();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div 
              className="flex items-center space-x-3 mb-4 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img 
                src="/logo.webp" 
                alt="VisionEdit România Logo" 
                className="h-10 w-auto"
                width="120"
                height="40"
                loading="lazy"
              />
              <div className="text-white">
                <div className="text-xl font-bold">VisionEdit</div>
                <div className="text-sm text-blue-300 font-medium">România</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              VisionEdit se ocupă de crearea și editarea videoclipurilor scurte, atractive și profesionale 
              care îți cresc vizibilitatea și aduc clienți noi.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+40767082106" className="hover:text-white transition-colors">
                  +40 767 082 106
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@visionedit.ro" className="hover:text-white transition-colors">
                  contact@visionedit.ro
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#portfolio')}
                  className="hover:text-white transition-colors text-left"
                >
                  Portofoliu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#process')}
                  className="hover:text-white transition-colors text-left"
                >
                  Proces
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Despre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informații utile</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#pricing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Prețuri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTermsClick}
                  className="hover:text-white transition-colors text-left"
                >
                  Termeni și condiții
                </button>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <p>Program: Luni - Vineri, 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Iconițe Sociale */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-lg font-semibold text-white">Urmărește-ne pe Social Media</h3>
            
            <div className="flex space-x-6">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1b1MVuEKH2/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label="Urmărește-ne pe Facebook"
              >
                <Facebook className="h-6 w-6 text-white group-hover:animate-pulse" />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/laur_visionedit?igsh=MXRjbHozY3NidW1rdg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label="Urmărește-ne pe Instagram"
              >
                <Instagram className="h-6 w-6 text-white group-hover:animate-pulse" />
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@laur_visionedit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label="Urmărește-ne pe TikTok"
              >
                <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@laur_visionedit?si=FsGDHSF9gbsEjUwR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label="Urmărește-ne pe YouTube"
              >
                <svg className="h-6 w-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <p className="text-gray-400 text-sm text-center">
              Conectează-te cu noi pentru ultimele noutăți!
            </p>
          </div>
        </div>

        {/* Legal Compliance Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Protecția Consumatorului</h3>
            <p className="text-gray-400 text-sm">Conform legislației din România și Uniunea Europeană</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            {/* ANPC Link */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 w-full md:w-auto max-w-sm">
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-3 leading-tight">
                  SOLUȚIONAREA ALTERNATIVĂ<br />A LITIGIILOR
                </h4>
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/anpc-visionedit.ro.webp" 
                    alt="ANPC - Autoritatea Națională pentru Protecția Consumatorilor" 
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                    width="120"
                    height="48"
                  />
                </div>
                <a 
                  href="https://reclamatiisal.anpc.ro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                  aria-label="Accesează platforma ANPC pentru soluționarea alternativă a litigiilor"
                >
                  DETALII
                </a>
              </div>
            </div>

            {/* SOL Link */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 w-full md:w-auto max-w-sm">
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-3 leading-tight">
                  SOLUȚIONAREA ONLINE<br />A LITIGIILOR
                </h4>
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/sol-visionedit.ro.png" 
                    alt="SOL - Platforma europeană de soluționare online a litigiilor" 
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                    width="120"
                    height="48"
                  />
                </div>
                <a 
                  href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home2.show&lng=RO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                  aria-label="Accesează platforma europeană SOL pentru soluționarea online a litigiilor"
                >
                  DETALII
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VisionEdit. Toate drepturile rezervate.<br />
            Creat cu <span className="text-red-500">♥</span> de Laur Bk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;