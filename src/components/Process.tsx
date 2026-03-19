import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, FileText, Scissors, CheckCircle } from 'lucide-react';

// Hook care returnează dacă elementul e vizibil în viewport
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Dacă elementul e deja în viewport la mount (ex: primul card pe PC), îl facem vizibil imediat
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface StepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  index: number;
}

function StepItem({ icon: Icon, title, description, details, index }: StepProps) {
  const { ref, visible } = useInView(0.18);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative mb-8 md:mb-16"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.9s ease ${index * 0.15}s, transform 0.9s ease ${index * 0.15}s`,
      }}
    >
      <div className={`md:flex md:items-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
        <div className={`md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
          <div className="proc-card">

            {/* Icon */}
            <div className={`flex items-center mb-4 md:mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
              <div className="bg-blue-100 rounded-lg p-3">
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed font-medium text-sm md:text-base">
              {description}
            </p>

            {/* Details */}
            <ul className="space-y-2">
              {details.map((detail, idx) => (
                <li
                  key={idx}
                  className={`flex items-center text-xs md:text-sm text-gray-500 font-medium ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div
                    className={`w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mr-2 ${
                      isEven ? 'md:order-2 md:ml-3 md:mr-0' : 'md:mr-3'
                    }`}
                  />
                  {detail}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* Timeline dot — desktop only */}
      <div className="proc-dot hidden md:flex absolute left-1/2 top-6 md:top-8 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 items-center justify-center">
        <span className="text-white font-bold text-sm">{index + 1}</span>
      </div>
    </div>
  );
}

const Process = () => {
  const header = useInView(0.1);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultare',
      description: 'Discutăm viziunea ta, obiectivele și cerințele pentru a înțelege nevoile proiectului.',
      details: ['Briefing proiect', 'Planificare timeline', 'Discuție buget'],
    },
    {
      icon: FileText,
      title: 'Planificare',
      description: 'Creăm un plan detaliat al proiectului cu storyboard, timeline și livrabile.',
      details: ['Creare storyboard', 'Alocare resurse', 'Stabilire milestone-uri'],
    },
    {
      icon: Scissors,
      title: 'Producție',
      description: 'Editare profesională, color grading și post-producție pentru proiectul tău.',
      details: ['Editare video', 'Corecție culori', 'Îmbunătățire audio'],
    },
    {
      icon: CheckCircle,
      title: 'Livrare',
      description: 'Revizuire finală, modificări și livrarea proiectului video finalizat.',
      details: ['Revizuire calitate', 'Feedback client', 'Livrare finală'],
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50">
      <style>{`
        .proc-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .proc-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.13);
          transform: translateY(-2px);
        }
        /* Timeline linie — ascunsa pe mobil */
        .proc-line {
          display: none;
        }
        @media (min-width: 768px) {
          .proc-line {
            display: block;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: #bfdbfe;
          }
          .proc-dot {
            display: flex !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div
          ref={header.ref}
          className="text-center mb-12 md:mb-20"
          style={{
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease 0s, transform 0.9s ease 0s',
          }}
        >
          <div className="bg-gradient-to-r from-gray-50 via-white to-slate-50 border-2 border-gray-300 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-gray-700 to-slate-700 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Proces Creativ
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Procesul Nostru Creativ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto px-4 mt-4">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium italic">
              De la conceptul inițial la livrarea finală, urmăm un
              <span className="text-indigo-600 font-bold not-italic"> proces dovedit </span>
              care asigură rezultate de calitate și
              <span className="text-gray-900 font-bold not-italic"> satisfacția clientului </span>
              de fiecare dată.
            </p>
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative">
          {/* Linie verticală — doar desktop */}
          <div className="proc-line" />

          {steps.map((step, index) => (
            <StepItem
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              details={step.details}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
