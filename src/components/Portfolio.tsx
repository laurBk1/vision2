import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = '', direction = 'up' as 'up' | 'left' | 'right' }) {
  const { ref, visible } = useInView(0.12);
  const hidden = direction === 'left' ? 'translateX(-40px)' : direction === 'right' ? 'translateX(40px)' : 'translateY(35px)';
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : hidden,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const YOUTUBE_VIDEO_ID = '4mWM--yw1MU';
const YOUTUBE_EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`;

const Portfolio = ({ asH1 = false }: { asH1?: boolean }) => {
  const TitleTag = asH1 ? 'h1' : 'h2';

  const achievements = [
    { number: '150+', label: 'Clienți mulțumiți' },
    { number: '2.340+', label: 'Proiecte finalizate' },
    { number: '3+', label: 'Ani experiență' },
    { number: '100%', label: 'Confidențialitate' }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50 border-2 border-slate-300 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-6">
            <span className="inline-block bg-gradient-to-r from-slate-700 to-blue-700 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Portofoliu confidențial
            </span>
            <TitleTag className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Portofoliul nostru nu este public
            </TitleTag>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            La VisionEdit, <strong className="text-gray-900">confidențialitatea și discreția</strong> sunt fundamentale în relația cu clienții noștri.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">

          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Despre noi</h3>
                <p className="text-blue-100 mb-6 font-medium text-base md:text-lg">Transformăm viziunea ta în conținut video de impact</p>
                <div className="relative mx-auto max-w-xs">
                  <div className="aspect-[9/16] bg-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                    <iframe
                      title="VisionEdit — Despre noi"
                      width="100%"
                      height="100%"
                      src={YOUTUBE_EMBED_SRC}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      frameBorder="0"
                      className="w-full h-full"
                      style={{
                        border: 'none',
                        borderRadius: '0.75rem'
                      }}
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 md:p-3 animate-bounce shadow-lg">
                    <Star className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-2 md:p-3 animate-pulse shadow-lg">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Confidențialitatea este prioritatea noastră
              </h3>
              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  Respectăm confidențialitatea fiecărui client și tratăm fiecare proiect cu maximă discreție. <strong className="text-gray-900">Toate materialele realizate rămân proprietatea exclusivă a clientului.</strong>
                </p>
                <p>
                  Multe dintre proiectele noastre conțin informații de business, strategii de marketing sau alte materiale confidențiale. Din acest motiv, <strong className="text-gray-900">nu folosim și nu publicăm niciun proiect fără acordul explicit al clientului.</strong>
                </p>
                <p>
                  Ne concentrăm pe livrarea unor videoclipuri de înaltă calitate și pe construirea unor colaborări bazate pe <strong className="text-gray-900">încredere, profesionalism și confidențialitate.</strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-slate-900 rounded-2xl p-6 md:p-12 text-white mb-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Rezultatele noastre vorbesc de la sine!</h3>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                Chiar dacă nu afișăm portofoliul public, rezultatele demonstrează calitatea și profesionalismul nostru.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {achievements.map((achievement, index) => (
                <Reveal key={index} delay={(index % 4) * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="text-center bg-white/5 rounded-xl py-5 px-2">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{achievement.number}</div>
                    <div className="text-gray-300 text-sm md:text-base font-medium leading-tight">{achievement.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Vrei un partener de încredere pentru proiectul tău?</h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
                Hai să vorbim! Confidențialitate 100%, rezultate clare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Discută confidențial
                </button>
                <button
                  onClick={() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
                >
                  Vezi serviciile
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Portfolio;
