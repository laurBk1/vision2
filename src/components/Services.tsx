import React, { useState, useEffect, useRef } from 'react';
import { Video, Scissors, Palette, Megaphone, Zap, Eye, Volume2, Type, Sparkles, Target, Layers, Image, RefreshCw, Flame, ChevronDown, ChevronUp, MessageSquare, FileText, CheckCircle, Clapperboard, Music2, ImagePlus, Stamp, Repeat2, ZoomIn, Wand2, ScanLine, Crop, Smartphone, TrendingUp, BarChart2 } from 'lucide-react';

const shimmerStyle = `
  .btn-shimmer {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #1e3a8a 0%, #4f46e5 50%, #7c3aed 100%);
    color: white;
    transition: all 0.3s ease;
  }
  .btn-shimmer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.15) 40%,
      rgba(255,255,255,0.35) 50%,
      rgba(255,255,255,0.15) 60%,
      transparent 100%
    );
    animation: shimmer 2.5s ease-in-out infinite;
  }
  @keyframes shimmer {
    0%   { left: -100%; }
    100% { left: 200%; }
  }
  .btn-shimmer:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(99,102,241,0.45);
  }
  .btn-shimmer-close {
    position: relative;
    background: linear-gradient(135deg, #374151, #6b7280);
    color: white;
    transition: all 0.3s ease;
  }
  .btn-shimmer-close:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(107,114,128,0.4);
  }
`;

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

function ServiceCard({ service, index, delay, expandedFeatures, expandedDesc, setExpandedFeatures, setExpandedDesc }) {
  const { ref, visible } = useInView(0.1);
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(35px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-blue-600 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
        {service.highlight}
      </div>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-3 md:p-4 w-fit mb-4 md:mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
        {service.title}
      </h3>
      <button
        onClick={() => setExpandedFeatures(expandedFeatures === index ? null : index)}
        className="flex items-center gap-1.5 text-blue-600 text-base font-bold mb-4 hover:text-blue-800 transition-colors w-fit"
      >
        {expandedFeatures === index ? 'Ascunde detalii' : 'Vezi ce include'}
        {expandedFeatures === index ? <ChevronUp className="h-4 w-4 md:h-5 md:w-5" /> : <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />}
      </button>
      {expandedFeatures === index && (
        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-base text-gray-700">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2 md:mr-3 flex-shrink-0 mt-1.5"></div>
              <span className="font-medium leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          const isOpen = expandedDesc === index;
          setExpandedDesc(isOpen ? null : index);
          if (!isOpen) setExpandedFeatures(index);
          else setExpandedFeatures(null);
        }}
        className={`w-full font-bold py-3 rounded-lg text-base ${expandedDesc === index ? 'btn-shimmer-close' : 'btn-shimmer'}`}
      >
        {expandedDesc === index ? 'Ascunde' : 'Află Mai Multe'}
      </button>
      {expandedDesc === index && (
        <div className="mt-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
          <p className="text-gray-700 text-base leading-relaxed font-medium">
            {service.description}
          </p>
        </div>
      )}
    </div>
  );
}

