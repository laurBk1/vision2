import React from 'react';
import { ArrowRight, Video, Award, Users } from 'lucide-react';

const Hero = () => {
  const handleStartProject = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    console.log('Portfolio button clicked!'); // Pentru debugging
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Portfolio section not found!');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8 text-shadow">
              Vrei mai multă vizibilitate pentru afacerea ta?
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 block mt-2"> 
                Video marketingul e soluția!
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Noi îți edităm videoclipurile scurte, dinamice și optimizate pentru Reels, TikTok, Shorts, și nu numai, exact ce ai nevoie pentru a atrage atenția și a-ți crește vânzările.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 justify-center lg:justify-start">
              <button 
                onClick={handleStartProject}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                aria-label="Începe proiectul tău video"
              >
                <span>Începe Proiectul Tău</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={handleViewPortfolio}
                className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-white/10 transform hover:scale-105"
                aria-label="Vezi portofoliul nostru"
                type="button"
              >
                <span>Vezi Portofoliul</span>
                <Video className="h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Video className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-shadow">1345+</div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">Proiecte Finalizate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-shadow">150+</div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-shadow">3+</div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">Ani Experiență</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-2xl">
              <div className="bg-slate-800 rounded-xl p-4 md:p-6">
                <div className="aspect-video bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="bg-white/10 rounded-full p-3 md:p-4">
                    <Video className="h-8 w-8 md:h-12 md:w-12 text-white" />
                  </div>
                </div>
                <h2 className="text-white font-bold mb-2 text-lg md:text-xl">
                  Editare Video Profesională
                </h2>
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  Promovează-ți afacerea eficient cu video-uri scurte, optimizate pentru Reels, TikTok și Shorts.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 md:p-3 animate-bounce shadow-lg">
              <Award className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-2 md:p-3 animate-pulse shadow-lg">
              <Users className="h-4 w-4 md:h-6 md:w-6 text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;