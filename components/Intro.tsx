import Link from 'next/link';

export default function Intro() {
  return (
    <section className="intro section" id="despre">
      <div className="container">
        <div className="intro__grid">
          <div className="intro__copy" data-reveal>
            <p className="section__overline">Despre CELLARIS</p>
            <h2 className="section__title">Izolație naturală,<br />performanță certificată</h2>
            <p>
              CELLARIS produce și montează izolații din fibre de celuloză reciclată —
              soluția ecologică europeană cu cea mai bună eficiență termică per cost investit.
              Produsul nostru acoperă omogen orice suprafață, elimină punțile termice și reduce
              consumul energetic cu până la <strong>65%</strong>.
            </p>
            <p>Activăm în București, Prahova, Ilfov și județele limitrofe. Echipă proprie, utilaje performante, fără subcontractori.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/despre-noi" className="btn btn--primary">Află mai multe</Link>
              <Link href="/proiecte" className="btn btn--outline">Vezi proiecte</Link>
            </div>
          </div>

          <div className="intro__visual" data-reveal data-delay={200} aria-hidden="true">
            <div className="intro__visual-inner">
              <div className="intro__visual-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--green-300)" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="intro__visual-text">CELLARIS Insulation</div>
              <div className="intro__visual-sub">Celuloză reciclată premium</div>
              <div className="intro__visual-specs">
                {[
                  { val: '0,038', key: 'λ W/mK' },
                  { val: '35–65', key: 'kg/m³' },
                  { val: '25', key: 'ani garanție' },
                  { val: 'A+', key: 'clasă energetică' },
                ].map(s => (
                  <div className="intro__visual-spec" key={s.key}>
                    <div className="intro__visual-spec-val">{s.val}</div>
                    <div className="intro__visual-spec-key">{s.key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
