import React from 'react';
import { FileText, Shield, Clock, CreditCard, Users, AlertCircle, CheckCircle, Scale, Trash2, Lock } from 'lucide-react';

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
        'VISIONEDIT SRL oferă servicii profesionale de post-producție video (editare video, color grading, design de sunet, grafică, efecte vizuale) conform pachetelor disponibile pe visionedit.ro. Serviciile includ, fără a se limita la:',
        '• Montaj video dinamic și sincronizat, cu tăieturi precise pentru un flow natural și captivant',
        '• Tranziții și efecte vizuale care sporesc viralitatea videoclipului',
        '• Sound Design & Efecte Sonore ce pun în valoare conținutul',
        '• Subtitrări și texte personalizate, sincronizate cu mesajul videoclipului',
        '• Branding și elemente grafice (logo, watermark etc.) furnizate de Client',
        '• Corecție de culori și aplicare de filtre pentru un aspect vizual echilibrat',
        '• Format vertical 9:16, optimizat pentru TikTok, Instagram Reels, YouTube Shorts',
        '• Animații simple și efecte grafice (emoji-uri animate, stickere, texte dinamice)',
        'Serviciile sunt limitate la cele descrise în oferta de preț acceptată. Orice serviciu suplimentar se consideră proiect nou și se tarifează separat.'
      ]
    },
    {
      icon: Clock,
      title: '2. Durata colaborării și termene de livrare',
      content: [
        '2.1. Colaborarea intră în vigoare la data semnării contractului și este valabilă până la finalizarea integrală a serviciilor și plăților, sau pe durata convenită în contract.',
        '',
        '2.2. Termenele de livrare încep să curgă DOAR după îndeplinirea cumulativă a tuturor condițiilor:',
        '• Semnarea contractului de ambele părți',
        '• Confirmarea plății avansului',
        '• Furnizarea TUTUROR materialelor sursă de către Client (video, audio, text, instrucțiuni)',
        '',
        '2.3. Termenul de livrare este flexibil și comunicat în prealabil de VISIONEDIT SRL. Dacă Clientul întârzie furnizarea materialelor, termenul se decalează automat cu numărul de zile de întârziere — fără a constitui o neîndeplinire din partea VISIONEDIT SRL.',
        '',
        '2.4. Materialele finale sunt livrate prin link securizat (Google Drive, WeTransfer sau similar), în formatul specificat de Client.'
      ]
    },
    {
      icon: CreditCard,
      title: '3. Prețuri și modalități de plată',
      content: [
        '3.1. VISIONEDIT SRL aplică o politică de plată structurată, în funcție de tipul colaborării:',
        '• Varianta A — 100% upfront: plată integrală înainte de începerea lucrărilor. Recomandat pentru proiecte punctuale și colaborări noi.',
        '• Varianta B — 50% + 50%: avans 50% înainte de start, sold 50% după livrarea materialelor finale.',
        '• Varianta C — Abonament lunar prepaid: valoarea lunară se achită înainte de începerea lucrărilor pentru luna respectivă.',
        '',
        '3.2. Modalitatea de plată este selectată de VISIONEDIT SRL în urma discuției cu Clientul și comunicată înainte de semnarea contractului. Clientul confirmă varianta agreată prin semnătură.',
        '',
        '3.3. VISIONEDIT SRL nu începe nicio lucrare înainte de confirmarea plății.',
        '',
        '3.4. Toate plățile se efectuează prin transfer bancar. Factura fiscală este emisă conform legislației române în vigoare.',
        '',
        '3.5. Penalități de întârziere: în caz de neplată la scadență, Clientul datorează 0,5% pe zi din suma restantă. VISIONEDIT SRL poate suspenda lucrările până la achitarea integrală.'
      ]
    },
    {
      icon: CheckCircle,
      title: '4. Revizii și modificări',
      content: [
        '4.1. Fiecare videoclip include o (1) rundă de revizii gratuite, cu condiția ca feedback-ul să fie transmis în termen de 48 de ore de la livrarea versiunii inițiale.',
        '',
        '4.2. Prin revizie se înțelege o rundă unică de feedback transmis INTEGRAL, într-un singur mesaj. Feedback-ul fragmentat sau transmis în mai multe etape se consideră revizii separate.',
        '',
        '4.3. Revizii suplimentare:',
        '• Revizie simplă: 30–50 RON / video',
        '• Revizie orară (modificări complexe): 50–100 RON / oră',
        '• Revizii solicitate după termenul de 48h: tarif suplimentar',
        '• Modificări care schimbă conceptul inițial sau adaugă materiale noi: proiect nou, tarif separat',
        '',
        '4.4. Nicio lucrare suplimentară nu se execută fără aprobarea scrisă prealabilă a Clientului (email sau mesaj scris).'
      ]
    },
    {
      icon: Shield,
      title: '5. Drepturi de autor și răspundere',
      content: [
        '5.1. La data plății integrale, VISIONEDIT SRL cedează Clientului toate drepturile patrimoniale de autor asupra materialului video final editat. Cesiunea este totală, exclusivă, permanentă și nelimitată teritorial.',
        '',
        '5.2. Clientul declară pe propria răspundere că deține dreptul legal de utilizare pentru toate elementele furnizate (video, audio, muzică, fonturi, imagini, grafică).',
        '',
        '5.3. Clientul își asumă integral răspunderea pentru orice litigiu rezultat din:',
        '• Încălcarea drepturilor de autor sau a drepturilor conexe',
        '• Conținut ilegal, fals sau dăunător transmis prin materialul editat',
        '• Încălcarea legislației GDPR prin conținutul materialelor',
        '',
        '5.4. VISIONEDIT SRL nu răspunde legal pentru conținutul, veridicitatea sau legalitatea mesajului transmis de Client prin materialul editat.'
      ]
    },
    {
      icon: Users,
      title: '6. Confidențialitate și utilizarea materialelor',
      content: [
        '6.1. Ambele părți se obligă să păstreze confidențialitatea tuturor datelor, informațiilor și materialelor la care au acces pe durata colaborării.',
        '',
        '6.2. VISIONEDIT SRL nu va utiliza materialele editate în scop de portofoliu, promovare online sau social media fără acordul scris prealabil al Clientului.',
        '',
        '6.3. VISIONEDIT SRL este un prestator independent. Contractul nu conferă Clientului exclusivitate — VISIONEDIT SRL poate lucra simultan cu orice alți clienți, inclusiv din același domeniu de activitate. Dacă Clientul dorește exclusivitate, aceasta se negociază separat printr-un Act Adițional, cu compensație financiară.'
      ]
    },
    {
      icon: Trash2,
      title: '7. Stocarea și ștergerea materialelor',
      content: [
        '7.1. VISIONEDIT SRL nu are obligația de a stoca pe termen nelimitat materialele video. Politica de retenție:',
        '• Materiale raw primite de la Client: pot fi șterse imediat după livrarea finală',
        '• Fișiere finale editate: păstrate maximum 30 de zile de la confirmarea livrării, apoi șterse definitiv',
        '• Proiecte de editare (.prproj, .aep, .resolve etc.): pot fi șterse oricând după livrare',
        '',
        '7.2. Clientul este singurul responsabil pentru arhivarea fișierelor finale. VISIONEDIT SRL recomandă descărcarea tuturor materialelor în cel mult 30 de zile de la primirea link-ului.',
        '',
        '7.3. Re-livrarea materialelor după expirarea celor 30 de zile poate fi condiționată de o taxă administrativă suplimentară.'
      ]
    },
    {
      icon: Lock,
      title: '8. Prelucrarea datelor cu caracter personal (GDPR)',
      content: [
        '8.1. VISIONEDIT SRL prelucrează datele Clientului exclusiv în scopul executării contractului, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și Legea nr. 190/2018.',
        '',
        '8.2. Datele prelucrate includ: denumire/nume, adresă, CUI/CNP, date de contact, IBAN.',
        '',
        '8.3. Datele nu sunt transferate sau vândute unor terți. Datele fiscale și contractuale sunt păstrate conform legii (minimum 5 ani, facturile minimum 10 ani). Clientul beneficiază de toate drepturile GDPR: acces, rectificare, ștergere, portabilitate și dreptul de a se plânge la ANSPDCP.'
      ]
    },
    {
      icon: AlertCircle,
      title: '9. Modificări ale termenilor și reziliere',
      content: [
        '9.1. Orice modificare a condițiilor colaborării se face exclusiv în scris, prin Act Adițional semnat de ambele părți.',
        '',
        '9.2. Reziliere unilaterală: oricare dintre părți poate încheia colaborarea cu un preaviz scris de minimum 10 zile calendaristice, fără acordul celeilalte părți.',
        '',
        '9.3. VISIONEDIT SRL își rezervă dreptul de a rezilia contractul din proprie inițiativă, fără justificare, cu 7 zile preaviz scris, în situații de incompatibilitate profesională (comunicare deficitară, comportament neprofesional, nerespectarea repetată a termenelor etc.).',
        '',
        '9.4. În caz de neplată: VISIONEDIT SRL poate suspenda imediat lucrările și rezilia contractul fără preaviz, reținând avansul. Materialele parțiale sau finale nu se livrează.',
        '',
        '9.5. La reziliere, VISIONEDIT SRL reține contravaloarea muncii executate și returnează suma aferentă serviciilor neprestate.'
      ]
    },
    {
      icon: Scale,
      title: '10. Soluționarea litigiilor și dispoziții finale',
      content: [
        '10.1. Orice neînțelegere se soluționează în primul rând pe cale amiabilă, în termen de 30 de zile.',
        '',
        '10.2. Dacă nu se ajunge la o soluție, litigiile vor fi supuse instanțelor judecătorești competente de la sediul VISIONEDIT SRL, conform legii române.',
        '',
        '10.3. Prezentul document reprezintă termenii și condițiile de colaborare cu VISIONEDIT SRL. Semnarea contractului implică acceptarea integrală a acestor termeni.',
        '',
        '10.4. Contractul complet, cu toate clauzele detaliate și Anexa 1 (oferta de preț), este transmis Clientului înainte de începerea colaborării.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Află termenii și condițiile de colaborare cu VISIONEDIT SRL: livrare, prețuri, revizii,
            confidențialitate și alte detalii legate de serviciile noastre de editare video profesională.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-6 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Condiții și detalii colaborare pentru editare video
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La VISIONEDIT SRL creăm și edităm videoclipuri scurte, captivante și eficiente pentru antreprenori locali,
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
