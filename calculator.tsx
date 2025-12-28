import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [m2, setM2] = useState<number>(0);
  const [services, setServices] = useState({
    cleaning: true,
    sanding: false,
    coating: false,
    neighborDiscount: false
  });

  const prices = {
    cleaning: 3.50, // Aangepast naar €3,50
    sanding: 2.00,
    coating: 1.75
  };

  const calculation = useMemo(() => {
    let sumPerM2 = 0;
    if (services.cleaning) sumPerM2 += prices.cleaning;
    if (services.sanding) sumPerM2 += prices.sanding;
    if (services.coating) sumPerM2 += prices.coating;
    
    const initialSubtotal = sumPerM2 * m2;
    const discountAmount = services.neighborDiscount ? initialSubtotal * 0.10 : 0;
    const subtotal = initialSubtotal - discountAmount;
    
    const vatAmount = subtotal * 0.21;
    const grandTotal = subtotal + vatAmount;

    return {
      subtotal: subtotal.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      grandTotal: grandTotal.toFixed(2)
    };
  }, [m2, services]);

  const toggleService = (key: keyof typeof services) => {
    setServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Prijsindicatie Calculator</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Bereken direct de geschatte kosten voor uw terras of oprit. Transparant en zonder verrassingen.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                Aantal vierkante meters (m²)
              </label>
              <input 
                type="number" 
                value={m2 === 0 ? '' : m2}
                onChange={(e) => setM2(Number(e.target.value))}
                placeholder="Bijv. 50"
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all text-xl font-bold"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">
                Kies uw extra opties
              </label>
              
              <div className="p-4 rounded-2xl border-2 border-blue-600 bg-blue-50 flex items-center justify-between">
                <span className="font-semibold text-slate-900 text-sm">Hogedruk reiniging (warm water)</span>
                <span className="text-blue-600 font-bold text-xs">€3,50 /m²</span>
              </div>

              <button 
                onClick={() => toggleService('sanding')}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${services.sanding ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <span className="font-semibold text-slate-900 text-sm">Invegen met onkruidmijdend zand</span>
                <span className="text-slate-500 font-medium text-xs">€2,00 /m²</span>
              </button>

              <button 
                onClick={() => toggleService('coating')}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${services.coating ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <span className="font-semibold text-slate-900 text-sm">Aanbrengen beschermende coating</span>
                <span className="text-slate-500 font-medium text-xs">€1,75 /m²</span>
              </button>

              <button 
                onClick={() => toggleService('neighborDiscount')}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all mt-6 ${services.neighborDiscount ? 'border-blue-600 bg-blue-600 text-white shadow-xl' : 'border-blue-100 bg-blue-50 text-blue-700'}`}
              >
                <span className="font-black text-xs uppercase">🤝 10% Burenkorting</span>
                <span className="text-[10px] font-bold uppercase">{services.neighborDiscount ? 'Actief' : 'Activeer'}</span>
              </button>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between min-h-[400px] shadow-xl shadow-blue-200">
            <div>
              <p className="text-blue-200 font-bold uppercase text-[10px] tracking-widest mb-6">Totaal Indicatie</p>
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase mb-1">Subtotaal (Excl. BTW)</p>
                  <p className="text-3xl font-bold">€ {calculation.subtotal}</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-blue-200 text-xs font-bold uppercase mb-1">BTW (21%)</p>
                  <p className="text-xl font-semibold">€ {calculation.vatAmount}</p>
                </div>
                <div className="pt-6">
                  <p className="text-white text-sm font-bold uppercase mb-1">Totaal Bedrag</p>
                  <p className="text-5xl font-black">€ {calculation.grandTotal}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="block w-full text-center py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg uppercase text-xs tracking-widest mt-8"
            >
              Vraag Offerte Aan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

