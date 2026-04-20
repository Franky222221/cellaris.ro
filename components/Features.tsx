const features = [
  {
    title: 'Performanță termică superioară',
    desc: 'λ = 0,038 W/mK, acoperire omogenă fără punți termice, eficiență certificată prin termoviziune.',
    icon: <><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /><line x1="12" y1="9" x2="12" y2="6" /></>,
  },
  {
    title: '100% material ecologic',
    desc: 'Hârtie reciclată, fără fibră de sticlă sau plastic. CO₂ de 6× mai mic față de vata minerală.',
    icon: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>,
  },
  {
    title: 'Izolare fonică excelentă',
    desc: 'Reducere zgomot cu 50+ dB. Structura fibrilară absoarbe vibrațiile — efect imediat.',
    icon: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></>,
  },
  {
    title: 'Reglare naturală umiditate',
    desc: 'Absoarbe și cedează umiditatea fără a pierde proprietăți termice — fără condens, fără mucegai.',
    icon: <><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /><path d="M8 14c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5" /></>,
  },
  {
    title: 'Rezistență la foc (Euroclass E)',
    desc: 'Tratat cu săruri de bor ignifuge. Nu propagă flacăra, nu eliberează gaze toxice.',
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8c0 2.5-2 3-2 5s2 3 2 3 2-1 2-3-2-2.5-2-5z" /></>,
  },
  {
    title: 'ROI în 4–6 ani garantat',
    desc: 'Factura de energie scade cu 40–65%. Cu prețurile actuale, amortizare completă sub 6 ani.',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  },
];

export default function Features() {
  return (
    <section className="features section">
      <div className="container">
        <div className="section__header section__header--center" data-reveal>
          <p className="section__overline">De ce CELLARIS</p>
          <h2 className="section__title">Avantaje care contează</h2>
          <p className="section__sub">Nu vindem izolație — oferim confort, economie și liniște pentru 25+ ani.</p>
        </div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div className="feature-card" data-reveal data-delay={i < 3 ? i * 100 : (i - 3) * 100} key={f.title}>
              <div className="feature-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
