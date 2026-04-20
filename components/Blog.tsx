import Link from 'next/link';

const posts = [
  {
    cat: 'Ghid tehnic', href: '/blog/izolatie-celuloza-vs-vata-minerala',
    title: 'Izolație celuloză vs vată minerală: comparație completă 2025',
    excerpt: 'Analiză detaliată: performanță termică, cost, impact ecologic și durabilitate.',
    date: '2025-03-15', dateLabel: '15 Mar 2025', readTime: '8 min',
    bg: 'linear-gradient(135deg,#D6EBE1,#3A7A5C)',
    delay: 0,
  },
  {
    cat: 'nZEB', href: '/blog/casa-nzeb-romania',
    title: 'Casă nZEB în România: cerințe, costuri și pași practici',
    excerpt: 'Tot ce trebuie să știi despre standardul Nearly Zero Energy Building în 2025.',
    date: '2025-02-28', dateLabel: '28 Feb 2025', readTime: '12 min',
    bg: 'linear-gradient(135deg,#EEF7F2,#1B3A2D)',
    delay: 100,
  },
  {
    cat: 'Finanțare', href: '/blog/finantare-izolatie-casa-verde',
    title: 'Finanțare izolație 2025: Casa Verde, PNRR și AFM — ghid complet',
    excerpt: 'Cum obții subvenție de până la 50.000 RON pentru izolarea casei.',
    date: '2025-01-10', dateLabel: '10 Ian 2025', readTime: '10 min',
    bg: 'linear-gradient(135deg,#F3EEE6,#2D6148)',
    delay: 200,
  },
];

export default function Blog() {
  return (
    <section className="blog section">
      <div className="container">
        <div className="blog__header">
          <div data-reveal>
            <p className="section__overline">Resurse &amp; Articole</p>
            <h2 className="section__title">Ghidul complet al izolației</h2>
          </div>
          <Link href="/blog" className="btn btn--outline" data-reveal data-delay={200}>Toate →</Link>
        </div>

        <div className="blog__grid">
          {posts.map(p => (
            <article className="blog-card" data-reveal data-delay={p.delay} key={p.href}>
              <div className="blog-card__img">
                <div className="blog-card__img-inner" style={{ background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(27,58,45,.45)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                </div>
              </div>
              <div className="blog-card__body">
                <span className="blog-card__cat">{p.cat}</span>
                <h3 className="blog-card__title">
                  <Link href={p.href}>{p.title}</Link>
                </h3>
                <p className="blog-card__excerpt">{p.excerpt}</p>
                <div className="blog-card__meta">
                  <time dateTime={p.date}>{p.dateLabel}</time>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
