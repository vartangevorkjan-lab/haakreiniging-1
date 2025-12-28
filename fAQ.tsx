import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "In welke provincies en steden is Hayk Reiniging actief?",
      a: "Wij zijn volledig operationeel in de provincies Utrecht, Zuid-Holland, Noord-Holland en Flevoland. Dit omvat grote steden zoals Utrecht, Rotterdam, Den Haag, Amsterdam en Almere, maar ook alle omliggende dorpen en gemeenten."
    },
    {
      q: "Hoe werkt de 10% burenkorting actie?",
      a: "Wanneer u samen met uw buren een aanvraag doet en wij de werkzaamheden op dezelfde dag kunnen uitvoeren, ontvangen beide adressen 10% korting op de totale prijs (excl. btw). Een slimme manier om kosten te besparen!"
    },
    {
      q: "Zijn de prijzen op de website inclusief of exclusief btw?",
      a: "Alle getoonde prijzen op onze website en in de calculator zijn EXCLUSIEF 21% btw. Voor particuliere klanten wordt de btw op de uiteindelijke factuur toegevoegd."
    },
    {
      q: "Moet ik thuis blijven tijdens de reiniging?",
      a: "Nee, dat is niet nodig. Zolang wij toegang hebben tot het terrein en een werkende buitenkraan aanwezig is, kunnen wij aan de slag. Wij sturen u foto's via WhatsApp van het resultaat."
    },
    {
      q: "Krijgen jullie ook hardnekkige olievlekken of kauwgom weg?",
      a: "Ja, dankzij onze professionele warmwatermethode (tot 100°C) lossen olie en vetten veel sneller op dan bij traditionele koudreiniging. Voor extreem hardnekkige vlekken gebruiken we een specifieke voorbehandeling."
    },
    {
      q: "Is een terrasreiniging ook mogelijk in de winter?",
      a: "Zolang het niet vriest, kunnen wij reinigen. In het najaar en de winter zijn terrassen vaak gevaarlijk glad door groene aanslag; een behandeling voorkomt valpartijen."
    },
    {
      q: "Berekenen jullie voorrijkosten?",
      a: "In Amsterdam en Zaanstad berekenen wij GEEN voorrijkosten. Voor overige regio's hanteren we een marktconform tarief dat vaak vervalt bij grotere opdrachten of burenkorting."
    },
    {
      q: "Wat is het verschil met een hogedrukspuit van de bouwmarkt?",
      a: "Consumentenmachines werken met koud water en een smalle straal die de stenen poreus maakt. Hayk Reiniging gebruikt 100°C warm water en stoom, wat algen doodt zonder de steen te beschadigen."
    },
    {
      q: "Hoe lang blijft mijn terras schoon na de behandeling?",
      a: "Met onze combinatie van dieptereiniging, onkruidmijdend zand en nanocoating blijft het resultaat vaak 2 tot 3 keer langer behouden dan bij een standaard reiniging."
    },
    {
      q: "Maken jullie ook muren of gevels schoon?",
      a: "Absoluut. Onze machines zijn ook uitermate geschikt voor gevelreiniging, parkeergarages en bedrijfshallen. Vraag hiervoor een offerte op maat aan."
    },
    {
      q: "Is de reiniging schadelijk voor mijn planten?",
      a: "Nee. Wij focussen op de kracht van heet water. In 95% van de gevallen is puur water voldoende, waardoor uw beplanting veilig is."
    },
    {
      q: "Hoe gaan jullie precies te werk op locatie?",
      a: "Wij inspecteren eerst de ondergrond, behandelen vlekken voor, reinigen met 100°C stoom, spoelen na en vegen optioneel de voegen opnieuw in met onkruidmijdend zand."
    }
  ];

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Vragen & Antwoorden</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Alles wat u wilt weten</h3>
        <p className="text-slate-600 italic italic">Antwoorden voor heel Midden- en West-Nederland.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:border-blue-200 transition-colors">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${openIndex === idx ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
                  {idx + 1}
                </span>
                <span className="font-bold text-slate-900 text-lg md:text-xl pr-4 leading-tight">{faq.q}</span>
              </div>
              <span className={`text-blue-600 transition-all duration-300 transform flex-shrink-0 ${openIndex === idx ? 'rotate-180 scale-125' : 'group-hover:translate-y-1'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50 ml-0 md:ml-12">
                <p>{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
