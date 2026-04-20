/**
 * CELLARIS — app.js
 * Main application JavaScript
 */

'use strict';

/* ── CONSTANTS ─────────────────────────────────────────── */
const BREAKPOINTS = { sm: 576, md: 768, lg: 992, xl: 1200 };

/* ── NAVIGATION ─────────────────────────────────────────── */
(function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav__close');

  if (!nav) return;

  /* Sticky scroll behavior */
  const threshold = 60;
  const onScroll = () => {
    const scrolled = window.scrollY > threshold;
    nav.classList.toggle('is-scrolled', scrolled);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const openMenu = () => {
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  /* Close on outside click */
  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) closeMenu();
    });
  }

  /* Close on ESC */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── READING PROGRESS BAR ──────────────────────────────── */
(function initProgress() {
  const bar = document.querySelector('.reading-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

/* ── HERO CANVAS ANIMATION ─────────────────────────────── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles, raf;

  const COLORS = [
    'rgba(107,140,114,0.4)',
    'rgba(143,184,154,0.3)',
    'rgba(200,220,204,0.2)',
    'rgba(244,239,228,0.15)',
    'rgba(74,122,109,0.35)',
  ];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    if (particles) particles.forEach(p => {
      p.x = Math.random() * W;
      p.y = Math.random() * H;
    });
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 3 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      life: Math.random() * 0.8 + 0.2,
      lifeDelta: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      length: Math.random() * 60 + 20,
      angle: Math.random() * Math.PI,
      angleSpeed: (Math.random() - 0.5) * 0.008,
    };
  }

  function initParticles(count = 120) {
    particles = Array.from({ length: count }, createParticle);
  }

  function drawFiber(p) {
    const cos = Math.cos(p.angle);
    const sin = Math.sin(p.angle);
    const hx = (p.length / 2) * cos;
    const hy = (p.length / 2) * sin;

    ctx.beginPath();
    ctx.moveTo(p.x - hx, p.y - hy);
    ctx.lineTo(p.x + hx, p.y + hy);
    ctx.strokeStyle = p.color.replace(')', `, ${p.life})`).replace('rgba(', 'rgba(');
    ctx.lineWidth = p.r;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      /* Draw */
      drawFiber(p);

      /* Update */
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.angleSpeed;
      p.life += p.lifeDelta;

      if (p.life <= 0.05 || p.life >= 0.95) p.lifeDelta *= -1;

      /* Wrap edges */
      if (p.x < -p.length) p.x = W + p.length;
      if (p.x > W + p.length) p.x = -p.length;
      if (p.y < -p.length) p.y = H + p.length;
      if (p.y > H + p.length) p.y = -p.length;
    });

    raf = requestAnimationFrame(tick);
  }

  resize();
  initParticles();
  tick();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    tick();
  }, { passive: true });

  /* Pause when not visible */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else tick();
  });
})();

