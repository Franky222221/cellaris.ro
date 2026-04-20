import Link from 'next/link';

const projects = [
  { cls: 'project-card--a', label: 'Vilă pasivă, Snagov', tag: 'Vilă pasivă', name: 'Vilă Passivhaus, Snagov', detail: '380 m² · 12 kWh/m²/an · EPC A+', bg: 'linear-gradient(135deg,#102018 0%,#2D6148 50%,#89BFA4 100%)', delay: 0 },
  { cls: 'project-card--b', label: 'Bloc, Sector 3', tag: 'Rezidențial', name: 'Bloc 32 ap., Sector 3', detail: '1.200 m² · −58% energie', bg: 'linear-gradient(135deg,#224934 0%,#5A9E7E 100%)', delay: 100 },
  { cls: 'project-card--c', label: 'Hală, Ploiești', tag: 'Industrial', name: 'Hală producție, Ploiești', detail: '2.400 m² · 4 zile', bg: 'linear-gradient(135deg,#1B3A2D 0%,#89BFA4 100%)', delay: 200 },
  { cls: 'project-card--d', label: 'Renovare, Floreasca', tag: 'Renovare', name: 'Interbelică, Floreasca', detail: 'G → A în 6 săptămâni', bg: 'linear-gradient(135deg,#102018 0%,#3A7A5C 100%)', delay: 300 },
];

export default function Projects() {
  return (
    <section className="projects section" id="proiecte">
      <div className="container">
        <div className="projects__header">
          <div data-reveal>
            <p className="section__overline">Portofoliu</p>
            <h2 className="section__title">Proiecte finalizate</h2>
          </div>
          <Link href="/proiecte" className="btn btn--outline" data-reveal data-delay={200}>Toate →</Link>
        </div>

        <div className="projects__grid">
          {projects.map(p => (
            <article className={`project-card ${p.cls}`} data-reveal data-delay={p.delay} aria-label={p.label} key={p.name}>
              <div className="project-card__bg" style={{ background: p.bg, width: '100%', height: '100%' }} />
              <div className="project-card__info">
                <span className="project-card__tag">{p.tag}</span>
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__detail">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
