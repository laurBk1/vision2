import React from 'react';
import { FileText, Shield, Clock, CreditCard, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react';

const Terms = () => {
  // Forțăm scroll la top când componenta se montează
  React.useEffect(() => {
    // Scroll forțat la top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Și încă o dată după un mic delay
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: '1. Obiectul serviciilor',
      content: [
        'VisionEdit oferă servicii profesionale de editare video care se încadrează în pachetele menționate pe site, adaptate nevoilor Clientului. Serviciile includ, fără a se limita la:',
        '• Tranziții și efecte vizuale care captează atenția și sporesc viralitatea videoclipului',
        '• Montaj video dinamic și sincronizat, cu tăieturi precise pentru un flow natural și captivant',
        '• Sound design și efecte audio ce pun în valoare conținutul',
        '• Subtitrare și texte personalizate, sincronizate cu mesajul videoclipului',
        '• Branding și elemente grafice (logo, watermark etc.) furnizate de Client',
        '• Corecție de culori și aplicare de filtre pentru un aspect vizual echilibrat',
        '• Stabilizare video și blur selectiv pe zonele indicate de Client',
        '• Format vertical 9:16, optimizat pentru TikTok, Instagram Reels, YouTube Shorts și alte platforme sociale',
        '• Animații simple și efecte grafice precum emoji-uri animate, stickere și texte dinamice',
        'Toate serviciile sunt prestate conform specificațiilor și instrucțiunilor primite de la Client.'
      ]
    },
    {
      icon: Clock,
      title: '2. Durata colaborării',
      content: [
        'Colaborarea începe odată cu acceptarea ofertei și este valabilă până la finalizarea serviciilor contractate. Durata poate fi extinsă prin acord scris între părți.'
      ]
    },
    {
      icon: CreditCard,
      title: '3. Plata și facturare',
      content: [
        '3.1. Prețuri și plată:',
        '• Avans 50% la început, 50% la livrare',
        '• Prețurile pot fi ajustate pentru cerințe speciale (comunicate în avans)',
        '• În faza pilot, colaborarea se bazează pe acord scris (email/mesaj). Facturile oficiale vor fi emise după înregistrarea juridică.',
        '',
        '3.2. Pentru clienții noi, se solicită un avans de 50% înainte de începerea proiectului. Diferența de 50% se achită înainte de livrarea finală a materialelor. Prestatorul nu începe proiectul fără confirmarea plății avansului.',
        '',
        '3.3. Colaborare (Fază Pilot): VisionEdit este în faza de testare, ajustând serviciile la cerințele pieței. Prețurile vor fi adaptate progresiv în funcție de volum, complexitate și feedback.',
        '',
        'Documente fiscale: În această etapă pilot, nu emitem facturi/chitanțe oficiale (PFA/SRL), deoarece înregistrarea juridică este în curs de finalizare. Colaborarea se bazează pe acord verbal/scris (email/mesaj), iar clientul acceptă explicit această condiție temporară.',
        '',
        'Ne angajăm să stabilim cadrul legal în cel mai scurt timp și să oferim servicii de calitate.',
        '',
        '3.4. Modalitățile de plată și termenele pot fi adaptate pentru colaborările ulterioare, pe bază de încredere reciprocă.'
      ]
    },
    {
      icon: Clock,
      title: '4. Termenele și modalitatea de livrare',
      content: [
        '4.1. Termenul standard de livrare este între câteva ore și până la 3 zile lucrătoare per videoclip, în funcție de complexitatea și volumul proiectului. Termenele pot fi ajustate în funcție de acordul stabilit anterior cu Clientul.',
        '',
        '4.2. Termenele pot suferi modificări din cauza unor situații neprevăzute (probleme tehnice, comunicare întârziată, lipsa materialelor, forță majoră etc.).',
        '',
        '4.3. Clientul trebuie să furnizeze toate materialele necesare (video, audio, text, indicații) într-un termen rezonabil, pentru ca prestatorul să respecte termenele convenite.',
        '',
        '4.4. Materialele finale vor fi livrate prin link securizat (Google Drive, WeTransfer sau platformă similară), în format optimizat pentru rețelele sociale sau conform specificațiilor Clientului.'
      ]
    },
    {
      icon: CheckCircle,
      title: '5. Revizii și modificări',
      content: [
        '5.1. Fiecare proiect include o revizuire gratuită, valabilă în primele 48 de ore după livrarea inițială.',
        '',
        '5.2. Revizii suplimentare sau modificări cerute după acest interval sau care depășesc revizia gratuită vor fi tarifate între 30 și 50 lei per videoclip, în funcție de complexitate.',
        '',
        '5.3. Prestatorul își rezervă dreptul de a refuza modificările excesive sau care depășesc acordul inițial.'
      ]
    },
    {
      icon: Shield,
      title: '6. Drepturi și responsabilități asupra materialelor',
      content: [
        '6.1. Clientul garantează că deține toate drepturile asupra materialelor trimise spre editare sau că are permisiunea legală de a le utiliza.',
        '',
        '6.2. Clientul este responsabil pentru orice litigiu apărut din cauza utilizării neautorizate a materialelor furnizate.',
        '',
        '6.3. VisionEdit nu este responsabilă pentru conținutul furnizat de client și nu are obligația de a verifica legalitatea acestuia. Clientul își asumă întreaga responsabilitate pentru drepturile de utilizare și distribuție ale materialelor transmise.',
        '',
        '6.4. Ne rezervăm dreptul de a verifica veridicitatea informațiilor furnizate de client, atunci când este necesar, pentru a proteja interesele ambelor părți și pentru a preveni eventuale încălcări legale.'
      ]
    },
    {
      icon: Users,
      title: '7. Confidențialitate și utilizarea materialelor',
      content: [
        '7.1. Materialele realizate nu vor fi folosite în portofoliul sau scopuri de promovare fără acordul scris al Clientului.',
        '',
        '7.2. Toate drepturile asupra materialelor editate revin exclusiv Clientului.'
      ]
    },
    {
      icon: AlertCircle,
      title: '8. Modificări ale termenilor și reziliere',
      content: [
        '8.1. Orice modificare a condițiilor colaborării se face în scris, cu acordul ambelor părți.',
        '',
        '8.2. Oricare dintre părți poate încheia colaborarea cu un preaviz de 10 zile calendaristice.',
        '',
        '8.3. În caz de neplată, VisionEdit poate suspenda livrarea materialelor sau întrerupe colaborarea.'
      ]
    },
    {
      icon: Scale,
      title: '9. Soluționarea litigiilor',
      content: [
        'Neînțelegerile vor fi soluționate pe cale amiabilă. Dacă acest lucru nu este posibil, litigiile vor fi judecate de instanțele competente din România.'
      ]
    },
    {
      icon: FileText,
      title: '10. Dispoziții finale',
      content: [
        'Acest document reprezintă termenii și condițiile colaborării între Client și VisionEdit. Continuarea colaborării implică acceptarea integrală a acestor termeni.'
      ]
    }
  ];

  const handleContactClick = () => {
    // Navigăm direct la secțiunea contact
    window.location.hash = '#contact';
    window.location.reload();
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Află termenii și condițiile de colaborare cu VisionEdit: livrare, prețuri, revizii, 
            confidențialitate și alte detalii legate de serviciile noastre de editare video profesională.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-6 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Condiții și detalii colaborare pentru editare video
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La VisionEdit creăm și edităm videoclipuri scurte, captivante și eficiente pentru antreprenori locali, 
            afaceri mici și mijlocii, influenceri, prestatori de servicii, agenții imobiliare și creatori de conținut. 
            Indiferent de nișa ta sau platforma preferată — YouTube Shorts, Instagram Reels, TikTok sau altele — 
            transformăm ideile tale în mesaje vizuale care captează atenția, construiesc conexiuni autentice și aduc clienți noi.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Fiecare proiect este tratat cu profesionalism, atenție la detalii și adaptat obiectivelor tale, 
            astfel încât să obții rezultate reale și relevante pentru creșterea afacerii tale în mediul online.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className={`text-gray-700 leading-relaxed ${
                    paragraph.startsWith('•') ? 'ml-4' : ''
                  } ${paragraph === '' ? 'h-2' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Terms;