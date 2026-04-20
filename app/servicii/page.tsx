import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicii de Izolație Termică | CELLARIS — Izolații din Celuloză',
  description:
    'Servicii complete de izolație termică din celuloză: acoperiș, pereți, pardoseală și audit energetic gratuit. Clasa foc B s1 d0, garanție 30 ani, certificare nZEB.',
  alternates: { canonical: '/servicii' },
};

const servicii = [
  {
    titlu: 'Izolație Acoperiș / Pod',
    pret: '35 – 65 RON/m²',
    desc: 'Izolăm podurile și acoperișurile în pantă prin insuflare mecanică uscată sau umedă. Acoperim uniform toate colțurile și spațiile greu accesibile, eliminând punțile termice.',
    beneficii: ['Grosime personalizabilă 20–40 cm', 'Fără rosturi sau punți termice', 'Montaj rapid 1–2 zile'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M4 22L20 6l16 16H4z" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="10" y="22" width="20" height="12" rx="1" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M16 28h8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titlu: 'Izolație Pereți',
    pret: '40 – 75 RON/m²',
    desc: 'Izolăm pereții exteriori și interiori prin insuflare în casetele structurale sau prin aplicare umedă pe suprafețe. Soluție ideală pentru case din lemn, beton sau BCA.',
    beneficii: ['Etanșeitate superioară la aer', 'Izolare fonică excelentă', 'Compatibil orice structură'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="30" height="30" rx="2" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M5 14h30M5 26h30M14 5v30M26 5v30" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    titlu: 'Izolație Pardoseală',
    pret: '30 – 55 RON/m²',
    desc: 'Umplerea spațiului de sub planșeele de lemn sau între grinzi cu celuloză insuflată uscat. Conferă confort termic, atenuare fonică și protecție împotriva umidității.',
    beneficii: ['Elimină curenții reci de la podea', 'Reducere zgomot impact', 'Fără vapori toxici'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="28" width="32" height="6" rx="1.5" stroke="var(--accent)" strokeWidth="2.5" />
        <rect x="4" y="18" width="32" height="8" rx="1" fill="rgba(52,211,153,0.12)" stroke="var(--accent)" strokeWidth="2" />
        <path d="M10 18V8M20 18V8M30 18V8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    titlu: 'Audit Energetic Gratuit',
    pret: 'Gratuit',
    desc: 'Efectuăm auditul energetic preliminar al imobilului tău fără costuri. Identificăm punțile termice, pierderile de căldură și îți recomandăm soluția optimă de izolație.',
    beneficii: ['Raport termic detaliat', 'Ofertă personalizată', 'Fără obligații'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="18" r="11" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M20 10v8l5 3" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 32l-4 4M28 32l4 4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const avantaje = [
  {
    titlu: '100% Eco — 85% Reciclat',
    desc: 'Celuloza noastră conține minimum 85% hârtie de ziar reciclată. Zero gaze fluorurate, zero CFC, amprentă de carbon minimă față de orice alt izolant.',
    culoare: 'var(--green-900)',
    textCuloare: '#fff',
  },
  {
    titlu: 'Clasa Foc B s1 d0',
    desc: 'Materialul nostru este tratat cu săruri de bor și obține clasa B s1 d0 conform EN 13501-1 — nu arde, nu propagă flacăra și nu produce fum dens.',
    culoare: 'var(--green-50)',
    textCuloare: 'var(--green-900)',
  },
  {
    titlu: 'Garanție 30 de Ani',
    desc: 'Oferim garanție de 30 de ani pentru materialul montat și garanție de execuție de 5 ani. Calitatea lucrării este documentată foto și consemnată în procesul-verbal.',
    culoare: 'var(--green-50)',
    textCuloare: 'var(--green-900)',
  },
  {
    titlu: 'Certificare nZEB',
    desc: 'Suntem prima companie din România certificată nZEB în domeniul izolațiilor din celuloză. Proiectele noastre contribuie la obținerea clasei energetice A și A+.',
    culoare: 'var(--green-900)',
    textCuloare: '#fff',
  },
];

export default function Servicii() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'var(--green-900)',
          padding: '6rem 0 4rem',
          color: '#fff',
          position: 'relative' as const,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute' as const,
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(52,211,153,0.08) 0%, transparent 60%)',
            pointerEvents: 'none' as const,
          }}
        />
        <div className="container" style={{ position: 'relative' as const }}>
          <p className="section__overline">Ce facem</p>
          <h1
            style={{
              fontSize: 'clamp(2.25rem,5vw,4rem)',
              fontWeight: 900,
              color: '#fff',
              marginTop: '0.5rem',
              lineHeight: 1.15,
            }}
          >
            Servicii de izolație termică
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              marginTop: '1.25rem',
              fontSize: 'clamp(1rem,2vw,1.2rem)',
              maxWidth: '55ch',
              lineHeight: 1.7,
            }}
          >
            De la auditul energetic gratuit până la montajul certificat — oferim soluții complete
            de izolație din celuloză reciclată pentru orice tip de imobil.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' as const }}>
            <Link href="/contact#oferta" className="btn btn--accent">
              Solicită ofertă gratuită
            </Link>
            <Link
              href="/calculator"
              className="btn btn--outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Calculator preț
            </Link>
          </div>
        </div>
      </section>

      {/* Grid servicii */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Portofoliu de servicii</p>
            <h2 className="section__title">Ce putem face pentru tine</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '52ch', margin: '0.75rem auto 0' }}>
              Fiecare proiect primește o soluție personalizată, dimensionată pe nevoile clădirii tale și
              pe bugetul disponibil.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {servicii.map(({ titlu, pret, desc, beneficii, icon }) => (
              <div
                key={titlu}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--gray-100)',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--green-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--green-100)',
                  }}
                >
                  {icon}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--green-900)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {titlu}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--accent-dim)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {pret}
                  </p>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.4rem', marginTop: 'auto' }}>
                  {beneficii.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--gray-700)',
                      }}
                    >
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De ce CELLARIS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Avantaje competitive</p>
            <h2 className="section__title">De ce CELLARIS?</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '52ch', margin: '0.75rem auto 0' }}>
              Nu suntem simpli instalatori — suntem partenerul tău pe termen lung în eficiența energetică
              a imobilului.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {avantaje.map(({ titlu, desc, culoare, textCuloare }) => (
              <div
                key={titlu}
                style={{
                  padding: '2.5rem 2rem',
                  background: culoare,
                  borderRadius: 'var(--radius-xl)',
                  border: culoare === 'var(--green-50)' ? '1px solid var(--green-100)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: textCuloare,
                    marginBottom: '0.75rem',
                  }}
                >
                  {titlu}
                </h3>
                <p
                  style={{
                    color: culoare === 'var(--green-900)' ? 'rgba(255,255,255,0.65)' : 'var(--gray-700)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Cum lucrăm</p>
            <h2 className="section__title">Procesul nostru în 4 pași</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { nr: '01', titlu: 'Solicitare & Audit', desc: 'Completezi formularul sau ne suni. Venim gratuit la fața locului pentru un audit termic preliminar.' },
              { nr: '02', titlu: 'Ofertă personalizată', desc: 'În 24h primești o ofertă detaliată cu grosimea recomandată, consumul de material și prețul final.' },
              { nr: '03', titlu: 'Montaj certificat', desc: 'Echipa noastră autorizată realizează lucrarea în timpul convenit, cu materiale certificate ISO.' },
              { nr: '04', titlu: 'Control & Garanție', desc: 'La final efectuăm un control de calitate și eliberăm certificatul de garanție de 30 de ani.' },
            ].map(({ nr, titlu, desc }) => (
              <div
                key={nr}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--gray-100)',
                  position: 'relative' as const,
                }}
              >
                <span
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'var(--green-100)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {nr}
                </span>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--green-900)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {titlu}
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.65, fontSize: '0.9rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--green-900)',
          padding: '5rem 0',
          textAlign: 'center' as const,
        }}
      >
        <div className="container">
          <p className="section__overline">Hai să începem</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,3rem)',
              fontWeight: 800,
              color: '#fff',
              marginTop: '0.5rem',
            }}
          >
            Solicită auditul energetic gratuit
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              marginTop: '1rem',
              marginBottom: '2rem',
              fontSize: '1.05rem',
              maxWidth: '48ch',
              margin: '1rem auto 2rem',
            }}
          >
            Fără costuri ascunse, fără angajamente. Descoperă cât poți economisi pe factura la
            căldură cu izolație CELLARIS.
          </p>
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}
          >
            <Link href="/contact#oferta" className="btn btn--accent">
              Solicită ofertă gratuită
            </Link>
            <Link
              href="/proiecte"
              className="btn btn--outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Vezi proiectele noastre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
