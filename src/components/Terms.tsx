import React from 'react';
import { FileText, Shield, Clock, CreditCard, Users, AlertCircle, CheckCircle, Scale, Trash2, Lock, Network } from 'lucide-react';


const copyProtectionStyle = `
  .no-copy {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const useCopyProtection = () => {
  React.useEffect(() => {
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


const Terms = () => {
  useCopyProtection();

  const sections = [
    {
      icon: FileText,
      title: '1. Obiectul serviciilor',
      content: [
        'Prestatorul oferă servicii profesionale de post-producție video (editare video, color grading, design de sunet, grafică, efecte vizuale) conform pachetelor disponibile pe visionedit.ro. Serviciile includ, fără a se limita la:',
        '• Montaj video dinamic și sincronizat, cu tăieturi precise pentru un flow natural și captivant',
        '• Hook viral în primele 3 secunde — tehnici vizuale, audio și text pentru maximizarea retenției',
        '• Tranziții și efecte vizuale cinematice care sporesc viralitatea videoclipului',
        '• Sound Design & Efecte Sonore profesionale ce pun în valoare conținutul',
        '• Subtitrări și texte personalizate, sincronizate cu mesajul videoclipului',
        '• Branding și elemente grafice (logo, watermark etc.) furnizate de Client',
        '• Corecție de culori (color grading) și aplicare de filtre pentru un aspect vizual echilibrat',
        '• Format vertical 9:16, optimizat pentru TikTok, Instagram Reels, YouTube Shorts',
        '• Animații și efecte grafice creative (emoji-uri animate, stickere, texte dinamice)',
        '• Copertă captivantă (thumbnail) — design custom care oprește scroll-ul și crește CTR-ul',
        '• Transformare conținut lung în Shorts — extragerea celor mai bune momente din podcasturi, vloguri sau live-uri',
        '• Efecte de zoom dinamice pentru evidențierea detaliilor esențiale',
        '• Stabilizare video și blur selectiv pentru un aspect fluid și profesionist',
        '• Crop & Reframe — adaptare conținut landscape la format vertical, cu reîncadrare dinamică',
        '• Green Screen & Keying — eliminare fundal și integrare în scene dinamice sau branded',
        '• Optimizare pentru algoritmi — conținut adaptat pentru TikTok, Instagram Reels și YouTube Shorts',
        '• Livrare rapidă — serviciu express cu livrare în 24h pentru proiecte urgente',
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
        '2.3. Termenul de livrare este flexibil și comunicat în prealabil de Prestator. Dacă Clientul întârzie furnizarea materialelor, termenul se decalează automat cu numărul de zile de întârziere — fără a constitui o neîndeplinire din partea Prestatorului.',
        '',
        '2.4. Materialele finale sunt livrate prin link securizat (Google Drive, WeTransfer sau similar), în formatul specificat de Client.'
      ]
    },
    {
      icon: CreditCard,
      title: '3. Prețuri și modalități de plată',
      content: [
        '3.1. Prestatorul aplică o politică de plată structurată, în funcție de tipul colaborării:',
        '• Varianta A — 100% upfront: plată integrală înainte de începerea lucrărilor. Recomandat pentru proiecte punctuale și colaborări noi.',
        '• Varianta B — 50% + 50%: avans 50% înainte de start, sold 50% după livrarea materialelor finale.',
        '• Varianta C — Abonament lunar prepaid: valoarea lunară se achită înainte de începerea lucrărilor pentru luna respectivă.',
        '',
        '3.2. Modalitatea de plată este selectată de Prestator în urma discuției cu Clientul și comunicată înainte de semnarea contractului. Clientul confirmă varianta agreată prin semnătură.',
        '',
        '3.3. Nu începem nicio lucrare înainte de confirmarea plății.',
        '',
        '3.4. Toate plățile se efectuează prin transfer bancar. Factura fiscală este emisă conform legislației române în vigoare.',
        '',
        '3.5. Penalități de întârziere: în caz de neplată la scadență, Clientul datorează 0,5% pe zi din suma restantă. Prestatorul poate suspenda lucrările până la achitarea integrală.'
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
        '5.1. La data plății integrale, Prestatorul cedează Clientului toate drepturile patrimoniale de autor asupra materialului video final editat. Cesiunea este totală, exclusivă, permanentă și nelimitată teritorial.',
        '',
        '5.2. Clientul declară pe propria răspundere că deține dreptul legal de utilizare pentru toate elementele furnizate (video, audio, muzică, fonturi, imagini, grafică).',
        '',
        '5.3. Clientul își asumă integral răspunderea pentru orice litigiu rezultat din:',
        '• Încălcarea drepturilor de autor sau a drepturilor conexe',
        '• Conținut ilegal, fals sau dăunător transmis prin materialul editat',
        '• Încălcarea legislației GDPR prin conținutul materialelor',
        '',
        '5.4. Prestatorul nu răspunde legal pentru conținutul, veridicitatea sau legalitatea mesajului transmis de Client prin materialul editat.'
      ]
    },
    {
      icon: Users,
      title: '6. Confidențialitate și utilizarea materialelor',
      content: [
        '6.1. Ambele părți se obligă să păstreze confidențialitatea tuturor datelor, informațiilor și materialelor la care au acces pe durata colaborării.',
        '',
        '6.2. Prestatorul nu va utiliza materialele editate în scop de portofoliu, promovare online sau social media fără acordul scris prealabil al Clientului.',
        '',
        'Prestatorul este un furnizor independent de servicii. Contractul nu conferă Clientului exclusivitate — Prestatorul poate lucra simultan cu orice alți clienți, inclusiv din același domeniu de activitate. Dacă Clientul dorește exclusivitate, aceasta se negociază separat printr-un Act Adițional, cu compensație financiară.'
      ]
    },
    {
      icon: Network,
      title: '7. Capacitate operațională și colaboratori autorizați',
      content: [
        '7.1. Prestatorul operează ca o structură de producție video distribuită, coordonând o rețea de colaboratori autorizați — editori video independenți și agenții partenere — locați pe teritoriul României. Acest model operațional permite livrarea de servicii la standarde ridicate de calitate, respectarea termenelor agreate indiferent de volumul de lucru și oferirea unui serviciu continuu, scalabil și profesionist.',
        '',
        '7.2. Prin semnarea contractului, Clientul ia la cunoștință și acordă consimțământul expres ca Prestatorul să implice, atunci când volumul de lucru sau complexitatea proiectului o impune, colaboratori autorizați în procesul de producție și post-producție video. Această practică este parte integrantă a modelului de lucru al Prestatorului și nu constituie un transfer al obligațiilor contractuale.',
        '',
        '7.3. Protecția materialelor Clientului — orice colaborator autorizat este obligat, anterior accesului la orice material al Clientului, să semneze un acord de confidențialitate cu Prestatorul, prin care se obligă să:',
        '• Păstreze confidențialitatea absolută a tuturor materialelor video, audio, grafice și a instrucțiunilor primite',
        '• Nu utilizeze materialele Clientului în scop de portofoliu personal, promovare sau orice formă de comunicare publică',
        '• Nu transmită, reproducă sau stocheze materialele dincolo de scopul strict al execuției lucrării încredințate',
        '• Șteargă toate materialele primite imediat după finalizarea și predarea lucrării către Prestator',
        '',
        '7.4. Indiferent de structura internă a echipei implicate, Clientul tratează exclusiv cu Prestatorul, care răspunde integral pentru calitatea materialelor finale livrate, respectarea termenelor și confidențialitatea datelor. Implicarea colaboratorilor autorizați nu transferă, nu diminuează și nu fragmentează în niciun mod răspunderea contractuală a Prestatorului față de Client.'
      ]
    },
    {
      icon: Trash2,
      title: '8. Stocarea și ștergerea materialelor',
      content: [
        '8.1. Prestatorul nu are obligația de a stoca pe termen nelimitat materialele video. Politica de retenție:',
        '• Materiale raw primite de la Client: pot fi șterse imediat după livrarea finală',
        '• Fișiere finale editate: păstrate maximum 30 de zile de la confirmarea livrării, apoi șterse definitiv',
        '• Proiecte de editare (.prproj, .aep, .resolve etc.): pot fi șterse oricând după livrare',
        '',
        '8.2. Clientul este singurul responsabil pentru arhivarea fișierelor finale. Recomandăm descărcarea tuturor materialelor în cel mult 30 de zile de la primirea link-ului.',
        '',
        '8.3. Re-livrarea materialelor după expirarea celor 30 de zile poate fi condiționată de o taxă administrativă suplimentară.'
      ]
    },
    {
      icon: Lock,
      title: '9. Prelucrarea datelor cu caracter personal (GDPR)',
      content: [
        '9.1. Prestatorul prelucrează datele Clientului exclusiv în scopul executării contractului, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și Legea nr. 190/2018.',
        '',
        '9.2. Datele prelucrate includ: denumire/nume, adresă, CUI/CNP, date de contact, IBAN.',
        '',
        '9.3. Datele nu sunt transferate sau vândute unor terți. Datele fiscale și contractuale sunt păstrate conform legii (minimum 5 ani, facturile minimum 10 ani). Clientul beneficiază de toate drepturile GDPR: acces, rectificare, ștergere, portabilitate și dreptul de a se plânge la ANSPDCP.'
      ]
    },
    {
      icon: AlertCircle,
      title: '10. Modificări ale termenilor și reziliere',
      content: [
        '10.1. Orice modificare a condițiilor colaborării se face exclusiv în scris, prin Act Adițional semnat de ambele părți.',
        '',
        '10.2. Reziliere unilaterală: oricare dintre părți poate încheia colaborarea cu un preaviz scris de minimum 10 zile calendaristice, fără acordul celeilalte părți.',
        '',
        '10.3. Prestatorul își rezervă dreptul de a rezilia contractul din proprie inițiativă, fără justificare, cu 7 zile preaviz scris, în situații de incompatibilitate profesională (deficiențe în comunicare, comportament neprofesional, nerespectarea repetată a termenelor etc.).',
        '',
        '10.4. În caz de neplată: Prestatorul poate suspenda imediat lucrările și rezilia contractul fără preaviz, reținând avansul. Materialele parțiale sau finale nu se livrează.',
        '',
        '10.5. La reziliere, Prestatorul reține contravaloarea muncii executate și returnează suma aferentă serviciilor neprestate.'
      ]
    },
    {
      icon: Scale,
      title: '11. Soluționarea litigiilor și dispoziții finale',
      content: [
        '11.1. Orice neînțelegere se soluționează în primul rând pe cale amiabilă, în termen de 30 de zile.',
        '',
        '11.2. Dacă nu se ajunge la o soluție, litigiile vor fi supuse instanțelor judecătorești competente de la sediul Prestatorului, conform legii române.',
        '',
        '11.3. Prezentul document reprezintă termenii și condițiile de colaborare cu Prestatorul. Semnarea contractului implică acceptarea integrală a acestor termeni.',
        '',
        '11.4. Contractul complet, cu toate clauzele detaliate și Anexa 1 (oferta de preț), este transmis Clientului înainte de începerea colaborării.'
      ]
    }
  ];

  return (
    <>
      <style>{copyProtectionStyle}</style>
      <section className="no-copy pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Află termenii și condițiile de colaborare cu VisionEdit România: livrare, prețuri, revizii,
            confidențialitate și alte detalii legate de serviciile noastre de editare video profesională.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-6 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Bine ai venit la VisionEdit România!
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La VisionEdit România suntem o echipă de editori video pasionați, răspândiți în toată țara. Lucrăm cu afaceri mici, mijlocii și mari, cu influenceri, creatori de conținut și antreprenori care vor să atragă clienți noi prin video marketing. Indiferent de nișă, stil sau platformă, fiecare proiect primește aceeași atenție maximă, creativitate și calitate profesională. Transformăm viziunea ta în videoclipuri care vând.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Oferim servicii complete de editare video — de la montaj și color grading, până la thumbnail, hook viral și livrare rapidă. Indiferent de platformă — TikTok, Instagram Reels, YouTube Shorts sau altele — ne asigurăm că fiecare videoclip arată exact cum trebuie și ajunge la publicul potrivit.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Mai jos găsești termenii și condițiile noastre de colaborare. Îi știm — sună formal, dar îi avem ca să fim transparenți cu tine de la început. Dacă ai întrebări despre orice clauză, scrie-ne oricând.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4 italic">
            În documentul de mai jos, 'Prestatorul' se referă la VISIONEDIT SRL, iar 'Clientul' la persoana fizică sau juridică care beneficiază de serviciile noastre.
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
    </>
  );
};

export default Terms;
