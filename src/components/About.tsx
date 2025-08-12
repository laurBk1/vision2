import React from 'react';
import { Award, Clock, Users, Zap, Video, Target, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: 'Ani Experiență', value: '3+' },
    { icon: Users, label: 'Clienți Mulțumiți', value: '150+' },
    { icon: Clock, label: 'Proiecte Finalizate', value: '1345+' },
    { icon: Zap, label: 'Ore Editare', value: '3000+' }
  ];

  const services = [
    {
      icon: Video,
      title: 'Editare Video Profesionistă',
      description: 'La VisionEdit, suntem experți în a transforma materialele tale brute în videoclipuri scurte, captivante și de impact, perfect optimizate pentru platformele sociale. Misiunea noastră este să te ajutăm să captezi rapid atenția publicului, să crești engagement-ul și să îți transformi mesajul într-un succes viral.'
    },
    {
      icon: Target,
      title: 'Edităm pentru Orice Nișă',
      description: 'Indiferent de domeniul tău – de la servicii și comerț, până la beauty, educație, sănătate, evenimente sau imobiliare – avem experiență extinsă. Lucrăm alături de antreprenori, afaceri mici și mijlocii, influenceri, prestatori de servicii și creatori de conținut pentru a crea materiale video care vorbesc direct publicului tău țintă.'
    },
    {
      icon: Globe,
      title: 'Conținut Vertical, Optimizat Global',
      description: 'Suntem specializați în formatul vertical 9:16, ideal pentru platforme precum TikTok, Instagram Reels și YouTube Shorts. Ne asigurăm că videoclipurile tale sunt nu doar estetice, ci și perfect adaptate pentru a fi gata de publicare oriunde, maximizând vizibilitatea și impactul.'
    },
    {
      icon: CheckCircle,
      title: 'Proces Simplificat, Rezultate Excepționale',
      description: 'Ne dedicăm să-ți oferim servicii de editare video rapide și profesionale, susținute de o comunicare clară și constantă. De la primele discuții până la livrarea finală, ne ocupăm de fiecare detaliu pentru a-ți oferi un conținut video care face diferența și aduce rezultatele dorite.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-sm md:text-base tracking-wide px-4 py-2 rounded-full mb-4">
              🚀 Despre VisionEdit Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-green-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              Experți în Video Marketing de Succes
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            La VisionEdit creăm și edităm videoclipuri scurte, captivante și eficiente pentru antreprenori locali, 
            afaceri mici și mijlocii, influenceri, prestatori de servicii, agenții imobiliare și creatori de conținut. 
            Indiferent de nișa ta sau platforma preferată — YouTube Shorts, Instagram Reels, TikTok sau altele — 
            transformăm ideile tale în mesaje vizuale care captează atenția, construiesc conexiuni autentice și aduc clienți noi.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-20">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spațiu de lucru editare video"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 rounded-xl p-4 md:p-6 text-white shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-white">1345+</div>
              <div className="text-xs md:text-sm text-blue-100 font-medium">Proiecte Finalizate</div>
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
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
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
              <div className="text-xs md:text-sm text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-shadow">
              Concurența ta se folosește deja de video marketing ca soluție de promovare. Tu de ce mai aștepți?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 font-medium">
              Contactează-ne astăzi și du-ți afacerea la următorul nivel!<br />
              Împreună, creăm videoclipuri care atrag clienți și aduc rezultate reale.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              Contactează-ne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;