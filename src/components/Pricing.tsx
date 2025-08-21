import React from 'react';
import { Check, Star, Zap, AlertCircle, Clock } from 'lucide-react';

const Pricing = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const editingPackages = [
    {
      name: 'Start Smart',
      subtitle: '1-5 videoclipuri pe lună',
      icon: '🚀',
      popular: false,
      price: '180 lei/video',
      description: 'Editare doar cu materialele tale',
      features: [
        'Editare profesională cu materialele furnizate de tine',
        'Montaj complet și optimizat',
        'Tranziții și efecte vizuale',
        'Corecție de culori și stabilizare',
        'Format vertical 9:16 optimizat',
        'O revizuire gratuită în 48 de ore',
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
      price: '140 lei/video',
      description: 'Editare doar cu materialele tale',
      features: [
        'Toate beneficiile din Start Smart',
        'Preț redus per videoclip',
        'Suport prioritar',
        'Consultanță strategică inclusă',
        'O revizuire gratuită în 48 de ore',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Cel Mai Popular',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
    },
    {
      name: 'Vizibilitate Max',
      subtitle: '13-24+ videoclipuri pe lună',
      icon: '🔥',
      popular: false,
      price: '120 lei/video',
      description: 'Editare doar cu materialele tale',
      features: [
        'Toate beneficiile anterioare',
        'Cel mai bun preț per videoclip',
        'Suport prioritar și comunicare directă',
        'Strategie de conținut inclusă',
        'O revizuire gratuită în 48 de ore',
        'Livrare flexibilă comunicată în prealabil',
        'Analiză performanță lunară'
      ],
      buttonText: 'Maximizează Impactul',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const completePackages = [
    {
      name: 'Start Smart Complet',
      subtitle: '1-5 videoclipuri pe lună',
      icon: '🎬',
      popular: false,
      price: '250-325 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '250 lei/video' },
        { duration: '30 sec - 1 min', price: '325 lei/video' }
      ],
      description: 'Pachet complet cu voiceover, script și materiale stock',
      features: [
        'Videoclipuri personalizate de la A la Z',
        'Montaj complet profesional',
        'Voice-over profesional cu AI',
        'Script adaptat conținutului',
        'Materiale video stock incluse',
        'O revizuire gratuită în 48 de ore',
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
      price: '225-300 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '225 lei/video' },
        { duration: '30 sec - 1 min', price: '300 lei/video' }
      ],
      description: 'Pachet complet cu voiceover, script și materiale stock',
      features: [
        'Toate beneficiile din Start Smart Complet',
        'Preț redus per videoclip',
        'Suport prioritar',
        'Consultanță strategică inclusă',
        'O revizuire gratuită în 48 de ore',
        'Livrare flexibilă comunicată în prealabil'
      ],
      buttonText: 'Cel Mai Popular Complet',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
    },
    {
      name: 'Vizibilitate Max Complet',
      subtitle: '13-24+ videoclipuri pe lună',
      icon: '🏆',
      popular: false,
      price: '200-275 lei/video',
      priceDetails: [
        { duration: 'Sub 30 secunde', price: '200 lei/video' },
        { duration: '30 sec - 1 min', price: '275 lei/video' }
      ],
      description: 'Pachet complet cu voiceover, script și materiale stock',
      features: [
        'Toate beneficiile anterioare',
        'Cel mai bun preț per videoclip',
        'Suport prioritar și comunicare directă',
        'Strategie de conținut inclusă',
        'O revizuire gratuită în 48 de ore',
        'Livrare flexibilă comunicată în prealabil',
        'Analiză performanță lunară'
      ],
      buttonText: 'Maximizează Impactul Complet',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const PackageCard = ({ pkg, isComplete = false }: { pkg: any, isComplete?: boolean }) => (
    <div 
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
        pkg.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 font-bold text-sm">
          <Star className="inline h-4 w-4 mr-1" />
          Cel Mai Popular
        </div>
      )}
      
      <div className={`p-6 md:p-8 ${pkg.popular ? 'pt-12 md:pt-16' : ''}`}>
        <div className="text-center mb-6 md:mb-8">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">{pkg.icon}</div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {pkg.name}
          </h3>
          <p className="text-blue-600 font-bold mb-2 text-sm md:text-base">
            {pkg.subtitle}
          </p>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {pkg.price}
          </div>
          
          {/* Price Details for Complete Packages */}
          {isComplete && pkg.priceDetails && (
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              {pkg.priceDetails.map((detail: any, idx: number) => (
                <div key={idx} className="text-xs md:text-sm">
                  <span className="font-bold text-gray-900">{detail.duration}</span>
                  <span className="text-gray-700"> - </span>
                  <span className="font-bold text-blue-600">{detail.price}</span>
                </div>
              ))}
            </div>
          )}
          
          <p className={`text-xs md:text-sm font-bold ${isComplete ? 'text-green-800' : 'text-gray-800'} leading-tight`}>
            {pkg.description}
          </p>
        </div>

        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {pkg.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button 
          onClick={handleContactClick}
          className={`w-full text-white font-bold py-3 md:py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm md:text-base ${pkg.buttonColor}`}
        >
          <span>{pkg.buttonText}</span>
          <Zap className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-4xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Pachete Video
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Pachete Editare Video<br className="sm:hidden" />
              <span className="block mt-1">pentru Promovarea Afacerii Tale!</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Alege planul care îți va transforma conținutul și îți va crește vizibilitatea online. 
            Pachete flexibile adaptate nevoilor tale de business.
          </p>
        </div>

        {/* Editare cu materialele tale */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <div className="bg-gray-100 rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center justify-center flex-wrap">
                <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-center">Editare cu Materialele Tale</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base font-medium">
                Aceste pachete includ doar editarea profesională a materialelor pe care ni le furnizezi. 
                <strong className="block mt-2"> Nu includ voiceover, script sau materiale video/foto din stock.</strong>
              </p>
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 font-bold text-xs md:text-sm leading-tight">
                    <strong>Durată maximă:</strong> „Maxim 1 minut" se referă la durata videoclipului final editat, 
                    nu la durata materialelor raw trimise spre editare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {editingPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} isComplete={false} />
            ))}
          </div>
        </div>

        {/* Pachete complete */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center justify-center flex-wrap">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mr-2 flex-shrink-0" />
                <span className="text-center leading-tight">
                  Pachete Complete cu Voiceover,<br className="sm:hidden" />
                  <span className="block sm:inline"> Script și Materiale Stock</span>
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                Aceste pachete includ tot ce ai nevoie: <strong>editare profesională, voiceover cu AI, 
                script personalizat și materiale video/foto stock și avatar virtual care poate prezenta videoclipul</strong> - oferite în limita resurselor 
                disponibile pentru fiecare proiect.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {completePackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} isComplete={true} />
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Informații Importante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">📋 Ce Includ Pachetele:</h4>
              <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-medium">
                <li>• O revizuire gratuită, livrată în maximum 48 de ore</li>
                <li>• Livrare flexibilă comunicată în prealabil</li>
                <li>• Format vertical 9:16 optimizat</li>
                <li>• Suport tehnic complet</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">⚠️ Note Importante:</h4>
              <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-medium">
                <li>• Materialele stock sunt oferite în limita disponibilității</li>
                <li>• Voiceover-ul este generat cu AI profesional</li>
                <li>• Revizii suplimentare: 30-50 lei/video</li>
                <li>• Prețurile pot varia în funcție de complexitate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base font-medium">
            Toate pachetele includ o revizuire gratuită în 48 de ore și livrare flexibilă comunicată în prealabil.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-colors duration-200 text-sm md:text-base shadow-lg"
          >
            Contactează-ne pentru Ofertă Personalizată!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;