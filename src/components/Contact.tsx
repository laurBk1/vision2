import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ChevronDown, Check, Star, Zap, X, CheckCircle } from 'lucide-react';

type Package = {
  id: string;
  name: string;
  category: string;
  price?: string;
  description?: string;
  popular?: boolean;
};

const Contact: React.FC = () => {
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const packages: Package[] = [
    { id: 'none', name: '-- Nu am nevoie de pachet --', category: 'Altele' },
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

  // Group packages by category
  const groupedPackages: Record<string, Package[]> = packages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) acc[pkg.category] = [];
    acc[pkg.category].push(pkg);
    return acc;
  }, {} as Record<string, Package[]>);

  useEffect(() => {
    // Click outside dropdown to close
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    // Close on ESC
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePackageSelect = (packageId: string) => {
    setFormData(prev => ({ ...prev, pachet: packageId }));
    setIsDropdownOpen(false);
  };

  const selectedPackage = packages.find(pkg => pkg.id === formData.pachet);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);

    try {
      const formEl = e.target as HTMLFormElement;
      const payload = new FormData(formEl);
      // ensure pachet is included
      payload.set('pachet', formData.pachet || 'none');
      await fetch('https://formsubmit.co/contact@visionedit.ro', {
        method: 'POST',
        body: payload
      });
      // succes case handled by modal
    } catch (err) {
      console.error('Error submitting form', err);
    } finally {
      // reset form after small delay so user sees confirmation
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          website: '',
          pachet: '',
          message: ''
        });
      }, 1500);
    }
  };

  const closeConfirmation = () => setShowConfirmation(false);

  const handleContactFormScroll = () => {
    const contactForm = document.querySelector('.contact__form') as HTMLElement | null;
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // focus nume dupa scroll
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Confirmation Message Overlay */}
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mesaj Trimis cu Succes!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mulțumim pentru mesajul tău! Am primit cererea ta și îți vom răspunde în cel mai scurt timp posibil.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-900 mb-2">Ce urmează:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Verificăm cererea ta în detaliu</li>
                  <li>• Îți trimitem o ofertă personalizată</li>
                  <li>• Stabilim detaliile colaborării</li>
                  <li>• Începem proiectul tău video</li>
                </ul>
              </div>

              <div className="text-sm text-gray-500 mb-6">
                <p>Pentru urgențe, ne poți contacta direct:</p>
                <p className="font-semibold text-blue-600">
                  <a href="tel:+40767082106" className="hover:underline">+40 767 082 106</a>
                </p>
              </div>

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
          <div className="bg-gradient-to-r from-purple-50 via-white to-blue-50 border-2 border-purple-200 rounded-xl p-4 md:p-6 max-w-3xl mx-auto shadow-md mb-8">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs md:text-sm tracking-wide px-3 py-1 rounded-full mb-3">Hai să Colaborăm</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">Contactează-ne!</h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem gata să transformăm ideile tale în videoclipuri care atrag și convertesc.
            Contactează-ne astăzi pentru servicii de editare video profesionale!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Locația Noastră</h3>
            <p className="text-gray-600 mb-4">
              <a
                href="https://www.google.com/maps/place/București,+România"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                București, România
              </a>
            </p>
            {/* Mesaj pentru mobil */}
            <div className="lg:hidden bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h2 className="text-blue-700 text-base font-semibold mb-2">
                Cum lucrăm împreună?
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                La VisionEdit oferim servicii profesionale de editare video pentru clienți din toată România, indiferent de locație.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-medium mt-2">
                Lucrăm 100% remote, astfel încât să putem livra rapid și eficient, oriunde v-ați afla.
              </p>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-blue-200">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sună-ne Acum</h3>
            <p className="text-gray-600">
              <a
                href="tel:+40767082106"
                className="hover:text-green-600 transition-colors font-medium text-lg"
              >
                +40 767 082 106
              </a>
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50 hover:border-blue-200">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trimite Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:contact@visionedit.ro"
                className="hover:text-purple-600 transition-colors font-medium"
              >
                contact@visionedit.ro
              </a>
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map - Hidden on Mobile */}
          <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-xl font-semibold mb-2">Unde ne găsești?</h3>
              <p className="text-blue-100">București, România</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1140727925717!2d26.12335581568054!3d44.432758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff7c9c96b83f%3A0x0!2sBucurești%2C+România!5e0!3m2!1sro!2sro!4v1716125954280!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația VisionEdit în București"
            ></iframe>
            
            {/* Mesaj informativ sub hartă - Design Premium */}
            <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-t-4 border-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23blue%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 shadow-lg border-2 border-white/50">
                  <h4 className="text-xl font-bold text-white mb-4 text-shadow flex items-center">
                    <div className="bg-white/20 rounded-lg p-2 mr-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Cum lucrăm împreună?
                  </h4>
                  
                  <div className="space-y-4 text-white/90">
                    <p className="text-base leading-relaxed font-medium">
                      <strong className="text-white">La VisionEdit oferim servicii profesionale de editare video pentru clienți din toată România, indiferent de locație.</strong> Lucrăm 100% remote, astfel încât să putem livra rapid și eficient, oriunde v-ați afla.
                    </p>
                    
                    <p className="text-base leading-relaxed font-medium">
                      Dacă aveți nevoie de un video editat profesionist și livrat în timp util, ne puteți contacta oricând. <strong className="text-white">Răspundem prompt și suntem aici să discutăm orice idee sau proiect aveți în minte.</strong>
                    </p>
                    
                    {/* Call to Action */}
                    <div className="bg-white/10 rounded-lg p-4 mt-6 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-lg">Gata să începem?</p>
                          <p className="text-white/80 text-sm">Hai să discutăm despre proiectul tău.</p>
                        </div>
                        <button
                          onClick={handleContactFormScroll}
                          className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-200 shadow-lg"
                        >
                          Contactează-ne
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-white/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Să Începem Proiectul!
              </h3>
              <p className="text-gray-600">
                Completează formularul și îți vom răspunde în cel mai scurt timp
              </p>
            </div>
            
            <form
              action="https://formsubmit.co/contact@visionedit.ro"
              method="POST"
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              {/* Hidden fields pentru FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://visionedit.ro/" />
              <input type="hidden" name="_subject" value="Mesaj nou de pe VisionEdit.ro" />
              
              {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Numele tău complet"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                      required
                      ref={nameInputRef}
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+40 xxx xxx xxx"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email and Website Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplu.ro"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Website <span className="text-gray-400">(opțional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.site-ul-tau.ro"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection - COMPLETELY REBUILT */}
              <div className="group">
                <label htmlFor="pachet" className="block text-sm font-semibold text-gray-700 mb-2">
                  Alege Pachetul *
                </label>
                <div className="relative">
                  {/* Main Select Button */}
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300 text-left flex items-center justify-between cursor-pointer"
                  >
                    <span className={selectedPackage ? 'text-gray-900' : 'text-gray-500'}>
                      {selectedPackage ? selectedPackage.name : 'Selectează un pachet...'}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <>
                      {/* Overlay to close dropdown */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsDropdownOpen(false)}
                      ></div>
                      
                      {/* Dropdown Content */}
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                        {Object.entries(groupedPackages).map(([category, categoryPackages]) => (
                          <div key={category}>
                            {category !== 'Altele' && (
                              <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100 sticky top-0 z-10">
                                <h4 className="font-semibold text-gray-800 text-sm">{category}</h4>
                              </div>
                            )}
                            {categoryPackages.map((pkg) => (
                              <div
                                key={pkg.id}
                                onClick={() => handlePackageSelect(pkg.id)}
                                className={`w-full px-4 py-4 text-left hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer ${
                                  formData.pachet === pkg.id ? 'bg-blue-50 border-blue-200' : ''
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium text-gray-900">{pkg.name}</span>
                                      {pkg.popular && (
                                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                          <Star className="h-3 w-3 mr-1" />
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    {pkg.description && (
                                      <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                                    )}
                                    {pkg.price && (
                                      <p className="text-sm font-semibold text-blue-600 mt-1">{pkg.price}</p>
                                    )}
                                  </div>
                                  {formData.pachet === pkg.id && (
                                    <Check className="h-5 w-5 text-blue-600" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Hidden input for form submission */}
                <input type="hidden" name="pachet" value={formData.pachet} />
              </div>

              {/* Selected Package Display */}
              {selectedPackage && selectedPackage.id !== 'none' && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Pachet Selectat:</span>
                    {selectedPackage.popular && (
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 font-medium">{selectedPackage.name}</p>
                  {selectedPackage.description && (
                    <p className="text-sm text-gray-600">{selectedPackage.description}</p>
                  )}
                  {selectedPackage.price && (
                    <p className="text-sm font-semibold text-blue-600 mt-1">{selectedPackage.price}</p>
                  )}
                </div>
              )}

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mesajul Tău *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrie-ne proiectul tău, obiectivele și orice detalii importante..."
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <span className="text-lg">Trimite Mesajul</span>
                <Send className="h-6 w-6" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                * Câmpurile marcate sunt obligatorii. Îți vom răspunde în maxim 24 de ore.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">De Ce să Alegi VisionEdit?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Calitate profesională garantată',
                  'Termene de livrare rapide',
                  'O revizuire gratuită',
                  'Soluții personalizate'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end mb-6">
                <div className="bg-white/10 rounded-2xl p-4 mr-4">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-xl">Timp de Răspuns</div>
                  <div className="text-blue-300 text-lg">În 24 de ore</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Program: Luni - Vineri, 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;