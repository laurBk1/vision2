import React, { useRef, useEffect, useState } from 'react';
import { Shield, Lock, Eye, CheckCircle, Play, Star } from 'lucide-react';

const Portfolio = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Setăm timpul la primul frame
      video.currentTime = 0.1;
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        // Forțăm afișarea primului frame
        video.currentTime = 0.1;
      };

      const handleLoadedMetadata = () => {
        // Când metadata este încărcată, setăm timpul la primul frame
        video.currentTime = 0.1;
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const confidentialityFeatures = [
    {
      icon: Shield,
      title: 'Confidențialitate Totală',
      description: 'Toate proiectele sunt tratate cu strictă confidențialitate'
    },
    {
      icon: Lock,
      title: 'Protecție Date',
      description: 'Materialele tale sunt securizate și protejate'
    },
    {
      icon: Eye,
      title: 'Discreție Profesională',
      description: 'Nu divulgăm niciodată detalii despre clienți'
    },
    {
      icon: CheckCircle,
      title: 'Încredere Reciprocă',
      description: 'Construim relații bazate pe încredere și profesionalism'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Clienți Mulțumiți' },
    { number: '1345+', label: 'Proiecte Finalizate' },
    { number: '3+', label: 'Ani Experiență' },
    { number: '100%', label: 'Confidențialitate' }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50 border-2 border-slate-300 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-slate-700 to-blue-700 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">
              Portofoliu Confidențial
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              De Ce Nu Afișăm<br className="sm:hidden" />
              <span className="block mt-1">Portofoliul Nostru?</span>
            </h2>
          <div>
  <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
    La VisionEdit, confidențialitatea și discreția sunt fundamentale în relația noastră cu clienții.
  </p>
  <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mt-4">
    Respectăm intimitatea și strategiile de business ale fiecărui client.
  </p>
</div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-20">
          {/* Video Presentation */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white/10 rounded-full p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-shadow">
                  Prezentare Personală
                </h3>
                
                <p className="text-blue-100 mb-6 md:mb-8 font-medium text-sm md:text-base leading-relaxed">
                  Află mai multe despre mine și despre pasiunea mea pentru editarea video
                </p>

                {/* Video Container - 9:16 Aspect Ratio */}
                <div className="relative mx-auto max-w-xs">
                  <div className="aspect-[9/16] bg-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster=""
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src="/portofoliu.mp4" type="video/mp4" />
                      Browserul tău nu suportă redarea video.
                    </video>
                    
                    {/* Custom Play Button Overlay */}
                    {!isPlaying && isVideoLoaded && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                        onClick={handlePlayPause}
                      >
                        <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors duration-200">
                          <Play className="h-8 w-8 text-slate-900" />
                        </div>
                      </div>
                    )}
                    
                    {/* Loading State */}
                    {!isVideoLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                        <div className="text-center text-white p-4">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                          <p className="text-sm opacity-70">
                            Se încarcă videoclipul...
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 md:p-3 animate-bounce shadow-lg">
                    <Star className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-2 md:p-3 animate-pulse shadow-lg">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confidentiality Message */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-l-6 border-blue-600">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-shadow-sm">
                Confidențialitatea Este<br className="sm:hidden" />
                <span className="block mt-1">Prioritatea Noastră</span>
              </h3>
              
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                <p>
                  <strong className="text-gray-900">Respectăm intimitatea clienților noștri.</strong> Fiecare proiect pe care îl realizăm 
                  este tratat cu strictă confidențialitate, iar materialele create rămân proprietatea exclusivă 
                  a clientului.
                </p>
                
                <p>
                  <strong className="text-gray-900">Nu afișăm lucrările fără permisiune.</strong> Multe dintre videoclipurile pe care 
                  le creăm conțin informații sensibile de business, strategii de marketing sau conținut personal. 
                  De aceea, nu le includem în portofoliul public fără acordul explicit al clientului.
                </p>
                
                <p>
                  <strong className="text-gray-900">Încrederea se construiește prin discreție.</strong> Clienții noștri apreciază faptul 
                  că pot lucra cu noi știind că proiectele lor vor rămâne confidențiale și că nu vor fi folosite 
                  în scopuri de promovare fără acordul lor.
                </p>
                
                <p>
                  <strong className="text-gray-900">Calitatea vorbește de la sine.</strong> În loc să ne bazăm pe un portofoliu public, 
                  ne concentrăm pe livrarea de rezultate excepționale pentru fiecare client în parte. 
                  Testimonialele și recomandările sunt cea mai bună dovadă a calității muncii noastre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidentiality Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {confidentialityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="bg-blue-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white mb-12 md:mb-16 shadow-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-shadow">
              Rezultatele Noastre<br className="sm:hidden" />
              <span className="block mt-1">Vorbesc de La Sine!</span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              Chiar dacă nu afișăm portofoliul public, rezultatele noastre demonstrează 
              calitatea și profesionalismul serviciilor oferite.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 text-shadow">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-shadow">
              Vrei un partener de încredere pentru<br className="sm:hidden" />
              <span className="block mt-1">proiectul tău?</span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed font-medium"> 
              Hai să vorbim! Confidențialitate 100%, rezultate clare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Discută Confidențial
              </button>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200"
              >
                Vezi Serviciile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;