'use client';

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    /* Scroll reveal */
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el =>
        el.classList.add('is-visible'),
      );
    } else {
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay ?? '0', 10);
            setTimeout(() => el.classList.add('is-visible'), delay);
            obs.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    }

    /* Reading progress bar */
    const bar = document.getElementById('readingProgress');
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      bar.style.width = Math.min((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100, 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
