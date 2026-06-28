import React from 'react';
import { Award, Clock, Users, Zap, Clapperboard, Film, Smartphone, Rocket } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: 'Ani Experiență', value: '3+' },
    { icon: Users, label: 'Clienți Mulțumiți', value: '150+' },
    { icon: Clock, label: 'Proiecte Finalizate', value: '2.340+' },
    { icon: Zap, label: 'Ore Editare', value: '3000+' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-blue-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Despre noi
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
                src="/team.jpg"
                alt="Echipa VisionEdit București"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 rounded-xl p-4 md:p-6 text-white shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-white">2.340+</div>
              <div className="text-xs md:text-sm text-white font-medium">Proiecte Finalizate</div>
            </div>
          </div>

          {/* Right Side - Single Premium Text Block */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-4">
                Transformăm <strong className="text-gray-900">clipurile tale</strong> în <strong className="text-gray-900">conținut scurt, clar și captivant</strong>, optimizat pentru <strong className="text-blue-600">TikTok, Instagram Reels, YouTube Shorts și Facebook Ads</strong> — indiferent de nișă.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-4">
                Lucrăm cu <strong className="text-gray-900">antreprenori, business-uri, influenceri și creatori de conținut</strong> din domenii precum beauty, educație, sănătate, imobiliare, comerț și multe altele. Fiecare video este adaptat pentru <strong className="text-gray-900">publicul tău și obiectivul tău de marketing</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
                Suntem specializați în <strong className="text-gray-900">format vertical 9:16</strong>, gata de publicare pe toate platformele majore. Procesul nostru e simplu: <strong className="text-gray-900">tu trimiți materialele video — noi livrăm clipurile editate, gata de publicat</strong>. Fără complicații, fără pierdere de timp.
              </p>
              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Clapperboard, text: 'Editare video profesionistă' },
                  { icon: Film, text: 'Orice nișă, orice industrie' },
                  { icon: Smartphone, text: 'Format 9:16 optimizat' },
                  { icon: Rocket, text: 'Livrare rapidă, fără complicații' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                    <item.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
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