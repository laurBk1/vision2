import { Link } from 'react-router-dom';

// Bloc de text indexabil (Google + motoare AI) pentru căutări de tip
// "agenție / studio editare video România, București, Ilfov".
// Se poate elimina oricând: șterge acest fișier + linia <SeoIntro /> din src/App.tsx.
export default function SeoIntro() {
  return (
    <section className="py-16 bg-white border-t border-gray-100" aria-labelledby="seo-intro-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
        <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Agenție de editare video în România, București și Ilfov
        </h2>
        <p className="mb-4">
          VisionEdit este un studio de editare video din zona București–Ilfov, specializat în conținut video scurt
          pentru TikTok, Instagram Reels, YouTube Shorts și reclame Facebook Ads. Echipa noastră se ocupă de montaj,
          subtitrări, sound design, color grading și de hook-ul din primele secunde, pentru ca videoclipurile tale să
          fie vizionate, distribuite și să aducă clienți.
        </p>
        <p className="mb-4">
          Lucrăm online cu antreprenori, branduri și creatori din București, Ilfov și din toată țara. Alegi între{' '}
          <Link to="/services" className="text-blue-600 hover:underline">editare din materialele tale</Link> sau
          pachetele complete A–Z (script, voiceover AI, avatar UGC), cu prețuri de la 185 lei/video, fără TVA. Vezi{' '}
          <Link to="/pricing" className="text-blue-600 hover:underline">tarifele complete</Link>, citește{' '}
          <Link to="/faq" className="text-blue-600 hover:underline">întrebările frecvente</Link> sau{' '}
          <Link to="/contact" className="text-blue-600 hover:underline">cere o ofertă gratuită</Link>.
        </p>
      </div>
    </section>
  );
}
