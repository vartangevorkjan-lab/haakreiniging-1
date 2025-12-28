import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    m2: '',
    pollution: 'Licht (Groene aanslag)',
    clientType: 'Particulier',
    neighborDiscount: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bedankt ${formData.name}! Uw aanvraag voor ${formData.m2}m² is ontvangen. Wij nemen binnen 24 uur contact met u op.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact & Offerte</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Klaar voor een schoon resultaat?</h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Vul het formulier in voor een vrijblijvende offerte. Wij zijn actief in heel Midden- en West-Nederland en reageren altijd binnen één werkdag.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bel of WhatsApp</p>
                <p className="text-xl font-bold text-slate-900">06 38328991</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required type="text" name="name" placeholder="Naam" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all" />
              <input required type="tel" name="phone" placeholder="Telefoonnummer" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all" />
            </div>
            <input required type="text" name="address" placeholder="Adres" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all" />
            <input required type="email" name="email" placeholder="E-mailadres" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required type="number" name="m2" placeholder="Aantal m²" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all" />
              <select name="pollution" onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:border-blue-600 transition-all appearance-none bg-white">
                <option value="Licht">Mate van vervuiling: Licht</option>
                <option value="Gemiddeld">Mate van vervuiling: Gemiddeld</option>
                <option value="Extreem">Mate van vervuiling: Extreem</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Foto's van de situatie (Minimaal 2)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
                    <p className="mb-2 text-sm text-slate-500 font-bold">Klik om foto's te uploaden</p>
                  </div>
                  <input type="file" className="hidden" multiple accept="image/*" />
                </label>
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 shadow-xl transition-all uppercase text-xs tracking-widest">
              Verzenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

