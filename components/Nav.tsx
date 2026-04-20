'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/shop', label: 'Produse' },
  { href: '/proiecte', label: 'Proiecte' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const Logo = () => (
    <Link href="/" className="nav__logo" aria-label="CELLARIS Acasă">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="CELLARIS — Izolații Celuloză" className="nav__logo-img" />
    </Link>
  );

  return (
    <>
      <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="mainNav" aria-label="Navigare principală">
        <div className="container">
          <div className="nav__inner">
            <Logo />
            <ul className="nav__menu" role="list">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="nav__link">{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact#oferta" className="nav__cta">Ofertă gratuită →</Link>
            <button
              className="nav__hamburger"
              aria-label="Deschide meniu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={e => { if (e.target === e.currentTarget) setMenuOpen(false); }}
      >
        <div className="mobile-nav__header">
          <Logo />
          <button className="mobile-nav__close" aria-label="Închide meniu" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul className="mobile-nav__links" role="list">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="mobile-nav__link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__footer">
          <Link href="/contact#oferta" className="btn btn--accent" onClick={() => setMenuOpen(false)}>
            Solicită ofertă gratuită
          </Link>
        </div>
      </div>
    </>
  );
}
