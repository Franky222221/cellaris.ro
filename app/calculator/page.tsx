'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRICES = {
  standard: { acoperis: { min: 18, max: 26 }, perete: { min: 22, max: 32 }, podea: { min: 20, max: 28 } },
  nzeb:     { acoperis: { min: 26, max: 36 }, perete: { min: 30, max: 42 }, podea: { min: 28, max: 38 } },
  pasiv:    { acoperis: { min: 34, max: 48 }, perete: { min: 38, max: 54 }, podea: { min: 36, max: 50 } },
};

type System = keyof typeof PRICES;
type Zone = 'acoperis' | 'perete' | 'podea';

export default function CalculatorPage() {
  const [area, setArea] = useState('');
  const [thick, setThick] = useState('20');
  const [system, setSystem] = useState<System>('standard');
  const [zone, setZone] = useState<Zone>('acoperis');
  const [result, setResult] = useState<{ min: number; max: number; vol: number } | null>(null);

  function calculate() {
    const a = parseFloat(area);
    const t = parseFloat(thick);
    if (!a || !t) return;
    const vol = (a * t) / 100;
    const p = PRICES[system][zone];
    setResult({ min: Math.round(a * p.min), max: Math.round(a * p.max), vol: parseFloat(vol.toFixed(1)) });
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e5e7eb',
    borderRadius: '10px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' as const,
    transition: 'border-color 0.15s',
  };
  const labelStyle = { display: 'block', fontWeight: 700, fontSize: '0.875rem', color: '#374151', marginBottom: '0.5rem' };

  return (
    <main>
      <section style={{ background: 'var(--green-900)', padding: '6rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Estimare cost</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', margin: '0.5rem 0 1rem', letterSpacing: '-0.03em' }}>
            Calculator preț izolație
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.7 }}>
            Estimare orientativă în câteva secunde. Ofertă exactă după audit tehnic gratuit.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

            {/* Form */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1px solid #e5e7eb', boxShadow: '0 1px 8px rgba(0,0,0,.06)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.125rem', color: '#111827', marginBottom: '1.75rem', marginTop: 0 }}>Parametrii izolației</h2>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Suprafață de izolat (m²)</label>
                <input type="number" min="1" placeholder="ex: 150" value={area} onChange={e => setArea(e.target.value)}
                  style={inputStyle} onFocus={e => (e.target.style.borderColor = '#34D399')} onBlur={e => (e.target.style.borderColor = '#e5e7eb')} />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Grosime strat (cm)</label>
                <select value={thick} onChange={e => setThick(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {['10','15','20','25','30','35','40'].map(v => <option key={v} value={v}>{v} cm</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Tip sistem energetic</label>
                <select value={system} onChange={e => setSystem(e.target.value as System)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="standard">Standard (reducere 40–50%)</option>
                  <option value="nzeb">nZEB (reducere 55–65%)</option>
                  <option value="pasiv">Casă pasivă (reducere 65–75%)</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={labelStyle}>Zonă aplicare</label>
                <select value={zone} onChange={e => setZone(e.target.value as Zone)} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="acoperis">Acoperiș / Pod</option>
                  <option value="perete">Pereți</option>
                  <option value="podea">Pardoseală</option>
                </select>
              </div>

              <button onClick={calculate} style={{
                width: '100%', padding: '0.875rem', background: 'var(--green-600)',
                color: '#fff', border: 'none', borderRadius: '10px',
                fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#15803d')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--green-600)')}
              >
                Calculează estimarea
              </button>
            </div>

            {/* Result */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {result ? (
                <div style={{ background: 'var(--green-900)', borderRadius: '16px', padding: '2rem', color: '#fff' }}>
                  <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Estimare cost</p>
                  <div style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {result.min.toLocaleString('ro-RO')} –<br />{result.max.toLocaleString('ro-RO')} RON
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>fără TVA, montaj inclus</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {[
                      ['Suprafață', `${area} m²`],
                      ['Grosime', `${thick} cm`],
                      ['Volum material', `~${result.vol} m³`],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                        <span style={{ color: 'rgba(255,255,255,.45)' }}>{k}</span>
                        <span style={{ color: '#fff', fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,.35)', fontSize: '0.75rem', marginTop: '1.25rem', lineHeight: 1.6 }}>
                    * Estimare orientativă. Prețul final se stabilește după auditul tehnic gratuit la fața locului.
                  </p>
                </div>
              ) : (
                <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '2px dashed #e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '280px', textAlign: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="12" y2="18" />
                  </svg>
                  <p style={{ color: '#9ca3af', fontWeight: 500 }}>Completează formularul și apasă &ldquo;Calculează&rdquo;</p>
                </div>
              )}

              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
                <p style={{ fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Vrei o ofertă exactă?</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Auditul tehnic gratuit include termoviziune și calcul precis al materialului necesar.
                </p>
                <Link href="/contact#oferta" className="btn btn--primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
                  Solicită audit gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
