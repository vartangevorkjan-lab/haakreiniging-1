import React from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-black text-slate-900">Algemene Voorwaarden</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Hayk Reiniging - Versie 2.1 (Maart 2024)</p>
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
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 italic text-slate-700 text-sm">
            Deze voorwaarden zijn opgesteld om een heldere samenwerking tussen Hayk Reiniging en haar cliënten te waarborgen.
          </div>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 1: Definities</h3>
            <p className="text-slate-600 leading-relaxed">
              <strong>Hayk Reiniging:</strong> De gebruiker van deze algemene voorwaarden, onderdeel van <strong>Hayk Schoonmaak & Reinigingsbedrijf</strong>, ingeschreven bij de KvK onder nummer 83787216.<br />
              <strong>Opdrachtgever:</strong> De natuurlijke- of rechtspersoon die een overeenkomst aangaat met Hayk Reiniging.<br />
              <strong>Werkzaamheden:</strong> Reiniging, impregnering, coating, onkruidverwijdering en aanverwante diensten.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 2: Totstandkoming Overeenkomst</h3>
            <p className="text-slate-600 leading-relaxed">
              Een overeenkomst komt tot stand op het moment dat de Opdrachtgever een offerte (digitaal) bevestigt of via WhatsApp/E-mail akkoord geeft op een prijsopgaaf. Kennelijke fouten of vergissingen in offertes binden Hayk Reiniging niet.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 3: Uitvoering van de Werkzaamheden</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Hayk Reiniging verplicht zich de werkzaamheden naar beste inzicht en vermogen uit te voeren.</li>
              <li>Wij werken met warm water (stoom) techniek. Opdrachtgever dient rekening te houden met stoomvorming en tijdelijke vochtigheid van muren/kozijnen.</li>
              <li>Indien overeengekomen, wordt coating pas aangebracht bij een droge ondergrond en geschikte weersomstandigheden.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 4: Verplichtingen Opdrachtgever</h3>
            <p className="text-slate-600 leading-relaxed mb-4">De Opdrachtgever garandeert:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Een vrije en veilige toegang tot het werkterrein.</li>
              <li>De aanwezigheid van een goed functionerende buitenkraan (water).</li>
              <li>Indien nodig: toegang tot een stroompunt (230V).</li>
              <li>Het verwijderen van meubilair en obstakels. Indien Hayk Reiniging dit moet doen, kan een meerprijs in rekening worden gebracht.</li>
              <li>Dat buren zijn geïnformeerd indien er sprake is van mogelijke spatoverlast.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 5: Betaling en Incasso</h3>
            <p className="text-slate-600 leading-relaxed">
              Betaling geschiedt binnen 14 dagen na factuurdatum. Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en zijn wij gerechtigd de wettelijke rente en incassokosten (conform Besluit Vergoeding voor Buitengerechtelijke Incassokosten) in rekening te brengen.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 6: Overmacht & Weersomstandigheden</h3>
            <p className="text-slate-600 leading-relaxed">
              Reiniging en nabehandeling zijn weersafhankelijk. Bij zware regenval, vorst of extreme hitte behoudt Hayk Reiniging zich het recht voor de werkzaamheden te verplaatsen naar een nader te bepalen datum, zonder dat dit leidt tot schadevergoeding aan de Opdrachtgever.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 7: Beperking van Aansprakelijkheid</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Hayk Reiniging is niet aansprakelijk voor schade aan ondeugdelijk aangelegde bestrating of verborgen gebreken in de ondergrond.</li>
              <li>Na reiniging kunnen natuurlijke gebreken (zoals kleurverschillen, witte uitslag of kalkuitbloei) zichtbaar worden die voorheen door vuil bedekt waren. Dit valt niet onder de verantwoordelijkheid van Hayk Reiniging.</li>
              <li>Schade door spatwater aan kwetsbare planten of schilderwerk is uitgesloten, tenzij er sprake is van opzet of grove schuld.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 8: Foto- en Videomateriaal</h3>
            <p className="text-slate-600 leading-relaxed">
              Hayk Reiniging behoudt zich het recht voor om foto's en video's van de werkzaamheden (voor- en na-situatie) te gebruiken voor marketingdoeleinden, website en social media. Hierbij zal de privacy van de opdrachtgever worden gerespecteerd (geen namen op huisnummers in beeld). Indien de Opdrachtgever hier expliciet bezwaar tegen heeft, dient dit vooraf gemeld te worden.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 9: Garantie op Nabehandeling</h3>
            <p className="text-slate-600 leading-relaxed">
              Garantie op coating/impregnering betreft de waterafstotende werking. Deze garantie vervalt indien de Opdrachtgever de stenen naderhand reinigt met agressieve chemische middelen of zelf een hogedrukspuit gebruikt op de behandelde laag.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 10: Privacy (AVG)</h3>
            <p className="text-slate-600 leading-relaxed">
              Persoonsgegevens worden uitsluitend gebruikt voor de uitvoering van de overeenkomst, facturatie en communicatie omtrent de opdracht. Wij verstrekken nooit gegevens aan derden voor commerciële doeleinden.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Artikel 11: Geschillen</h3>
            <p className="text-slate-600 leading-relaxed">
              Op alle rechtsbetrekkingen waarbij Hayk Reiniging partij is, is uitsluitend het Nederlands recht van toepassing. Geschillen zullen in eerste instantie worden voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center sm:text-left">
            Door akkoord te gaan met een offerte, verklaart u deze voorwaarden te hebben gelezen.
          </p>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg"
          >
            Begrepen & Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;

