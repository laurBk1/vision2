import React from 'react';
import { Shield, Lock, Eye, FileText, Users, AlertCircle, CheckCircle, Scale, Mail, Phone } from 'lucide-react';

const Privacy = () => {
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
      title: '1. Introducere',
      content: [
        'VisionEdit SRL ("noi", "compania") respectă prevederile Regulamentului General privind Protecția Datelor (GDPR) (UE) 2016/679 și ale legislației românești aplicabile în domeniul protecției datelor cu caracter personal.',
        '',
        'Această politică stabilește modul în care colectăm, utilizăm, stocăm și protejăm datele personale ale clienților și vizitatorilor site-ului nostru www.visionedit.ro.',
        '',
        'Site-ul www.visionedit.ro nu utilizează tehnologii de tip cookies pentru colectarea datelor.'
      ]
    },
    {
      icon: Users,
      title: '2. Datele Operatorului',
      content: [
        'Denumire: VisionEdit SRL',
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
      title: '3. Categorii de Date Prelucrate',
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
      title: '4. Scopurile și Bazele Juridice ale Prelucrării',
      content: [
        'Prelucrăm datele personale în baza următoarelor temeiuri juridice:',
        '',
        '• Executarea unui contract sau a măsurilor precontractuale (art. 6 alin. (1) lit. b) GDPR) - pentru a răspunde solicitărilor dumneavoastră',
        '• Consimțământul (art. 6 alin. (1) lit. a) GDPR) - pentru activități de marketing direct'
      ]
    },
    {
      icon: Users,
      title: '5. Destinatarii Datelor',
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
      title: '6. Durata Stocării',
      content: [
        'Datele sunt stocate:',
        '',
        '• Pentru solicitări de ofertă: 3 ani de la ultima interacțiune',
        '• Pentru documente contabile: 10 ani conform legislației fiscale'
      ]
    },
    {
      icon: CheckCircle,
      title: '7. Drepturile Persoanelor Vizate',
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
      title: '8. Măsuri de Securitate',
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
      title: '9. Reclamații',
      content: [
        'Dacă considerați că prelucrarea datelor dumneavoastră încalcă GDPR, aveți dreptul de a depune plângere la:',
        'Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)'
      ]
    },
    {
      icon: FileText,
      title: '10. Modificări ale Politicii',
      content: [
        'Orice modificare a acestei politici va fi publicată pe această pagină. Vă recomandăm să o consultați periodic.'
      ]
    },
    {
      icon: Mail,
      title: '11. Contact',
      content: [
        'Pentru orice întrebări legate de protecția datelor, ne puteți contacta la:',
        '• Email: contact@visionedit.ro',
        '• Telefon: +40 767 082 106',
        '',
        'Această politică este efectivă începând cu 28.07.2025.',
        '',
        'VisionEdit SRL se angajează să respecte cele mai înalte standarde de protecție a datelor personale în conformitate cu legislația europeană și românească.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politică de Confidențialitate și Protecția Datelor (GDPR)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VisionEdit SRL respectă prevederile GDPR și ale legislației românești pentru protecția 
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
            VisionEdit SRL se angajează să protejeze confidențialitatea și securitatea datelor personale 
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
  );
};

export default Privacy;