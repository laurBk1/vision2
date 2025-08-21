import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Popescu',
      role: 'Director Marketing',
      company: 'TechFlow Solutions',
      content: 'VisionEdit a transformat videoclipul de lansare al produsului nostru dincolo de așteptări. Atenția la detalii și viziunea creativă au dat viață poveștii brandului nostru în mod frumos.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Alexandru Petrescu',
      role: 'Fotograf',
      company: 'Studio Creative',
      content: 'Serviciile sunt adaptate perfect nevoilor noastre și comunicarea a fost impecabilă. Recomand cu încredere pentru profesionalism și rezultate de calitate.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maria Dumitrescu',
      role: 'Antreprenoare',
      company: 'Beauty Studio',
      content: 'Echipa oferă un serviciu profesional care aduce valoare reală pentru orice tip de proiect video. Colaborarea a fost ușoară și rezultatele au depășit așteptările.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-blue-400 font-semibold text-base md:text-lg tracking-wide">
            De ce ne aleg clienții noștri?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 md:mb-6 text-shadow">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Nu e vorba doar despre videoclipuri, ci despre experiențe și rezultate.
            Iată ce spun clienții VisionEdit despre colaborarea cu noi:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4 border-2 border-white/20"
                />
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm md:text-base text-blue-300 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-blue-400 absolute -top-2 -left-2 opacity-50" />
                <p className="text-gray-100 leading-relaxed pl-6 font-medium text-sm md:text-base">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;