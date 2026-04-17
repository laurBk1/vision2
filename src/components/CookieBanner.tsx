import { useState, useEffect } from 'react';
import { Shield, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'visionedit_cookie_consent';
const COOKIE_CONSENT_DATE_KEY = 'visionedit_cookie_consent_date';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
    enableClarity: () => void;
    disableClarity: () => void;
    _clarityEnabled: boolean;
  }
}

function enableGoogleAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
  }
}

function disableGoogleAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

function enableAllAnalytics() {
  enableGoogleAnalytics();
  if (typeof window.enableClarity === 'function') {
    window.enableClarity();
  }
  if (typeof window.clarity === 'function') {
    window.clarity('consent', true);
  }
}

function disableAllAnalytics() {
  disableGoogleAnalytics();
  if (typeof window.disableClarity === 'function') {
    window.disableClarity();
  }
  if (typeof window.clarity === 'function') {
    window.clarity('consent', false);
  }
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!document.getElementById('cookie-banner-styles')) {
      const style = document.createElement('style');
      style.id = 'cookie-banner-styles';
      style.innerHTML = `
        @keyframes cookieSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes cookieGlow {
          0%, 100% { box-shadow: 0 0 6px 2px rgba(147,51,234,0.4); }
          50%       { box-shadow: 0 0 18px 6px rgba(147,51,234,0.9); }
        }
        @keyframes cookieIdle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50%       { transform: rotate(8deg) scale(1.05); }
        }
        .cookie-icon-wrap {
          animation: cookieSpin 1.8s ease-in-out 2, cookieGlow 1.2s ease-in-out 3;
          animation-fill-mode: forwards;
        }
        .cookie-icon-wrap:hover {
          animation: cookieIdle 0.6s ease-in-out infinite !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Verifică consimțământul la fiecare schimbare de pagină
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Fără consimțământ → afișează bannerul pe ORICE pagină, inclusiv /privacy
      setVisible(true);
    } else {
      setVisible(false);
      if (consent === 'accepted') {
        enableAllAnalytics();
      } else {
        disableAllAnalytics();
      }
    }
  }, [location.pathname]);

  // Blochează scroll-ul când bannerul e vizibil
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    enableAllAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    disableAllAnalytics();
    setVisible(false);
  };

  // Navighează la /privacy FĂRĂ a ascunde bannerul
  // Bannerul rămâne vizibil peste pagina de Privacy Policy
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/privacy');
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay care blochează orice interacțiune cu pagina din spate */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998]"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        aria-hidden="true"
        style={{ pointerEvents: 'all' }}
      />

      {/* Bannerul cookies */}
      <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900/80 to-slate-900/80 px-6 py-4 flex items-center justify-between border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="cookie-icon-wrap bg-purple-600 rounded-lg p-2">
                <Cookie className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Confidențialitate & Cookies</h3>
                <p className="text-purple-300 text-sm">VisionEdit SRL — Politică Cookies</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-purple-400 hidden sm:block" />
              <span className="text-purple-400 text-sm font-medium hidden sm:block">Protejat GDPR</span>
            </div>
          </div>

          {/* Conținut */}
          <div className="px-6 py-5">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Folosim cookie-uri esențiale pentru funcționarea site-ului și, cu acordul tău, cookie-uri de analiză (
              <span className="text-purple-400 font-semibold">Google Analytics</span>
              {' '}și{' '}
              <span className="text-purple-400 font-semibold">Microsoft Clarity</span>
              ) pentru a înțelege cum vizitatorii interacționează cu noi. Datele sunt colectate în mod pseudonim și nu sunt utilizate pentru a te identifica personal.
            </p>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 text-sm transition-colors mb-4"
            >
              {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span>{showDetails ? 'Ascunde detalii' : 'Vezi detalii despre cookies'}</span>
            </button>

            {showDetails && (
              <div className="bg-gray-800/60 rounded-xl p-4 mb-5 border border-gray-700/50 space-y-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">Cookie-uri strict necesare</span>
                    <span className="bg-green-600/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30 whitespace-nowrap shrink-0">Mereu active</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.</p>
                </div>
                <div className="border-t border-gray-700/50" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">Cookie-uri de analiză</span>
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-0.5 rounded-full border border-blue-500/30 whitespace-nowrap shrink-0">Google Analytics</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Cookie-urile <code className="text-purple-300">_ga</code> și <code className="text-purple-300">_ga_*</code> colectează date anonime despre vizitatori (pagini vizitate, durata sesiunii, sursa traficului). Durata: 2 ani. Operator: Google LLC.
                  </p>
                </div>
                <div className="border-t border-gray-700/50" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">Cookie-uri de comportament</span>
                    <span className="bg-cyan-600/20 text-cyan-400 text-xs px-2 py-0.5 rounded-full border border-cyan-500/30 whitespace-nowrap shrink-0">Microsoft Clarity</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Cookie-urile <code className="text-purple-300">_clsk</code> și <code className="text-purple-300">_clck</code> înregistrează sesiunile anonime (heatmaps, înregistrări) pentru optimizarea experienței utilizatorilor. Durata: 1 an. Operator: Microsoft Corporation. Datele nu includ informații de identificare personală.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                Accept toate
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm sm:text-base border border-purple-600"
              >
                Doar esențiale
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-3">
              Poți utiliza site-ul și fără cookie-uri de analiză. Preferințele tale sunt salvate local pe dispozitiv și pot fi modificate oricând din setările browserului. Pentru mai multe informații, consultă{' '}
              <button
                onClick={handlePrivacyClick}
                className="text-purple-400 hover:text-purple-300 underline underline-offset-1 bg-transparent border-none cursor-pointer text-xs p-0"
              >
                Politica de Confidențialitate
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
