import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, Zap, AlertCircle, Clock, ChevronRight, ArrowLeft } from 'lucide-react';

const subtitleGlowStyle = `
  @keyframes subtitlePulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.0),
                  0 0 12px 2px rgba(99, 102, 241, 0.18),
                  inset 0 0 0 0 rgba(99,102,241,0.0);
    }
    50% {
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.10),
                  0 0 22px 6px rgba(99, 102, 241, 0.28),
                  inset 0 0 8px 0px rgba(99,102,241,0.07);
    }
  }
  .subtitle-badge {
    animation: subtitlePulse 2.8s ease-in-out infinite;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up {
    animation: fadeInUp 0.45s ease both;
  }
  @keyframes btn-ring {
    0%   { transform: scale(1);    opacity: 0.7; }
    80%  { transform: scale(1.7);  opacity: 0; }
    100% { transform: scale(1.7);  opacity: 0; }
  }
  @keyframes btn-ring2 {
    0%   { transform: scale(1);    opacity: 0.5; }
    80%  { transform: scale(1.7);  opacity: 0; }
    100% { transform: scale(1.7);  opacity: 0; }
  }
  .btn-pulse {
    position: relative;
    z-index: 0;
  }
  .btn-pulse::before,
  .btn-pulse::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    border: 2px solid rgba(139, 92, 246, 0.6);
    pointer-events: none;
    z-index: -1;
  }
  .btn-pulse::before {
    animation: btn-ring 3.5s ease-out infinite;
  }
  .btn-pulse::after {
    animation: btn-ring2 3.5s ease-out 1.75s infinite;
  }
  @keyframes arrowBounce {
    0%, 100% { transform: translateY(0px); opacity: 0.4; }
    50%       { transform: translateY(7px); opacity: 1; }
  }
  .arrow-hint {
    animation: arrowBounce 1s ease-in-out infinite;
    color: #ef4444;
    font-size: 2rem;
    line-height: 1;
    display: block;
    text-align: center;
  }
  @keyframes backArrowPulse {
    0%, 100% { transform: translateX(0px); color: #ef4444; }
    50%       { transform: translateX(-5px); color: #dc2626; }
  }
  .back-arrow {
    animation: backArrowPulse 1.2s ease-in-out infinite;
    display: inline-block;
  }
`;

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

type Step = 'intro' | 'view-choice' | 'quiz-videos' | 'results';
type ViewChoice = 'both' | 'editing' | 'complete';

