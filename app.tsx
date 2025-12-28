import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Calculator from './components/Calculator';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="over-ons" className="py-20 bg-slate-50">
          <About />
        </section>

        <section id="prijsindicatie" className="py-20 bg-white">
          <Calculator />
        </section>

        <section id="blogs" className="py-20 bg-slate-50">
          <Blogs />
        </section>

        <section id="faq" className="py-20 bg-white">
          <FAQ />
        </section>

        <section id="reviews" className="py-20 bg-blue-600 text-white">
          <Reviews />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Hayk Reiniging</h2>
            <p className="text-blue-400 font-medium tracking-wide">Uw specialist in dieptereiniging met warm water.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 text-sm">
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-700 pb-2">Locatie</h3>
              <p className="text-slate-400 leading-relaxed">
                Buiksloterweg 31a<br />
                1031 CD Amsterdam
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-700 pb-2">Direct Contact</h3>
              <p className="text-slate-400 leading-relaxed">
                E-mail: <a href="mailto:Info@haykreiniging.nl" className="hover:text-blue-400 transition-colors">Info@haykreiniging.nl</a><br />
                Tel: 020 324 2029<br />
                Mob: 06 38328991
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-700 pb-2">Social Media</h3>
              <div className="space-y-3">
                <a href="https://www.instagram.com/haykschoonmaak" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-[#E1306C] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@haykschoonmaak</span>
                </a>
                <a href="https://www.facebook.com/haykschoonmaak" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-[#1877F2] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  <span>Facebook Pagina</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-700 pb-2">Bedrijfsgegevens</h3>
              <p className="text-slate-400 leading-relaxed">
                KvK: 83787216<br />
                Btw-id: NL003874334B45
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-slate-700 pb-2">Onderdeel van</h3>
              <p className="text-slate-400 leading-relaxed">
                Hayk Schoonmaak & Reinigingsbedrijf<br />
                Hayk Glasbewassing
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Hayk Reiniging. Alle rechten voorbehouden.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Algemene Voorwaarden
              </button>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Privacybeleid
              </button>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <ChatBot />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;
