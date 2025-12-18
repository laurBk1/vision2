import React from 'react';
import { MessageSquare, FileText, Scissors, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultare',
      description: 'Discutăm viziunea ta, obiectivele și cerințele pentru a înțelege nevoile proiectului.',
      details: ['Briefing proiect', 'Planificare timeline', 'Discuție buget']
    },
    {
      icon: FileText,
      title: 'Planificare',
      description: 'Creăm un plan detaliat al proiectului cu storyboard, timeline și livrabile.',
      details: ['Creare storyboard', 'Alocare resurse', 'Stabilire milestone-uri']
    },
    {
      icon: Scissors,
      title: 'Producție',
      description: 'Editare profesională, color grading și post-producție pentru proiectul tău.',
      details: ['Editare video', 'Corecție culori', 'Îmbunătățire audio']
    },
    {
      icon: CheckCircle,
      title: 'Livrare',
      description: 'Revizuire finală, modificări și livrarea proiectului video finalizat.',
      details: ['Revizuire calitate', 'Feedback client', 'Livrare finală']
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partea de sus: Titlu și Textul Premium pe care l-am lucrat */}
        <div className="text-center mb-12 md:mb-20">
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

        {/* Timeline-ul cu pașii de lucru */}
        <div className="relative">
          {/* Linia verticală de fundal */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative mb-8 md:mb-16 ${
              index % 2 === 0 ? 'md:text-right' : 'md:text-left'
            }`}>
              <div className={`md:flex md:items-center ${
                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
              }`}>
                <div className={`md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`flex items-center mb-4 md:mb-6 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <div className="bg-blue-100 rounded-lg p-3">
                        <step.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed font-medium text-sm md:text-base">
                      {step.description}
                    </p>
                    
                    <ul className={`space-y-2 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className={`flex items-center text-xs md:text-sm text-gray-500 font-medium ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <div className={`w-2 h-2 bg-blue-600 rounded-full ${
                            index % 2 === 0 ? 'order-2 ml-2 md:ml-3' : 'mr-2 md:mr-3'
                          }`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Bulina de pe timeline */}
              <div className="hidden md:block absolute left-1/2 top-6 md:top-8 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                <div className="flex items-center justify-center w-full h-full text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;