/* ── SCROLL REVEAL ─────────────────────────────────────── */
(function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

/* ── COUNTER ANIMATION ─────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      const isDecimal = target % 1 !== 0;

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = isDecimal
          ? (eased * target).toFixed(1)
          : Math.round(eased * target);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── FAQ ACCORDION ─────────────────────────────────────── */
(function initFAQ() {
  document.querySelectorAll('.faq__item').forEach(item => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      /* Close all */
      document.querySelectorAll('.faq__item.is-open').forEach(i => {
        i.classList.remove('is-open');
        const q = i.querySelector('.faq__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      /* Open clicked */
      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ── CALCULATOR ────────────────────────────────────────── */
(function initCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;

  const resultEl = document.getElementById('calc-result');
  const resultVal = document.getElementById('calc-value');
  const resultRange = document.getElementById('calc-range');

  /* Price per m³ by system type */
  const PRICES = {
    standard: { min: 28, max: 38 },
    nzeb:     { min: 35, max: 48 },
    pasiv:    { min: 42, max: 58 },
  };

  form.addEventListener('input', calculate);
  form.addEventListener('change', calculate);

  function calculate() {
    const area = parseFloat(form.querySelector('[name="area"]').value) || 0;
    const thick = parseFloat(form.querySelector('[name="thickness"]').value) || 0;
    const type = form.querySelector('[name="system"]').value;

    if (!area || !thick || !type) {
      if (resultEl) resultEl.style.display = 'none';
      return;
    }

    const vol = (area * thick) / 100; /* m³ */
    const price = PRICES[type] || PRICES.standard;
    const minCost = Math.round(vol * price.min);
    const maxCost = Math.round(vol * price.max);

    if (resultVal) resultVal.textContent = minCost.toLocaleString('ro-RO') + ' – ' + maxCost.toLocaleString('ro-RO') + ' lei';
    if (resultRange) resultRange.textContent = `(estimare orientativă pentru ${vol.toFixed(1)} m³ de fibră de celuloză, sistem ${typeLabel(type)})`;
    if (resultEl) resultEl.style.display = 'block';
  }

  function typeLabel(t) {
    return { standard: 'Standard', nzeb: 'nZEB', pasiv: 'Casă Pasivă' }[t] || t;
  }
})();

/* ── CONTACT FORM ──────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const STATUS = {
    idle:    '',
    sending: 'Se trimite...',
    ok:      'Mesaj trimis! Te vom contacta în cel mult 24 de ore.',
    err:     'A apărut o eroare. Încearcă din nou sau sună-ne.',
  };

  const statusEl = form.querySelector('.form-status');
  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Honeypot check */
    const honey = form.querySelector('.form-honey input');
    if (honey && honey.value) return;

    setStatus('sending');
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    } finally {
      submitBtn.disabled = false;
    }
  });

  function setStatus(s) {
    if (!statusEl) return;
    statusEl.textContent = STATUS[s];
    statusEl.dataset.state = s;
  }
})();

/* ── COOKIE BANNER ─────────────────────────────────────── */
(function initCookies() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  if (!localStorage.getItem('cellaris_cookies_accepted')) {
    setTimeout(() => banner.classList.add('is-visible'), 2500);
  }

  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');

  accept?.addEventListener('click', () => {
    localStorage.setItem('cellaris_cookies_accepted', '1');
    banner.classList.remove('is-visible');
  });

  decline?.addEventListener('click', () => {
    localStorage.setItem('cellaris_cookies_accepted', '0');
    banner.classList.remove('is-visible');
  });
})();

