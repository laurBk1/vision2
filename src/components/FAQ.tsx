import React, { useState } from 'react';
import { HelpCircle, CreditCard, Clock, RefreshCw, Package, Video, Shield, Users, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    {
      icon: HelpCircle,
      title: 'Proces și Colaborare',
      faqs: [
        {
          q: 'Cum decurge procesul de colaborare cu VisionEdit?',
          a: 'Fluxul nostru de lucru este simplificat și optimizat pentru colaborarea la distanță (100% de la distanță). Procesul include patru etape clare: consultanța inițială, semnarea acordului contractual (însoțită de achitarea avansului), transmiterea asset-urilor sursă și, în final, livrarea conținutului editat prin link securizat, finalizat pentru distribuție imediată.'
        },
        {
          q: 'Lucrați cu clienți din toată România?',
          a: 'Da, operăm 100% de la distanță. Indiferent de locația dumneavoastră, primim materialele online și livrăm digital, rapid și eficient, oriunde în România.'
        },
        {
          q: 'Când demarați execuția proiectului meu?',
          a: 'Demarăm execuția proiectului exclusiv după îndeplinirea cumulativă a trei condiții: semnarea contractului de ambele părți, confirmarea plății avansului și transmiterea integrală a materialelor sursă. Nicio lucrare nu este inițiată înainte de confirmarea plății.'
        },
        {
          q: 'Ce materiale trebuie să vă transmit?',
          a: 'Pentru a asigura un flux de lucru eficient, preluăm asset-urile brute (filmările sursă) și le procesăm integral, eliminând efortul tehnic din partea dumneavoastră. Puteți transmite suplimentar elemente de identitate vizuală: logo, watermark, fonturi, grafică de brand. Dacă optați pentru un pachet complet, nu este necesară furnizarea niciunui material — ne ocupăm de întregul proces, de la script până la livrarea finală.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Prețuri și Plăți',
      faqs: [
        {
          q: 'Cât costă editarea video la VisionEdit?',
          a: 'Tarifele noastre pornesc de la 185 lei/video (pachet Vizibilitate Max — 13+ videoclipuri/lună) și ajung la 249 lei/video (pachet Start Smart — 1-5 videoclipuri/lună), pentru proiectele în care furnizați materialele sursă. Pachetele Complete (cu script, voiceover AI, avatar UGC și materiale stock incluse) pornesc de la 240 lei/video. Contactați-ne pentru o ofertă personalizată.'
        },
        {
          q: 'Cum se realizează plata?',
          a: 'Aplicăm o politică de plată structurată, cu trei variante disponibile în funcție de tipul colaborării:\n• Varianta A: achitare integrală anterior demarării lucrărilor (recomandată pentru proiecte punctuale și colaborări noi).\n• Varianta B: avans 50% înainte de start, sold 50% după livrarea materialelor finale.\n• Varianta C: valoarea lunară se achită anterior începerii lucrărilor pentru luna respectivă (abonament prepaid).\n\nVarianta agreată se stabilește în urma discuției inițiale și se confirmă prin semnarea contractului. Toate plățile se efectuează prin transfer bancar, cu emitere de factură fiscală.'
        },
        {
          q: 'Pot achiziționa serviciile pe firmă și primi factură fiscală?',
          a: 'Da, emitem factură fiscală pentru toate serviciile prestate, conform legislației române în vigoare. Transmiteți datele de identificare fiscală la momentul semnării contractului, iar factura va fi emisă pe CUI-ul companiei dumneavoastră.'
        },
        {
          q: 'Prețurile afișate includ TVA?',
          a: 'Prețurile afișate sunt finale. VisionEdit SRL nu este plătitor de TVA, prin urmare nu se adaugă nicio taxă suplimentară la sumele prezentate. Plătiți exact suma afișată — fără surprize, fără costuri ascunse.'
        },
        {
          q: 'Pot achiziționa un volum mai mare de videoclipuri și să le solicit etapizat?',
          a: 'Da, oferim flexibilitate în planificarea livrărilor. Stabilim împreună un calendar adaptat ritmului dumneavoastră de publicare. Contactați-ne pe WhatsApp sau email pentru a identifica soluția optimă.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Termene și Livrare',
      faqs: [
        {
          q: 'Cât durează livrarea unui videoclip?',
          a: 'Termenul de livrare este stabilit în prealabil și comunicat explicit înainte de demararea proiectului. În cazul în care transmiterea materialelor sursă întârzie, termenul se decalează proporțional. Pentru proiecte cu termen critic, punem la dispoziție serviciul Fast Track — livrare în aceeași zi sau în maximum 24 de ore.'
        },
        {
          q: 'Ce rezoluție și format primesc la final?',
          a: 'Livrăm conținut video în format vertical 9:16, optimizat pentru TikTok, Instagram Reels și YouTube Shorts, la rezoluție HD/Full HD, finalizat pentru distribuție imediată pe orice platformă, fără procesare suplimentară din partea dumneavoastră.'
        },
        {
          q: 'Cât timp sunt stocate materialele după livrare?',
          a: 'Materialele sursă primite pot fi șterse imediat după finalizarea livrării. Fișierele finale editate sunt stocate maximum 30 de zile de la confirmare, după care sunt eliminate definitiv. Recomandăm descărcarea integrală a materialelor în cel mult 30 de zile de la primirea link-ului. Re-livrarea ulterioară acestui termen poate fi condiționată de o taxă administrativă suplimentară.'
        },
        {
          q: 'Pot recepționa fișierele de proiect (.prproj, .aep etc.), nu doar exportul final?',
          a: 'Fișierele de proiect nu sunt incluse în mod standard în pachetele noastre și pot fi eliminate după livrare. Dacă necesitați accesul la acestea, vă rugăm să menționați acest aspect anterior demarării colaborării, urmând să stabilim condiții contractuale separate.'
        }
      ]
    },
    {
      icon: RefreshCw,
      title: 'Revizuiri și Modificări',
      faqs: [
        {
          q: 'Câte revizuiri sunt incluse în tarif?',
          a: 'Fiecare videoclip include o rundă de revizuiri gratuite. Feedback-ul trebuie transmis integral, într-un singur mesaj consolidat, în termen de 48 de ore de la primirea versiunii inițiale. Feedback-ul fragmentat sau transmis în etape succesive este contabilizat ca runde separate de revizuire.'
        },
        {
          q: 'Ce este inclus într-o rundă de revizuire?',
          a: 'O rundă de revizuire acoperă orice modificare de ordin editorial: înlocuirea muzicii, ajustarea efectelor vizuale, modificarea tranzițiilor, actualizarea subtitrărilor sau a elementelor grafice. Solicitările care implică schimbarea conceptului inițial sau introducerea de materiale sursă noi sunt tratate ca proiecte distincte și se tarifează separat.'
        },
        {
          q: 'Cât costă o rundă de revizuire suplimentară?',
          a: '• Revizie simplă: 30–50 lei/video;\n• Revizie complexă (modificări orare): 50–100 lei/oră;\n• Revizuiri solicitate după termenul de 48 de ore: tarif suplimentar;\n• Modificări care implică schimbarea conceptului inițial: proiect nou, tarif separat.\n\nNicio lucrare suplimentară nu este executată fără aprobarea dumneavoastră scrisă.'
        }
      ]
    },
    {
      icon: Package,
      title: 'Pachete și Servicii',
      faqs: [
        {
          q: 'Oferiți pachete complete, fără să furnizez materiale proprii?',
          a: 'Da. Pachetele noastre Complete (A-Z) acoperă întregul proces de producție: script personalizat, voiceover AI premium, avatar UGC profesional și materiale video/foto stock — fără nicio implicare din partea dumneavoastră. Tarifele pornesc de la 240 lei/video (sub 30 de secunde) sau 295 lei/video (30 secunde – 1 minut) pentru pachete de 13+ videoclipuri/lună.'
        },
        {
          q: 'Putem stabili o colaborare pe termen lung?',
          a: 'Absolut. Structura noastră de tarifare recompensează volumul: cu cât este mai mare numărul de videoclipuri lunare, cu atât tariful per unitate este mai avantajos. Pachetul Vizibilitate Max (13+ videoclipuri/lună) include cel mai competitiv tarif, un plan de producție personalizat, suport prioritar și un raport lunar de performanță cu recomandări strategice.'
        },
        {
          q: 'Muzica utilizată este licențiată și fără restricții de copyright?',
          a: 'Da, utilizăm exclusiv muzică licențiată sau royalty-free, compatibilă cu publicarea pe platformele sociale, eliminând riscul de penalizări sau demonetizare. Dacă aveți preferințe stilistice specifice, le putem integra în procesul de producție.'
        },
        {
          q: 'Vă ocupați și de distribuția și promovarea videoclipurilor?',
          a: 'Aria noastră de expertiză acoperă exclusiv producția și post-producția video. Livrăm conținut finalizat pentru distribuție, optimizat pentru algoritmii platformelor, însă strategia de promovare și publicarea efectivă rămân în responsabilitatea dumneavoastră. Putem oferi recomandări generale privind bunele practici de publicare.'
        }
      ]
    },
    {
      icon: Video,
      title: 'Avatar UGC și Personaje',
      faqs: [
        {
          q: 'Ce este avatarul UGC și cum este integrat în producție?',
          a: 'Avatarul UGC este un personaj virtual profesionist care prezintă produsul sau serviciul dumneavoastră într-un mod autentic și credibil, similar unui creator de conținut real. Această soluție este inclusă în pachetele Complete și reprezintă alternativa ideală atunci când nu doriți să apăreați în fața camerei sau nu dispuneți de resurse de filmare proprii.'
        },
        {
          q: 'Pot rezerva un avatar dedicat exclusiv brandului meu?',
          a: 'Da. Putem rezerva sau dezvolta un personaj unic pentru brandul dumneavoastră — inclusiv prin clonarea imaginii și vocii dumneavoastră, sau prin crearea unui avatar personalizat care să reprezinte identitatea vizuală a companiei. Acest serviciu este disponibil pentru colaborările de durată și implică costuri suplimentare. Contactați-ne pe WhatsApp pentru o discuție detaliată.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Confidențialitate și Drepturi',
      faqs: [
        {
          q: 'Pot consulta exemple din portofoliu anterior colaborării?',
          a: 'Din considerente de confidențialitate față de clienții noștri, nu facem public portofoliul nostru. Fiecare proiect rămâne proprietatea exclusivă a clientului și nu este utilizat în scop promoțional fără acordul scris explicit al acestuia. Calitatea serviciilor noastre este reflectată de cei 150+ clienți mulțumiți și 1.345+ proiecte finalizate.'
        },
        {
          q: 'Datele mele cu caracter personal sunt protejate?',
          a: 'Da. Prelucrăm datele dumneavoastră exclusiv în scopul executării contractului, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și Legea nr. 190/2018. Datele nu sunt transferate sau comercializate către terți. Beneficiați de toate drepturile GDPR: acces, rectificare, ștergere și portabilitate.'
        },
        {
          q: 'Cui îi aparțin drepturile asupra videoclipului final?',
          a: 'La data achitării integrale a contravalorii serviciilor, VisionEdit SRL cedează clientului toate drepturile patrimoniale de autor asupra materialului video final editat. Cesiunea este totală, exclusivă, permanentă și nelimitată teritorial — conținutul vă aparține în totalitate.'
        }
      ]
    },
    {
      icon: Phone,
      title: 'Contact și Suport',
      faqs: [
        {
          q: 'Prin ce canale vă pot contacta?',
          a: 'Ne puteți contacta prin:\n• Telefon / WhatsApp: +40 767 082 106;\n• Email: contact@visionedit.ro;\n• Formular de contact pe visionedit.ro.\n\nProgram: Luni – Vineri, 09:00 – 18:00. Răspundem în maximum 24 de ore.'
        },
        {
          q: 'Oferiți suport dedicat pe parcursul colaborării?',
          a: 'Da, comunicarea clară și transparentă reprezintă un standard al serviciilor noastre. De la consultanța inițială până la livrarea finală, asigurăm suport complet pentru fiecare etapă a proiectului. Clienții din pachetele superioare beneficiază de suport prioritar și un canal de comunicare direct dedicat.'
        }
      ]
    }
  ];

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Găsiți aici răspunsuri la cele mai frecvente întrebări despre serviciile noastre de editare video,
            tarife, termene de livrare și procesul de colaborare cu VisionEdit SRL.
          </p>
        </div>

        {/* Intro card */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-6 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Cum vă putem sprijini?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La VisionEdit, transparența și comunicarea clară sunt standarde ale fiecărei colaborări.
            Indiferent că este primul dumneavoastră proiect video sau că vizați un parteneriat de lungă durată
            pentru promovarea afacerii, suntem disponibili să răspundem oricărei întrebări anterior demarării colaborării.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Dacă nu identificați răspunsul căutat în secțiunile de mai jos, nu ezitați să ne contactați
            direct pe WhatsApp sau prin formularul de contact — răspundem în maximum 24 de ore.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 pt-1">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-3">
                {section.faqs.map((faq, faqIndex) => {
                  const key = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={faqIndex} className="border border-gray-100 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                        {isOpen
                          ? <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          : <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        }
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
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
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center border-l-6 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nu ați identificat răspunsul căutat?
          </h3>
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
        </div>

      </div>
    </section>
  );
};

export default FAQ;
