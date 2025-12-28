import React from 'react';

const About: React.FC = () => {
  const usps = [
    {
      title: "Groene Aanslag Verwijderen",
      description: "Wij laten uw terras herleven door alle groene aanslag te verwijderen met stoom. Geen gladde tegels meer, maar een veilig en schoon resultaat.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      )
    },
    {
      title: "Onkruid Uit Voegen Verwijderen",
      description: "Onze warmwatermethode doodt de wortels van onkruid, waardoor we effectief onkruid uit voegen verwijderen zonder gif te gebruiken.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Keramische Tegels Schoonmaken",
      description: "Speciale zorg voor uw luxe bestrating. Wij zijn experts in keramische tegels schoonmaken zonder krassen of kleurverlies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000" 
                alt="Terras reinigen en groene aanslag verwijderen in de Randstad" 
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-2xl text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">Vlek vrij</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Landelijk erkend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">Midden- & West-Nederland</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Specialist in <span className="text-blue-600">Terras Reinigen</span>.
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
            <p>
              Woont u in <strong>Utrecht, Zuid-Holland, Noord-Holland of Flevoland</strong> en zoekt u een betrouwbaar bedrijf voor uw <strong>oprit schoonmaken</strong> of <strong>terras reinigen</strong>? Bij <strong>Hayk Reiniging</strong> gebruiken we de kracht van puur warm water op 100°C.
            </p>
            <p>
              Als onderdeel van de <strong>Hayk Groep</strong> bedienen wij particulieren en bedrijven in de gehele Randstad en omstreken. Wij zijn de gezonde keuze voor mens, dier en tuin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {usps.map((usp, idx) => (
              <div key={idx} className="group flex items-start space-x-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex-shrink-0 bg-slate-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {usp.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-1">{usp.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

