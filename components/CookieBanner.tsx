'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cellaris_cookies_accepted')) {
      const t = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => { localStorage.setItem('cellaris_cookies_accepted', '1'); setVisible(false); };
  const decline = () => { localStorage.setItem('cellaris_cookies_accepted', '0'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="cookie-banner is-visible" role="alertdialog">
      <p style={{ fontWeight: 700, marginBottom: '.25rem' }}>Folosim cookie-uri</p>
      <p>Cookie-uri pentru analize și experiență optimă. Nu vindem datele tale.</p>
      <div className="cookie-banner__actions">
        <button className="btn btn--accent btn--sm" onClick={accept}>Accept</button>
        <button className="btn btn--outline-white btn--sm" onClick={decline}>Refuz</button>
        <Link href="/politica-cookie" className="btn btn--outline-white btn--sm">Detalii</Link>
      </div>
    </div>
  );
}
