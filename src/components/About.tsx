import React from 'react';
import { Award, Clock, Users, Zap, Video, Target, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: 'Ani Experiență', value: '3+' },
    { icon: Users, label: 'Clienți Mulțumiți', value: '150+' },
    { icon: Clock, label: 'Proiecte Finalizate', value: '2.340+' },
    { icon: Zap, label: 'Ore Editare', value: '3000+' }
  ];

  const services = [
    {
      icon: Video,
      title: 'Editare Video Profesionistă',
      description: 'Transformăm materialele brute în clipuri scurte, clare și captivante. Optimizate pentru TikTok, Instagram Reels, YouTube Shorts și Facebook Ads. Creștem engagement-ul, vizibilitatea și impactul videoclipurilor tale.'
    },
    {
      icon: Target,
      title: 'Edităm pentru Orice Nișă',
      description: 'De la servicii și comerț la beauty, educație, sănătate, evenimente și imobiliare — sau orice altă nișă care își dorește promovare prin video marketing.\n\nLucrăm alături de antreprenori, business-uri, influenceri și creatori de conținut. Fiecare video este adaptat pentru publicul tău și obiectivul tău de marketing.'
    },
    {
      icon: Globe,
      title: 'Conținut Vertical, Optimizat Global',
      description: 'Specializați în format 9:16 pentru toate platformele sociale majore. Videoclipuri gata de publicare, optimizate pentru vizibilitate și impact maxim.'
    },
    {
      icon: CheckCircle,
      title: 'Proces Simplificat, Rezultate Excepționale',
      description: 'Fără complicații, fără pierdere de timp. Tu trimiți materialele — noi livrăm clipurile editate, gata de publicat.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Despre VisionEdit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent leading-tight">
              Cu ce ne ocupăm?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto px-4 py-6 text-center">
  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
    Creăm și edităm videoclipuri scurte, captivante și optimizate pentru 
    <strong> Reels, TikTok, Shorts</strong> și alte platforme.
  </p>
  <p className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed italic">
    Combinăm storytelling-ul autentic și trendurile actuale pentru a transforma 
    ideile tale în conținut video care atrage și convertește.
  </p>
</div>
</div>



        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-20">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '3/2'}}>
              <img
                src="/team.jpeg"
                alt="Echipa VisionEdit București"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 rounded-xl p-4 md:p-6 text-white shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-white">2.340+</div>
              <div className="text-xs md:text-sm text-white font-medium">Proiecte Finalizate</div>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors duration-300 shadow-sm">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 md:p-3 flex-shrink-0">
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors duration-300 shadow-sm">
              <div className="bg-blue-100 rounded-lg p-3 md:p-4 mb-3 md:mb-4 inline-block">
                <achievement.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

{/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 px-4 sm:px-0">
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
        </div>
      </div>
    </section>
  );
};

export default About;