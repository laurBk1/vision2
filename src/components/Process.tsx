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
        <div className="text-center mb-12 md:mb-20">
          <h1 className="premium-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight" title="Metodologia Premium de Editare Video Profesională" aria-label="Metodologia Premium de Editare Video Profesională">
            Metodologia Premium de Editare Video Profesională
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            De la conceptul inițial la livrarea finală, urmăm un proces dovedit 
            care asigură rezultate de calitate și satisfacția clientului de fiecare dată.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
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
                      <div className="bg-blue-100 rounded-lg p-3 mr-3 md:mr-0">
                        <step.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      {index % 2 !== 0 && <div className="ml-3 md:ml-4"></div>}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
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
              
              {/* Timeline Node - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-6 md:top-8 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg">
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