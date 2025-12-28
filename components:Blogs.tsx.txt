import React from 'react';

const Blogs: React.FC = () => {
  const articles = [
    {
      title: "Natuurlijke middelen vs Hogedrukreiniger voor uw terras",
      duration: "4 min leestijd",
      description: "Veel mensen grijpen direct naar een hogedrukreiniger voor hun terras, maar wist u dat warm water het meest natuurlijke middel is?",
      content: "Bij Hayk Schoonmaak & Reinigingsbedrijf geloven we in natuurlijke middelen voor terras reinigen. Door water te verhitten tot 100°C creëren we een dieptereiniging die groene aanslag verwijderen makkelijker maakt dan ooit, zonder de schade die een standaard hogedrukreiniger vaak aanricht aan de voegen en de toplaag van uw stenen.",
      points: [
        "Warm water als natuurlijk reinigingsmiddel.",
        "Voorkom schade aan de toplaag van uw tegels.",
        "Doodt algen en bacteriën tot in de wortel."
      ],
      image: "https://images.unsplash.com/photo-1517646280104-a5260055d6cb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Keramische tegels schoonmaken: Tips van de expert",
      duration: "5 min leestijd",
      description: "Luxe keramische tegels vragen om een specifieke aanpak. Hoe houdt u ze in topconditie zonder vlekken?",
      content: "Keramische tegels schoonmaken vereist precisie. Hoewel ze erg hard zijn, kunnen verkeerde middelen vlekken achterlaten. Onze stoomtechniek is ideaal omdat het vuil uit de microscopische poriën tilt zonder residu achter te laten. Ook vlekken verwijderen van uw terras wordt hiermee een fluitje van een cent.",
      points: [
        "Streepvrij resultaat op alle keramiek.",
        "Veilig vlekken verwijderen van uw terras.",
        "Geen chemische resten op uw kostbare tegels."
      ],
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Oprit schoonmaken: Onkruid uit voegen verwijderen voorgoed?",
      duration: "6 min leestijd",
      description: "Een schone oprit is het visitekaartje van uw woning. Maar hoe stopt u die eindeloze onkruidgroei?",
      content: "Onkruid uit voegen verwijderen is vaak dweilen met de kraan open als u alleen een krabber gebruikt. Onze methode doodt de zaden en wortels door de hitte. In combinatie met onkruidmijdend zand en een professionele coating blijft uw oprit in de Randstad tot wel 3 keer langer onkruidvrij.",
      points: [
        "Structurele oplossing voor onkruidgroei.",
        "Oprit schoonmaken met langdurig resultaat.",
        "Voegen verstevigen met speciaal inveegzand."
      ],
      image: "https://images.unsplash.com/photo-1590059132519-50d583a4874a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Groene aanslag verwijderen: De Randstad-methode",
      duration: "4 min leestijd",
      description: "De Randstad heeft een vochtig klimaat waar algen gedijen. Waarom onze stoommethode hier superieur is.",
      content: "In steden als Amsterdam en Zaanstad zien we veel schaduwrijke tuinen. Groene aanslag verwijderen is hier een jaarlijkse strijd. Onze 'Randstad-methode' focust op 100°C stoom. Dit is niet alleen sneller, maar het steriliseert de ondergrond ook, waardoor algen minder grip krijgen op de steen.",
      points: [
        "Speciale aanpak voor schaduwrijke tuinen.",
        "Duurzaam terras reinigen zonder gif.",
        "Direct een veilig en stroef oppervlak."
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b354bc2addcc?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Kenniscentrum & SEO</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Expertise in <span className="text-blue-600">Buitenreiniging</span></h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed italic">
          Alles wat u moet weten over oprit schoonmaken en het behouden van een prachtig terras in de Randstad. Leer van de professionals van Hayk Schoonmaak & Reinigingsbedrijf.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {articles.map((article, idx) => (
          <article key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 flex space-x-2">
                <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  SEO Expert
                </div>
                <div className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {article.duration}
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h4>
              <p className="text-slate-500 mb-6 leading-relaxed font-medium">
                {article.description}
              </p>
              
              <div className="bg-slate-50 p-6 rounded-3xl mb-8 flex-1">
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {article.content}
                </p>
                <ul className="space-y-3">
                  {article.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center space-x-3 text-sm font-bold text-slate-900">
                      <div className="bg-blue-600 text-white p-1 rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 text-blue-600 font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                <span>Vraag advies aan Hayk</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* SEO Footer for Blogs */}
      <div className="mt-20 p-10 bg-blue-600 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-blue-200">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">"Wij reinigen met passie en stoomkracht."</h4>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 font-medium">
            Of u nu hulp nodig heeft bij <strong>vlekken verwijderen terras</strong> of een volledige <strong>hogedrukreiniger terras</strong> behandeling wenst in de Randstad: Hayk Schoonmaak & Reinigingsbedrijf staat voor u klaar met eerlijk advies en de beste technieken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Terras Reinigen", "Oprit Schoonmaken", "Groene Aanslag", "Onkruidvrij"].map((tag, tIdx) => (
              <span key={tIdx} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
