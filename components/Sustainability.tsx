'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const meters = [
  { name: 'CELLARIS', val: '0.5 kg', width: 12, color: 'var(--accent)' },
  { name: 'Vată minerală', val: '2.5 kg', width: 60, color: '#F59E0B' },
  { name: 'Polistiren EPS', val: '4.0 kg', width: 95, color: '#EF4444' },
];

const pillars = [
  {
    title: '85–92% reciclat', desc: 'Hârtie post-consum. Zero plastic, zero fibre sintetice.',
    icon: <><polyline points="1.5 2 1.5 8 7.5 8" /><polyline points="22.5 22 22.5 16 16.5 16" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1.5 8m21 8-4.14 2.36A9 9 0 0 1 3.51 15" /></>,
  },
  {
    title: 'CO₂ sechestrat', desc: 'Carbonul rămâne captiv în izolație pe toată durata de viață.',
    icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  },
  {
    title: 'Fabricație verde', desc: 'Energie regenerabilă, consum de 8× mai mic față de vata minerală.',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: 'EPD certificat', desc: 'Declarație verificată de terță parte independentă acreditată.',
    icon: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><path d="m9 8 2 2 4-4" /></>,
  },
];

export default function Sustainability() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;
        barsRef.current.forEach((bar, i) => {
          if (bar) bar.style.width = meters[i].width + '%';
        });
        obs.disconnect();
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="sust section" id="sustenabilitate" ref={sectionRef}>
      <div className="container">
        <div className="sust__inner">
          <div className="sust__copy" data-reveal="left">
            <p className="section__overline">Sustenabilitate</p>
            <h2 className="section__title">Bun pentru casă.<br />Bun pentru planetă.</h2>
            <p>
              Fiecare tonă de celuloză CELLARIS salvează 3 tone de hârtie de la incinerare
              și sechestrează 1,5 tone de CO₂ pe toată durata de viață a clădirii.
            </p>

            <div className="sust__meter">
              <div className="sust__meter-label">Emisii CO₂ pe m² instalat</div>
              {meters.map((m, i) => (
                <div className="sust__meter-row" key={m.name}>
                  <span className="sust__meter-name">{m.name}</span>
                  <div className="sust__meter-bar-wrap">
                    <div
                      className="sust__meter-bar"
                      ref={el => { if (el) barsRef.current[i] = el; }}
                      style={{ width: 0, background: m.color, transition: 'width 1.2s cubic-bezier(.4,0,.2,1)' }}
                    />
                  </div>
                  <span className="sust__meter-val">{m.val}</span>
                </div>
              ))}
            </div>

            <Link href="/despre-noi#sustenabilitate" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Raport EPD complet
            </Link>
          </div>

          <div className="sust__pillars" data-reveal="right">
            {pillars.map(p => (
              <div className="sust__pillar" key={p.title}>
                <div className="sust__pillar-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {p.icon}
                  </svg>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
