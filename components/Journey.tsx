'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Hârtie reciclată',
    sub: 'Ziare, reviste, ambalaje post-consum',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="5" width="16" height="20" rx="2" opacity={0.35} />
        <rect x="7" y="7" width="16" height="20" rx="2" />
        <line x1="11" y1="13" x2="19" y2="13" /><line x1="11" y1="17" x2="19" y2="17" /><line x1="11" y1="21" x2="16" y2="21" />
        <path d="M22 4 l2 2-2 2" strokeWidth={1.3} /><path d="M24 6 C24 3.5 21.5 2 20 2" strokeWidth={1.3} fill="none" />
      </svg>
    ),
    detailIcon: (
      <svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="5" width="16" height="20" rx="2" opacity={0.3} />
        <rect x="7" y="7" width="16" height="20" rx="2" />
        <line x1="11" y1="13" x2="19" y2="13" /><line x1="11" y1="17" x2="19" y2="17" /><line x1="11" y1="21" x2="16" y2="21" />
        <path d="M22 4 l2 2-2 2" strokeWidth={1.3} /><path d="M24 6 C24 3.5 21.5 2 20 2" strokeWidth={1.3} fill="none" />
      </svg>
    ),
    badge: '01 — Materie primă',
    detailTitle: 'Hârtie reciclată',
    body: 'Colectăm ziare, reviste și ambalaje de hârtie post-consum. Fiecare tonă de hârtie reciclată salvează 17 copaci și reduce consumul de apă cu 50%. Sursa noastră primară provine de la centre autorizate de colectare selectivă din România.',
  },
  {
    num: '02',
    title: 'Măcinare & tratare',
    sub: 'Procesare cu săruri de bor în fabrica noastră',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="12" width="20" height="10" rx="2" />
        <line x1="10" y1="12" x2="10" y2="9" /><line x1="14" y1="12" x2="14" y2="9" />
        <line x1="18" y1="12" x2="18" y2="9" /><line x1="22" y1="12" x2="22" y2="9" />
        <path d="M16 5 v4" strokeWidth={1.4} /><polyline points="13,8 16,5 19,8" strokeWidth={1.4} />
        <line x1="10" y1="22" x2="9" y2="26" strokeWidth={1.2} opacity={0.6} />
        <line x1="14" y1="22" x2="13" y2="27" strokeWidth={1.2} opacity={0.6} />
        <line x1="18" y1="22" x2="18" y2="27" strokeWidth={1.2} opacity={0.6} />
        <line x1="22" y1="22" x2="23" y2="26" strokeWidth={1.2} opacity={0.6} />
      </svg>
    ),
    detailIcon: (
      <svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="12" width="20" height="10" rx="2" />
        <line x1="10" y1="12" x2="10" y2="9" /><line x1="14" y1="12" x2="14" y2="9" />
        <line x1="18" y1="12" x2="18" y2="9" /><line x1="22" y1="12" x2="22" y2="9" />
        <path d="M16 5 v4" /><polyline points="13,8 16,5 19,8" />
        <line x1="10" y1="22" x2="9" y2="26" opacity={0.5} />
        <line x1="14" y1="22" x2="13" y2="27" opacity={0.5} />
        <line x1="18" y1="22" x2="18" y2="27" opacity={0.5} />
        <line x1="22" y1="22" x2="23" y2="26" opacity={0.5} />
      </svg>
    ),
    badge: '02 — Procesare',
    detailTitle: 'Măcinare & tratare cu săruri de bor',
    body: 'Hârtia este tăiată și măcinată mecanic, fără adaos de adezivi sau plastic. Se adaugă săruri de bor naturale (acid boric + borax) pentru rezistență la foc (Euroclass E), dăunători și mucegai. Procesul consumă de 8× mai puțină energie față de producția vatei minerale.',
  },
  {
    num: '03',
    title: 'Fibre de celuloză',
    sub: 'λ = 0,038 W/mK · structură fibrilară unică',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="2.5" />
        <line x1="16" y1="13.5" x2="16" y2="6" /><line x1="13.8" y1="14.3" x2="8" y2="10" />
        <line x1="13.8" y1="17.7" x2="8" y2="22" /><line x1="16" y1="18.5" x2="16" y2="26" />
        <line x1="18.2" y1="17.7" x2="24" y2="22" /><line x1="18.2" y1="14.3" x2="24" y2="10" />
        <circle cx="16" cy="5.5" r="1.3" fill="currentColor" opacity={0.5} />
        <circle cx="7.5" cy="9.5" r="1.3" fill="currentColor" opacity={0.5} />
        <circle cx="7.5" cy="22.5" r="1.3" fill="currentColor" opacity={0.5} />
        <circle cx="16" cy="26.5" r="1.3" fill="currentColor" opacity={0.5} />
        <circle cx="24.5" cy="22.5" r="1.3" fill="currentColor" opacity={0.5} />
        <circle cx="24.5" cy="9.5" r="1.3" fill="currentColor" opacity={0.5} />
      </svg>
    ),
    detailIcon: (
      <svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="2.8" />
        <line x1="16" y1="13.2" x2="16" y2="5" /><line x1="13.5" y1="14" x2="7" y2="9" />
        <line x1="13.5" y1="18" x2="7" y2="23" /><line x1="16" y1="18.8" x2="16" y2="27" />
        <line x1="18.5" y1="18" x2="25" y2="23" /><line x1="18.5" y1="14" x2="25" y2="9" />
        <circle cx="16" cy="4.5" r="1.5" fill="var(--accent)" opacity={0.6} />
        <circle cx="6.5" cy="8.5" r="1.5" fill="var(--accent)" opacity={0.6} />
        <circle cx="6.5" cy="23.5" r="1.5" fill="var(--accent)" opacity={0.6} />
        <circle cx="16" cy="27.5" r="1.5" fill="var(--accent)" opacity={0.6} />
        <circle cx="25.5" cy="23.5" r="1.5" fill="var(--accent)" opacity={0.6} />
        <circle cx="25.5" cy="8.5" r="1.5" fill="var(--accent)" opacity={0.6} />
      </svg>
    ),
    badge: '03 — Produs finit',
    detailTitle: 'Fibre de celuloză λ = 0,038 W/mK',
    body: 'Rezultatul este un material fibros, ușor, cu coeficient termic λ = 0,038 W/mK. Structura fibrilară creează milioane de micro-buzunare de aer care opresc transferul de căldură și absoarb eficient sunetul.',
  },
  {
    num: '04',
    title: 'Insuflare precisă',
    sub: 'Acoperire omogenă 100%, zero punți termice',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="20" y="4" width="8" height="24" rx="1" opacity={0.45} />
        <circle cx="23" cy="10" r={0.8} fill="currentColor" opacity={0.4} />
        <circle cx="26" cy="14" r={0.8} fill="currentColor" opacity={0.4} />
        <circle cx="22" cy="18" r={0.8} fill="currentColor" opacity={0.4} />
        <circle cx="25" cy="22" r={0.8} fill="currentColor" opacity={0.4} />
        <path d="M4 16 Q8 14 12 16" strokeWidth={2.2} fill="none" />
        <path d="M12 13 L20 16 L12 19 Z" fill="currentColor" opacity={0.4} />
        <line x1="14" y1="13" x2="17" y2="11" strokeWidth={1.1} opacity={0.5} />
        <line x1="15" y1="16" x2="18" y2="16" strokeWidth={1.1} opacity={0.5} />
        <line x1="14" y1="19" x2="17" y2="21" strokeWidth={1.1} opacity={0.5} />
      </svg>
    ),
    detailIcon: (
      <svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <rect x="21" y="4" width="7" height="24" rx="1" opacity={0.35} />
        <circle cx="23.5" cy="10" r={0.9} fill="var(--accent)" opacity={0.5} />
        <circle cx="25.5" cy="16" r={0.9} fill="var(--accent)" opacity={0.5} />
        <circle cx="23" cy="22" r={0.9} fill="var(--accent)" opacity={0.5} />
        <path d="M3 16 Q8 14 13 16" strokeWidth={2} fill="none" />
        <path d="M13 13 L21 16 L13 19 Z" fill="var(--accent)" opacity={0.3} />
        <line x1="15" y1="12" x2="18" y2="10" opacity={0.4} />
        <line x1="16" y1="16" x2="19" y2="16" opacity={0.4} />
        <line x1="15" y1="20" x2="18" y2="22" opacity={0.4} />
      </svg>
    ),
    badge: '04 — Montaj',
    detailTitle: 'Insuflare omogenă, fără punți termice',
    body: 'Utilajele noastre de insuflare introduc materialul prin orificii de 40mm, umplând omogen fiecare colț și cavitate. Densitate finală: 35–65 kg/m³ în funcție de aplicație. Zero punți termice, zero pierderi de energie.',
  },
  {
    num: '05',
    title: 'Casă eficientă A+',
    sub: '−65% energie · 30 ani garanție · zero CO₂',
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14 L16 4 L28 14 L28 28 L4 28 Z" />
        <rect x="13" y="21" width="6" height="7" rx="1" />
        <path d="M18 14 l-4 6 h3 l-4 7" strokeWidth={1.8} />
        <line x1="25" y1="6" x2="28" y2="4" strokeWidth={1.2} opacity={0.45} />
        <line x1="27" y1="9" x2="31" y2="9" strokeWidth={1.2} opacity={0.45} />
        <line x1="25" y1="12" x2="28" y2="14" strokeWidth={1.2} opacity={0.45} />
      </svg>
    ),
    detailIcon: (
      <svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15 L16 5 L28 15 L28 28 L4 28 Z" />
        <rect x="13" y="21" width="6" height="7" rx="1" />
        <path d="M18 14 l-3.5 5.5 h3 l-4 6.5" strokeWidth={1.8} />
        <line x1="25" y1="7" x2="28" y2="5" opacity={0.4} />
        <line x1="27" y1="11" x2="31" y2="11" opacity={0.4} />
        <line x1="25" y1="14" x2="27" y2="16" opacity={0.4} />
      </svg>
    ),
    badge: '05 — Rezultat',
    detailTitle: 'Casă eficientă clasa A+ — economii garantate',
    body: 'Reducere consum energetic cu 40–65%. Casă mai caldă iarna, mai rece vara. Zgomot stradal redus cu 50+ dB. Certificat energetic EPC A sau A+, eligibil pentru finanțare Casa Verde Plus și PNRR. Garanție 30 ani.',
  },
];

