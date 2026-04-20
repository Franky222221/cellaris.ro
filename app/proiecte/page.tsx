import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proiecte Finalizate | CELLARIS — Portofoliu Izolații din Celuloză',
  description:
    'Peste 3000 de proiecte finalizate de izolație din celuloză în toată România — vile, blocuri rezidențiale, case pasive și clădiri nZEB. Vezi portofoliul CELLARIS.',
  alternates: { canonical: '/proiecte' },
};

const proiecte = [
  {
    id: 'vila-floresti-cluj',
    nume: 'Vilă unifamilială Florești',
    locatie: 'Florești, Cluj',
    suprafata: '320 m²',
    sistem: 'nZEB',
    tip: 'Acoperiș + Pereți',
    an: '2024',
    desc: 'Izolație completă acoperiș și pereți exteriori pentru vilă unifamilială P+1E, cu certificare nZEB. Reducere facturi energie 72%.',
    sistemeColor: 'var(--accent)',
    sistemeTextColor: 'var(--green-950)',
  },
  {
    id: 'bloc-rezidential-timisoara',
    nume: 'Bloc rezidențial 8 etaje',
    locatie: 'Timișoara, Timiș',
    suprafata: '1.850 m²',
    sistem: 'Standard',
    tip: 'Pereți',
    an: '2024',
    desc: 'Izolarea pereților exteriori ai unui bloc cu 8 etaje și 48 de apartamente. Proiect realizat fără evacuarea locatarilor.',
    sistemeColor: 'var(--green-600)',
    sistemeTextColor: '#fff',
  },
  {
    id: 'casa-pasiva-brasov',
    nume: 'Casă pasivă Brașov',
    locatie: 'Brașov, Brașov',
    suprafata: '180 m²',
    sistem: 'Pasiv',
    tip: 'Acoperiș + Pereți + Pardoseală',
    an: '2023',
    desc: 'Izolație completă pentru certificare standard Casă Pasivă. Grosime celuloză acoperiș: 40 cm. Prima casă pasivă certificată cu CELLARIS.',
    sistemeColor: '#fff',
    sistemeTextColor: 'var(--green-900)',
  },
  {
    id: 'hala-industriala-ploiesti',
    nume: 'Hală industrială renovată',
    locatie: 'Ploiești, Prahova',
    suprafata: '2.400 m²',
    sistem: 'Standard',
    tip: 'Acoperiș',
    an: '2023',
    desc: 'Izolația termică a acoperișului unei hale de producție reconvertite în spații de birouri. Montaj realizat în 5 zile lucrătoare.',
    sistemeColor: 'var(--green-600)',
    sistemeTextColor: '#fff',
  },
  {
    id: 'ansamblu-rezidential-ilfov',
    nume: 'Ansamblu rezidențial — 24 case',
    locatie: 'Chitila, Ilfov',
    suprafata: '4.320 m²',
    sistem: 'nZEB',
    tip: 'Acoperiș + Pardoseală',
    an: '2024',
    desc: 'Izolarea unui ansamblu de 24 de case individuale tip townhouse. Contract cadru cu dezvoltatorul imobiliar. Executat în 3 luni.',
    sistemeColor: 'var(--accent)',
    sistemeTextColor: 'var(--green-950)',
  },
  {
    id: 'scoala-reabilitata-sibiu',
    nume: 'Școală reabilitată energetic',
    locatie: 'Sibiu, Sibiu',
    suprafata: '980 m²',
    sistem: 'nZEB',
    tip: 'Acoperiș + Pereți',
    an: '2022',
    desc: 'Reabilitare termică finanțată prin fonduri europene. Reducerea consumului de energie cu 68%. Lucrare finalizată pe durata vacanței de vară.',
    sistemeColor: 'var(--accent)',
    sistemeTextColor: 'var(--green-950)',
  },
];

const statistici = [
  { valoare: '3.000+', eticheta: 'Proiecte finalizate' },
  { valoare: '850.000 m²', eticheta: 'Suprafață totală izolată' },
  { valoare: '41', eticheta: 'Județe acoperite' },
  { valoare: '94%', eticheta: 'Clienți mulțumiți' },
];

