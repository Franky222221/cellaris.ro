import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate | CELLARIS',
  description:
    'Politica GDPR a CELLARIS — ce date colectăm, cum le folosim, drepturile dvs. și cum ne puteți contacta pentru exercitarea acestora.',
  alternates: { canonical: '/politica-confidentialitate' },
};

export default function PoliticaConfidentialitate() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">GDPR &amp; Date personale</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            Politică de Confidențialitate
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Ultima actualizare: 20 aprilie 2026 · Conformă cu GDPR (Regulamentul UE 2016/679)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container container--sm">
          <div style={{ maxWidth: '72ch', lineHeight: 1.8, color: 'var(--gray-700)' }}>

            {/* Intro */}
            <p style={{ fontSize: '1.05rem', marginBottom: '2.5rem', padding: '1.25rem 1.5rem', background: 'var(--green-50)', borderLeft: '4px solid var(--accent)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
              CELLARIS S.R.L. se angajează să protejeze datele dvs. cu caracter personal și să respecte
              legislația aplicabilă în materia protecției datelor, inclusiv Regulamentul (UE) 2016/679
              (GDPR) și Legea nr. 190/2018.
            </p>

            {/* 1. Cine suntem */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                1. Cine suntem — Operatorul de Date
              </h2>
              <p>
                Operatorul datelor dvs. cu caracter personal este:
              </p>
              <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)' }}>
                <p><strong>CELLARIS S.R.L.</strong></p>
                <p>CUI: RO12345678 | J40/1234/2020</p>
                <p>Sediu: București, România</p>
                <p>Email DPO: <a href="mailto:contact@cellaris.ro" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>contact@cellaris.ro</a></p>
                <p>Telefon: <a href="tel:+40721000000" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>+40 721 000 000</a></p>
              </div>
            </div>

            {/* 2. Date colectate */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                2. Ce Date Colectăm
              </h2>
              <p>Colectăm următoarele categorii de date cu caracter personal:</p>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--green-800)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                a) Date furnizate direct de dvs.
              </h3>
              <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
                <li style={{ marginBottom: '0.4rem' }}><strong>Nume și prenume</strong> — identificare și corespondență;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Adresă de email</strong> — comunicare, ofertare, newsletter (cu consimțământ);</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Număr de telefon</strong> — contact direct pentru ofertare și programare;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Județ/localitate</strong> — estimarea costurilor de transport și disponibilitate;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Suprafața imobilului</strong> — calculul ofertei tehnice;</li>
                <li><strong>Mesajul liber</strong> — detalii suplimentare despre proiect.</li>
              </ul>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--green-800)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                b) Date colectate automat
              </h3>
              <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
                <li style={{ marginBottom: '0.4rem' }}><strong>Adresa IP</strong> — securitate și prevenirea fraudelor;</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Date de navigare</strong> (pagini vizitate, timp petrecut, sursa accesului);</li>
                <li style={{ marginBottom: '0.4rem' }}><strong>Tipul de browser și sistem de operare</strong> — optimizarea experienței;</li>
                <li><strong>Cookie-uri</strong> — detaliate în Politica de Cookie-uri separată.</li>
              </ul>
            </div>

            {/* 3. Scopul */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                3. Scopul și Temeiul Legal al Prelucrării
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--green-900)', color: '#fff' }}>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderRadius: 'var(--radius-sm) 0 0 0' }}>Scop</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Temei legal (GDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Răspuns la solicitări și ofertare', 'Art. 6(1)(b) — executarea unui contract'],
                      ['Trimitere newsletter / oferte promoționale', 'Art. 6(1)(a) — consimțământ explicit'],
                      ['Îmbunătățirea serviciilor și site-ului', 'Art. 6(1)(f) — interes legitim'],
                      ['Securitate și prevenirea fraudelor', 'Art. 6(1)(f) — interes legitim'],
                      ['Respectarea obligațiilor legale (facturare, arhivare)', 'Art. 6(1)(c) — obligație legală'],
                      ['Trimitere oferte similare clienților existenți', 'Art. 6(1)(f) — interes legitim (soft opt-in)'],
                    ].map(([scop, temei], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--green-50)', borderBottom: '1px solid var(--green-100)' }}>
                        <td style={{ padding: '0.75rem 1rem' }}>{scop}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-500)', fontSize: '0.9rem' }}>{temei}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Terți */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                4. Destinatari și Procesatori Terți
              </h2>
              <p>Datele dvs. pot fi transmise sau prelucrate de următorii parteneri autorizați:</p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                <li style={{ marginBottom: '0.6rem' }}>
                  <strong>Google LLC (Google Analytics 4)</strong> — analiză trafic web, date anonimizate
                  prin IP masking. Politică: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)' }}>policies.google.com/privacy</a>
                </li>
                <li style={{ marginBottom: '0.6rem' }}>
                  <strong>Formspree Inc.</strong> — procesare formulare de contact. Datele sunt transmise
                  securizat (HTTPS/TLS) și stocate temporar pentru livrare. Politică: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)' }}>formspree.io/legal/privacy-policy</a>
                </li>
                <li style={{ marginBottom: '0.6rem' }}>
                  <strong>Furnizori de servicii de email</strong> — pentru trimiterea răspunsurilor și a
                  newsletter-ului, cu respectarea GDPR.
                </li>
                <li>
                  <strong>Autorități publice</strong> — în cazul obligațiilor legale (ANAF, instanțe
                  judecătorești etc.).
                </li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Nu vindem, închiriem sau cedăm datele dvs. cu caracter personal unor terți în scop
                comercial propriu fără consimțământul dvs. explicit.
              </p>
            </div>

            {/* 5. Drepturi */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                5. Drepturile Dvs.
              </h2>
              <p>Conform GDPR, beneficiați de următoarele drepturi, pe care le puteți exercita gratuit:</p>
              <div style={{ marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                {[
                  { drept: 'Dreptul de acces (Art. 15)', desc: 'Puteți solicita confirmarea dacă prelucrăm date despre dvs. și o copie a acestora.' },
                  { drept: 'Dreptul la rectificare (Art. 16)', desc: 'Puteți solicita corectarea datelor inexacte sau completarea celor incomplete.' },
                  { drept: 'Dreptul la ștergere (Art. 17)', desc: 'Puteți solicita ștergerea datelor dvs. în anumite condiții prevăzute de GDPR.' },
                  { drept: 'Dreptul la restricționarea prelucrării (Art. 18)', desc: 'Puteți solicita limitarea temporară a prelucrării datelor dvs.' },
                  { drept: 'Dreptul la portabilitate (Art. 20)', desc: 'Puteți primi datele furnizate în format structurat, lizibil automat.' },
                  { drept: 'Dreptul de opoziție (Art. 21)', desc: 'Vă puteți opune prelucrării bazate pe interes legitim, inclusiv marketingului direct.' },
                  { drept: 'Dreptul de a nu fi supus deciziilor automate (Art. 22)', desc: 'Nu luăm decizii bazate exclusiv pe prelucrare automată cu efecte legale asupra dvs.' },
                  { drept: 'Dreptul de a retrage consimțământul', desc: 'Retragerea nu afectează legalitatea prelucrărilor anterioare retragerii.' },
                ].map(({ drept, desc }, i) => (
                  <div key={i} style={{ padding: '0.875rem 1rem', background: i % 2 === 0 ? 'var(--green-50)' : 'var(--white)', border: '1px solid var(--green-100)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontWeight: 600, color: 'var(--green-800)', marginBottom: '0.25rem' }}>{drept}</p>
                    <p style={{ fontSize: '0.95rem' }}>{desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1.25rem' }}>
                Pentru exercitarea oricărui drept, trimiteți o cerere scrisă la{' '}
                <a href="mailto:contact@cellaris.ro" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>contact@cellaris.ro</a>.
                Vom răspunde în maximum <strong>30 de zile calendaristice</strong>.
              </p>
            </div>

            {/* 6. Retenție */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                6. Perioada de Retenție
              </h2>
              <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
                <li style={{ marginBottom: '0.5rem' }}>Date din formulare de contact (oferte nesolicitate): <strong>2 ani</strong> de la ultimul contact;</li>
                <li style={{ marginBottom: '0.5rem' }}>Date contractuale (clienți activi): <strong>pe durata contractului + 5 ani</strong> (obligații legale ANAF);</li>
                <li style={{ marginBottom: '0.5rem' }}>Date newsletter: până la retragerea consimțământului;</li>
                <li style={{ marginBottom: '0.5rem' }}>Date de analiză web (Google Analytics): <strong>26 de luni</strong> (setare implicită GA4);</li>
                <li>Date de facturare și documente fiscale: <strong>10 ani</strong> conform Legii contabilității.</li>
              </ul>
            </div>

            {/* 7. Autoritate */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                7. Autoritatea de Supraveghere
              </h2>
              <p>
                Dacă considerați că prelucrarea datelor dvs. încalcă GDPR, aveți dreptul să depuneți o
                plângere la autoritatea de supraveghere română:
              </p>
              <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)' }}>
                <p><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong></p>
                <p>Bd. G-ral. Gheorghe Magheru nr. 28-30, Sector 1, 010336 București</p>
                <p>Telefon: +40 318 059 211</p>
                <p>
                  Website:{' '}
                  <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)' }}>
                    www.dataprotection.ro
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
