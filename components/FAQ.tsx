'use client';

import { useState } from 'react';
import Link from 'next/link';

const items = [
  { q: 'Ce este izolația din fibre de celuloză și cum diferă de vata minerală?', a: 'Produsă din hârtie reciclată tratată cu săruri de bor. Față de vata minerală: acoperire omogenă fără punți termice, reglare naturală umiditate și amprenta CO₂ de 6× mai mică.' },
  { q: 'Cât durează montajul și este deranjant pentru familie?', a: '150–200 mp în 1–2 zile. Praf minim (furtunuri sigilate). Familia poate rămâne în casă. Curățăm complet înainte de plecare.' },
  { q: 'Pot accesa finanțare pentru izolarea casei?', a: 'Da. Eligibil Casa Verde Plus, PNRR Renovare Energetică. Furnizăm toată documentația tehnică necesară dosarului de finanțare.' },
  { q: 'Care este garanția și ce include?', a: '25 ani garanție material, 5 ani manoperă. Include inspecție anuală gratuită și remediere fără costuri a oricărui defect de montaj.' },
  { q: 'În ce județe activați?', a: 'București (toate sectoarele), Ilfov, Prahova, Dâmbovița, Giurgiu, Călărași. Proiecte mari (500+ mp) — oriunde în țară.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__sticky" data-reveal="left">
            <p className="section__overline">Întrebări frecvente</p>
            <h2 className="section__title">Ai întrebări?<br />Avem răspunsuri.</h2>
            <p className="section__sub" style={{ marginTop: '.875rem' }}>Răspundem în maxim 2 ore la orice întrebare.</p>
            <Link href="/contact" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Contactează-ne</Link>
          </div>

          <div className="faq__list" data-reveal="right">
            {items.map((item, i) => (
              <div className={`faq__item${open === i ? ' is-open' : ''}`} key={i}>
                <button
                  className="faq__question"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && <div className="faq__answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
