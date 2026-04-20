const testimonials = [
  { text: 'Am redus factura la gaz cu 62% față de iarna trecută. Montajul a durat o zi, echipa a lăsat totul perfect curat.', name: 'Andrei M.', role: 'Proprietar vilă, Otopeni', initials: 'AM', delay: 0 },
  { text: 'Proiect nZEB finalizat la timp și în buget. Certificatul A ne-a ajutat să obținem finanțare bancară în condiții mai bune.', name: 'Ing. Ionescu C.', role: 'Arhitect, București', initials: 'IC', delay: 100 },
  { text: 'Casa din 1970 e acum mai caldă ca oricând. Zgomotul din stradă aproape că a dispărut. Investiție excelentă.', name: 'Gheorghe R.', role: 'Proprietar casă, Ploiești', initials: 'GR', delay: 200 },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section__header section__header--center" data-reveal>
          <p className="section__overline">Ce spun clienții</p>
          <h2 className="section__title">850+ familii mulțumite</h2>
          <p className="section__sub">Recenzii reale, verificate. Nu selectăm doar pe cele pozitive.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map(t => (
            <article className="testimonial-card" data-reveal data-delay={t.delay} key={t.name}>
              <div className="testimonial-card__stars" aria-label="5 stele">★★★★★</div>
              <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
