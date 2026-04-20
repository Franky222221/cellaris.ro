import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Pregătit să reduci factura<br />cu <em>40–65%</em>?</h2>
        <p>Evaluare gratuită. Răspundem în 2 ore, vizită în 48h, ofertă fixă fără obligații.</p>
        <div className="cta-banner__actions">
          <Link href="/contact#oferta" className="btn btn--accent btn--lg">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
            </svg>
            Solicită ofertă gratuită
          </Link>
          <Link href="/calculator" className="btn btn--outline-white btn--lg">Calculator preț instant</Link>
        </div>
      </div>
    </section>
  );
}
