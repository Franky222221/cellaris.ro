import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Despre Noi | CELLARIS — Izolații din Fibre de Celuloză',
  description:
    'Povestea CELLARIS — producător român de izolații din fibre de celuloză reciclată. Misiune, viziune, echipă, valori și 3000+ proiecte finalizate din 2018.',
  alternates: { canonical: '/despre-noi' },
};

const echipa = [
  {
    nume: 'Andrei Ionescu',
    rol: 'CEO & Fondator',
    bio: 'Inginer constructor cu 18 ani de experiență, pasionat de construcțiile sustenabile și certificarea nZEB. A fondat CELLARIS în 2018 cu viziunea de a face izolația ecologică accesibilă tuturor.',
    initiale: 'AI',
  },
  {
    nume: 'Maria Constantin',
    rol: 'Director Tehnic',
    bio: 'Specialist în eficiență energetică și audituri termice. Coordonează echipa de montaj și asigură conformitatea tuturor proiectelor cu standardele nZEB și Casă Pasivă.',
    initiale: 'MC',
  },
  {
    nume: 'Radu Popa',
    rol: 'Manager Comercial',
    bio: 'Cu background în arhitectură și construcții verzi, Radu coordonează relațiile cu clienții și partenerii, asigurând că fiecare proiect pornește cu o ofertă tehnică precisă și transparentă.',
    initiale: 'RP',
  },
];

const valori = [
  {
    icon: '🌱',
    titlu: 'Sustenabilitate',
    desc: 'Utilizăm exclusiv celuloză reciclată din hârtie de ziar și carton, reducând deșeurile și amprenta de carbon. Fiecare proiect al nostru contribuie la economia circulară.',
  },
  {
    icon: '⭐',
    titlu: 'Calitate',
    desc: 'Materialele noastre trec prin teste riguroase de performanță termică, rezistență la foc și umiditate. Garanția de 30 de ani nu este doar o promisiune — este dovada încrederii noastre în produs.',
  },
  {
    icon: '🔍',
    titlu: 'Transparență',
    desc: 'Ofertăm complet și detaliat, fără costuri ascunse. Clientul știe exact ce primește, la ce preț și în ce termen, înainte de a semna orice document.',
  },
  {
    icon: '💡',
    titlu: 'Inovație',
    desc: 'Investim constant în echipamente de ultimă generație și în formarea echipelor noastre. Suntem primii din România care utilizează tehnologia de insuflare umedă pentru maximizarea aderenței în structuri.',
  },
];

const timeline = [
  { an: '2018', eveniment: 'Fondarea CELLARIS', desc: 'Andrei Ionescu fondează CELLARIS cu o echipă de 4 persoane și primul utilaj de insuflare din producție proprie.' },
  { an: '2019', eveniment: 'Primele 100 de proiecte', desc: 'Expansiune rapidă în zona București-Ilfov. Achiziționarea primului parc de utilaje profesionale pentru montaj.' },
  { an: '2020', eveniment: '500 proiecte finalizate', desc: 'CELLARIS depășește 500 de proiecte și se extinde în județele Prahova, Dâmbovița și Giurgiu.' },
  { an: '2021', eveniment: 'Parteneriat ISOCELL', desc: 'Parteneriat strategic cu producătorul austriac ISOCELL pentru calificarea ca distribuitor oficial în România.' },
  { an: '2022', eveniment: 'Certificare nZEB', desc: 'CELLARIS obține certificarea oficială pentru sisteme de construcții cu consum de energie aproape zero (nZEB), prima din sectorul izolațiilor din celuloză din România.' },
  { an: '2023', eveniment: '1500+ proiecte', desc: 'Echipa ajunge la 35 de angajați și operaționalizează un al doilea depozit regional în Ploiești.' },
  { an: '2025', eveniment: '3000+ proiecte', desc: 'CELLARIS devine liderul pieței de izolații din celuloză din România, cu o rată de recomandare de 94% din clienții existenți.' },
];

