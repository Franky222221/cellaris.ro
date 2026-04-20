'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [kg, setKg] = useState(700000);
  const productRef = useRef<HTMLDivElement>(null);

  /* ── Canvas fiber animation ─────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;

    const COLORS = [
      'rgba(107,140,114,0.4)',
      'rgba(143,184,154,0.3)',
      'rgba(200,220,204,0.2)',
      'rgba(244,239,228,0.15)',
      'rgba(74,122,109,0.35)',
    ];

    type Particle = {
      x: number; y: number; r: number;
      vx: number; vy: number;
      life: number; lifeDelta: number;
      color: string; length: number;
      angle: number; angleSpeed: number;
    };

    let W = 0, H = 0, particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      particles.forEach(p => { p.x = Math.random() * W; p.y = Math.random() * H; });
    };

    const mkParticle = (): Particle => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 3 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      life: Math.random() * 0.8 + 0.2,
      lifeDelta: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      length: Math.random() * 60 + 20,
      angle: Math.random() * Math.PI,
      angleSpeed: (Math.random() - 0.5) * 0.008,
    });

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        const cos = Math.cos(p.angle), sin = Math.sin(p.angle);
        const hx = (p.length / 2) * cos, hy = (p.length / 2) * sin;
        ctx.beginPath();
        ctx.moveTo(p.x - hx, p.y - hy);
        ctx.lineTo(p.x + hx, p.y + hy);
        ctx.strokeStyle = p.color.replace(')', `, ${p.life})`).replace('rgba(', 'rgba(');
        ctx.lineWidth = p.r;
        ctx.lineCap = 'round';
        ctx.stroke();

        p.x += p.vx; p.y += p.vy;
        p.angle += p.angleSpeed;
        p.life += p.lifeDelta;
        if (p.life <= 0.05 || p.life >= 0.95) p.lifeDelta *= -1;
        if (p.x < -p.length) p.x = W + p.length;
        if (p.x > W + p.length) p.x = -p.length;
        if (p.y < -p.length) p.y = H + p.length;
        if (p.y > H + p.length) p.y = -p.length;
      });
      raf = requestAnimationFrame(tick);
    };

    resize();
    particles = Array.from({ length: 120 }, mkParticle);
    tick();

    const onResize = () => { cancelAnimationFrame(raf); resize(); tick(); };
    const onVisibility = () => { if (document.hidden) cancelAnimationFrame(raf); else tick(); };

    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  /* ── Hârtie reciclată ticker (700.000 kg bază, +4.000–12.000 kg/zi) ── */
  useEffect(() => {
    const BASE_KG = 700_000;
    const REF_DATE = new Date('2025-01-01').getTime();
    const DAY_MS = 86_400_000;

    /* Pseudo-random dar determinist pe zi — seed = numărul zilei */
    function dailyIncrement(dayNum: number) {
      const x = Math.sin(dayNum * 9301 + 49297) * 233280;
      const r = x - Math.floor(x); // 0–1
      return Math.floor(r * 8_000 + 4_000); // 4.000–12.000 kg
    }

    function computeKg() {
      const now = Date.now();
      const dayNum = Math.floor((now - REF_DATE) / DAY_MS);
      let total = BASE_KG;
      for (let i = 0; i < dayNum; i++) total += dailyIncrement(i);
      /* progres în ziua curentă */
      const dayProgress = ((now - REF_DATE) % DAY_MS) / DAY_MS;
      total += Math.floor(dailyIncrement(dayNum) * dayProgress);
      return total;
    }

    setKg(computeKg());
    const id = setInterval(() => setKg(computeKg()), 60_000); // refresh la fiecare minut
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-labelledby="heroH1">
      <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__left">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              Producător &amp; Montator Certificat — România
            </div>

            <h1 className="hero__h1" id="heroH1">
              Izolație din<br />
              <em>Fibre de Celuloză</em><br />
              cu adevărat eficientă
            </h1>

            <p className="hero__sub">
              Material 100% reciclat, performanță nZEB dovedită.
              De la hârtia de ieri la casa eficientă de mâine — în 48 de ore.
            </p>

            <div className="hero__actions">
              <Link href="/contact#oferta" className="btn btn--accent btn--lg">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
                </svg>
                Solicită ofertă gratuită
              </Link>
              <Link href="/calculator" className="btn btn--outline-white btn--lg">Calculator preț</Link>
            </div>

            <div className="hero__specs">
              <span className="hero__spec-chip"><b>λ</b> = 0,038 W/mK</span>
              <span className="hero__spec-chip"><b>nZEB</b> certificat</span>
              <span className="hero__spec-chip"><b>A+</b> clasă energetică</span>
              <span className="hero__spec-chip"><b>−65%</b> consum energie</span>
            </div>
          </div>

          {/* Right: product portrait + stats */}
          <div className="hero__right">
            <div className="hero__product" id="heroProduct" ref={productRef}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero__product-img"
                src="/images/sac-celuloza.png"
                alt="Sac termoizolație fibre de celuloză CELLARIS 15 kg"
                loading="eager"
              />
              <div className="hero__product-badge" aria-hidden="true">
                <span className="hero__product-badge-dot" />
                <span className="hero__product-badge-text">100% Celuloză Reciclată</span>
                <span className="hero__product-badge-sep">·</span>
                <span className="hero__product-badge-text">λ = 0,038 W/mK</span>
              </div>
            </div>

            <div className="hero__card">
              <p className="hero__card-label">Performanță certificată</p>
              <div className="hero__stats">
                {[
                  { num: '3000+', label: 'proiecte finalizate' },
                  { num: '30 ani', label: 'garanție material' },
                  { num: '48h', label: 'de la ofertă la montaj' },
                  { num: '6×', label: 'mai puțin CO₂ față de vată' },
                ].map(s => (
                  <div className="hero__stat" key={s.label}>
                    <div className="hero__stat-num">{s.num}</div>
                    <div className="hero__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="hero__card-divider" />
              <div className="hero__ticker">
                <div className="hero__ticker-dot" aria-hidden="true" />
                <span className="hero__ticker-label">Hârtie reciclată procesată</span>
                <span className="hero__ticker-value">{kg.toLocaleString('ro-RO')} kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
