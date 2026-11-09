import { Award, Clock, Users, Zap, Clapperboard, Film, Smartphone, Rocket, Instagram, Youtube, Facebook } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../hooks/Reveal';

/** Număr care crește animat când ajunge în ecran (valoarea finală e în HTML pentru SEO). */
function CountUp({ target, suffix = '', dots = false, duration = 1800 }: { target: number; suffix?: string; dots?: boolean; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) => (dots ? Math.round(n).toLocaleString('de-DE') : String(Math.round(n)));
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let started = false;
    setValue(0);
    const run = () => {
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setValue(target * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
        else setValue(target);
      };
      raf = requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { obs.disconnect(); run(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);

  return <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(value)}{suffix}</span>;
}

const About = ({ asH1 = false }: { asH1?: boolean }) => {
  const TitleTag = asH1 ? 'h1' : 'h2';
  const achievements = [
    { icon: Award, label: 'Ani experiență', target: 3, dots: false },
    { icon: Users, label: 'Clienți mulțumiți', target: 150, dots: false },
    { icon: Clock, label: 'Proiecte finalizate', target: 2340, dots: true },
    { icon: Zap, label: 'Ore editare', target: 3000, dots: false }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Despre noi
            </span>
            <TitleTag className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent leading-tight">
              Despre VisionEdit
            </TitleTag>
          </div>
          <div className="max-w-3xl mx-auto px-4 py-6 text-center">
  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
    Creăm și edităm videoclipuri scurte, captivante, optimizate pentru{' '}
    <span className="whitespace-nowrap font-bold text-gray-900">
      <svg aria-hidden="true" className="inline-block h-[1em] w-[1em] -mt-1 mr-1 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
      TikTok,
    </span>{' '}
    <span className="whitespace-nowrap font-bold text-gray-900">
      <Instagram aria-hidden="true" className="inline-block h-[1em] w-[1em] -mt-1 mr-1 text-pink-600" />
      Reels,
    </span>{' '}
    <span className="whitespace-nowrap font-bold text-gray-900">
      <Youtube aria-hidden="true" className="inline-block h-[1em] w-[1em] -mt-1 mr-1 text-red-600" />
      Shorts
    </span>{' '}
    și{' '}
    <span className="whitespace-nowrap font-bold text-gray-900">
      <Facebook aria-hidden="true" className="inline-block h-[1em] w-[1em] -mt-1 mr-1 text-blue-600" />
      Facebook Ads
    </span>.
  </p>
  <p className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed italic">
    Combinăm <span className="text-indigo-600 font-bold not-italic">storytelling-ul autentic</span> cu <span className="text-indigo-600 font-bold not-italic">trendurile actuale</span>, ca ideile tale să devină conținut care <span className="text-gray-900 font-bold not-italic">atrage și convertește</span>.
  </p>
</div>
</Reveal>



        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-20">
          {/* Left Side - Image */}
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '3/2'}}>
              <img
                src="/team.webp"
                alt="Echipa VisionEdit România — editori video pentru TikTok, Reels și Shorts"
                width={1200}
                height={799}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 rounded-xl p-4 md:p-6 text-white shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-white"><CountUp target={2340} dots suffix="+" /></div>
              <div className="text-xs md:text-sm text-white font-medium">Proiecte finalizate</div>
            </div>
          </Reveal>

          {/* Right Side - Single Premium Text Block */}
          <Reveal direction="right" delay={0.1} className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-4">
                Lucrăm cu <strong className="text-gray-900">antreprenori, business-uri, influenceri și creatori de conținut</strong> din beauty, educație, sănătate, imobiliare, comerț și multe altele. Fiecare video este adaptat <strong className="text-gray-900">publicului și obiectivului tău de marketing</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
                Tu trimiți materialele video — noi livrăm <strong className="text-gray-900">clipurile editate, gata de publicat</strong>.
              </p>
              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Clapperboard, text: 'Editare video profesionistă' },
                  { icon: Film, text: 'Orice nișă, orice industrie' },
                  { icon: Smartphone, text: 'Orice format: 9:16, 1:1, 4:5, 16:9' },
                  { icon: Rocket, text: 'Livrare rapidă, fără complicații' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                    <item.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
          {achievements.map((achievement, index) => (
            <Reveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1} className="text-center bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors duration-300 shadow-sm">
              <div className="bg-blue-100 rounded-lg p-3 md:p-4 mb-3 md:mb-4 inline-block">
                <achievement.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                <CountUp target={achievement.target} dots={achievement.dots} suffix="+" />
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {achievement.label}
              </div>
            </Reveal>
          ))}
        </div>

{/* Call to Action */}
        <Reveal direction="up" className="text-center mt-12 md:mt-16 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-snug">
              Concurența ta se folosește deja de video marketing!
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2 text-blue-100 font-semibold uppercase tracking-wide">
              Tu de ce mai aștepți?
            </p>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
              Contactează-ne astăzi și du-ți afacerea la următorul nivel! Împreună, creăm videoclipuri care atrag clienți și aduc rezultate reale.
            </p>

            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contactează-ne!
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;