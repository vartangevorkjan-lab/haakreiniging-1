import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- AI SERVICE ---
const SYSTEM_INSTRUCTION = `
Je bent "Hayk AI", de assistent van Hayk Reiniging. 
BELANGRIJKE INFO:
- Wij reinigen met 100°C WARM WATER (hogedruk). Dit is effectiever en doodt wortels van onkruid en algen.
- Wij zijn onderdeel van de Hayk-groep (met Hayk Schoonmaak & Glasbewassing).
- PRIJZEN (excl. btw): Reiniging €3,50/m², Invegen zand €2,00/m², Coating €1,75/m².
- We bieden 10% burenkorting.
Houd je antwoorden kort, professioneel en vriendelijk.
`;

const getAIResponse = async (prompt: string) => {
  try {
    // Corrected Gemini API initialization to use process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: { systemInstruction: SYSTEM_INSTRUCTION, temperature: 0.7 }
    });
    return response.text;
  } catch (e) {
    return "Ik kan momenteel niet antwoorden. Bel ons gerust op 06 38328991.";
  }
};

// --- COMPONENTS ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">H</div>
          <span className="font-extrabold text-xl tracking-tight text-blue-600">Hayk<span className="text-slate-800">Reiniging</span></span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          {['Home', 'Over Ons', 'Prijsindicatie', 'Blogs', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-blue-600 font-medium">{item}</a>
          ))}
          {/* Replaced 'class' with 'className' */}
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">Offerte Aanvragen</a>
        </nav>
      </div>
    </header>
  );
};

const Calculator = () => {
  const [m2, setM2] = useState<number>(0);
  const [opt, setOpt] = useState({ sanding: false, coating: false });
  const prices = { cleaning: 3.50, sanding: 2.00, coating: 1.75 };

  const total = useMemo(() => {
    let p = prices.cleaning;
    if (opt.sanding) p += prices.sanding;
    if (opt.coating) p += prices.coating;
    const sub = m2 * p;
    return { sub: sub.toFixed(2), total: (sub * 1.21).toFixed(2) };
  }, [m2, opt]);

  return (
    <section id="prijsindicatie" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Replaced 'class' with 'className' */}
        <h2 className="text-4xl font-black text-center mb-12">Bereken uw <span className="text-blue-600">Prijsindicatie</span></h2>
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Aantal vierkante meters (m²)</label>
              <input type="number" onChange={e => setM2(Number(e.target.value))} placeholder="Bijv. 50" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xl font-bold focus:border-blue-600 outline-none" />
            </div>
            <div className="space-y-3">
              {/* Replaced 'class' with 'className' */}
              <div className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50 flex justify-between items-center"><span className="font-bold">Reiniging (Warm Water)</span><span className="font-black text-blue-600">€3,50</span></div>
              <button onClick={() => setOpt(o => ({...o, sanding: !o.sanding}))} className={`w-full p-4 rounded-xl border-2 flex justify-between items-center transition-all ${opt.sanding ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-blue-200'}`}><span className="font-bold">Invegen zand</span><span>€2,00</span></button>
              <button onClick={() => setOpt(o => ({...o, coating: !o.coating}))} className={`w-full p-4 rounded-xl border-2 flex justify-between items-center transition-all ${opt.coating ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-blue-200'}`}><span className="font-bold">Beschermende coating</span><span>€1,75</span></button>
            </div>
          </div>
          <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-200">
            <div>
              {/* Replaced 'class' with 'className' */}
              <p className="text-xs font-bold uppercase text-blue-200 mb-2">Indicatie Totaal (Incl. BTW)</p>
              <p className="text-6xl font-black">€ {total.total}</p>
              <p className="text-blue-100 text-sm mt-4 italic">Excl. BTW: € {total.sub}</p>
            </div>
            {/* Replaced 'class' with 'className' */}
            <a href="#contact" className="w-full bg-white text-blue-600 py-4 rounded-xl font-black text-center mt-8 hover:bg-blue-50 shadow-lg">Offerte Aanvragen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Replaced 'class' with 'className' */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Vraag uw <span className="text-blue-600">Offerte</span> aan</h2>
          <p className="text-slate-500">Binnen 24 uur een voorstel in uw mailbox.</p>
        </div>
        <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert("Bedankt! Uw aanvraag is verzonden."); }}>
          {/* Replaced 'class' with 'className' */}
          <div className="grid md:grid-cols-2 gap-6">
            <input required type="text" placeholder="Naam" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
            <input required type="tel" placeholder="Telefoonnummer" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <input required type="text" placeholder="Adres" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
          <input required type="email" placeholder="E-mailadres" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
          <div className="grid md:grid-cols-2 gap-6">
            <input required type="number" placeholder="Aantal m²" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
            <select className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 appearance-none">
              <option>Mate van vervuiling: Licht</option>
              <option>Mate van vervuiling: Gemiddeld</option>
              <option>Mate van vervuiling: Extreem</option>
            </select>
          </div>
          <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl text-center bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer">
            <p className="text-sm font-bold text-slate-500">Klik om minimaal 2 foto's te uploaden</p>
            <input type="file" multiple className="hidden" />
          </div>
          <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black rounded-xl shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest">Verzenden</button>
        </form>
      </div>
    </section>
  );
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hallo! Ik ben Hayk AI. Hoe kan ik u helpen?' }]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const txt = input; setInput('');
    setMessages(m => [...m, { role: 'user', text: txt }]);
    const res = await getAIResponse(txt);
    setMessages(m => [...m, { role: 'ai', text: res || '' }]);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
      {open && (
        <div className="fixed bottom-6 right-6 w-full max-w-sm h-[500px] bg-white rounded-3xl shadow-2xl z-[60] flex flex-col overflow-hidden border border-slate-100 animate-fade-in">
          {/* Replaced 'class' with 'className' */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center font-bold">
            <span>Hayk AI Assistant</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && send()} placeholder="Vraag over warm water of prijzen..." className="flex-1 p-2 bg-slate-100 rounded-lg outline-none text-sm" />
            <button onClick={send} className="bg-blue-600 text-white p-2 rounded-lg">➜</button>
          </div>
        </div>
      )}
    </>
  );
};

const App = () => (
  <div className="min-h-screen">
    <Header />
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Replaced 'class' with 'className' */}
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-6xl font-black text-slate-900 leading-tight mb-6">Resultaat door <span className="text-blue-600">Warm Water</span>.</h1>
          <p className="text-xl text-slate-600 mb-10">Uw specialist in het reinigen van terrassen, opritten en bedrijfsterreinen. Voor particulier en zakelijk.</p>
          <div className="flex gap-4">
            <a href="#prijsindicatie" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-700">Bereken Prijs</a>
            <a href="https://wa.me/31638328991" className="bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600">WhatsApp Contact</a>
          </div>
        </div>
      </div>
    </section>
    <Calculator />
    <ContactForm />
    <ChatBot />
    {/* Replaced 'class' with 'className' */}
    <footer className="bg-slate-900 text-white py-12 text-center text-sm opacity-80">
      <p>&copy; {new Date().getFullYear()} Hayk Reiniging. Buiksloterweg 31a, Amsterdam.</p>
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
