import { useState, useEffect } from 'react';
import { Shield, X, Cookie, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

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
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
}

function disableGoogleAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Mică întârziere pentru a nu apărea instant
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    if (consent === 'accepted') {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
  }, []);

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

  if (!visible) return null;

  return (
    <>
      {/* Overlay semi-transparent */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden">
          
          {/* Header banner */}
          <div className="bg-gradient-to-r from-purple-900/80 to-slate-900/80 px-6 py-4 flex items-center justify-between border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 rounded-lg p-2">
                <Cookie className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Confidențialitate & Cookies</h3>
                <p className="text-purple-300 text-sm">visionedit.ro respectă GDPR</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium hidden sm:block">Protejat GDPR</span>
            </div>
          </div>

          {/* Conținut principal */}
          <div className="px-6 py-5">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Utilizăm cookie-uri pentru a analiza traficul site-ului prin{' '}
              <span className="text-purple-400 font-semibold">Google Analytics</span> și pentru a îmbunătăți experiența ta. 
              Datele colectate sunt anonimizate și nu sunt vândute terților.{' '}
              <a
                href="#privacy"
                onClick={() => setVisible(false)}
                className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Politica de confidențialitate
                <ExternalLink className="h-3 w-3" />
              </a>
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
                {/* Cookie necesar */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-semibold">Cookie-uri strict necesare</span>
                      <span className="bg-green-600/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30">Mereu active</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Necesare pentru funcționarea de bază a site-ului (sesiune, securitate). Nu pot fi dezactivate.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700/50" />

                {/* Cookie analytics */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-semibold">Cookie-uri de analiză</span>
                      <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-0.5 rounded-full border border-blue-500/30">Google Analytics</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Cookie-urile <code className="text-purple-300">_ga</code> și <code className="text-purple-300">_ga_*</code> colectează informații anonime despre vizitatori 
                      (pagini vizitate, durata sesiunii, sursa traficului) pentru a ne ajuta să îmbunătățim site-ul. 
                      Durata: 2 ani. Operator: Google LLC.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Butoane */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-600/30 text-sm sm:text-base"
              >
                ✓ Accept toate cookie-urile
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                Refuz cookie-urile de analiză
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-3">
              Poți modifica preferințele oricând din{' '}
              <a href="#privacy" onClick={() => setVisible(false)} className="text-purple-400 hover:text-purple-300 underline underline-offset-1">
                Politica de Confidențialitate
              </a>
              . Alegerea ta este stocată local pe dispozitivul tău.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