const Pricing = () => {
  const [step, setStep] = useState<Step>('intro');
  const [previousStep, setPreviousStep] = useState<Step>('intro');
  const [viewChoice, setViewChoice] = useState<ViewChoice>('both');
  const [videoCount, setVideoCount] = useState<string | null>(null);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const goToStep = (next: Step) => {
    setPreviousStep(step);
    setStep(next);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-wizard');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
    }
  };

  const reset = () => {
    setStep('intro');
    setViewChoice('both');
    setVideoCount(null);
    setTimeout(() => scrollToPricing(), 50);
  };

  // Which tier is recommended
  const recommendedTier = videoCount === '1-5' ? 0 : videoCount === '6-12' ? 1 : videoCount === '13+' ? 2 : null;

  const editingPackages = [
    {
      name: 'Start Smart',
      subtitle: '1-5 videoclipuri pe lună',
      icon: '🚀',
      popular: false,
      price: '249 lei/video',
      description: '(249 lei — 1.245 lei / lună)',
      features: [
        <> Tot ce găsești în secțiunea „<strong
            className="cursor-pointer text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
            onClick={() => { const el = document.getElementById('services'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
          >Servicii</strong>"<br />este inclus în editarea ta </>,
        'Montaj complet și optimizat',
        'Tranziții și efecte vizuale',
        'Subtitrări și texte personalizate',
        'Sound Design & Efecte Sonore',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Alege Editare Simplă',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Creștere Accelerată',
      subtitle: '6-12 videoclipuri pe lună',
      icon: '💡',
      popular: true,
      price: '210 lei/video',
      description: '(1.260 lei — 2.520 lei / lună)',
      features: [
        <><span className="font-bold text-gray-900">Toate beneficiile din Start Smart</span></> as any,
        'Preț redus per videoclip',
        'Suport prioritar',
        'Feedback rapid pe materialele trimise',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Cel Mai Popular',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
    },
    {
      name: 'Vizibilitate Max',
      subtitle: '13+ videoclipuri pe lună',
      icon: '🔥',
      popular: false,
      price: '185 lei/video',
      description: '(de la 2.405 lei / lună)',
      features: [
        'Toate beneficiile anterioare',
        'Cel mai bun preț per videoclip',
        'Suport prioritar și comunicare directă',
        'Plan de editare video personalizat',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil',
        'Raport lunar cu feedback și recomandări'
      ],
      buttonText: 'Maximizează Impactul',
      buttonColor: 'bg-green-700 hover:bg-green-800'
    }
  ];

  const completePackages = [
    {
      name: 'Start Smart Complet',
      subtitle: '1-5 videoclipuri pe lună',
      icon: '🎬',
      popular: false,
      price: '280-350 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '280 lei/video' },
        { duration: '30 sec - 1 min', price: '350 lei/video' }
      ],
      description: 'Videoclip complet, gata de publicat',
      features: [
        'Videoclipuri personalizate de la A la Z',
        'Montaj complet profesional',
        'Avatar UGC profesional inclus',
        'Voiceover AI Premium',
        'Script adaptat conținutului',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Pachet Complet',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Creștere Accelerată Complet',
      subtitle: '6-12 videoclipuri pe lună',
      icon: '🎯',
      popular: true,
      price: '255-315 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '255 lei/video' },
        { duration: '30 sec - 1 min', price: '315 lei/video' }
      ],
      description: 'Videoclip complet, gata de publicat',
      features: [
        <><span className="font-bold text-gray-900">Toate beneficiile din Start Smart Complet</span></> as any,
        'Preț redus per videoclip',
        'Suport prioritar',
        'Plan de editare video personalizat',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Cel Mai Popular Complet',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
    },
    {
      name: 'Vizibilitate Max Complet',
      subtitle: '13+ videoclipuri pe lună',
      icon: '🏆',
      popular: false,
      price: '240-295 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '240 lei/video' },
        { duration: '30 sec - 1 min', price: '295 lei/video' }
      ],
      description: 'Videoclip complet, gata de publicat',
      features: [
        'Toate beneficiile anterioare',
        'Cel mai bun preț per videoclip',
        'Suport prioritar și comunicare directă',
        'Strategie de conținut inclusă',
        'O revizie gratuită / video',
        'Livrare flexibilă comunicată în prealabil',
        'Analiză performanță lunară'
      ],
      buttonText: 'Maximizează Impactul Complet',
      buttonColor: 'bg-green-700 hover:bg-green-800'
    }
  ];

  const PackageCard = ({ pkg, isComplete = false, isRecommended = false, delay = 0 }: { pkg: any, isComplete?: boolean, isRecommended?: boolean, delay?: number }) => {
    const { ref, visible } = useInView(0.15);
    return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 ${
      isRecommended ? 'ring-4 ring-yellow-400 ring-opacity-80 scale-105' : pkg.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
    }`}>
      {isRecommended && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-2 font-bold text-sm z-10">
          ✨ Recomandat pentru tine
        </div>
      )}
      {!isRecommended && pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 font-bold text-sm">
          <Star className="inline h-4 w-4 mr-1" />Cel Mai Popular
        </div>
      )}
      <div className={`p-6 md:p-8 ${(isRecommended || pkg.popular) ? 'pt-12 md:pt-14' : ''}`}>
        <div className="text-center mb-6 md:mb-8">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">{pkg.icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{pkg.name}</h3>
          <div className="subtitle-badge inline-flex items-center justify-center mx-auto mb-3 px-4 py-1.5 rounded-full border border-indigo-300 bg-gradient-to-r from-indigo-50 via-white to-purple-50 cursor-default select-none">
            <span className="text-indigo-700 font-bold text-base md:text-lg tracking-wide">{pkg.subtitle}</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
          {isComplete && pkg.priceDetails && (
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              {pkg.priceDetails.map((detail: any, idx: number) => (
                <div key={idx} className="text-base md:text-lg">
                  <span className="font-bold text-gray-900">{detail.duration}</span>
                  <span className="text-gray-700"> - </span>
                  <span className="font-bold text-blue-600">{detail.price}</span>
                </div>
              ))}
            </div>
          )}
          <p className={`text-base font-bold ${isComplete ? 'text-green-800' : 'text-gray-800'} leading-tight`}>{pkg.description}</p>
        </div>
        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {pkg.features.map((feature: any, idx: number) => (
            <li key={idx} className="flex items-start">
              <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base leading-relaxed font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleContactClick}
          aria-label={`Alege pachetul ${pkg.buttonText}`}
          className={`w-full text-white font-bold py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-base ${pkg.buttonColor}`}
        >
          <span>{pkg.buttonText}</span>
          <Zap className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </div>
  );};

  // ── STEP: INTRO ──────────────────────────────────────────────
  const StepIntro = () => (
    <div className="fade-in-up max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg font-medium mb-8">
          Înainte să vezi prețurile, află că avem <span className="font-bold text-gray-900">2 tipuri de pachete</span> — fiecare gândit pentru nevoi diferite:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card Editare — clickable */}
          <div
            onClick={() => { setViewChoice('editing'); goToStep('quiz-videos'); }}
            className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 text-left cursor-pointer hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="text-3xl mb-3">✂️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Editare cu materialele tale</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Tu filmezi, noi edităm. Trimiți materialele raw și noi le transformăm în clipuri profesionale, optimizate pentru TikTok, Reels, Shorts și Facebook Ads.
            </p>
            <div className="bg-blue-50 rounded-lg px-4 py-2 inline-flex items-center gap-2 group-hover:bg-blue-600 transition-colors duration-200">
              <span className="text-blue-700 font-bold text-base group-hover:text-white transition-colors">De la 185 lei/video</span>
              <ChevronRight className="h-4 w-4 text-blue-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
          {/* Card Complet — clickable */}
          <div
            onClick={() => { setViewChoice('complete'); goToStep('quiz-videos'); }}
            className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100 text-left cursor-pointer hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">Pachete Complete — de la A la Z</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Nu ai materiale filmate? Nicio problemă. Noi ne ocupăm de tot: script, voiceover AI, avatar UGC, materiale stock și editare profesională — gata de publicat.
            </p>
            <div className="bg-purple-50 rounded-lg px-4 py-2 inline-flex items-center gap-2 group-hover:bg-purple-600 transition-colors duration-200">
              <span className="text-purple-700 font-bold text-base group-hover:text-white transition-colors">De la 240 lei/video</span>
              <ChevronRight className="h-4 w-4 text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
        <button
          onClick={() => goToStep('view-choice')}
          className="btn-pulse bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg"
        >
          Vreau să văd prețurile <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  // ── STEP: VIEW CHOICE ────────────────────────────────────────
  const StepViewChoice = () => (
    <div className="fade-in-up max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Ce vrei să vezi?</h3>
      <p className="text-gray-500 mb-8">Poți vedea ambele pachete sau doar cel care te interesează.</p>
      <div className="flex flex-col gap-4">
        {[
          { label: '👀 Vreau să văd ambele pachete', value: 'both' as ViewChoice },
          { label: '✂️ Doar Editare cu materialele mele', value: 'editing' as ViewChoice },
          { label: '🎬 Doar Pachete Complete (de la A la Z)', value: 'complete' as ViewChoice },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => { setViewChoice(opt.value); goToStep('quiz-videos'); }}
            className="bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl px-6 py-4 text-left font-semibold text-gray-800 text-base transition-all duration-200 flex items-center justify-between group shadow-sm"
          >
            <span>{opt.label}</span>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </button>
        ))}
      </div>
      <button onClick={() => { setStep(previousStep); setTimeout(() => scrollToPricing(), 50); }} className="mt-6 flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700 hover:text-red-600 font-semibold text-base transition-all duration-200 group">
        <ArrowLeft className="back-arrow h-5 w-5" /> Înapoi
      </button>
    </div>
  );

  // ── STEP: QUIZ VIDEOS ────────────────────────────────────────
  const StepQuizVideos = () => (
    <div className="fade-in-up max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Câte videoclipuri vrei pe lună?</h3>
      <p className="text-gray-500 mb-8">Îți recomandăm pachetul potrivit în funcție de volum.</p>
      <div className="flex flex-col gap-4">
        {[
          { label: '1–5 videoclipuri / lună', sub: 'Perfect pentru început sau testare', value: '1-5' },
          { label: '6–12 videoclipuri / lună', sub: 'Ideal pentru creștere constantă', value: '6-12' },
          { label: '13+ videoclipuri / lună', sub: 'Prezență online maximă', value: '13+' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => { setVideoCount(opt.value); goToStep('results'); }}
            className="bg-white border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 rounded-xl px-6 py-4 text-left transition-all duration-200 flex items-center justify-between group shadow-sm"
          >
            <div>
              <div className="font-bold text-gray-900 text-lg">{opt.label}</div>
              <div className="text-base text-gray-500 mt-1">{opt.sub}</div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
          </button>
        ))}
        <button
          onClick={() => { setVideoCount(null); goToStep('results'); }}
          className="bg-white border-2 border-gray-200 hover:border-gray-400 rounded-xl px-6 py-4 text-left transition-all duration-200 flex items-center justify-between group shadow-sm"
        >
          <div>
            <div className="font-bold text-gray-900 text-lg">Nu știu încă</div>
            <div className="text-base text-gray-500 mt-1">Arată-mi toate opțiunile</div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </button>
      </div>
      <button onClick={() => { setStep(previousStep); setTimeout(() => scrollToPricing(), 50); }} className="mt-6 flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700 hover:text-red-600 font-semibold text-base transition-all duration-200 group">
        <ArrowLeft className="back-arrow h-5 w-5" /> Înapoi
      </button>
    </div>
  );

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{subtitleGlowStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — vizibil doar pe intro si results */}
        {(step === 'intro' || step === 'results') && (
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-4xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Pachete Video
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Pachete Editare Video<br className="sm:hidden" />
              <span className="block mt-1">pentru Promovarea Afacerii Tale!</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
              Alege planul care îți va <span className="text-indigo-600 font-bold not-italic">transforma conținutul</span> și îți va
              <span className="text-gray-900 font-bold not-italic"> crește vizibilitatea online</span>.
            </p>
          </div>
        </div>
        )}

        {/* ── WIZARD ── */}
        {step !== 'results' && (
          <div id="pricing-wizard" className="max-w-4xl mx-auto mb-16">
            {step === 'intro' && <StepIntro />}
            {step === 'view-choice' && <StepViewChoice />}
            {step === 'quiz-videos' && <StepQuizVideos />}
          </div>
        )}

        {/* ── RESULTS ── */}
        {step === 'results' && (
          <div className="fade-in-up">
            {/* Recommendation banner */}
            {recommendedTier !== null && (
              <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl px-6 py-4 flex items-center gap-4 shadow">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    Pe baza răspunsurilor tale, îți recomandăm pachetul <span className="text-orange-600">{recommendedTier === 0 ? 'Start Smart' : recommendedTier === 1 ? 'Creștere Accelerată' : 'Vizibilitate Max'}</span>!
                  </p>
                  <p className="text-gray-500 text-base mt-1">Pachetul recomandat e evidențiat mai jos. Poți alege oricând altul.</p>
                </div>
              </div>
            )}

            {/* Editare cu materialele tale */}
            {(viewChoice === 'both' || viewChoice === 'editing') && (
              <div className="mb-16 md:mb-20">
                <div className="text-center mb-8 md:mb-12">
                  <div className="bg-gray-100 rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center justify-center flex-wrap">
                      <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-center">Editare cu Materialele Tale</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-base md:text-lg font-medium">
                      Aceste pachete includ doar editarea profesională a materialelor pe care ni le furnizezi.
                      <strong className="block mt-2">Editare 100% personalizată după nevoile tale.</strong>
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 border-l-4 border-blue-500">
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800 font-medium text-base md:text-lg leading-relaxed">
                          <strong className="font-bold">Durată maximă:</strong> „Maxim 1 minut" se referă la durata videoclipului final editat, nu la durata materialelor raw trimise spre editare.
                          <span className="block mt-2 font-semibold">Putem edita și clipuri care depășesc această durată, însă prețul se poate modifica în funcție de complexitatea și durata finală a proiectului.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {editingPackages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} isComplete={false} isRecommended={recommendedTier === index} delay={index * 0.15} />
                  ))}
                </div>
              </div>
            )}

            {/* Pachete complete */}
            {(viewChoice === 'both' || viewChoice === 'complete') && (
              <div className="mb-12 md:mb-16">
                <div className="text-center mb-8 md:mb-12">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center justify-center flex-wrap">
                      <Star className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-center leading-tight">Pachete Complete —<br className="sm:hidden" /><span className="block sm:inline"> Videoclipuri de la A la Z</span></span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium text-center">
                      Aceste pachete includ tot ce ai nevoie:
                      <span className="block mt-2 text-gray-900">
                        <strong>editare profesională, voiceover AI premium, script personalizat și materiale video/foto stock (B-rolls), plus un avatar virtual UGC care transmite mesajul tău într-un mod natural și profesionist</strong>
                      </span>
                      <span className="block mt-2 text-sm text-gray-500 font-normal italic">— oferite în limita resurselor disponibile pentru fiecare proiect.</span>
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {completePackages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} isComplete={true} isRecommended={recommendedTier === index} delay={index * 0.15} />
                  ))}
                </div>
              </div>
            )}

            {/* Important Notes */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                <span className="text-green-600 font-bold text-sm md:text-base">✓ Prețuri fără TVA</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-sm md:text-base">Nu suntem plătitori de TVA — plătești exact suma afișată</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Informații Importante</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-base md:text-lg">📋 Ce Includ Pachetele:</h4>
                  <ul className="space-y-3 text-gray-700 text-base md:text-lg font-medium">
                    <li>• O revizie gratuită per video, valabilă 48h de la primirea materialului editat</li>
                    <li>• Livrare flexibilă comunicată în prealabil</li>
                    <li>• Format vertical 9:16 optimizat</li>
                    <li>• Suport tehnic complet</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-base md:text-lg">⚠️ Note Importante:</h4>
                  <ul className="space-y-3 text-gray-700 text-base md:text-lg font-medium">
                    <li>• Materialele stock sunt oferite în limita disponibilității</li>
                    <li>• Voiceover AI — voce naturală, impact maxim</li>
                    <li>• Revizii suplimentare: 30-50 lei/video</li>
                    <li>• Prețurile pot varia în funcție de complexitate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reset + CTA */}
            <div className="text-center">
              <div className="flex flex-col items-center gap-1 mb-6">
                <span className="arrow-hint" style={{fontSize:"2.5rem"}}>↓</span>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl text-base md:text-lg transition-all duration-200 shadow-sm mx-auto group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                Modifică selecția
              </button>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg font-medium">
                Fiecare videoclip este realizat cu atenție la detalii, pentru un impact maxim.
              </p>
              <button
                onClick={handleContactClick}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold transition-colors duration-200 text-base md:text-lg shadow-lg"
              >
                Contactează-ne pentru Ofertă Personalizată!
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