const lineWidths = ['0%', '25%', '50%', '75%', '100%'];

export default function Journey() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) setActive(0); },
      { threshold: 0.3 },
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const current = steps[active];

  return (
    <section className="journey section" id="cum-functioneaza" aria-labelledby="journeyTitle" ref={sectionRef}>
      <div className="container">
        <div className="section__header journey__header" data-reveal>
          <p className="section__overline">Cum funcționează</p>
          <h2 className="section__title" id="journeyTitle">De la hârtie la eficiență în casa ta</h2>
          <p className="section__sub">
            Celuloaza noastră pornește din ziarele și ambalajele tale reciclate și ajunge să reducă factura energetică cu până la 65%.
            Apasă pe fiecare etapă pentru detalii.
          </p>
        </div>

        <div className="journey__track" id="journeySteps">
          <div className="journey__rail">
            <div className="journey__rail-fill" style={{ width: lineWidths[active] }} />
          </div>

          {steps.map((step, i) => (
            <button
              key={step.num}
              className={`journey__step${i === active ? ' is-active' : ''}`}
              data-step={i}
              aria-expanded={i === active}
              onClick={() => setActive(i)}
            >
              <div className="journey__step-icon-wrap">
                {step.icon}
                <span className="journey__step-num">{step.num}</span>
              </div>
              <div className="journey__step-title">{step.title}</div>
              <div className="journey__step-sub">{step.sub}</div>
            </button>
          ))}
        </div>

        <div className="journey__detail is-visible">
          <div className="journey__detail-body">
            <span className="journey__detail-badge">{current.badge}</span>
            <h3>{current.detailTitle}</h3>
            <p>{current.body}</p>
          </div>
          <div className="journey__detail-visual" aria-hidden="true">
            {current.detailIcon}
          </div>
        </div>
      </div>
    </section>
  );
}
