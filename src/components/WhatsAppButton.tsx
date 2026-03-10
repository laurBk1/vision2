import React, { useState, useEffect, useRef } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // --- Floating round button state ---
  const [fabVisible, setFabVisible] = useState(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // La refresh se resetează automat — fără sessionStorage
    const timer = setTimeout(() => {
      setIsVisible(true);
      playNotificationSound();
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Sunet discret pentru FAB — un singur ding cald, diferit de popup
  const playFabSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const osc2 = ctx.createOscillator();
      const gainNode2 = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.frequency.value = 440;
      osc.type = 'sine';
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.008);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.7);

      // Armonică subtilă pentru căldură
      osc2.connect(gainNode2);
      gainNode2.connect(ctx.destination);
      osc2.frequency.value = 880;
      osc2.type = 'sine';
      gainNode2.gain.setValueAtTime(0, ctx.currentTime);
      gainNode2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.008);
      gainNode2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc2.start(ctx.currentTime);
      osc2.stop(ctx.currentTime + 0.4);
    } catch (e) {}
  };

  // FAB: apare după 12 secunde + sunet
  useEffect(() => {
    const fabTimer = setTimeout(() => {
      setFabVisible(true);
      playFabSound();
    }, 12000);
    return () => clearTimeout(fabTimer);
  }, []);

  // FAB: dispare la scroll, reapare după 3 secunde de inactivitate
  useEffect(() => {
    const handleScroll = () => {
      setFabVisible(false);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        setFabVisible(true);
      }, 8000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const playNotificationSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

      const playTone = (freq: number, startTime: number, duration: number, gain: number) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = 'sine';
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      // 2 tonuri scurte și plăcute — similar notificării WhatsApp
      playTone(620, ctx.currentTime, 0.18, 0.18);
      playTone(820, ctx.currentTime + 0.2, 0.22, 0.15);
    } catch (e) {
      // Browserul nu suportă AudioContext — ignorăm silențios
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '40767082106';
    const message = encodeURIComponent(
      'Salut! Aș dori informații despre serviciile de editare video și cum am putea începe colaborarea.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        /* ===================== POPUP CARD (neschimbat) ===================== */
        .wa-popup {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          transition: opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          transform: translateY(24px) scale(0.9);
          pointer-events: none;
        }
        .wa-popup.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .wa-card {
          background: #0D1525;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 18px 20px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset;
          max-width: 280px;
          position: relative;
        }

        .wa-close {
          position: absolute;
          top: -10px; right: -10px;
          width: 26px; height: 26px;
          background: #ef4444;
          border: 2px solid #0D1525;
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; color: #fff; font-weight: 700;
          transition: background 0.2s, transform 0.2s;
          line-height: 1;
          box-shadow: 0 2px 8px rgba(239,68,68,0.5);
          animation: pulse-red 2s ease-in-out infinite;
        }
        .wa-close:hover { background: #dc2626; transform: scale(1.15); animation: none; }
        @keyframes pulse-red {
          0%,100% { box-shadow: 0 2px 8px rgba(239,68,68,0.4); }
          50% { box-shadow: 0 2px 16px rgba(239,68,68,0.8), 0 0 0 4px rgba(239,68,68,0.15); }
        }

        .wa-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          padding-right: 16px;
        }
        .wa-avatar {
          width: 42px; height: 42px;
          background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(37,211,102,0.35);
        }
        .wa-avatar svg { width: 22px; height: 22px; fill: #fff; }
        .wa-name {
          font-family: 'Syne', 'Inter', sans-serif;
          font-size: 14px; font-weight: 700;
          color: #EFF6FF; line-height: 1.3;
        }
        .wa-status {
          font-size: 11.5px; color: #25D366; font-weight: 400;
          display: flex; align-items: center; gap: 4px;
        }
        .wa-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #25D366;
          animation: blink-green 2s ease-in-out infinite;
        }
        @keyframes blink-green {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }

        .wa-bubble {
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.15);
          border-radius: 4px 14px 14px 14px;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .wa-btn {
          width: 100%;
          background: #1aab52;
          color: #fff;
          border: none; border-radius: 12px;
          padding: 12px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(37,211,102,0.3);
        }
        .wa-btn:hover {
          background: #158f44;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.4);
        }
        .wa-btn:active { transform: scale(0.98); }

        /* ===================== FAB — buton rotund flotant ===================== */
        .wa-fab {
          position: fixed;
          bottom: 24px;
          left: 22px;
          z-index: 9998;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #25D366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37,211,102,0.35), 0 2px 6px rgba(0,0,0,0.25);
          transition:
            opacity 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.2s;
          opacity: 0;
          transform: scale(0.4) translateY(20px);
          pointer-events: none;
        }
        .wa-fab.fab-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: all;
          animation: fab-appear 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     fab-wobble 3.5s ease-in-out 1.2s 3;
        }
        .wa-fab:hover {
          background: #1db954;
          box-shadow: 0 8px 24px rgba(37,211,102,0.5), 0 2px 6px rgba(0,0,0,0.25);
          transform: scale(1.08) translateY(-1px) !important;
          animation: none !important;
        }
        .wa-fab:active {
          transform: scale(0.95) !important;
        }
        .wa-fab svg {
          width: 22px;
          height: 22px;
          fill: #fff;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        @keyframes fab-appear {
          0% { opacity: 0; transform: scale(0.4) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Wobble subtil — atrage atenția fără să deranjeze */
        @keyframes fab-wobble {
          0%   { transform: scale(1) rotate(0deg); }
          10%  { transform: scale(1.08) rotate(-8deg); }
          20%  { transform: scale(1.08) rotate(7deg); }
          30%  { transform: scale(1.05) rotate(-5deg); }
          40%  { transform: scale(1.03) rotate(4deg); }
          50%  { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); }
        }

        /* Inel 1 — puls principal */
        .wa-fab::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: ring-pulse 2.8s ease-out infinite;
        }
        /* Inel 2 — puls întârziat */
        .wa-fab::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.3);
          animation: ring-pulse 2.8s ease-out 1.4s infinite;
        }
        @keyframes ring-pulse {
          0%   { transform: scale(1); opacity: 0.8; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        @media (max-width: 400px) {
          .wa-popup { bottom: 16px; right: 16px; left: 16px; }
          .wa-card { max-width: 100%; }
          .wa-fab { bottom: 18px; left: 14px; width: 42px; height: 42px; }
          .wa-fab svg { width: 20px; height: 20px; }
        }
      `}</style>

      {/* ---- POPUP CARD (neschimbat) ---- */}
      {!isDismissed && (
        <div className={`wa-popup ${isVisible ? 'visible' : ''}`}>
          <div className="wa-card">
            <button className="wa-close" onClick={handleDismiss} aria-label="Închide">✕</button>

            <div className="wa-header">
              <div className="wa-avatar">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                </svg>
              </div>
              <div>
                <div className="wa-name">VisionEdit România</div>
                <div className="wa-status"><span className="wa-status-dot"></span> Online acum</div>
              </div>
            </div>

            <div className="wa-bubble">
              Salut! 👋 Ai întrebări despre serviciile noastre de editare video? Scrie-ne, îți răspundem rapid!
            </div>

            <button className="wa-btn" onClick={handleWhatsAppClick}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
              </svg>
              Scrie-ne pe WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* ---- FAB — buton rotund flotant (stânga jos) ---- */}
      <button
        className={`wa-fab ${fabVisible ? 'fab-visible' : ''}`}
        onClick={handleWhatsAppClick}
        aria-label="Contactează-ne pe WhatsApp"
        title="Scrie-ne pe WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
        </svg>
      </button>
    </>
  );
};

export default WhatsAppButton;
