import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Produse Izolație Celuloză | CELLARIS — Magazin Online',
  description:
    'Cumpără saci de celuloză 15 kg, închiriază mașina de suflat sau comandă kitul starter DIY. Prețuri transparente, livrare națională, suport tehnic inclus.',
  alternates: { canonical: '/shop' },
};

const produse = [
  {
    id: 'sac-celuloza-15kg',
    nume: 'Sac celuloză 15 kg',
    pret: '~180 RON/sac',
    tag: 'Cel mai vândut',
    tagCuloare: 'var(--accent)',
    tagTextCuloare: 'var(--green-950)',
    desc: 'Granule de celuloză reciclată de înaltă performanță, tratate cu săruri de bor pentru rezistență la foc și mucegai. Ideal pentru instalatori și constructori care lucrează cu mașini de insuflare.',
    specs: [
      'Densitate vrac: ~45 kg/m³',
      'Conductivitate termică λ: 0.038 W/mK',
      'Clasă foc: B s1 d0 (EN 13501-1)',
      'Conținut reciclat: min. 85%',
    ],
    cta: 'Solicită ofertă',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="14" y="20" width="36" height="28" rx="4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <path d="M14 28h36" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <path d="M24 20V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <circle cx="32" cy="36" r="6" stroke="var(--accent)" strokeWidth="2" />
        <path d="M29 36l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'masina-suflat-celuloza',
    nume: 'Mașină suflat celuloză',
    pret: 'Închiriere / Vânzare',
    tag: 'Pro',
    tagCuloare: 'var(--green-600)',
    tagTextCuloare: '#fff',
    desc: 'Mașini profesionale de insuflare celuloză pentru proiecte mari. Disponibile la închiriere cu operator sau la vânzare pentru firme de construcții. Include furtune, duze și training de utilizare.',
    specs: [
      'Putere motor: 1.5 – 3 kW',
      'Debit: 80–200 kg/h',
      'Lungime furtun: 20–50 m',
      'Disponibil: închiriere zilnică / săptămânală',
    ],
    cta: 'Solicită detalii',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="10" y="24" width="28" height="18" rx="3" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <circle cx="20" cy="44" r="4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <circle cx="32" cy="44" r="4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <path d="M38 33h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-8" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <path d="M50 37h4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="30" r="3" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'kit-starter-izolatie',
    nume: 'Kit starter izolație DIY',
    pret: 'Pachet complet',
    tag: 'DIY',
    tagCuloare: '#fff',
    tagTextCuloare: 'var(--green-900)',
    desc: 'Tot ce ai nevoie pentru a-ți izola singur podul casei: saci de celuloză calibrați, dispozitiv de insuflare manual, folii de vapori, bandă izolatoare și ghid video pas cu pas.',
    specs: [
      'Include 10 saci celuloză 15 kg',
      'Dispozitiv insuflare manual inclus',
      'Folii și accesorii de etanșare',
      'Acces ghid video + suport tehnic',
    ],
    cta: 'Solicită ofertă',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 10L10 24v6h44v-6L32 10z" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinejoin="round" />
        <rect x="16" y="30" width="32" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <path d="M26 48V36h12v12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 24l10-7 10 7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Shop() {
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
            background: 'radial-gradient(ellipse at 30% 60%, rgba(52,211,153,0.1) 0%, transparent 55%)',
            pointerEvents: 'none' as const,
          }}
        />
        <div className="container" style={{ position: 'relative' as const }}>
          <p className="section__overline">Magazin</p>
          <h1
            style={{
              fontSize: 'clamp(2.25rem,5vw,4rem)',
              fontWeight: 900,
              color: '#fff',
              marginTop: '0.5rem',
              lineHeight: 1.15,
            }}
          >
            Produse izolație celuloză
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
            Material în saci, echipamente de insuflare și kituri complete DIY. Livrăm în toată
            România cu suport tehnic inclus.
          </p>
        </div>
      </section>

      {/* Notă prețuri */}
      <div style={{ background: 'var(--green-50)', borderBottom: '1px solid var(--green-100)' }}>
        <div className="container" style={{ padding: '1rem 0' }}>
          <p style={{ color: 'var(--green-800)', fontSize: '0.9rem', textAlign: 'center' as const }}>
            <strong>Notă:</strong> Prețurile sunt orientative. Contactați-ne pentru ofertă personalizată în funcție de cantitate și locație.
          </p>
        </div>
      </div>

      {/* Grid produse */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {produse.map(({ id, nume, pret, tag, tagCuloare, tagTextCuloare, desc, specs, cta, icon }) => (
              <div
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
                    background: 'linear-gradient(135deg, var(--green-900) 0%, var(--green-700) 100%)',
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative' as const,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute' as const,
                      inset: 0,
                      background: 'radial-gradient(ellipse at 80% 20%, rgba(52,211,153,0.15) 0%, transparent 60%)',
                    }}
                  />
                  {icon}
                  {/* Tag */}
                  <span
                    style={{
                      position: 'absolute' as const,
                      top: '1rem',
                      right: '1rem',
                      background: tagCuloare,
                      color: tagTextCuloare,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Conținut */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: '1rem',
                    flex: 1,
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {nume}
                    </h2>
                    <p
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--accent-dim)',
                      }}
                    >
                      {pret}
                    </p>
                  </div>

                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>

                  {/* Specificații */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column' as const,
                      gap: '0.35rem',
                    }}
                  >
                    {specs.map((s) => (
                      <li
                        key={s}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--gray-700)',
                        }}
                      >
                        <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>—</span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="btn btn--primary"
                    style={{ marginTop: 'auto', textAlign: 'center' as const }}
                  >
                    {cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficii cumpărare */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">De ce să cumperi de la noi</p>
            <h2 className="section__title">Garanții la fiecare comandă</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 4l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L16 21.5l-6.8 3.5 1.3-7.6L5 12.1l7.5-1.1L16 4z" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                ),
                titlu: 'Material certificat ISO',
                desc: 'Toate produsele sunt certificate EN 15101-1 și EN 13501-1 pentru clasă termică și foc.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <rect x="4" y="8" width="24" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.8" />
                    <path d="M4 14h24" stroke="var(--accent)" strokeWidth="1.8" />
                    <path d="M10 20h4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
                titlu: 'Livrare națională',
                desc: 'Livrăm în toată România prin curier rapid sau transport propriu pentru comenzi mari.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="11" stroke="var(--accent)" strokeWidth="1.8" />
                    <path d="M12 16l3 3 5-5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                titlu: 'Suport tehnic gratuit',
                desc: 'Echipa noastră te ghidează la telefon sau video pentru instalare corectă și eficientă.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 4c6.6 0 12 5.4 12 12S22.6 28 16 28 4 22.6 4 16 9.4 4 16 4z" stroke="var(--accent)" strokeWidth="1.8" />
                    <path d="M16 10v6l4 2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                titlu: 'Ofertă în 24h',
                desc: 'Trimitem o cotație personalizată în mai puțin de 24 de ore de la solicitare.',
              },
            ].map(({ icon, titlu, desc }) => (
              <div
                key={titlu}
                style={{
                  padding: '1.75rem',
                  background: 'var(--green-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--green-100)',
                  textAlign: 'center' as const,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--green-900)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {titlu}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: 1.65 }}>{desc}</p>
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
          <p className="section__overline">Comenzi și parteneriate</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,3rem)',
              fontWeight: 800,
              color: '#fff',
              marginTop: '0.5rem',
            }}
          >
            Ești instalator sau constructor?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              marginTop: '1rem',
              marginBottom: '2rem',
              fontSize: '1.05rem',
              maxWidth: '50ch',
              margin: '1rem auto 2rem',
            }}
          >
            Oferim prețuri preferențiale la volum, suport tehnic dedicat și program de parteneriat
            pentru firme de construcții și instalatori autorizați.
          </p>
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}
          >
            <Link href="/contact" className="btn btn--accent">
              Solicită ofertă
            </Link>
            <Link
              href="/servicii"
              className="btn btn--outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Vezi serviciile noastre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
