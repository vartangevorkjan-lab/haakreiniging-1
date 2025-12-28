import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Professionele terrasreiniging en oprit schoonmaken Randstad & Utrecht"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm animate-fade-in">
              ACTIEF IN GEHEEL MIDDEN- & WEST-NEDERLAND
            </span>
            <a href="#prijsindicatie" className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-200 animate-bounce hover:bg-blue-700 transition-colors">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              10% BURENKORTING
            </a>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Uw specialist in <span className="text-blue-600">terras reinigen</span> & <span className="text-blue-600">oprit schoonmaken</span>.
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Snel ter plaatse in <strong>Amsterdam, Rotterdam, Utrecht, Den Haag, Almere</strong> en omgeving. Wij verwijderen groene aanslag en onkruid met 100°C stoomkracht. Geen chemie, verbluffend resultaat.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#prijsindicatie" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-center"
            >
              Bereken uw prijs
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all text-center"
            >
              Offerte aanvragen
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-2xl font-bold text-blue-600">4 Provincies</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">NH / ZH / UT / FL</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100°C</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">Dieptereiniging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

