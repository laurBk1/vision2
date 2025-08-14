import React from 'react';
import { Video, Scissors, Palette, Megaphone, Camera, Zap, Eye, Volume2, Type, Sparkles, Target, Layers } from 'lucide-react';

const Services = () => {
  const handleLearnMore = (serviceTitle: string) => {
    // Pentru moment, scroll la contact pentru mai multe informații
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Tranziții și Efecte Vizuale Impactante',
      description: 'Captăm atenția publicului tău din primele secunde, sporind considerabil șansele videoclipului tău de a deveni viral prin efecte vizuale spectaculoase și tranziții fluide.',
      features: ['Efecte de tranziție cinematice', 'Animații captivante', 'Elemente vizuale virale'],
      highlight: 'Viral Ready'
    },
    {
      icon: Scissors,
      title: 'Montaj Video și Editare Profesională',
      description: 'Asigurăm un flow dinamic și captivant, cu tăieturi precise, care menține interesul și implicarea publicului de la început până la sfârșit.',
      features: ['Tăieturi precise și ritmice', 'Flow dinamic optimizat', 'Sincronizare perfectă'],
      highlight: 'Pro Editing'
    },
    {
      icon: Volume2,
      title: 'Sound Design și Efecte Audio Profesionale',
      description: 'Îmbogățim conținutul videoclipului tău cu sunete și efecte care intensifică emoția și completează perfect mesajul vizual.',
      features: ['Efecte audio premium', 'Sincronizare audio-video', 'Mixaj profesional'],
      highlight: 'Audio Pro'
    },
    {
      icon: Type,
      title: 'Subtitrare și Texte Personalizate',
      description: 'Asigurăm accesibilitate și impact maxim prin texte clare și subtitrări complete, sincronizate perfect cu mesajul videoclipului tău.',
      features: ['Subtitrări sincronizate', 'Texte animate', 'Design tipografic'],
      highlight: 'Accessible'
    },
    {
      icon: Target,
      title: 'Branding și Elemente Grafice Integrate',
      description: 'Întărim identitatea și prezența online a afacerii tale prin încorporarea strategică a logo-ului, watermark-ului și a elementelor grafice pe care ni le furnizezi.',
      features: ['Integrare logo profesională', 'Watermark personalizat', 'Elemente de brand'],
      highlight: 'Brand Focus'
    },
    {
      icon: Palette,
      title: 'Corecție de Culori și Filtre Profesionale',
      description: 'Transformăm estetic videoclipul tău prin ajustarea profesională a culorilor, luminozității și contrastului, asigurând un aspect vizual impecabil și captivant.',
      features: ['Color grading avansat', 'Filtre cinematice', 'Echilibrare cromatică'],
      highlight: 'Visual Pro'
    },
    {
      icon: Eye,
      title: 'Stabilizare Video și Blur Selectiv',
      description: 'Eliminăm tremurul pentru un aspect fluid și profesionist. Aplicăm estompare (blur) strategic, pentru a masca elemente nedorite sau a direcționa atenția către ceea ce contează cu adevărat.',
      features: ['Stabilizare avansată', 'Blur selectiv strategic', 'Focus directing'],
      highlight: 'Smooth Pro'
    },
    {
      icon: Layers,
      title: 'Efecte de Zoom Dinamice',
      description: 'Intensificăm impactul vizual și menținem publicul angajat prin utilizarea strategică a efectelor de zoom in/out, evidențiind detalii esențiale și oferind context exact când este nevoie.',
      features: ['Zoom cinematografic', 'Focus dinamic', 'Evidențiere strategică'],
      highlight: 'Dynamic'
    },
    {
      icon: Sparkles,
      title: 'Animații și Efecte Grafice Creative',
      description: 'Îmbogățim vizual videoclipul tău cu emoji-uri animate, stickere, texte dinamice și alte elemente grafice, transformându-l într-o experiență mai atractivă și memorabilă pentru public.',
      features: ['Emoji-uri animate', 'Stickere personalizate', 'Grafică dinamică'],
      highlight: 'Creative'
    },
    {
      icon: Layers,
      title: 'Green Screen & Keying',
      description: 'Folosim tehnici avansate de chroma key pentru a elimina fundalul și a integra subiectul în scene mai dinamice, virale sau creative, oferind posibilități nelimitate de personalizare.',
      features: ['Eliminare fundal cu keying curat', 'Adăugare fundaluri animate sau branded', 'Shadow + edge refinement pentru realism'],
      highlight: 'Advanced'
    },
    {
      icon: Target,
      title: 'Crop & Reframe',
      description: 'Adaptăm conținut filmat orizontal (landscape) pentru vertical (Shorts), păstrând subiectul clar și în centru. Evităm marginile negre și menținem aspectul profesional.',
      features: ['Reîncadrare dinamică (motion tracking pe subiect)', 'Zoom adaptiv pentru diferite scene', 'Eliminarea spațiilor moarte', 'Centrare automată pe acțiune'],
      highlight: 'Smart Crop'
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
      icon: Video,
      title: 'Format Vertical 9:16 Optimizat',
      description: 'Specializați în formatul vertical perfect pentru TikTok, Instagram Reels, YouTube Shorts și alte platforme sociale moderne.',
      stats: '100% Optimizat Social'
    },
    {
      icon: Target,
      title: 'Strategii de Engagement',
      description: 'Implementăm tehnici dovedite pentru a maximiza rata de vizionare, like-uri, share-uri și comentarii.',
      stats: '3x Mai Mult Engagement'
    },
    {
      icon: Megaphone,
      title: 'Optimizare pentru Algoritmi',
      description: 'Creăm conținut adaptat algoritmilor platformelor sociale pentru a maximiza reach-ul organic.',
      stats: '5x Mai Multă Vizibilitate'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Servicii Complete
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              Ce Servicii Oferim?
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
           Editare profesională pentru Shorts, Reels, TikTok și alte formate scurte, optimizată pentru a maximiza vizualizările și engagement-ul pe social media. Transformăm ideile tale în conținut care captează atenția.
          </p>
        </div>

        {/* Special Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {specialFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="bg-white/20 rounded-full p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-shadow">
                {feature.title}
              </h3>
              <p className="text-blue-100 mb-3 md:mb-4 leading-relaxed font-medium text-sm md:text-base">
                {feature.description}
              </p>
              <div className="bg-white/20 rounded-lg py-2 px-3 md:px-4 inline-block">
                <span className="font-bold text-xs md:text-sm">{feature.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-blue-600 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                {service.highlight}
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-3 md:p-4 w-fit mb-4 md:mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                <service.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed font-medium text-sm md:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs md:text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                    <span className="group-hover:text-gray-700 transition-colors duration-200 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleLearnMore(service.title)}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-600 hover:to-purple-600 hover:text-white text-gray-700 font-bold py-2 md:py-3 rounded-lg transition-all duration-300 transform group-hover:scale-105 text-sm md:text-base"
              >
                Află Mai Multe
              </button>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-shadow-sm">
              Procesul Nostru de Lucru:
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Fiecare proiect urmează un proces structurat pentru a asigura calitatea și satisfacția clientului.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Briefing', desc: 'Înțelegem viziunea ta' },
              { step: '02', title: 'Planificare', desc: 'Creăm strategia video' },
              { step: '03', title: 'Producție', desc: 'Editare profesională' },
              { step: '04', title: 'Livrare', desc: 'Rezultat final perfect' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-sm md:text-lg shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-shadow">
              Gata să Transformi Conținutul Tău?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto font-medium">
              Alege din serviciile noastre profesionale și vezi cum videoclipurile tale 
              devin virale și aduc rezultate reale pentru afacerea ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Vezi Prețurile
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200"
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