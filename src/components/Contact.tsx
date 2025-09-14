import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ChevronDown, Check, Star, Zap, X, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    pachet: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const packages = [
    {
      id: 'none',
      name: '-- Nu am nevoie de pachet --',
      category: 'Altele',
      price: '',
      description: ''
    },
    {
      id: 'Start Smart',
      name: 'Start Smart',
      category: 'Editare cu materialele tale',
      price: '180 lei/video',
      description: '1-5 videoclipuri pe lună',
      popular: false
    },
    {
      id: 'Creștere Accelerată',
      name: 'Creștere Accelerată',
      category: 'Editare cu materialele tale',
      price: '140 lei/video',
      description: '6-12 videoclipuri pe lună',
      popular: true
    },
    {
      id: 'Vizibilitate Max',
      name: 'Vizibilitate Max',
      category: 'Editare cu materialele tale',
      price: '120 lei/video',
      description: '13-24+ videoclipuri pe lună',
      popular: false
    },
    {
      id: 'Start Smart Complet',
      name: 'Start Smart Complet',
      category: 'Pachete complete cu voiceover, script și materiale stock',
      price: '250-325 lei/video',
      description: '1-5 videoclipuri pe lună',
      popular: false
    },
    {
      id: 'Creștere Accelerată Complet',
      name: 'Creștere Accelerată Complet',
      category: 'Pachete complete cu voiceover, script și materiale stock',
      price: '225-300 lei/video',
      description: '6-12 videoclipuri pe lună',
      popular: true
    },
    {
      id: 'Vizibilitate Max Complet',
      name: 'Vizibilitate Max Complet',
      category: 'Pachete complete cu voiceover, script și materiale stock',
      price: '200-275 lei/video',
      description: '13-24+ videoclipuri pe lună',
      popular: false
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePackageSelect = (packageId: string) => {
    setFormData({
      ...formData,
      pachet: packageId
    });
    setIsDropdownOpen(false);
  };

  const selectedPackage = packages.find(pkg => pkg.id === formData.pachet);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/contact@visionedit.ro', {
      method: 'POST',
      body: formData
    }).catch(error => {
      console.log('Form submitted successfully');
    });

    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        website: '',
        pachet: '',
        message: ''
      });
    }, 2000);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleContactFormScroll = () => {
    const contactForm = document.querySelector('.contact__form') as HTMLElement | null;
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
          nameInputRef.current.style.transform = 'scale(1.02)';
          setTimeout(() => {
            if (nameInputRef.current) nameInputRef.current.style.transform = 'scale(1)';
          }, 200);
        }
      }, 650);
    }
  };

  const groupedPackages = packages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) {
      acc[pkg.category] = [];
    }
    acc[pkg.category].push(pkg);
    return acc;
  }, {} as Record<string, typeof packages>);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Confirmation Overlay */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in fade-in duration-300">
            <div className="text-center relative">
              <button
                onClick={closeConfirmation}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Închide mesajul"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mesaj Trimis cu Succes!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mulțumim pentru mesajul tău! Am primit cererea ta și îți vom răspunde în cel mai scurt timp posibil.
              </p>
              <button
                onClick={closeConfirmation}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Perfect, Mulțumesc!
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            Contactează-ne!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem gata să transformăm ideile tale în videoclipuri care atrag și convertesc.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side with Map and CTA */}
          <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1140727925717!2d26.12335581568054!3d44.432758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff7c9c96b83f%3A0x0!2sBucurești%2C+România!5e0!3m2!1sro!2sro!4v1716125954280!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Locația VisionEdit"
            ></iframe>
            <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-4">Gata să începem?</h4>
                <button
                  onClick={handleContactFormScroll}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-200 shadow-lg"
                >
                  Contactează-ne
                </button>
              </div>
            </div>
          </div>

          {/* Right Side with Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-white/50 contact__form">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Să Începem Proiectul!</h3>
            </div>
            <form
              action="https://formsubmit.co/contact@visionedit.ro"
              method="POST"
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://visionedit.ro/" />
              <input type="hidden" name="_subject" value="Mesaj nou de pe VisionEdit.ro" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume *
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Numele tău complet"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+40 xxx xxx xxx"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemplu.ro"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="www.site-ul-tau.ro"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mesajul Tău *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrie-ne proiectul tău..."
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold py-5 rounded-xl"
              >
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
