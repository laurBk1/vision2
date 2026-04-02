import React from 'react';
import { Shield, Lock, Eye, FileText, Users, AlertCircle, CheckCircle, Scale, Mail, Phone } from 'lucide-react';


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


const Privacy = () => {
  useCopyProtection();

  const sections = [
    {
      icon: FileText,
      title: '1. Introducere',
      content: [
        'VISIONEDIT SRL ("noi", "compania") respectă prevederile Regulamentului General privind Protecția Datelor (GDPR) (UE) 2016/679 și ale legislației românești aplicabile în domeniul protecției datelor cu caracter personal.',
        '',
        'Această politică stabilește modul în care colectăm, utilizăm, stocăm și protejăm datele personale ale clienților și vizitatorilor site-ului nostru www.visionedit.ro.',
        '',
        'Site-ul www.visionedit.ro utilizează cookie-uri de tip analytics prin Google Analytics (GA4) și Microsoft Clarity pentru a colecta date statistice anonime despre vizitatori. Prin utilizarea site-ului și acceptarea cookie-urilor, sunteți de acord cu colectarea acestor date conform prezentei politici.'
      ]
    },
    {
      icon: Lock,
      title: '2. Politica de Cookies',
      content: [
        'Ce sunt cookie-urile?',
        'Un cookie este un mic fișier text stocat pe dispozitivul dumneavoastră (computer, telefon mobil etc.) atunci când vizitați un site web. Cookie-urile sunt complet pasive — nu conțin programe software, viruși sau spyware și nu pot accesa informațiile de pe dispozitivul dumneavoastră. În mod obișnuit, cookie-urile nu identifică direct utilizatorii.',
        '',
        'Tipuri de cookie-uri după durată:',
        '',
        '• Cookie-uri de sesiune — stocate temporar pe durata navigării, se șterg automat când închideți browserul.',
        '• Cookie-uri persistente — stocate pe dispozitivul dumneavoastră pentru o perioadă determinată sau până când le ștergeți manual din setările browserului.',
        '',
        'Cookie-uri utilizate pe visionedit.ro:',
        '',
        '• Cookie-uri strict necesare — esențiale pentru funcționarea corectă a site-ului. Nu pot fi dezactivate, fiind utilizate în baza interesului legitim al operatorului (art. 6 alin. (1) lit. f) GDPR).',
        '• Cookie-uri de analiză (Google Analytics GA4) — folosite pentru a înțelege cum interacționează vizitatorii cu site-ul, în scopul îmbunătățirii conținutului. Datele sunt pseudonimizate. Google Analytics utilizează anonimizarea adreselor IP.',
        '• Cookie-uri de comportament (Microsoft Clarity) — folosite pentru înregistrarea sesiunilor pseudonimizate (heatmaps, replay-uri) în scopul optimizării experienței utilizatorilor. Microsoft Clarity utilizează mascarea automată a câmpurilor sensibile (parole, date introduse în formulare) — datele sensibile nu sunt niciodată transmise către serverele Microsoft.',
        '',
        'Detalii cookie-uri Google Analytics:',
        '',
        '• _ga — identificator unic pseudonimizat pentru statistici despre vizite. Durata: 2 ani. Operator: Google LLC.',
        '• _ga_* — persistă starea sesiunii pentru GA4. Durata: 2 ani. Operator: Google LLC.',
        '',
        'Detalii cookie-uri Microsoft Clarity:',
        '',
        '• _clck — identificator unic pseudonimizat al vizitatorului pentru sesiuni Clarity. Durata: 1 an. Operator: Microsoft Corporation.',
        '• _clsk — identifică sesiunea curentă de navigare. Durata: sesiune (se șterge la închiderea browserului). Operator: Microsoft Corporation.',
        '',
        'CLARITY_PRIVACY_LINK',
        '',
        'Cum puteți controla cookie-urile?',
        '',
        '• La prima vizită pe site vi se afișează un banner de consimțământ — puteți accepta sau refuza cookie-urile de analiză. Refuzul nu afectează funcționarea site-ului.',
        '• Vă puteți modifica preferințele privind cookie-urile oricând, revenind pe site și ștergând cookie-urile din setările browserului (secțiunea „Setări" → „Confidențialitate" → „Șterge datele de navigare") — bannerul de consimțământ va reapărea.',
        '• Puteți dezactiva Google Analytics accesând: GAOPTOUT_LINK',
        '• Puteți dezactiva Microsoft Clarity accesând: CLARITYOPTOUT_LINK',
        '• Dezactivarea cookie-urilor de analiză nu afectează funcționarea site-ului.',
        '',
        'Datele colectate prin Google Analytics și Microsoft Clarity sunt pseudonimizate — nu includ informații care să permită identificarea directă a utilizatorilor și nu sunt partajate cu terți în scopuri de marketing.',
        '',
        'Transferuri internaționale de date:',
        '',
        '• Google LLC și Microsoft Corporation sunt furnizori stabiliți în SUA. Datele colectate prin Google Analytics și Microsoft Clarity pot fi transferate în afara Spațiului Economic European, în baza unor garanții adecvate — Clauze Contractuale Standard (art. 46 GDPR) și EU-US Data Privacy Framework.',
        '• Google: https://policies.google.com/privacy',
        '• Microsoft: https://privacy.microsoft.com/privacystatement',
        '',
        'Retragerea consimțământului:',
        '',
        '• Vă puteți retrage consimțământul în orice moment, ștergând cookie-urile din setările browserului dumneavoastră (secțiunea „Setări" → „Confidențialitate" → „Șterge datele de navigare") — bannerul va reapărea la următoarea vizită.',
        '• Puteți dezactiva Google Analytics accesând: GAOPTOUT_LINK',
        '• Puteți dezactiva Microsoft Clarity accesând: CLARITYOPTOUT_LINK',
        '• Retragerea consimțământului nu afectează legalitatea prelucrărilor efectuate anterior retragerii.',
        '',
        'Temeiul juridic al prelucrării:',
        '• consimțământul dumneavoastră (art. 6 alin. (1) lit. a) GDPR) — pentru cookie-uri de analiză (Google Analytics) și de comportament (Microsoft Clarity)',
        '• interesul legitim al operatorului (art. 6 alin. (1) lit. f) GDPR) — pentru cookie-uri strict necesare funcționării site-ului'
      ]
    },
    {
      icon: Users,
      title: '3. Datele Operatorului',
      content: [
        'Denumire: VISIONEDIT SRL',
        'Sediu social: București, România',
        'Date de contact:',
        '',
        '• Telefon: +40 767 082 106',
        '• Email: contact@visionedit.ro',
        '• Website: www.visionedit.ro'
      ]
    },
    {
      icon: Eye,
      title: '4. Categorii de Date Prelucrate',
      content: [
        'Prin formularul de contact de pe site, colectăm următoarele categorii de date:',
        '',
        '• Date de identificare (numele complet)',
        '• Date de contact (număr de telefon, adresă de email)',
        '• Informații despre proiect (descrierea solicitării)',
        '',
        'Nu colectăm date cu caracter special conform art. 9 din GDPR.'
      ]
    },
    {
      icon: Scale,
      title: '5. Scopurile și Bazele Juridice ale Prelucrării',
      content: [
        'Prelucrăm datele personale în baza următoarelor temeiuri juridice:',
        '',
        '• Executarea unui contract sau a măsurilor precontractuale (art. 6 alin. (1) lit. b) GDPR) - pentru a răspunde solicitărilor dumneavoastră',
        '• Consimțământul (art. 6 alin. (1) lit. a) GDPR) - pentru activități de marketing direct'
      ]
    },
    {
      icon: Users,
      title: '6. Destinatarii Datelor',
      content: [
        'Datele pot fi accesate de:',
        '',
        '• Personalul autorizat al companiei noastre',
        '• Furnizori de servicii IT (doar în măsura necesară pentru funcționarea site-ului)',
        '',
        'Nu facem transferuri internaționale de date și nu vindem sau partajăm datele cu terți în alte scopuri decât cele menționate.'
      ]
    },
    {
      icon: AlertCircle,
      title: '7. Durata Stocării',
      content: [
        'Datele sunt stocate:',
        '',
        '• Pentru solicitări de ofertă: 3 ani de la ultima interacțiune',
        '• Pentru documente contabile: 10 ani conform legislației fiscale'
      ]
    },
    {
      icon: CheckCircle,
      title: '8. Drepturile Persoanelor Vizate',
      content: [
        'Conform GDPR, beneficiați de următoarele drepturi:',
        '',
        '• Dreptul de acces la date',
        '• Dreptul la rectificare',
        '• Dreptul la ștergere ("dreptul de a fi uitat")',
        '• Dreptul la restricționarea prelucrării',
        '• Dreptul la portabilitatea datelor',
        '• Dreptul de opoziție',
        '• Dreptul de a retrage consimțământul',
        '',
        'Pentru exercitarea acestor drepturi, vă rugăm să ne contactați la datele de mai sus.'
      ]
    },
    {
      icon: Shield,
      title: '9. Măsuri de Securitate',
      content: [
        'Implementăm măsuri tehnice și organizaționale adecvate, inclusiv:',
        '',
        '• Sisteme de securitate IT',
        '• Politici stricte de acces la date',
        '• Acorduri de confidențialitate cu angajații și partenerii'
      ]
    },
    {
      icon: Scale,
      title: '10. Reclamații',
      content: [
        'Dacă considerați că prelucrarea datelor dumneavoastră încalcă GDPR, aveți dreptul de a depune plângere la:',
        'Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)'
      ]
    },
    {
      icon: FileText,
      title: '11. Modificări ale Politicii',
      content: [
        'Orice modificare a acestei politici va fi publicată pe această pagină. Vă recomandăm să o consultați periodic.'
      ]
    },
    {
      icon: Mail,
      title: '12. Contact',
      content: [
        'Pentru orice întrebări legate de protecția datelor, ne puteți contacta la:',
        '• Email: contact@visionedit.ro',
        '• Telefon: +40 767 082 106',
        '',
        'Această politică este efectivă începând cu 28.02.2026.',
        '',
        'VISIONEDIT SRL se angajează să respecte cele mai înalte standarde de protecție a datelor personale în conformitate cu legislația europeană și românească.'
      ]
    }
  ];

  return (
    <>
      <style>{copyProtectionStyle}</style>
      <section className="no-copy pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politică de Confidențialitate și Protecția Datelor (GDPR)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VISIONEDIT SRL respectă prevederile GDPR și ale legislației românești pentru protecția 
            datelor personale. Află cum colectăm, utilizăm și protejăm informațiile tale.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-6 border-blue-600">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Protecția Datelor Personale
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            VISIONEDIT SRL se angajează să protejeze confidențialitatea și securitatea datelor personale 
            ale clienților săi, în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) 
            și legislația națională aplicabilă.
          </p>
        </div>

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
                {section.content.map((paragraph, idx) => {
                  if (paragraph.includes('CLARITY_PRIVACY_LINK')) {
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        Microsoft Clarity procesează datele în conformitate cu EU-US Data Privacy Framework. Informații complete:{' '}
                        <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline break-all">
                          privacy.microsoft.com/privacystatement
                        </a>
                      </p>
                    );
                  }
                  if (paragraph.includes('GAOPTOUT_LINK')) {
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed ml-4">
                        • Puteți dezactiva Google Analytics accesând:{' '}
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline break-all">
                          tools.google.com/dlpage/gaoptout
                        </a>
                      </p>
                    );
                  }
                  if (paragraph.includes('CLARITYOPTOUT_LINK')) {
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed ml-4">
                        • Puteți dezactiva Microsoft Clarity accesând Digital Advertising Alliance:{' '}
                        <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline break-all">
                          optout.aboutads.info
                        </a>
                        {' '}(selectați „Microsoft")
                      </p>
                    );
                  }
                  if (paragraph === '• Google: https://policies.google.com/privacy') {
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed ml-4">
                        • Google:{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline break-all">
                          policies.google.com/privacy
                        </a>
                      </p>
                    );
                  }
                  if (paragraph === '• Microsoft: https://privacy.microsoft.com/privacystatement') {
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed ml-4">
                        • Microsoft:{' '}
                        <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline break-all">
                          privacy.microsoft.com/privacystatement
                        </a>
                      </p>
                    );
                  }
                  return (
                    <p key={idx} className={`text-gray-700 leading-relaxed ${
                      paragraph.startsWith('•') ? 'ml-4' : ''
                    } ${paragraph === '' ? 'h-2' : ''}`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Ai Întrebări despre Protecția Datelor?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Pentru orice întrebări legate de protecția datelor personale sau pentru exercitarea drepturilor tale GDPR, 
              nu ezita să ne contactezi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@visionedit.ro"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Trimite Email</span>
              </a>
              <a 
                href="tel:+40767082106"
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Sună Acum</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Privacy;