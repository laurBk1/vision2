import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from '../hooks/Reveal';
import { faqSections } from './faqData';




const copyProtectionStyle = `
  .no-copy {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const useCopyProtection = () => {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      if (e.clipboardData) e.clipboardData.setData('text/plain', '');
    };
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('a')) e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ['c', 'a', 'u'].includes(e.key)) {
        e.preventDefault();
      }
    };
    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};


const FAQ = () => {
  useCopyProtection();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // Fix Firefox: forțează repaint compositor pe position:fixed
  // Fără acest trigger, Firefox nu repaintează headerul fixed la primul render
  useEffect(() => {
    const el = document.documentElement;
    el.style.overflowY = 'scroll';
    return () => { el.style.overflowY = ''; };
  }, []);

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };


  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: copyProtectionStyle }} />
      <section className="no-copy pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Găsiți aici răspunsuri la cele mai frecvente întrebări despre serviciile noastre de editare video,
            tarife, termene de livrare și procesul de colaborare cu VisionEdit SRL.
          </p>
        </Reveal>

        {/* Intro card */}
        <Reveal direction="up" className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-[6px] border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cum vă putem sprijini?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            La VisionEdit, transparența și comunicarea clară sunt standarde ale fiecărei colaborări.
            Indiferent că este primul dumneavoastră proiect video sau că vizați un parteneriat de lungă durată
            pentru promovarea afacerii, suntem disponibili să răspundem oricărei întrebări anterior demarării colaborării.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Dacă nu identificați răspunsul căutat în secțiunile de mai jos, nu ezitați să ne contactați
            direct pe WhatsApp sau prin formularul de contact — răspundem în maximum 24 de ore.
          </p>
        </Reveal>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <Reveal key={sectionIndex} direction={sectionIndex % 2 === 0 ? 'left' : 'right'} delay={0.05} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 pt-1">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3">
                {section.faqs.map((faq, faqIndex) => {
                  const key = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={faqIndex} className="border border-gray-100 rounded-lg overflow-hidden">
                      <button
                        type="button"
                        aria-expanded={!!isOpen}
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-base font-medium text-gray-900 pr-4">{faq.q}</span>
                        {isOpen
                          ? <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          : <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        }
                      </button>
                      <div hidden={!isOpen} className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                          <div className="pt-4 space-y-2">
                            {faq.a.split('\n').map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className={`text-gray-700 leading-relaxed ${line.startsWith('•') ? 'ml-4' : ''} ${line === '' ? 'h-2' : ''}`}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA bottom */}
        <Reveal direction="up" className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center border-l-[6px] border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nu ați identificat răspunsul căutat?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactați-ne direct și vă răspundem în maximum 24 de ore. Suntem disponibili Luni – Vineri, 09:00 – 18:00.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/40767082106"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Scrieți-ne pe WhatsApp
            </a>
            <a
              href="mailto:contact@visionedit.ro"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Trimiteți Email
            </a>
          </div>
        </Reveal>

      </div>
    </section>
    </>
  );
};

export default FAQ;