const statistici = [
  { valoare: '3.200+', eticheta: 'Proiecte finalizate' },
  { valoare: '18.000+', eticheta: 'Tone CO₂ economisite' },
  { valoare: '850.000 m²', eticheta: 'Suprafață izolată' },
  { valoare: '94%', eticheta: 'Clienți care recomandă' },
];

export default function DespreNoi() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 5rem', color: '#fff', position: 'relative' as const, overflow: 'hidden' }}>
        <div style={{ position: 'absolute' as const, inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(52,211,153,0.08) 0%, transparent 60%)', pointerEvents: 'none' as const }} />
        <div className="container" style={{ position: 'relative' as const }}>
          <p className="section__overline">Povestea noastră</p>
          <h1 style={{ fontSize: 'clamp(2.25rem,5vw,4rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem', lineHeight: 1.15 }}>
            Povestea CELLARIS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '1.25rem', fontSize: 'clamp(1rem,2vw,1.2rem)', maxWidth: '55ch', lineHeight: 1.7 }}>
            Din 2018, construim un viitor mai cald și mai verde — un proiect la un moment dat.
            Suntem producătorul de izolații din fibre de celuloză cu cel mai mare număr de
            proiecte certificate nZEB din România.
          </p>
        </div>
      </section>

      {/* Misiune & Viziune */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Ce ne ghidează</p>
            <h2 className="section__title">Misiune &amp; Viziune</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: 'var(--green-900)', borderRadius: 'var(--radius-xl)', color: '#fff', position: 'relative' as const, overflow: 'hidden' }}>
              <div style={{ position: 'absolute' as const, top: 0, right: 0, width: 120, height: 120, background: 'rgba(52,211,153,0.1)', borderRadius: '0 var(--radius-xl) 0 100%' }} />
              <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', marginBottom: '1rem' }}>MISIUNE</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.5, marginBottom: '1rem' }}>
                Să facem izolația ecologică accesibilă și performantă pentru orice tip de imobil din România.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                Oferim soluții complete de izolație din celuloză reciclată — de la consultanță tehnică
                și audit energetic, până la montaj certificat și urmărire post-lucrare — cu cel mai bun
                raport calitate-preț de pe piață.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: 'var(--green-50)', borderRadius: 'var(--radius-xl)', border: '2px solid var(--green-100)', position: 'relative' as const, overflow: 'hidden' }}>
              <div style={{ position: 'absolute' as const, top: 0, right: 0, width: 120, height: 120, background: 'rgba(52,211,153,0.08)', borderRadius: '0 var(--radius-xl) 0 100%' }} />
              <p style={{ color: 'var(--accent-dim)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', marginBottom: '1rem' }}>VIZIUNE</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--green-900)', lineHeight: 1.5, marginBottom: '1rem' }}>
                O Românie în care fiecare locuință este bine izolată, confortabilă și eficientă energetic.
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>
                Urmărim o lume în care construcțiile sustenabile sunt norma, nu excepția — și contribuim
                la acest obiectiv prin educație, inovație și exemple concrete de succes în comunitate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistici sustenabilitate */}
      <section style={{ background: 'var(--green-900)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Impact real</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, color: '#fff' }}>
              Cifrele care contează
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {statistici.map(({ valoare, eticheta }) => (
              <div key={eticheta} style={{ textAlign: 'center' as const, padding: '2rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <p style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{valoare}</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem', fontSize: '0.95rem' }}>{eticheta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Oamenii din spatele brandului</p>
            <h2 className="section__title">Echipa CELLARIS</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '52ch', margin: '0 auto', marginTop: '0.75rem' }}>
              O echipă de profesioniști pasionați care cred că izolația bună nu este un lux, ci o
              necesitate pentru confortul și sănătatea familiei dvs.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {echipa.map(({ nume, rol, bio, initiale }) => (
              <div key={nume} style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--green-600), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem' }}>{initiale}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.25rem' }}>{nume}</h3>
                <p style={{ color: 'var(--accent-dim)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{rol}</p>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: '0.95rem' }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p className="section__overline">Principiile noastre</p>
            <h2 className="section__title">Valorile CELLARIS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {valori.map(({ icon, titlu, desc }) => (
              <div key={titlu} style={{ padding: '2rem', background: 'var(--green-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--green-100)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.75rem' }}>{titlu}</h3>
                <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--green-950)' }}>
        <div className="container">
          <div className="section__header" style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p className="section__overline">Evoluție</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, color: '#fff' }}>
              Povestea în Cifre
            </h2>
          </div>
          <div style={{ position: 'relative' as const, maxWidth: 720, margin: '0 auto' }}>
            {/* Linie verticală */}
            <div style={{ position: 'absolute' as const, left: '5.5rem', top: 0, bottom: 0, width: 2, background: 'rgba(52,211,153,0.25)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2.5rem' }}>
              {timeline.map(({ an, eveniment, desc }, i) => (
                <div key={an} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', position: 'relative' as const }}>
                  {/* An */}
                  <div style={{ minWidth: '4.5rem', textAlign: 'right' as const }}>
                    <span style={{ fontWeight: 800, color: i === timeline.length - 1 ? 'var(--accent)' : 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>{an}</span>
                  </div>
                  {/* Dot */}
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: i === timeline.length - 1 ? 'var(--accent)' : 'var(--green-600)', border: '3px solid var(--green-950)', flexShrink: 0, marginTop: '0.15rem', zIndex: 1 }} />
                  {/* Content */}
                  <div>
                    <p style={{ fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{eveniment}</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustenabilitate */}
      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p className="section__overline">Responsabilitate</p>
              <h2 className="section__title" style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                Angajamentul nostru față de planetă
              </h2>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, marginTop: '1rem' }}>
                Fiecare tonă de izolație CELLARIS conține aproximativ 85% hârtie de ziar și carton
                reciclat. Prin procesul nostru de producție, transformăm deșeurile în resurse, evitând
                depozitarea lor la groapă de gunoi și economisind energia necesară producerii de
                materiale izolante tradiționale.
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, marginTop: '1rem' }}>
                Un metru pătrat de izolație CELLARIS cu grosimea de 30 cm economisește, pe durata
                de viață a clădirii, de până la 120 de ori energia necesară producerii sale — una dintre
                cele mai bune rate de energie încorporată din industrie.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { val: '85%', label: 'Conținut reciclat', bg: 'var(--green-900)', color: '#fff' },
                { val: '120×', label: 'Energie recuperată vs. producție', bg: 'var(--accent)', color: 'var(--green-950)' },
                { val: 'A+', label: 'Clasă energetică clădiri izolate', bg: 'var(--white)', color: 'var(--green-900)', border: '2px solid var(--green-200)' },
                { val: '0 CFC', label: 'Fără gaze fluorurate', bg: 'var(--green-800)', color: '#fff' },
              ].map(({ val, label, bg, color, border }) => (
                <div key={label} style={{ padding: '1.5rem 1rem', background: bg, borderRadius: 'var(--radius-lg)', border: border || 'none', textAlign: 'center' as const }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color, lineHeight: 1 }}>{val}</p>
                  <p style={{ fontSize: '0.8rem', color: color === '#fff' ? 'rgba(255,255,255,0.7)' : 'var(--gray-500)', marginTop: '0.5rem', lineHeight: 1.4 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)', padding: '5rem 0', textAlign: 'center' as const }}>
        <div className="container">
          <p className="section__overline">Lucrăm împreună</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginTop: '0.5rem' }}>
            Gata să îți izolezi imobilul?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Solicită o ofertă gratuită și fă cunoștință cu echipa CELLARIS.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/contact" className="btn btn--accent">Solicită ofertă gratuită</Link>
            <Link href="/calculator" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Calculator preț</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
