import { useState, useEffect } from 'react';
import { Shield, Cookie, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'visionedit_cookie_consent';
const COOKIE_CONSENT_DATE_KEY = 'visionedit_cookie_consent_date';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
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

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isPrivacyPage, setIsPrivacyPage] = useState(false);

  useEffect(() => {
    const checkPage = () => {
      const onPrivacy = window.location.hash === '#privacy' || window.location.pathname === '/privacy';
      setIsPrivacyPage(onPrivacy);
    };
    checkPage();
    window.addEventListener('hashchange', checkPage);
    window.addEventListener('popstate', checkPage);
    return () => {
      window.removeEventListener('hashchange', checkPage);
      window.removeEventListener('popstate', checkPage);
    };
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      if (!isPrivacyPage) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
      if (consent === 'accepted') {
        enableGoogleAnalytics();
      } else {
        disableGoogleAnalytics();
      }
    }
  }, [isPrivacyPage]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    enableGoogleAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
    disableGoogleAnalytics();
    setVisible(false);
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#privacy';
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99998]" />
      <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900/80 to-slate-900/80 px-6 py-4 flex items-center justify-between border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 rounded-lg p-2">
                <Cookie className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Confidențialitate & Cookies</h3>
                <p className="text-purple-300 text-sm">VisionEdit SRL — Politică Cookies</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium hidden sm:block">Protejat GDPR</span>
            </div>
          </div>

          {/* Conținut */}
          <div className="px-6 py-5">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Folosim cookie-uri esențiale pentru funcționarea site-ului și cookie-uri de analiză (
              <span className="text-purple-400 font-semibold">Google Analytics</span>
              ) pentru a înțelege cum este folosit site-ul și pentru a-l îmbunătăți. Datele sunt anonimizate și nu sunt partajate cu terți în scopuri de marketing.
            </p>

            {/* Detalii expandabile */}
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
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">Cookie-uri strict necesare</span>
                    <span className="bg-green-600/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30">Mereu active</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.</p>
                </div>
                <div className="border-t border-gray-700/50" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">Cookie-uri de analiză</span>
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-0.5 rounded-full border border-blue-500/30">Google Analytics</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Cookie-urile <code className="text-purple-300">_ga</code> și <code className="text-purple-300">_ga_*</code> colectează date anonime despre vizitatori (pagini vizitate, durata sesiunii, sursa traficului). Durata: 2 ani. Operator: Google LLC.
                  </p>
                </div>
              </div>
            )}

            {/* Butoane — egale ca dimensiune și vizibilitate */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                Accept toate
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                Doar esențiale
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-3">
              Poți folosi site-ul și fără cookie-uri de analiză. Alegerea ta este înregistrată local pe dispozitivul tău.{' '}
              <a href="#privacy" onClick={handlePrivacyClick} className="text-purple-400 hover:text-purple-300 underline underline-offset-1">
                Politica de Confidențialitate
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
