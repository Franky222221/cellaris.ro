'use client';

import { useEffect, useRef } from 'react';

const items = [
  { counter: 3000, suffix: '+', label: 'Proiecte finalizate', delay: 0 },
  { counter: 65, suffix: '%', label: 'Reducere consum energetic', delay: 100 },
  { counter: 30, suffix: ' ani', label: 'Garanție material', delay: 200 },
  { counter: 100, suffix: '%', label: 'Material reciclat', delay: 300 },
];

function CounterItem({ counter, suffix, label, delay }: (typeof items)[0]) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const duration = 1800;
        const start = performance.now();
        const update = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * counter) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [counter, suffix]);

  return (
    <div className="stats__item" data-reveal data-delay={delay}>
      <div className="stats__num" ref={ref}>0{suffix}</div>
      <div className="stats__label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats section--sm" aria-label="Cifre cheie CELLARIS">
      <div className="container">
        <div className="stats__grid">
          {items.map(item => (
            <CounterItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
