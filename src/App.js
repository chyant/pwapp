import logo from './img/Logo.svg';
import './App.css';
import { FaFilePdf } from "react-icons/fa";
import { Carousel } from './components/Carousel';
import slides from "./data/carouselData.json";
import filePDF from './file/SalMar2024.pdf';
import templatePW from './file/PW Chioda Antonio.pdf';
import tesi from './file/contesto impresa Salmar.pdf';
import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: "ambiente", label: "Responsabilità Ambiente" },
  { value: "sociale", label: "Responsabilità Sociale" },
  { value: "sostenibilita", label: "Impegno per la sostenibilità" },
  { value: "governance", label: "Governance Aziendale" },
];

const colourStyles = {
menuList: styles => ({
    ...styles,
    background: "#f1f1e6"
}),
option: (styles, {isFocused, isSelected}) => ({
    ...styles,
    background: isFocused
        ? '#d4e6e2'
        : isSelected
            ? '#d4e6e2'
            : undefined,
    zIndex: 1
}),
menu: base => ({
    ...base,
    zIndex: 100
})
}

    


function App() {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const showAmbiente = selectedOptions.some(
    option => option.value === 'ambiente'
  );

  const showAGovernance = selectedOptions.some(
    option => option.value === 'governance'
  );

  const showSociale = selectedOptions.some(
    option => option.value === 'sociale'
  );

  const showSost = selectedOptions.some(
    option => option.value === 'sostenibilita'
  );






  return (
    <div className='body bkthird'>

      <section className="sectionOne bksecond"
      >
        <div style={{ position: "absolute", top: 10, right: 20, fontSize: 14 }}>
          Unipegaso A.A. 2025-2026
        </div>
        <h1 style={{ color: "black" }}>

          Tecnologie Web a Supporto della Responsabilità Sociale d’Impresa:<br/> Analisi e Implementazione del Caso SalMar ASA
        </h1><div ><a href="https://www.unipegaso.it" title="Home Page"><img src={logo} alt="Università Telematica Pegaso Logo" loading="lazy" style={{ height: 118, width: 240, }} /></a></div>
        <div style={{ textAlign: "right", marginTop: 10 }}>
          Antonio Chioda
        </div>


      </section>

      <section className='sectionTwo bkprincipal'
      >
        <div style={{ position: "absolute", top: 10, left: 20, fontWeight: "bold" }}>
          SALMAR
        </div><p>
          SalMar ASA è un’azienda norvegese fondata nel 1991 sull’isola di Frøya ed è oggi uno dei principali produttori mondiali di salmone allevato.
          La sua crescita è stata sostenuta dall’ampliamento delle licenze e da acquisizioni in Scozia e Islanda, aree con condizioni ambientali favorevoli all’acquacoltura.
          Quotata alla borsa di Oslo dal 2007, SalMar opera in un settore strategico per la sicurezza alimentare globale. L’azienda affronta sfide climatiche e biologiche,
          come pidocchi di mare e meduse, e rispetta normative stringenti quali il Traffic Light System, gli standard ASC e Global G.A.P., oltre alle regolamentazioni europee.


        </p>
      </section>

      <section className='sectionThree bksecond'>
        <div className='carouselContainer'><Carousel data={slides.slides}></Carousel></div>
      </section>

      <section className='sectionFour bkprincipal '>
        <div>
          <a className='btn outl arr'
            href={filePDF}
            download="SalMar2024.pdf"
            style={{ textDecoration: 'none' }}
          >

            <FaFilePdf className='pdfIcon' />
            Salmar Annual Report 2024

          </a>

          <a className='btn outl arr'
            href={tesi}
            download="contesto impresa Salmar.pdf"
            style={{ textDecoration: 'none' }}
          >

            <FaFilePdf className='pdfIcon' />
            Contesto impresa Salmar

          </a>

          <a className='btn outl arr'
            href={templatePW}
            download="PW Chioda Antonio.pdf"
            style={{ textDecoration: 'none' }}
          >
            <FaFilePdf className='pdfIcon' />
            Project Work Antonio
          </a>

        </div>
      </section>

      <section className='sectionFive bksecond'>
        <div className='selectBox'>
          <div className='label'>
 <strong>Seleziona una tematica da approfondire</strong>
          </div>
       
        <Select options={options}
          value={selectedOptions}
          onChange={handleChange}
          isMulti={true}
          
          className="basic-multi-select"
      classNamePrefix="select"
      styles={colourStyles}
          >

        </Select>
 </div>


        {showAmbiente && (
          <div className="">
            <div className="emissioni-section">
              <h3>Tematica Ambientale</h3>
              <p></p>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Classificazione delle emissioni e obiettivi di riduzione: </strong> SalMar suddivide le emissioni di gas serra in Scope 1, 2 e 3:
                  le prime costituiscono il 3%, mentre lo Scope 3 rappresenta il 97%. L’azienda punta a una riduzione complessiva del 42% entro il 2030 e
                  ha già ottenuto un -26% tra il 2020 e il 2024.
                </div>

                <div className="scope-item">
                  <strong>Infrastrutture energetiche e conversione dei siti: </strong> Per ridurre le emissioni, SalMar ha costruito l’impianto InnovaNor,
                  diminuendo i trasporti di circa 30.000 tonnellate di CO₂. Sta inoltre elettrificando tutti i siti produttivi e convertendo gradualmente
                  la flotta a vascelli elettrici, con obiettivo del 100% di alimentazione elettrica.
                </div>

                <div className="scope-item">
                  <strong>Tecnologie innovative per benessere animale e controllo parassiti: </strong> L’azienda utilizza gabbie chiuse o sommerse e tecnologie laser
                  basate su IA per rimuovere i pidocchi di mare, evitando trattamenti manuali e sostituendo i pesci pulitori (dismissione entro metà 2025).
                  Sono state introdotte reti sommerse e sistemi di monitoraggio avanzati con investimenti significativi.
                </div>

                <div className="scope-item">
                  <strong>Mitigazione impatti sul fondale marino e gestione sostenibile dei mangimi: </strong> SalMar analizza fondali, correnti e parametri chimici
                  per prevenire danni da dispersione del mangime. In collaborazione con i fornitori utilizza sistemi software per ottimizzare l’alimentazione e
                  ridurre le emissioni della supply chain. Il 98% degli ingredienti è certificato e dal 2008 tutta la soia è sostenibile.

                </div>

                <div className="scope-item">
                  <strong>Uso sostenibile dell’acqua dolce e progetti di ricerca ambientale: </strong> Poiché l’acqua dolce è cruciale nelle prime fasi di vita dei salmoni,
                  SalMar monitora consumi e impatti, con un target di riduzione del 20% secondo gli SDG ONU. Gli scarti filtrati sono riutilizzati
                  in attività di biogas e acquaponica. L’azienda partecipa anche al progetto di ricerca MetoMilo.

                </div>
              </div>
            </div>
          </div>
        )}

        {showSociale && (
          <div className="">
            <div className="emissioni-section">
              <h3>Tematica Sociale</h3>
              <p></p>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Parità di genere e condizioni di lavoro: </strong> SalMar impiega 2.941 dipendenti in 59 Paesi e punta alla parità di genere, oggi al 26%.
                  L’87% del personale è coperto da accordi collettivi e benefici, mentre il restante 13% ricopre ruoli manageriali non contrattualizzati.
                </div>
              </div>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Impegno verso comunità e istruzione: </strong> L’azienda sostiene attivamente le comunità locali attraverso incontri pubblici,
                  finanziamenti a sport e volontariato e la creazione di aree ricreative. Collabora inoltre con scuole e università per promuovere
                  opportunità lavorative, soprattutto per le donne.

                </div>
              </div>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Tutela dei lavoratori e sicurezza: </strong> SalMar applica un codice etico che garantisce pari dignità e inclusione.
                  Nel 2024 non sono state registrate fatalità né malattie professionali; i 49 incidenti avvenuti hanno avuto copertura assicurativa totale.
                  L’azienda mira a ridurre l’assenteismo dal 6,3% a meno del 4,5%.

                </div>
              </div>


            </div>
          </div>
        )}


        {showSost && (
          <div className="">
            <div className="emissioni-section">
              <h3>Tematica Sostenibilità</h3>
              <p></p>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Mantenimento certificazioni: </strong> Il 100% dei siti produttivi sono certificati ASC (Acquaculture Stewardship Council)
                  o GLOBAL G.A.P; tali certificazioni richiedono il rispetto di oltre 400 criteri valutativi inerenti l’impatto ambientale, la sostenibilità, il rispetto delle leggi nazionali e del benessere animale.
                  Il mantenimento di tali certificazioni rappresenta una garanzia di credibilità rispetto agli impegni dichiarati.
                </div>
              </div>
            </div>
          </div>
        )}


        {showAGovernance && (
          <div className="">
            <div className="emissioni-section">
              <h3>Tematica Governance</h3>
              <p></p>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Investimenti sostenibili e infrastrutture: </strong> SalMar investe 7,85 miliardi di NOK in green bond per finanziare progetti ambientali,
                  come ferrovie e centrali eoliche, e detiene 16 milioni di NOK in infrastrutture sostenibili, tra cui l’impianto InnovaNor,
                  rafforzando così il proprio impegno verso la transizione ecologica.

                </div>
              </div>

              <div className="scope-list">
                <div className="scope-item">
                  <strong>Governance responsabile e trasparente: </strong> L’azienda incentiva la dirigenza attraverso KPI ambientali, applica politiche anticorruzione con audit periodici
                  e garantisce processi decisionali equilibrati tramite un consiglio di amministrazione composto da 7 membri, tra cui 3 indipendenti
                  e 2 rappresentanti dei dipendenti.

                </div>
              </div>

            </div>
          </div>
        )}


      </section>

    </div>




  );
}
export default App;
