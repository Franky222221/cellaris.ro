import Link from 'next/link';

const products = [
  {
    name: 'CELLARIS Acoperiș',
    desc: 'Izolație insuflată pentru poduri și acoperișuri. Densitate 35–65 kg/m³.',
    specs: ['λ 0,038', '35–65 kg/m³', 'EN 15101'],
    price: 'De la 18 RON/m²',
    badge: 'Bestseller',
    href: '/shop#acoperis',
    bg: 'linear-gradient(135deg,#D6EBE1,#89BFA4)',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    iconStroke: 'rgba(27,58,45,.5)',
  },
  {
    name: 'CELLARIS Perete',
    desc: 'Sistem torcretat pentru pereți cavitate și structuri cu schelet din lemn.',
    specs: ['λ 0,040', '50–80 kg/m³', 'EN 15102'],
    price: 'De la 22 RON/m²',
    badge: 'nZEB',
    href: '/shop#perete',
    bg: 'linear-gradient(135deg,#EEF7F2,#5A9E7E)',
    icon: <><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2M2 12h20" /></>,
    iconStroke: 'rgba(27,58,45,.5)',
  },
  {
    name: 'CELLARIS Podea',
    desc: 'Izolație sub pardoseală flotantă. Compatibil cu încălzire prin pardoseală.',
    specs: ['λ 0,038', '45–70 kg/m³', 'EN 15101'],
    price: 'De la 20 RON/m²',
    badge: 'Casă pasivă',
    href: '/shop#podea',
    bg: 'linear-gradient(135deg,#F3EEE6,#3A7A5C)',
    icon: <><path d="M3 12h18M3 6h18M3 18h18" /><path d="M12 3v18" /></>,
    iconStroke: 'rgba(255,255,255,.6)',
  },
  {
    name: 'CELLARIS Renovare',
    desc: 'Kit complet pentru renovare — diagnosticare + material + montaj în 48h.',
    specs: ['Pachet full', 'Garanție extinsă'],
    price: 'Ofertă personalizată',
    badge: 'Premium',
    href: '/contact#oferta',
    bg: 'linear-gradient(135deg,#1B3A2D,#3A7A5C)',
    icon: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>,
    iconStroke: 'rgba(52,211,153,.5)',
    badgeStyle: { background: 'rgba(52,211,153,.15)', color: 'var(--accent)' },
  },
];

export default function Products() {
  return (
    <section className="products section" id="produse">
      <div className="container">
        <div className="products__header">
          <div data-reveal>
            <p className="section__overline">Gama de produse</p>
            <h2 className="section__title">Soluții pentru orice aplicație</h2>
          </div>
          <Link href="/shop" className="btn btn--outline" data-reveal data-delay={200}>Vezi toate →</Link>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <article className="product-card" data-reveal data-delay={i * 100} key={p.name}>
              <div className="product-card__image" style={{ background: p.bg }}>
                <span className="product-card__badge" style={p.badgeStyle}>{p.badge}</span>
                <div className="product-card__image-icon" aria-hidden="true">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={p.iconStroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </div>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <div className="product-card__specs">
                  {p.specs.map(s => <span className="product-spec-chip" key={s}>{s}</span>)}
                </div>
              </div>
              <div className="product-card__footer">
                <div className="product-card__price">
                  {p.name === 'CELLARIS Renovare'
                    ? <>Ofertă <strong>personalizată</strong></>
                    : <>De la <strong>{p.price.replace('De la ', '')}</strong></>
                  }
                </div>
                <Link href={p.href} className="btn btn--sm btn--primary">
                  {p.name === 'CELLARIS Renovare' ? 'Solicită' : 'Detalii'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
