import React from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Privacybeleid</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Hayk Reiniging - Versie 2.2 (Maart 2024)</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-900"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-slate max-w-none">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mb-10 text-sm text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900 mb-2">Uw privacy is onze prioriteit.</p>
            Hayk Reiniging (onderdeel van <strong>Hayk Schoonmaak & Reinigingsbedrijf</strong>) verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). In dit document leggen wij tot in detail uit hoe wij met uw data omgaan.
          </div>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">1. Gegevensverzameling en Doeleinden</h3>
            <p className="text-slate-600 mb-4">Wij verzamelen gegevens op basis van de volgende grondslagen:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li><strong>Uitvoering overeenkomst:</strong> Om uw terras, oprit of terrein te kunnen reinigen hebben wij uw adres- en contactgegevens nodig.</li>
              <li><strong>Wettelijke verplichting:</strong> Voor onze administratie en btw-afdracht aan de Belastingdienst.</li>
              <li><strong>Gerechtvaardigd belang:</strong> Voor kwaliteitscontrole en het verbeteren van onze diensten.</li>
              <li><strong>Toestemming:</strong> Voor marketingdoeleinden of het gebruik van specifieke cookies.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">2. Welke data verwerken wij precies?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">Contactinformatie</p>
                <p className="text-slate-600">Naam, adres, e-mail, telefoonnummer.</p>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">Projectdata</p>
                <p className="text-slate-600">Oppervlakte (m2), type vervuiling, foto's van de locatie.</p>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">Interactiedata</p>
                <p className="text-slate-600">IP-adres, browsertype, chat-geschiedenis met Hayk AI.</p>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">Financiële data</p>
                <p className="text-slate-600">IBAN (bij overschrijving), factuurhistorie.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">3. Hayk AI & Gegevensverwerking</h3>
            <p className="text-slate-600 leading-relaxed">
              Onze website maakt gebruik van "Hayk AI", een assistent gebaseerd op de Gemini-technologie van Google. De berichten die u in de chat typt, worden verwerkt om u direct antwoord te kunnen geven. 
              <br /><br />
              <strong>Belangrijk:</strong> Wij adviseren u om geen gevoelige persoonsgegevens (zoals BSN, banknummers of medische info) in de chat te typen. Chat-logs worden geanonimiseerd geanalyseerd om de antwoorden van de assistent te verbeteren.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">4. Beeldmateriaal & Anonimisering</h3>
            <p className="text-slate-600 leading-relaxed">
              Voor onze "Voor & Na" presentaties op de website en social media maken wij foto's van onze projecten. Wij hanteren hierbij een strikt privacybeleid:
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Kentekens van voertuigen worden onleesbaar gemaakt (geblurrd).</li>
              <li>Personen worden niet herkenbaar in beeld gebracht zonder expliciete toestemming.</li>
              <li>Huisnummers worden waar mogelijk buiten het kader gelaten of onleesbaar gemaakt.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">5. Delen van gegevens (Verwerkers)</h3>
            <p className="text-slate-600 leading-relaxed">
              Wij verkopen uw gegevens nooit. Wij delen gegevens alleen met vertrouwde partners die essentieel zijn voor onze bedrijfsvoering:
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li><strong>Hosting & IT:</strong> Voor het beheer van onze website en e-mailservers.</li>
              <li><strong>Boekhoudsoftware:</strong> Voor een correcte facturatie en belastingaangifte.</li>
              <li><strong>Google:</strong> Voor het functioneren van de AI-assistent en analytische tools.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">6. Cookies & Tracking</h3>
            <p className="text-slate-600 leading-relaxed">
              Onze website gebruikt cookies om uw ervaring te verbeteren:
              <br />- <strong>Functioneel:</strong> Om de website en calculator correct te laten werken.
              <br />- <strong>Analytisch:</strong> Om (anoniem) te zien hoe bezoekers de site gebruiken via Google Analytics.
              <br />- <strong>Marketing:</strong> Om relevante advertenties te tonen na uw bezoek (bijv. via Facebook Pixel).
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">7. Uw Rechten als Betrokkene</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Op basis van de AVG heeft u diverse rechten met betrekking tot uw data:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 bg-blue-100 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">1</div>
                <p className="text-sm text-slate-600"><strong>Recht op inzage:</strong> U kunt opvragen welke data wij van u hebben.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 bg-blue-100 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">2</div>
                <p className="text-sm text-slate-600"><strong>Recht op correctie:</strong> Laat onjuiste gegevens direct aanpassen.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 bg-blue-100 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">3</div>
                <p className="text-sm text-slate-600"><strong>Recht op vergeten te worden:</strong> U kunt verzoeken om verwijdering van uw gegevens.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 bg-blue-100 text-blue-600 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold">4</div>
                <p className="text-sm text-slate-600"><strong>Recht op beperking:</strong> Tijdelijk stopzetten van gegevensverwerking.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">8. Minderjarigen</h3>
            <p className="text-slate-600 leading-relaxed">
              Onze website en diensten hebben niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. Als u ervan overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">9. Klachtrecht</h3>
            <p className="text-slate-600 leading-relaxed">
              Indien u van mening bent dat wij niet correct omgaan met uw privacy, horen wij dat natuurlijk graag. U heeft daarnaast het recht om een klacht in te dienen bij de nationale toezichthouder: de <strong>Autoriteit Persoonsgegevens</strong>.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">10. Contactgegevens Functionaris</h3>
            <p className="text-slate-600 leading-relaxed">
              Voor vragen over ons privacybeleid kunt u contact opnemen met onze privacy-coördinator:
              <br /><br />
              <strong>Hayk Reiniging</strong><br />
              T.a.v. Privacy Beheer<br />
              Buiksloterweg 31a, 1031 CD Amsterdam<br />
              E-mail: <a href="mailto:Info@haykreiniging.nl" className="text-blue-600 font-bold underline">Info@haykreiniging.nl</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center sm:text-left">
            Laatste update: 15 maart 2024
          </p>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            Gelezen & Begrepen
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