/* ── JOURNEY — interactive steps ──────────────────────── */
(function initJourney() {
  const steps = document.querySelectorAll('.journey__step');
  const detail = document.getElementById('journeyDetail');
  const lineFill = document.getElementById('journeyLineFill');
  if (!steps.length || !detail) return;

  const icons = [
    /* 01 — stacked papers + recycle */
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="5" width="16" height="20" rx="2" opacity=".3"/>
      <rect x="7" y="7" width="16" height="20" rx="2"/>
      <line x1="11" y1="13" x2="19" y2="13"/><line x1="11" y1="17" x2="19" y2="17"/><line x1="11" y1="21" x2="16" y2="21"/>
      <path d="M22 4 l2 2-2 2" stroke-width="1.3"/>
      <path d="M24 6 C24 3.5 21.5 2 20 2" stroke-width="1.3" fill="none"/>
    </svg>`,
    /* 02 — mill / shredder */
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="12" width="20" height="10" rx="2"/>
      <line x1="10" y1="12" x2="10" y2="9"/><line x1="14" y1="12" x2="14" y2="9"/>
      <line x1="18" y1="12" x2="18" y2="9"/><line x1="22" y1="12" x2="22" y2="9"/>
      <path d="M16 5 v4"/><polyline points="13,8 16,5 19,8"/>
      <line x1="10" y1="22" x2="9" y2="26" opacity=".5"/>
      <line x1="14" y1="22" x2="13" y2="27" opacity=".5"/>
      <line x1="18" y1="22" x2="18" y2="27" opacity=".5"/>
      <line x1="22" y1="22" x2="23" y2="26" opacity=".5"/>
    </svg>`,
    /* 03 — fiber network (unique CELLARIS) */
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="16" r="2.8"/>
      <line x1="16" y1="13.2" x2="16" y2="5"/><line x1="13.5" y1="14" x2="7" y2="9"/>
      <line x1="13.5" y1="18" x2="7" y2="23"/><line x1="16" y1="18.8" x2="16" y2="27"/>
      <line x1="18.5" y1="18" x2="25" y2="23"/><line x1="18.5" y1="14" x2="25" y2="9"/>
      <circle cx="16" cy="4.5" r="1.5" fill="var(--accent)" opacity=".6"/>
      <circle cx="6.5" cy="8.5" r="1.5" fill="var(--accent)" opacity=".6"/>
      <circle cx="6.5" cy="23.5" r="1.5" fill="var(--accent)" opacity=".6"/>
      <circle cx="16" cy="27.5" r="1.5" fill="var(--accent)" opacity=".6"/>
      <circle cx="25.5" cy="23.5" r="1.5" fill="var(--accent)" opacity=".6"/>
      <circle cx="25.5" cy="8.5" r="1.5" fill="var(--accent)" opacity=".6"/>
    </svg>`,
    /* 04 — nozzle + wall infill */
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="21" y="4" width="7" height="24" rx="1" opacity=".35"/>
      <circle cx="23.5" cy="10" r=".9" fill="var(--accent)" opacity=".5"/>
      <circle cx="25.5" cy="16" r=".9" fill="var(--accent)" opacity=".5"/>
      <circle cx="23" cy="22" r=".9" fill="var(--accent)" opacity=".5"/>
      <path d="M3 16 Q8 14 13 16" stroke-width="2" fill="none"/>
      <path d="M13 13 L21 16 L13 19 Z" fill="var(--accent)" opacity=".3"/>
      <line x1="15" y1="12" x2="18" y2="10" opacity=".4"/>
      <line x1="16" y1="16" x2="19" y2="16" opacity=".4"/>
      <line x1="15" y1="20" x2="18" y2="22" opacity=".4"/>
    </svg>`,
    /* 05 — house + bolt + glow */
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 15 L16 5 L28 15 L28 28 L4 28 Z"/>
      <rect x="13" y="21" width="6" height="7" rx="1"/>
      <path d="M18 14 l-3.5 5.5 h3 l-4 6.5" stroke-width="1.8"/>
      <line x1="25" y1="7" x2="28" y2="5" opacity=".4"/>
      <line x1="27" y1="11" x2="31" y2="11" opacity=".4"/>
      <line x1="25" y1="14" x2="27" y2="16" opacity=".4"/>
    </svg>`,
  ];

  const data = [
    {
      badge: '01 — Materie primă',
      title: 'Hârtie reciclată',
      body: 'Colectăm ziare, reviste și ambalaje de hârtie post-consum. Fiecare tonă de hârtie reciclată salvează 17 copaci și reduce consumul de apă cu 50%. Sursa noastră primară provine de la centre autorizate de colectare selectivă din România.',
    },
    {
      badge: '02 — Procesare',
      title: 'Măcinare &amp; tratare cu săruri de bor',
      body: 'Hârtia este tăiată și măcinată mecanic, fără adaos de adezivi sau plastic. Se adaugă săruri de bor naturale pentru rezistență la foc (Euroclass B s1 d0), dăunători și mucegai. Procesul consumă de 13 ori mai puțină energie față de producția vatei minerale.',
    },
    {
      badge: '03 — Produs finit',
      title: 'Fibre de celuloză λ = 0,038 W/mK',
      body: 'Rezultatul este un material fibros, ușor, cu coeficient termic λ = 0,038 W/mK — comparabil cu vata minerală premium. Structura fibrilară creează milioane de micro-buzunare de aer care opresc transferul de căldură și absoarb eficient sunetul.',
    },
    {
      badge: '04 — Montaj',
      title: 'Insuflare omogenă, fără punți termice',
      body: 'Utilajele noastre de insuflare introduc materialul prin orificii de 40mm, umplând omogen fiecare colț și cavitate. Densitate finală: 35–65 kg/m³ în funcție de aplicație. Zero punți termice, zero pierderi de energie.',
    },
    {
      badge: '05 — Rezultat',
      title: 'Casă eficientă clasa A+ — economii garantate',
      body: 'Reducere consum energetic cu 40–65%. Casă mai caldă iarna, mai rece vara. Zgomot stradal redus cu 50+ dB. Certificat energetic EPC A sau A+, eligibil pentru finanțare Casa Verde Plus și PNRR. Garanție 25 ani.',
    },
  ];

  const lineWidths = ['0%', '25%', '50%', '75%', '100%'];

  function activate(index) {
    steps.forEach((s, i) => {
      s.classList.toggle('is-active', i === index);
      s.setAttribute('aria-expanded', i === index ? 'true' : 'false');
    });

    if (lineFill) lineFill.style.width = lineWidths[index] || '0%';

    const d = data[index];
    if (!d) return;

    detail.innerHTML = `
      <div class="journey__detail-body">
        <span class="journey__detail-badge">${d.badge}</span>
        <h3>${d.title}</h3>
        <p>${d.body}</p>
      </div>
      <div class="journey__detail-visual" aria-hidden="true">${icons[index] || ''}</div>
    `;
    detail.classList.add('is-visible');
  }

  steps.forEach((step, i) => {
    step.addEventListener('click', () => activate(i));
  });

  /* Animate the line fill on scroll into view */
  const section = document.getElementById('cum-functioneaza');
  if (section && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => activate(0), 300);
      }
    }, { threshold: 0.3 }).observe(section);
  } else {
    activate(0);
  }
})();

/* ── ENERGY TICKER ─────────────────────────────────────── */
(function initEnergyTicker() {
  const el = document.getElementById('energyTicker');
  if (!el) return;

  /* Hârtie reciclată procesată — 700.000 kg bază, +4.000–12.000 kg/zi */
  const BASE_KG = 700_000;
  const REF = new Date('2025-01-01').getTime();
  const DAY_MS = 86_400_000;

  function dailyInc(d) {
    const x = Math.sin(d * 9301 + 49297) * 233280;
    return Math.floor((x - Math.floor(x)) * 8000 + 4000);
  }

  function computeKg() {
    const now = Date.now();
    const dayNum = Math.floor((now - REF) / DAY_MS);
    let total = BASE_KG;
    for (let i = 0; i < dayNum; i++) total += dailyInc(i);
    total += Math.floor(dailyInc(dayNum) * (((now - REF) % DAY_MS) / DAY_MS));
    return total;
  }
  el.textContent = computeKg().toLocaleString('ro-RO') + ' kg';

  setInterval(() => {
    el.textContent = computeKg().toLocaleString('ro-RO') + ' kg';
  }, 60000);
})();

/* ── CARBON METER ANIMATION ────────────────────────────── */
(function initCarbonMeter() {
  const bars = document.querySelectorAll('.sust__meter-bar');
  if (!bars.length) return;

  if (!('IntersectionObserver' in window)) {
    bars.forEach(b => { b.style.width = b.dataset.width + '%'; });
    return;
  }

  new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    bars.forEach(b => {
      setTimeout(() => { b.style.width = b.dataset.width + '%'; }, 200);
    });
  }, { threshold: 0.4 }).observe(document.querySelector('.sust__meter') || bars[0]);
})();

/* ── STATS ITEM VISIBLE CLASS ──────────────────────────── */
(function initStatsVisible() {
  const items = document.querySelectorAll('.stats__item');
  if (!items.length || !('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  items.forEach(i => obs.observe(i));
})();

/* ── SMOOTH ANCHOR LINKS ───────────────────────────────── */
(function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── IMAGE LAZY LOAD FALLBACK ──────────────────────────── */
(function initLazyFallback() {
  if ('loading' in HTMLImageElement.prototype) return;
  /* Polyfill for browsers that don't support native lazy loading */
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if (!imgs.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) img.src = img.dataset.src;
      observer.unobserve(img);
    });
  }, { rootMargin: '200px' });

  imgs.forEach(img => observer.observe(img));
})();

/* ── PRODUCT FILTER ────────────────────────────────────── */
(function initFilter() {
  const filters = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');

  if (!filters.length || !items.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const target = btn.dataset.filter;

      items.forEach(item => {
        const match = target === 'all' || item.dataset.category === target;
        item.style.display = match ? '' : 'none';
      });
    });
  });
})();

/* ── LOCATII MAP HIGHLIGHT ─────────────────────────────── */
(function initMapHighlight() {
  const pins = document.querySelectorAll('[data-pin]');
  pins.forEach(pin => {
    pin.addEventListener('mouseenter', () => {
      document.querySelectorAll('[data-pin]').forEach(p => p.classList.remove('is-active'));
      pin.classList.add('is-active');
    });
  });
})();

/* ── SCROLL-DRIVEN PRODUCT VIDEO ───────────────────────────
   When you're ready to wire up the interactive bag video:

   1. Add the <video> element inside #heroProduct:
        <video class="hero__product-video" muted playsinline preload="metadata"
               data-scroll-src="video/sac-celuloza.mp4"></video>

   2. Uncomment and adapt this block — it maps scroll position (0→1)
      to video currentTime so cellulose "jumps" as user scrolls.
   ────────────────────────────────────────────────────────── */
(function initScrollVideo() {
  const frame = document.getElementById('heroProduct');
  if (!frame) return;
  const video = frame.querySelector('.hero__product-video');
  if (!video) return;

  const src = video.dataset.scrollSrc;
  if (src) video.src = src;

  video.addEventListener('loadedmetadata', () => {
    const duration = video.duration;

    window.addEventListener('scroll', () => {
      const heroHeight = frame.closest('section').offsetHeight;
      const scrollY    = window.scrollY;
      const progress   = Math.min(Math.max(scrollY / heroHeight, 0), 1);
      video.currentTime = progress * duration;
    }, { passive: true });
  });
})();
