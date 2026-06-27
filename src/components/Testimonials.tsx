import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function TestimonialCard({ testimonial, delay }) {
  const { ref, visible } = useInView(0.12);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(35px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-colors duration-300 border border-white/20 shadow-xl"
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-center mr-4 border-2 border-white/30 flex-shrink-0"
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
  );
}

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Andrei Popescu',
      role: 'Director Marketing',
      company: 'TechFlow Solutions',
      content: 'VisionEdit a transformat videoclipul de lansare al produsului nostru dincolo de așteptări. Atenția la detalii și viziunea creativă au dat viață poveștii brandului nostru în mod frumos.',
      rating: 5,
      image: '/testimonial-1.jpg'
    },
    {
      name: 'Ana Petrescu',
      role: 'Fotografă',
      company: 'Studio Creative',
      content: 'Serviciile sunt adaptate perfect nevoilor noastre și comunicarea a fost impecabilă. Recomand cu încredere pentru profesionalism și rezultate de calitate.',
      rating: 5,
      image: '/testimonial-2.jpg'
    },
    {
      name: 'Mihai Dumitrescu',
      role: 'Antreprenor',
      company: 'Beauty Studio',
      content: 'Echipa oferă un serviciu profesional care aduce valoare reală pentru orice tip de proiect video. Colaborarea a fost ușoară și rezultatele au depășit așteptările.',
      rating: 5,
      image: '/testimonial-3.jpg'
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
            Ce spun clienții noștri
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Nu e vorba doar despre videoclipuri, ci despre experiențe și rezultate.
            Iată ce spun clienții VisionEdit despre colaborarea cu noi:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} delay={(index % 3) * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;