export default function Proiecte() {
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
            background: 'radial-gradient(ellipse at 80% 40%, rgba(52,211,153,0.1) 0%, transparent 55%)',
            pointerEvents: 'none' as const,
          }}
        />
        <div className="container" style={{ position: 'relative' as const }}>
          <p className="section__overline">Portofoliu</p>
          <h1
            style={{
              fontSize: 'clamp(2.25rem,5vw,4rem)',
              fontWeight: 900,
              color: '#fff',
              marginTop: '0.5rem',
              lineHeight: 1.15,
            }}
          >
            Proiecte finalizate
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              marginTop: '1.25rem',
              fontSize: 'clamp(1rem,2vw,1.2rem)',
              maxWidth: '52ch',
              lineHeight: 1.7,
            }}
          >
            Peste <strong style={{ color: 'var(--accent)' }}>3.000 de proiecte</strong> în toată
            România — de la case unifamiliale la ansambluri rezidențiale și clădiri publice.
          </p>

          {/* Mini-stats hero */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap' as const,
            }}
          >
            {statistici.map(({ valoare, eticheta }) => (
              <div key={eticheta}>
                <p
                  style={{
                    fontSize: 'clamp(1.5rem,3vw,2.25rem)',
                    fontWeight: 900,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  {valoare}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                  {eticheta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtre statice */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--gray-100)', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const, alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', fontWeight: 600, marginRight: '0.5rem' }}>
              Filtrează:
            </span>
            {['Toate', 'Acoperiș', 'Pereți', 'Pardoseală'].map((filtru, i) => (
              <span
                key={filtru}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  background: i === 0 ? 'var(--green-900)' : 'var(--green-50)',
                  color: i === 0 ? '#fff' : 'var(--green-800)',
                  border: i === 0 ? 'none' : '1px solid var(--green-200)',
                  cursor: 'default',
                }}
              >
                {filtru}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid proiecte */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {proiecte.map(({ id, nume, locatie, suprafata, sistem, tip, an, desc, sistemeColor, sistemeTextColor }) => (
              <article
                key={id}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--gray-100)',
                  display: 'flex',
                  flexDirection: 'column' as const,
                }}
              >
                {/* Imagine placeholder */}
                <div
                  style={{
                    height: 200,
                    background: 'linear-gradient(135deg, var(--green-900) 0%, var(--green-700) 60%, var(--green-800) 100%)',
                    position: 'relative' as const,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative pattern */}
                  <div
                    style={{
                      position: 'absolute' as const,
                      inset: 0,
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(52,211,153,0.04) 0px, rgba(52,211,153,0.04) 1px, transparent 1px, transparent 16px),
                        repeating-linear-gradient(-45deg, rgba(52,211,153,0.04) 0px, rgba(52,211,153,0.04) 1px, transparent 1px, transparent 16px)`,
                    }}
                  />
                  {/* House/Building SVG icon */}
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true" style={{ position: 'relative' as const, opacity: 0.8 }}>
                    <path d="M8 40L36 12l28 28H8z" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.05)" />
                    <rect x="16" y="40" width="40" height="22" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="rgba(255,255,255,0.05)" />
                    <rect x="28" y="50" width="16" height="12" rx="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    <rect x="20" y="46" width="8" height="8" rx="1" stroke="var(--accent)" strokeWidth="1.5" />
                    <rect x="44" y="46" width="8" height="8" rx="1" stroke="var(--accent)" strokeWidth="1.5" />
                  </svg>

                  {/* Badge sistem */}
                  <span
                    style={{
                      position: 'absolute' as const,
                      top: '1rem',
                      left: '1rem',
                      background: sistemeColor,
                      color: sistemeTextColor,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      letterSpacing: '0.05em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    {sistem}
                  </span>

                  {/* An */}
                  <span
                    style={{
                      position: 'absolute' as const,
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.35)',
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.65rem',
                      borderRadius: '999px',
                    }}
                  >
                    {an}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                  <div>
                    <h2
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {nume}
                    </h2>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>{locatie}</p>
                  </div>

                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.65, fontSize: '0.9rem' }}>{desc}</p>

                  {/* Meta info */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      marginTop: 'auto',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--gray-100)',
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.1rem' }}>
                        Suprafață
                      </p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--green-800)' }}>{suprafata}</p>
                    </div>
                    <div style={{ borderLeft: '1px solid var(--gray-100)', paddingLeft: '1rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.1rem' }}>
                        Tip
                      </p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--green-800)' }}>{tip}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / social proof banner */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                citat: '"Echipa CELLARIS a izolat podul casei în 2 zile. Factura la gaz a scăzut cu 60% în primul sezon."',
                autor: 'Mihai D.',
                locatie: 'Cluj-Napoca',
              },
              {
                citat: '"Am ales CELLARIS pentru ansamblul nostru rezidențial datorită certificărilor nZEB și garanției de 30 ani."',
                autor: 'SC Construct RO SRL',
                locatie: 'București',
              },
              {
                citat: '"Auditul energetic gratuit m-a convins. Soluția propusă era exactă — nu prea puțin, nu prea mult."',
                autor: 'Elena M.',
                locatie: 'Brașov',
              },
            ].map(({ citat, autor, locatie }) => (
              <div
                key={autor}
                style={{
                  padding: '2rem',
                  background: 'var(--green-50)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--green-100)',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--gray-700)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '1.25rem',
                  }}
                >
                  {citat}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--green-600), var(--accent))',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--green-900)', fontSize: '0.9rem' }}>{autor}</p>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>{locatie}</p>
                  </div>
                </div>
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
          <p className="section__overline">Fii următorul</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,3rem)',
              fontWeight: 800,
              color: '#fff',
              marginTop: '0.5rem',
            }}
          >
            Ești următorul nostru proiect?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              marginTop: '1rem',
              fontSize: '1.05rem',
              maxWidth: '48ch',
              margin: '1rem auto 2rem',
            }}
          >
            Solicită un audit energetic gratuit și adaugă-te în portofoliul CELLARIS alături de
            3.000+ proprietari mulțumiți.
          </p>
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}
          >
            <Link href="/contact#oferta" className="btn btn--accent">
              Solicită audit gratuit
            </Link>
            <Link
              href="/servicii"
              className="btn btn--outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Descoperă serviciile
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
