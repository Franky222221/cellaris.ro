import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | CELLARIS',
  description:
    'Termenii și condițiile contractuale ale CELLARIS pentru servicii de izolații din fibre de celuloză reciclată. Garanție 30 ani, livrare, plată, răspundere.',
  alternates: { canonical: '/termeni-si-conditii' },
};

export default function TermeniConditii() {
  const sections: { id: string; title: string; content: React.ReactNode }[] = [
    {
      id: 'obiect',
      title: '1. Obiectul Contractului',
      content: (
        <>
          <p>
            Prezentul document stabilește termenii și condițiile generale aplicabile relației contractuale
            dintre <strong>CELLARIS S.R.L.</strong>, cu sediul social în București, România, CUI RO12345678,
            J40/1234/2020 (denumită în continuare &quot;Prestatorul&quot; sau &quot;CELLARIS&quot;) și
            beneficiarul serviciilor (denumit în continuare &quot;Clientul&quot;).
          </p>
          <p style={{ marginTop: '1rem' }}>
            Obiectul contractului îl constituie furnizarea de servicii de producție, livrare și montaj al
            sistemelor de izolație din fibre de celuloză reciclată, inclusiv consultanță tehnică, audit
            energetic și certificare nZEB, după caz.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Prin confirmarea comenzii (semnarea ofertei acceptate, emiterea comenzii scrise sau confirmarea
            electronică), Clientul declară că a citit, înțeles și acceptat în totalitate prezentele Termeni
            și Condiții, care devin parte integrantă a contractului.
          </p>
        </>
      ),
    },
    {
      id: 'preturi',
      title: '2. Prețuri și Tarife',
      content: (
        <>
          <p>
            Toate prețurile comunicate de CELLARIS sunt exprimate în lei românești (RON) și includ TVA la
            cota legală în vigoare la data emiterii ofertei, cu excepția cazului în care se specifică
            explicit altfel.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Prețurile sunt orientative până la semnarea contractului individual. CELLARIS își rezervă
            dreptul de a ajusta prețurile în cazul variațiilor semnificative ale costurilor materiilor
            prime, energiei sau altor factori externi independenți de voința sa. Orice modificare de preț
            va fi comunicată Clientului cu cel puțin 5 zile lucrătoare înainte de data prestației, Clientul
            având dreptul de a rezilia contractul fără penalități dacă nu acceptă noile prețuri.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Ofertele de preț sunt valabile 30 de zile calendaristice de la data emiterii, dacă nu se
            specifică altfel. La expirarea acestui termen, CELLARIS poate recalcula prețurile fără
            obligații față de oferta anterioară.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Lucrările suplimentare față de cele prevăzute în oferta inițială (constatate la punerea în
            operă, datorate unor situații neprevăzute în structura imobilului etc.) vor face obiectul unor
            acte adiționale semnate de ambele părți înainte de execuție.
          </p>
        </>
      ),
    },
    {
      id: 'plata',
      title: '3. Modalități de Plată',
      content: (
        <>
          <p>
            Plata se efectuează conform graficului stabilit prin contract, care prevede în mod obișnuit:
          </p>
          <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Avans de 30%</strong> din valoarea totală a contractului, achitat în maximum 5 zile
              lucrătoare de la semnarea contractului, necesar aprovizionării cu materiale;
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tranșa intermediară de 50%</strong> la livrarea materialelor pe șantier sau la
              finalizarea a minimum 60% din lucrare, conform situației de lucrări;
            </li>
            <li>
              <strong>Soldul de 20%</strong> în termen de 3 zile lucrătoare de la recepția finală a
              lucrării, consemnată prin proces-verbal semnat de ambele părți.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Plata se poate efectua prin transfer bancar în contul CELLARIS indicat pe factură, prin ordin
            de plată sau prin alte mijloace convenite în scris. Chitanțele și facturile fiscale se emit
            conform legislației fiscale române în vigoare.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Întârzierea la plată peste termenele convenite atrage penalități de întârziere de 0,1% pe zi
            din suma datorată, fără a depăși valoarea totală a debitului. CELLARIS poate suspenda lucrările
            în curs dacă Clientul înregistrează restanțe la plată de peste 10 zile lucrătoare.
          </p>
        </>
      ),
    },
    {
      id: 'livrare',
      title: '4. Livrare și Termene de Execuție',
      content: (
        <>
          <p>
            Termenele de execuție și livrare sunt cele specificate în contractul individual și depind de
            complexitatea lucrării, disponibilitatea materialelor și condițiile meteo. CELLARIS se obligă
            să respecte termenele convenite cu bună-credință și să comunice Clientului orice întârziere
            previzibilă cu minimum 48 de ore în avans.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Livrarea materialelor la adresa indicată de Client este inclusă în prețul ofertei dacă
            distanța față de depozitul central CELLARIS nu depășește 100 km. Peste această distanță,
            costul transportului se suportă de Client conform tarifelor comunicate la momentul ofertării.
          </p>
          <p style={{ marginTop: '1rem' }}>
            CELLARIS nu răspunde pentru întârzierile cauzate de: forță majoră (cutremur, inundații,
            pandemie, guerre, greve generale), întârzieri ale Clientului în asigurarea accesului la
            obiectiv, modificări solicitate de Client pe parcursul execuției, sau condiții meteorologice
            extreme care fac imposibilă lucrarea în siguranță.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Recepția lucrărilor se face prin semnarea procesului-verbal de recepție de către ambele
            părți. Dacă Clientul refuză nejustificat să semneze procesul-verbal de recepție timp de mai
            mult de 5 zile lucrătoare de la notificarea finalizării, lucrarea se consideră recepționată
            tacit.
          </p>
        </>
      ),
    },
    {
      id: 'garantie',
      title: '5. Garanție 30 de Ani',
      content: (
        <>
          <p>
            CELLARIS acordă o garanție de <strong>30 de ani</strong> pentru sistemele de izolație din
            fibre de celuloză montate conform specificațiilor tehnice ale producătorului și standardelor
            în vigoare. Garanția acoperă:
          </p>
          <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>Menținerea proprietăților termoizolante ale materialului;</li>
            <li style={{ marginBottom: '0.5rem' }}>Rezistența la tasare și deformare structurală a stratului de izolație;</li>
            <li style={{ marginBottom: '0.5rem' }}>Rezistența la umiditate în condiții normale de utilizare;</li>
            <li>Lipsa degradării biologice (mucegai, dăunători) în condiții normale.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Garanția nu acoperă deteriorările cauzate de: utilizarea necorespunzătoare sau modificarea
            sistemului de izolație de către Client sau terți neautorizați, inundații, incendii sau alte
            calamități, lucrări de construcție ulterioare care afectează sistemul de izolație, lipsa
            întreținerii normale a imobilului (ventilație, etanșeitate acoperiș etc.).
          </p>
          <p style={{ marginTop: '1rem' }}>
            Garanția legală de bun execuție este de 2 ani de la recepție, conform legislației române în
            vigoare. Garanția extinsă de 30 ani este de natură comercială și este condiționată de
            înregistrarea produsului pe site-ul CELLARIS și de respectarea condițiilor de utilizare.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Solicitările în garanție se depun în scris la adresa contact@cellaris.ro cu descrierea
            defecțiunii și fotografii relevante. CELLARIS se obligă să răspundă în maximum 5 zile
            lucrătoare și să efectueze remedierea în maximum 30 de zile de la confirmarea defecțiunii
            acoperite de garanție.
          </p>
        </>
      ),
    },
    {
      id: 'raspundere',
      title: '6. Limitarea Răspunderii',
      content: (
        <>
          <p>
            Răspunderea CELLARIS față de Client este limitată la valoarea totală a contractului individual
            în baza căruia a apărut prejudiciul. CELLARIS nu răspunde pentru daune indirecte, pierderi de
            profit, pierderi de date sau orice alte daune consequentiale, indiferent dacă CELLARIS a fost
            informat cu privire la posibilitatea acestora.
          </p>
          <p style={{ marginTop: '1rem' }}>
            CELLARIS nu garantează că lucrările de izolație vor conduce la economii energetice de o
            anumită valoare, acestea depinzând de factori externi (comportamentul utilizatorilor,
            variațiile climatice, instalațiile termice existente etc.). Valorile orientative din ofertă
            sunt estimări bazate pe standarde tehnice și nu constituie garanții contractuale.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Nicio parte nu va fi răspunzătoare față de cealaltă pentru neexecutarea sau executarea
            defectuoasă a obligațiilor contractuale cauzată de evenimente de forță majoră, astfel cum
            acestea sunt definite de legislația română în vigoare (art. 1351 Cod Civil).
          </p>
        </>
      ),
    },
    {
      id: 'proprietate-intelectuala',
      title: '7. Proprietate Intelectuală',
      content: (
        <>
          <p>
            Toate materialele prezentate pe site-ul cellaris.ro — texte, fotografii, grafice, logo-uri,
            specificații tehnice, studii de caz, scheme de montaj — sunt proprietatea exclusivă a
            CELLARIS S.R.L. sau sunt utilizate cu acordul deținătorilor drepturilor și sunt protejate de
            legislația română și europeană privind drepturile de autor și drepturile conexe.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Este interzisă reproducerea, distribuirea, modificarea sau utilizarea în orice scop comercial
            a conținutului site-ului fără acordul scris prealabil al CELLARIS. Utilizarea în scop personal
            și necomercial, cu menționarea sursei, este permisă.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Marca &quot;CELLARIS&quot; și &quot;nZEB Cellaris&quot;, logo-urile și sloganurile asociate
            sunt mărci comerciale ale CELLARIS S.R.L. Utilizarea neautorizată constituie o încălcare a
            drepturilor de proprietate intelectuală și va fi urmărită legal.
          </p>
        </>
      ),
    },
    {
      id: 'modificari',
      title: '8. Modificarea Termenilor',
      content: (
        <>
          <p>
            CELLARIS își rezervă dreptul de a modifica prezentele Termeni și Condiții în orice moment.
            Modificările vor fi publicate pe site-ul cellaris.ro cu indicarea datei intrării în vigoare.
            Continuarea utilizării site-ului sau a serviciilor CELLARIS după publicarea modificărilor
            constituie acceptul implicit al noilor termeni.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Contractele individuale deja încheiate nu sunt afectate de modificările ulterioare ale
            Termenilor și Condițiilor generale, cu excepția cazurilor prevăzute expres de lege.
          </p>
        </>
      ),
    },
    {
      id: 'legislatie',
      title: '9. Legislație Aplicabilă și Soluționarea Litigiilor',
      content: (
        <>
          <p>
            Prezentele Termeni și Condiții sunt guvernate de legislația română în vigoare, inclusiv dar
            fără limitare: Codul Civil (Legea nr. 287/2009), Legea nr. 449/2003 privind vânzarea
            produselor și garanțiile asociate, Legea nr. 72/2013 privind măsurile pentru combaterea
            întârzierii în executarea obligațiilor de plată, OG 21/1992 privind protecția consumatorilor
            și directivele europene aplicabile.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Orice litigiu născut din sau în legătură cu prezentele Termeni și Condiții sau cu
            contractele individuale încheiate cu CELLARIS va fi soluționat, în primul rând, pe cale
            amiabilă. Dacă soluționarea amiabilă nu este posibilă în termen de 30 de zile de la
            notificarea scrisă a litigiului, acesta va fi supus spre soluționare instanțelor judecătorești
            competente din <strong>municipiul București</strong>, conform legislației române în vigoare.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Consumatorii au dreptul de a apela la procedurile de soluționare alternativă a litigiilor
            (SAL), inclusiv prin intermediul platformei europene de soluționare online a litigiilor (ODR):
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)', marginLeft: '0.25rem' }}>
              ec.europa.eu/consumers/odr
            </a>.
          </p>
        </>
      ),
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Documente legale</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            Termeni și Condiții
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Ultima actualizare: 20 aprilie 2026 · Versiunea 2.0
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container container--sm">
          <div style={{ maxWidth: '72ch', lineHeight: 1.8 }}>
            <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', marginBottom: '2.5rem', padding: '1.25rem 1.5rem', background: 'var(--green-50)', borderLeft: '4px solid var(--accent)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
              Vă rugăm să citiți cu atenție prezentele Termeni și Condiții înainte de a utiliza serviciile
              CELLARIS. Dacă nu sunteți de acord cu oricare dintre prevederile de mai jos, vă rugăm să nu
              utilizați serviciile noastre.
            </p>

            {sections.map((s) => (
              <div key={s.id} id={s.id} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                  {s.title}
                </h2>
                <div style={{ color: 'var(--gray-700)' }}>{s.content}</div>
              </div>
            ))}

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)', color: 'var(--gray-700)' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Contact</p>
              <p>Pentru orice întrebări legate de prezentele Termeni și Condiții, ne puteți contacta:</p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Email: <a href="mailto:contact@cellaris.ro" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>contact@cellaris.ro</a></li>
                <li>Telefon: <a href="tel:+40721000000" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>+40 721 000 000</a></li>
                <li>Adresă: București, România</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