const Services = () => {
  const [expandedFeatures, setExpandedFeatures] = useState(null);
  const [expandedDesc, setExpandedDesc] = useState(null);

  const services = [
    {
      icon: Clapperboard,
      title: 'Montaj Video și Editare Profesională',
      description: 'Asigurăm un flow dinamic și captivant, cu tăieturi precise, care menține interesul și implicarea publicului de la început până la sfârșit.',
      features: ['Tăieturi precise și ritmice', 'Flow dinamic optimizat', 'Sincronizare perfectă'],
      highlight: 'Pro Editing'
    },
    {
      icon: Flame,
      title: 'Hook Viral în Primele 3 Secunde',
      description: 'Algoritmul măsoară câți oameni rămân după primele 3 secunde. Dacă pleacă, videoclipul nu mai e promovat. Dacă rămân, explozia de views începe. Noi ne specializăm exact pe aceste 3 secunde.',
      features: ['Hook vizual + text + audio în primele 3 secunde', 'Variante multiple testate pe trenduri actuale', 'Strategie bazată pe datele de retenție ale platformelor'],
      highlight: 'Viral Trigger'
    },
    {
      icon: Type,
      title: 'Subtitrare și Texte Personalizate',
      description: 'Asigurăm accesibilitate și impact maxim prin texte clare și subtitrări complete, sincronizate perfect cu mesajul videoclipului tău.',
      features: ['Subtitrări sincronizate', 'Texte animate', 'Design tipografic'],
      highlight: 'Accessible'
    },
    {
      icon: Music2,
      title: 'Sound Design și Efecte Audio Profesionale',
      description: 'Îmbogățim conținutul videoclipului tău cu sunete și efecte care intensifică emoția și completează perfect mesajul vizual.',
      features: ['Efecte audio premium', 'Sincronizare audio-video', 'Mixaj profesional'],
      highlight: 'Audio Pro'
    },
    {
      icon: ImagePlus,
      title: 'Copertă Captivantă',
      description: 'Înainte ca cineva să vadă videoclipul tău, vede imaginea de copertă. Dacă aceasta nu îl oprește din scroll în prima secundă, videoclipul tău nu există pentru el. Un thumbnail bun poate dubla sau tripla vizualizările fără să schimbi nimic altceva.',
      features: ['Design custom adaptat nișei tale', 'Text emoțional și compoziție care oprește scroll-ul', '2-3 variante gata de testat, tu alegi câștigătoarea'],
      highlight: 'Click Boost'
    },
    {
      icon: Sparkles,
      title: 'Tranziții și Efecte Vizuale Impactante',
      description: 'Captăm atenția publicului tău din primele secunde, sporind considerabil șansele videoclipului tău de a deveni viral prin efecte vizuale spectaculoase și tranziții fluide.',
      features: ['Efecte de tranziție cinematice', 'Animații captivante', 'Elemente vizuale virale'],
      highlight: 'Viral Ready'
    },
    {
      icon: Palette,
      title: 'Corecție de Culori și Filtre Profesionale',
      description: 'Transformăm estetic videoclipul tău prin ajustarea profesională a culorilor, luminozității și contrastului, asigurând un aspect vizual impecabil și captivant.',
      features: ['Color grading avansat', 'Filtre cinematice', 'Echilibrare cromatică'],
      highlight: 'Visual Pro'
    },
    {
      icon: Stamp,
      title: 'Branding și Elemente Grafice Integrate',
      description: 'Întărim identitatea și prezența online a afacerii tale prin încorporarea strategică a logo-ului, watermark-ului și a elementelor grafice pe care ni le furnizezi.',
      features: ['Integrare logo profesională', 'Watermark personalizat', 'Elemente de brand'],
      highlight: 'Brand Focus'
    },
    {
      icon: Repeat2,
      title: 'Transformare Conținut Lung în Shorts',
      description: 'Ai un podcast, un vlog lung, un interviu sau un live? Nu trebuie să filmezi nimic nou. Luăm ce ai deja și transformăm cele mai bune momente în Shorts separate, gata de postat pe toate platformele.',
      features: ['Extragere manuală a celor mai bune momente', 'Hook, subtitrări și efecte pentru fiecare short', 'Același brand, conținut nou, fără filmare extra'],
      highlight: 'Content x10'
    },
    {
      icon: ZoomIn,
      title: 'Efecte de Zoom Dinamice',
      description: 'Intensificăm impactul vizual și menținem publicul angajat prin utilizarea strategică a efectelor de zoom in/out, evidențiind detalii esențiale și oferind context exact când este nevoie.',
      features: ['Zoom cinematografic', 'Focus dinamic', 'Evidențiere strategică'],
      highlight: 'Dynamic'
    },
    {
      icon: Wand2,
      title: 'Animații și Efecte Grafice Creative',
      description: 'Îmbogățim vizual videoclipul tău cu emoji-uri animate, stickere, texte dinamice și alte elemente grafice, transformându-l într-o experiență mai atractivă și memorabilă pentru public.',
      features: ['Emoji-uri animate', 'Stickere personalizate', 'Grafică dinamică'],
      highlight: 'Creative'
    },
    {
      icon: ScanLine,
      title: 'Stabilizare Video și Blur Selectiv',
      description: 'Eliminăm tremurul pentru un aspect fluid și profesionist. Aplicăm estompare (blur) strategic, pentru a masca elemente nedorite sau a direcționa atenția către ceea ce contează cu adevărat.',
      features: ['Stabilizare avansată', 'Blur selectiv strategic', 'Focus directing'],
      highlight: 'Smooth Pro'
    },
    {
      icon: Crop,
      title: 'Crop & Reframe',
      description: 'Adaptăm conținut filmat orizontal (landscape) pentru vertical (Shorts), păstrând subiectul clar și în centru. Evităm marginile negre și menținem aspectul profesional.',
      features: ['Reîncadrare dinamică (motion tracking pe subiect)', 'Zoom adaptiv pentru diferite scene', 'Eliminarea spațiilor moarte', 'Centrare automată pe acțiune'],
      highlight: 'Smart Crop'
    },
    {
      icon: Layers,
      title: 'Green Screen & Keying',
      description: 'Folosim tehnici avansate de chroma key pentru a elimina fundalul și a integra subiectul în scene mai dinamice, virale sau creative, oferind posibilități nelimitate de personalizare.',
      features: ['Eliminare fundal cu keying curat', 'Adăugare fundaluri animate sau branded', 'Shadow + edge refinement pentru realism'],
      highlight: 'Advanced'
    },
    {
      icon: Zap,
      title: 'Livrare Rapidă',
      description: 'Proiecte urgente cu livrare în aceeași zi sau în 24 de ore pentru necesități de editare video urgente.',
      features: ['Serviciu Express', 'Suport Prioritar', 'Program Flexibil'],
      highlight: 'Fast Track'
    }
  ];

  const specialFeatures = [
    {
      icon: Smartphone,
      title: 'Format Vertical 9:16 Optimizat',
      description: 'Specializați în formatul vertical perfect pentru TikTok, Instagram Reels, YouTube Shorts și alte platforme sociale moderne.',
      stats: '100% Optimizat Social'
    },
    {
      icon: TrendingUp,
      title: 'Strategii de Engagement',
      description: 'Implementăm tehnici dovedite pentru a maximiza rata de vizionare, like-uri, share-uri și comentarii.',
      stats: '3x Mai Mult Engagement'
    },
    {
      icon: BarChart2,
      title: 'Optimizare pentru Algoritmi',
      description: 'Creăm conținut adaptat algoritmilor platformelor sociale pentru a maximiza reach-ul organic.',
      stats: '5x Mai Multă Vizibilitate'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <style>{shimmerStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Servicii Complete
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Ce Servicii Oferim?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto px-4 mt-6">
            <p className="text-lg md:text-xl text-gray-800 font-semibold leading-tight">
              Editare profesională pentru <span className="text-blue-700">Shorts, Reels și TikTok</span> + alte formate scurte.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed font-medium italic">
              Edităm conținut video care construiește audiențe fidele, generează engagement real și
              <span className="text-indigo-600 font-bold not-italic"> transformă urmăritorii în clienți</span>,
              accelerând vânzările în mod organic.
            </p>
          </div>
        </div>

        {/* Special Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {specialFeatures.map((feature, index) => {
            const FIcon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="bg-white/20 rounded-full p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <FIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-blue-100 mb-3 md:mb-4 leading-relaxed font-medium text-base">{feature.description}</p>
                <div className="bg-white/20 rounded-lg py-2 px-3 md:px-4 inline-block">
                  <span className="font-bold text-sm">{feature.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              delay={(index % 3) * 0.12}
              expandedFeatures={expandedFeatures}
              expandedDesc={expandedDesc}
              setExpandedFeatures={setExpandedFeatures}
              setExpandedDesc={setExpandedDesc}
            />
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl mb-12 md:mb-16">
          <style>{`
            @keyframes arrowFlow {
              0%, 100% { opacity: 0.4; transform: translateX(0); }
              50% { opacity: 1; transform: translateX(4px); }
            }
            .proc-arrow { animation: arrowFlow 1.5s ease-in-out infinite; }
            .proc-arrow-down { animation: arrowFlow 1.5s ease-in-out infinite; transform-origin: center; }
            @keyframes arrowFlowDown {
              0%, 100% { opacity: 0.4; transform: translateY(0); }
              50% { opacity: 1; transform: translateY(4px); }
            }
            .proc-arrow-down { animation: arrowFlowDown 1.5s ease-in-out infinite; }
          `}</style>

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Procesul Nostru de Lucru:
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium italic">
              Fiecare proiect urmează un <span className="text-indigo-600 font-bold not-italic">proces structurat</span> pentru a asigura
              <span className="text-gray-900 font-bold not-italic"> calitatea și satisfacția clientului</span>.
            </p>
          </div>

          {/* Desktop: row cu sageti orizontale */}
          <div className="hidden md:flex items-center justify-between gap-2">
            {[
              { step: '01', title: 'Briefing', desc: 'Înțelegem viziunea ta', icon: MessageSquare },
              { step: '02', title: 'Planificare', desc: 'Creăm strategia video', icon: FileText },
              { step: '03', title: 'Producție', desc: 'Editare profesională', icon: Scissors },
              { step: '04', title: 'Livrare', desc: 'Rezultat final perfect', icon: CheckCircle }
            ].map((item, index, arr) => {
              const StepIcon = item.icon;
              return (
              <React.Fragment key={index}>
                <div className="flex-1 text-center group">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-2">
                    <StepIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-base">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-snug">{item.desc}</p>
                </div>
                {index < arr.length - 1 && (
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 px-1">
                    <svg className="proc-arrow w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
            })}
          </div>

          {/* Mobile: coloana cu sageti verticale */}
          <div className="flex md:hidden flex-col items-center gap-0">
            {[
              { step: '01', title: 'Briefing', desc: 'Înțelegem viziunea ta', icon: MessageSquare },
              { step: '02', title: 'Planificare', desc: 'Creăm strategia video', icon: FileText },
              { step: '03', title: 'Producție', desc: 'Editare profesională', icon: Scissors },
              { step: '04', title: 'Livrare', desc: 'Rezultat final perfect', icon: CheckCircle }
            ].map((item, index, arr) => {
              const MIcon = item.icon;
              return (
              <React.Fragment key={index}>
                <div className="w-full flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-base shadow-md">
                    {item.step}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <MIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div className="py-1">
                    <svg className="proc-arrow-down w-6 h-6 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-6 md:p-12 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Vrei conținut care aduce rezultate?
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
              Alege din serviciile noastre profesionale și vezi cum videoclipurile tale devin virale și aduc rezultate reale pentru afacerea ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Vezi Prețurile
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Contactează-ne!
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
