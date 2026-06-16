import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Video, Phone, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Pagina nu a fost găsită | VisionEdit România';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">

        {/* 404 number */}
        <div className="relative mb-6">
          <span className="text-[120px] sm:text-[160px] font-black text-white/5 select-none leading-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-2xl">
              <Video className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ups! Pagina nu există
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
          Se pare că pagina pe care o cauți a fost mutată sau nu există.
          Dar serviciile noastre de editare video sunt la un click distanță!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg"
          >
            <Home className="h-5 w-5" />
            Pagina Principală
          </button>

          <button
            onClick={() => navigate('/pricing')}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 border border-white/20"
          >
            <Video className="h-5 w-5" />
            Vezi Prețuri
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 border border-white/20"
          >
            <Phone className="h-5 w-5" />
            Contact
          </button>
        </div>

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="mt-8 inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi la pagina anterioară
        </button>

      </div>
    </div>
  );
};

export default NotFound;
