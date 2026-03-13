import React from 'react';
import { ArrowRight, Play, CheckCircle, Video, Users, Award } from 'lucide-react';

const Hero = () => {
  const handleFAQ = () => {
    history.pushState(null, '', '#faq');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  const handleViewPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .h-root *, .h-root *::before, .h-root *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .h-root { font-family: 'Inter', sans-serif; }

        /* SECTION */
        .h-section {
          position: relative;
          min-height: 100vh;
          background: #060A12;
          display: flex;
          align-items: center;
          overflow-x: hidden;
          padding: 80px 0;
        }

        .h-blob1 {
          position: absolute;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(29,78,216,0.2) 0%, transparent 70%);
          top: -150px; left: -150px; pointer-events: none;
        }
        .h-blob2 {
          position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%);
          bottom: -100px; right: -100px; pointer-events: none;
        }

        /* INNER */
        .h-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          box-sizing: border-box;
        }

        /* LEFT */
        .h-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .h-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.18);
          border-radius: 100px;
          padding: 7px 16px;
          margin-top: 24px;
          margin-bottom: 28px;
          max-width: 100%;
        }
        .h-chip-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #38BDF8;
          flex-shrink: 0;
          animation: blink 2.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity: 0.3; }
        }
        .h-chip-text {
          font-size: clamp(9px, 2.5vw, 11px);
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #BAE6FD;
          white-space: normal;
          text-align: center;
        }

        .h-heading {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800;
          font-size: clamp(1.6rem, 7vw, 3rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #EFF6FF;
          margin-bottom: 8px;
          overflow-wrap: break-word;
          word-break: break-word;
          white-space: normal;
          width: 100%;
          max-width: 100%;
        }
        .h-heading-accent {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800;
          font-size: clamp(1.6rem, 7vw, 3rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          background: linear-gradient(95deg, #38BDF8 0%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 28px;
          white-space: normal;
          overflow-wrap: break-word;
          word-break: break-word;
          width: 100%;
          max-width: 100%;
        }

        .h-body {
          font-size: clamp(0.95rem, 4vw, 1.05rem);
          font-weight: 300;
          line-height: 1.85;
          color: #94A3B8;
          max-width: 480px;
          margin-bottom: 28px;
        }

        .h-checks {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }
        .h-check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 400;
          color: #CBD5E1;
        }
        .h-check svg { color: #34D399; flex-shrink: 0; }

        .h-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }

        .h-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          color: #fff; border: none; border-radius: 12px;
          padding: 14px 28px;
          font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.06) inset;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .h-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(37,99,235,0.55), 0 0 0 1px rgba(255,255,255,0.1) inset;
        }

        .h-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.04); color: #CBD5E1;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
          padding: 14px 28px;
          font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 400;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .h-btn-secondary:hover {
          background: rgba(255,255,255,0.08); color: #F1F5F9;
          transform: translateY(-2px);
        }

        .h-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 32px;
          width: 100%;
        }
        .h-stat { flex: 1; text-align: center; }
        .h-stat + .h-stat {
          padding-left: 24px;
          border-left: 1px solid rgba(255,255,255,0.07);
          margin-left: 24px;
        }
        .h-stat-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
          animation: bounce-icon 2.5s ease-in-out infinite;
        }
        .h-stat:nth-child(2) .h-stat-icon { animation-delay: 0.4s; }
        .h-stat:nth-child(3) .h-stat-icon { animation-delay: 0.8s; }
        @keyframes bounce-icon {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .h-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 800; color: #EFF6FF;
          line-height: 1; margin-bottom: 5px;
        }
        .h-stat-lbl {
          font-size: 11px; font-weight: 500; color: #94A3B8;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* RIGHT — CARD */
        .h-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .h-card-outer {
          width: 100%;
          max-width: 400px;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          border-radius: 24px;
          padding: 3px;
          box-shadow: 0 24px 60px rgba(37,99,235,0.3);
          animation: float 4s ease-in-out infinite;
          transition: transform 0.4s ease;
        }
        @keyframes float {
          0%,100% { transform: rotate(2deg) translateY(0); }
          50%      { transform: rotate(2deg) translateY(-10px); }
        }
        .h-card-outer:hover {
          animation: none;
          transform: rotate(0deg) translateY(-4px) !important;
        }

        .h-card-inner {
          background: #0D1525;
          border-radius: 22px;
          padding: 24px;
        }

        .h-card-thumb {
          width: 100%; aspect-ratio: 16/9;
          background: linear-gradient(135deg, #0F1A2E, #1A2A44);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          position: relative; overflow-x: hidden;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .h-card-thumb::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.1));
        }

        .h-play-btn {
          width: 52px; height: 52px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 1;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .h-play-btn:hover { background: rgba(255,255,255,0.22); transform: scale(1.1); }

        .h-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700; color: #EFF6FF; margin-bottom: 8px;
        }
        .h-card-desc {
          font-size: 13px; font-weight: 300; color: #94A3B8;
          line-height: 1.6; margin-bottom: 16px;
        }
        .h-card-badges { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px; }
        .h-badge {
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.18);
          border-radius: 6px; padding: 4px 10px;
          font-size: 11.5px; font-weight: 500; color: #7DD3FC;
        }

        /* INLINE BADGES inside card */
        .h-card-proofs {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }
        .h-proof-item {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px; padding: 10px 14px;
          animation: badge-float 3s ease-in-out infinite;
        }
        .h-proof-item:nth-child(2) { animation-delay: 1.5s; }
        @keyframes badge-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        .h-float-icon {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
        }
        .h-float-icon.yellow { background: rgba(251,191,36,0.12); }
        .h-float-icon.green  { background: rgba(52,211,153,0.12); }
        .h-float-strong {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 12px; font-weight: 700; color: #EFF6FF;
        }
        .h-float-sub { font-size: 10.5px; color: #94A3B8; }

        /* CARD WRAPPER */
        .h-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        /* Badge-uri flotante - ascunse pe desktop, vizibile pe mobile */
        .h-proof-float { display: none; }

        /* Badge-uri din interior - vizibile pe desktop */
        .h-proofs-desktop { display: flex; }

        /* MOBILE */
        @media (max-width: 860px) {
          .h-section { padding: 72px 0 64px; }
          .h-inner { grid-template-columns: 1fr; gap: 48px; padding: 0 24px; }
          .h-left { align-items: center; text-align: center; }
          .h-body { max-width: 100%; }
          .h-checks { align-items: center; }
          .h-cta { justify-content: center; }
          .h-stats { justify-content: center; max-width: 400px; margin: 0 auto; }
          .h-right { padding: 40px 24px 48px; }
          .h-card-outer { max-width: 360px; }
          .h-card-wrapper { max-width: 360px; margin: 0 auto; }

          /* Ascunde badge-urile din interior pe mobile */
          .h-proofs-desktop { display: none; }

          /* Afișează badge-urile flotante pe mobile */
          .h-proof-float {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #0D1525;
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 10px;
            padding: 8px 12px;
            position: absolute;
            z-index: 10;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            min-width: 150px;
            max-width: 210px;
            animation: badge-float 3s ease-in-out infinite;
          }
          .h-proof-top { top: -18px; right: 10px; animation-delay: 0s; }
          .h-proof-bottom { 
            bottom: -22px; 
            left: 10px; 
            animation-delay: 1.5s; 
             
          }
          .h-card-wrapper { display: flex; flex-direction: column; }

          /* FIX 1 & 2: Fonturile sunt acum importate + Scroll deblocat + height auto pe mobil */
          .h-root, .h-section, .h-left, .h-card-wrapper {
            overflow: visible !important;
          }
          .h-section {
            min-height: auto !important;
            height: auto !important;
          }
          /* Dezactivare animații transform (float cu rotate) pe mobil – rezolvă bug Safari/iOS */
          .h-card-outer {
            animation: none !important;
          }
          /* FIX 3: Mutăm badge-urile ÎN INTERIORUL cardului pe mobil (ascundem flotantele, arătăm cele din interior) – elimină spațiu alb, clipping și lock */
          .h-proofs-desktop { display: flex !important; }
          .h-proof-float { display: none !important; }
        }

        @media (max-width: 480px) {
          .h-section { padding: 64px 0 72px; }
          .h-inner { padding: 0 20px; }
          .h-chip { margin-bottom: 32px; }
          .h-heading { margin-bottom: 12px; line-height: 1.25; }
          .h-heading-accent { margin-bottom: 32px; }
          .h-body { margin-bottom: 32px; line-height: 1.9; }
          .h-checks { gap: 16px; margin-bottom: 40px; }
          .h-check { font-size: 14px; }
          .h-cta { flex-direction: column; align-items: stretch; gap: 14px; margin-bottom: 48px; }
          .h-btn-primary, .h-btn-secondary { justify-content: center; width: 100%; padding: 16px 28px; }
          .h-right { padding: 20px; }
          .h-card-outer { max-width: 100%; }
          .h-stats { padding-top: 32px; gap: 0; }
          .h-stat-num { font-size: 1.6rem; }
          .h-stat-lbl { font-size: 10px; }
        }

        @media (max-width: 360px) {
          .h-inner { padding: 0 16px; }
          .h-chip { padding: 6px 14px; }
          .h-stat + .h-stat { padding-left: 10px; margin-left: 10px; }
          .h-heading { font-size: clamp(1.4rem, 8vw, 1.8rem); }
          .h-heading-accent { font-size: clamp(1.4rem, 8vw, 1.8rem); }
          .h-btn-primary, .h-btn-secondary { padding: 14px 16px; font-size: 14px; }
        }

        @media (max-width: 280px) {
          .h-inner { padding: 0 12px; }
          .h-heading { font-size: clamp(1.2rem, 8vw, 1.5rem); }
          .h-heading-accent { font-size: clamp(1.2rem, 8vw, 1.5rem); }
          .h-chip-text { font-size: 9px; }
          .h-stat + .h-stat { padding-left: 6px; margin-left: 6px; }
          .h-stat-num { font-size: 1.2rem; }
          .h-stat-lbl { font-size: 9px; }
        }

        /* Ascunde paragraful pe mobile */
        @media (max-width: 860px) {
          .h-body-mobile-hidden { display: none; }
          .h-heading-mobile { font-size: clamp(1.4rem, 5.5vw, 2.4rem) !important; line-height: 1.3 !important; }
          .h-heading-accent-mobile { font-size: clamp(1.3rem, 5vw, 2.2rem) !important; line-height: 1.3 !important; }
          .h-inner { padding: 0 28px !important; }
        }

        @media (max-width: 480px) {
          .h-heading-mobile { font-size: clamp(1.3rem, 5vw, 1.8rem) !important; }
          .h-heading-accent-mobile { font-size: clamp(1.2rem, 4.5vw, 1.6rem) !important; }
          .h-inner { padding: 0 24px !important; }
          .h-stat-num { font-size: 1.3rem !important; }
          .h-stat-lbl { font-size: 9px !important; letter-spacing: 0.02em !important; }
          .h-stat + .h-stat { padding-left: 12px !important; margin-left: 12px !important; }
          .h-stat-icon svg { width: 22px !important; height: 22px !important; }
        }

        @media (max-width: 360px) {
          .h-heading-mobile { font-size: clamp(1.1rem, 5vw, 1.4rem) !important; }
          .h-heading-accent-mobile { font-size: clamp(1rem, 4.5vw, 1.3rem) !important; }
          .h-inner { padding: 0 20px !important; }
          .h-stat-num { font-size: 1.1rem !important; }
          .h-stat-lbl { font-size: 8px !important; letter-spacing: 0 !important; }
          .h-stat + .h-stat { padding-left: 8px !important; margin-left: 8px !important; }
          .h-stat-icon svg { width: 20px !important; height: 20px !important; }
        }

        /* Protecție globală overflow */
        .h-root { overflow-x: hidden; max-width: 100vw; }
        .h-section { overflow-x: hidden; }
        .h-left { width: 100%; max-width: 100%; overflow: hidden; }
        .h-body { word-break: break-word; overflow-wrap: break-word; }
        .h-check span { word-break: break-word; overflow-wrap: break-word; }
        .h-cta { width: 100%; max-width: 100%; }
        .h-btn-primary, .h-btn-secondary { max-width: 100%; box-sizing: border-box; }
      `}</style>

      <section className="h-root h-section" style={{overflowX: 'hidden', maxWidth: '100%'}}>
        <div className="h-blob1" />
        <div className="h-blob2" />

        <div className="h-inner">

          {/* LEFT */}
          <div className="h-left">
            <div className="h-chip">
              <div className="h-chip-dot" />
              <span className="h-chip-text">Editare Video · Formate Scurte</span>
            </div>

            <h1 className="h-heading h-heading-mobile">
              Vrei mai multă vizibilitate pentru afacerea ta?
            </h1>
            <span className="h-heading-accent h-heading-accent-mobile">Video marketingul e soluția!</span>

            <p className="h-body h-body-mobile-hidden">
              Noi îți edităm videoclipurile scurte, dinamice și optimizate pentru Reels, TikTok, Shorts și alte formate scurte, exact ce ai nevoie pentru a atrage atenția și a-ți crește vânzările.
            </p>

            <div className="h-checks">
              {[
                'Conținut livrat gata de publicat',
                'O revizuire gratuită la fiecare video',
                '100% remote — livrăm oriunde în România',
              ].map((t) => (
                <div className="h-check" key={t}>
                  <CheckCircle size={15} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="h-cta">
              <button onClick={handleFAQ} className="h-btn-primary">
                <span>Întrebări Frecvente</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={handleViewPortfolio} className="h-btn-secondary" type="button">
                <Play size={15} />
                <span>Vezi Portofoliul</span>
              </button>
            </div>

            <div className="h-stats">
              <div className="h-stat">
                <div className="h-stat-icon"><Video size={28} color="#60A5FA" /></div>
                <div className="h-stat-num">1345+</div>
                <div className="h-stat-lbl">Proiecte Finalizate</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-icon"><Users size={28} color="#FBBF24" /></div>
                <div className="h-stat-num">150+</div>
                <div className="h-stat-lbl">Clienți Mulțumiți</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-icon"><Award size={28} color="#34D399" /></div>
                <div className="h-stat-num">3+</div>
                <div className="h-stat-lbl">Ani Experiență</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Card */}
          <div className="h-right">
            <div className="h-card-wrapper">

              {/* Badge sus-dreapta — doar pe mobile */}
              <div className="h-proof-float h-proof-top">
                <div className="h-float-icon yellow">⭐</div>
                <div>
                  <strong className="h-float-strong">Calitate garantată</strong>
                  <span className="h-float-sub">Satisfacție 100%</span>
                </div>
              </div>

              <div className="h-card-outer">
                <div className="h-card-inner">
                  <div className="h-card-thumb">
                    <div className="h-play-btn">
                      <Play size={20} color="#fff" fill="#fff" />
                    </div>
                  </div>
                  <div className="h-card-title">Editare Video Profesională</div>
                  <p className="h-card-desc">
                    Edităm conținut video profesional pentru orice platformă, gata de publicat.
                  </p>
                  <div className="h-card-badges">
                    {['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Facebook Ads', '+ Alte platforme sociale'].map((p) => (
                      <span className="h-badge" key={p}>{p}</span>
                    ))}
                  </div>

                  {/* Badge-uri în interior — doar pe desktop */}
                  <div className="h-card-proofs h-proofs-desktop">
                    <div className="h-proof-item">
                      <div className="h-float-icon yellow">⭐</div>
                      <div>
                        <strong className="h-float-strong">Calitate garantată</strong>
                        <span className="h-float-sub">Satisfacție 100%</span>
                      </div>
                    </div>
                    <div className="h-proof-item">
                      <div className="h-float-icon green">🚀</div>
                      <div>
                        <strong className="h-float-strong">Livrare flexibilă</strong>
                        <span className="h-float-sub">Adaptată proiectului tău</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge jos-stânga — doar pe mobile */}
              <div className="h-proof-float h-proof-bottom">
                <div className="h-float-icon green">🚀</div>
                <div>
                  <strong className="h-float-strong">Livrare flexibilă</strong>
                  <span className="h-float-sub">Adaptată proiectului tău</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;