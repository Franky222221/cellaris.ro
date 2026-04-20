import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politică de Cookie-uri | CELLARIS',
  description:
    'Informații despre cookie-urile utilizate pe cellaris.ro — tipuri, scopuri, durată și cum le puteți gestiona sau dezactiva.',
  alternates: { canonical: '/politica-cookie' },
};

const cookies = [
  {
    categorie: 'Esențiale',
    culoare: '#34D399',
    items: [
      { nume: 'cookieConsent', scop: 'Stochează preferințele utilizatorului privind cookie-urile', durata: '12 luni', emitent: 'cellaris.ro' },
      { nume: 'NEXT_LOCALE', scop: 'Preferința de limbă a site-ului', durata: 'Sesiune', emitent: 'cellaris.ro' },
    ],
  },
  {
    categorie: 'Analiză (Analytics)',
    culoare: '#3B82F6',
    items: [
      { nume: '_ga', scop: 'Google Analytics — identifică sesiunile unice de utilizator', durata: '24 luni', emitent: 'google.com' },
      { nume: '_ga_XXXXXXXX', scop: 'Google Analytics GA4 — menține starea sesiunii', durata: '24 luni', emitent: 'google.com' },
      { nume: '_gid', scop: 'Google Analytics — distinge utilizatorii (24 ore)', durata: '24 ore', emitent: 'google.com' },
      { nume: '_gat', scop: 'Google Analytics — limitează rata de solicitări', durata: '1 minut', emitent: 'google.com' },
    ],
  },
  {
    categorie: 'Marketing',
    culoare: '#F59E0B',
    items: [
      { nume: '_fbp', scop: 'Facebook Pixel — urmărire conversii și remarketing', durata: '3 luni', emitent: 'facebook.com' },
      { nume: '_gcl_au', scop: 'Google Ads — urmărire conversii publicitare', durata: '3 luni', emitent: 'google.com' },
    ],
  },
];

export default function PoliticaCookie() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Transparență digitală</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            Politică de Cookie-uri
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Ultima actualizare: 20 aprilie 2026
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container container--sm">
          <div style={{ maxWidth: '72ch', lineHeight: 1.8, color: 'var(--gray-700)' }}>

            {/* Ce sunt cookies */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                1. Ce sunt cookie-urile?
              </h2>
              <p>
                Cookie-urile sunt fișiere text de mici dimensiuni pe care un site web le plasează în
                browserul dvs. atunci când îl vizitați. Ele permit site-ului să &quot;memoreze&quot;
                acțiunile și preferințele dvs. (cum ar fi autentificarea, limba sau alte setări) pe o
                perioadă de timp, astfel încât să nu fie nevoie să le reintroduceți de fiecare dată când
                reveniți pe site sau navigați dintr-o pagină în alta.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Cookie-urile pot fi <strong>de sesiune</strong> (se șterg automat la închiderea
                browserului) sau <strong>persistente</strong> (rămân stocate pe dispozitivul dvs. pentru
                o perioadă determinată). De asemenea, pot fi emise de site-ul nostru
                (<strong>cookie-uri primare</strong>) sau de servicii terțe integrate în pagini noastre
                (<strong>cookie-uri terțe</strong>).
              </p>
            </div>

            {/* Tipuri */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                2. Ce tipuri de cookie-uri folosim
              </h2>

              {cookies.map((cat) => (
                <div key={cat.categorie} style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: cat.culoare, display: 'inline-block', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--green-800)' }}>
                      {cat.categorie}
                    </h3>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--green-900)', color: '#fff' }}>
                          <th style={{ padding: '0.6rem 0.875rem', textAlign: 'left', fontWeight: 600 }}>Nume cookie</th>
                          <th style={{ padding: '0.6rem 0.875rem', textAlign: 'left', fontWeight: 600 }}>Scop</th>
                          <th style={{ padding: '0.6rem 0.875rem', textAlign: 'left', fontWeight: 600 }}>Durată</th>
                          <th style={{ padding: '0.6rem 0.875rem', textAlign: 'left', fontWeight: 600 }}>Emitent</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.items.map((item, i) => (
                          <tr key={item.nume} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--green-50)', borderBottom: '1px solid var(--green-100)' }}>
                            <td style={{ padding: '0.6rem 0.875rem', fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--green-700)', fontWeight: 500 }}>{item.nume}</td>
                            <td style={{ padding: '0.6rem 0.875rem' }}>{item.scop}</td>
                            <td style={{ padding: '0.6rem 0.875rem', whiteSpace: 'nowrap' }}>{item.durata}</td>
                            <td style={{ padding: '0.6rem 0.875rem', color: 'var(--gray-500)' }}>{item.emitent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Dezactivare */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                3. Cum puteți gestiona cookie-urile
              </h2>
              <p>
                Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate
                cookie-urile deja stocate pe dispozitivul dvs. și puteți seta browserul să le blocheze.
                Totuși, dacă faceți acest lucru, este posibil ca unele funcționalități ale site-ului să
                nu mai funcționeze corect.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-800)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                Gestionare din browser:
              </h3>
              <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
                {[
                  { browser: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { browser: 'Mozilla Firefox', url: 'https://support.mozilla.org/ro/kb/stergeti-cookie-urile-site-urile-nu-pot-urmari' },
                  { browser: 'Microsoft Edge', url: 'https://support.microsoft.com/ro-ro/microsoft-edge/ştergerea-cookie-urilor-în-microsoft-edge' },
                  { browser: 'Safari (macOS/iOS)', url: 'https://support.apple.com/ro-ro/guide/safari/sfri11471/mac' },
                ].map(({ browser, url }) => (
                  <li key={browser} style={{ marginBottom: '0.4rem' }}>
                    {browser}:{' '}
                    <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)' }}>
                      instrucțiuni oficiale
                    </a>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-800)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                Dezactivare Google Analytics:
              </h3>
              <p>
                Puteți instala extensia de browser{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)' }}>
                  Google Analytics Opt-out
                </a>{' '}
                pentru a preveni colectarea datelor de analiză.
              </p>

              <div style={{ marginTop: '1.25rem', padding: '1rem 1.25rem', background: 'var(--green-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--green-100)' }}>
                <p>
                  <strong>Cookie-urile esențiale</strong> nu pot fi dezactivate prin bannerul de
                  consimțământ, deoarece sunt strict necesare pentru funcționarea corectă a site-ului.
                </p>
              </div>
            </div>

            {/* Link politica */}
            <div style={{ padding: '1.25rem 1.5rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Informații suplimentare</p>
              <p>
                Pentru detalii despre modul în care prelucrăm datele dvs. cu caracter personal, inclusiv
                cele colectate prin cookie-uri, consultați{' '}
                <Link href="/politica-confidentialitate" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>
                  Politica de Confidențialitate
                </Link>. Pentru întrebări, ne puteți contacta la{' '}
                <a href="mailto:contact@cellaris.ro" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>
                  contact@cellaris.ro
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
