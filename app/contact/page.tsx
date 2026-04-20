'use client';

import { useState, FormEvent } from 'react';

const judete = [
  'Alba','Arad','Argeș','Bacău','Bihor','Bistrița-Năsăud','Botoșani','Brașov','Brăila','București',
  'Buzău','Caraș-Severin','Călărași','Cluj','Constanța','Covasna','Dâmbovița','Dolj','Galați','Giurgiu',
  'Gorj','Harghita','Hunedoara','Ialomița','Iași','Ilfov','Maramureș','Mehedinți','Mureș','Neamț',
  'Olt','Prahova','Satu Mare','Sălaj','Sibiu','Suceava','Teleorman','Timiș','Tulcea','Vaslui',
  'Vâlcea','Vrancea',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [stare, setStare] = useState<FormState>('idle');
  const [form, setForm] = useState({
    nume: '',
    email: '',
    telefon: '',
    judet: '',
    suprafata: '',
    mesaj: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStare('loading');
    try {
      const res = await fetch('https://formspree.io/f/REPLACE_ME', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStare('success');
        setForm({ nume: '', email: '', telefon: '', judet: '', suprafata: '', mesaj: '' });
      } else {
        setStare('error');
      }
    } catch {
      setStare('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid var(--gray-300)',
    borderRadius: 'var(--radius-md)',
    fontSize: '1rem',
    background: 'var(--white)',
    color: 'var(--gray-900)',
    transition: 'border-color 200ms',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: 'var(--gray-700)',
    marginBottom: '0.4rem',
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Hai să vorbim</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            Contactează-ne
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem', maxWidth: '52ch' }}>
            Completează formularul și te contactăm în maximum 24 de ore cu o ofertă personalizată.
            Consultanța inițială este complet gratuită.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Formular */}
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray-100)' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.5rem' }}>
                Solicită ofertă gratuită
              </h2>
              <p style={{ color: 'var(--gray-500)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Completează câmpurile de mai jos și îți trimitem o estimare în cel mai scurt timp.
              </p>

              {stare === 'success' && (
                <div style={{ padding: '1.25rem', background: 'var(--green-50)', border: '1.5px solid var(--accent)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', color: 'var(--green-800)' }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Mesaj trimis cu succes!</p>
                  <p style={{ fontSize: '0.95rem' }}>Te vom contacta în maximum 24 de ore. Mulțumim pentru încredere!</p>
                </div>
              )}

              {stare === 'error' && (
                <div style={{ padding: '1.25rem', background: '#FEF2F2', border: '1.5px solid #F87171', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', color: '#991B1B' }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Eroare la trimitere</p>
                  <p style={{ fontSize: '0.95rem' }}>A apărut o problemă. Te rugăm să ne contactezi telefonic sau să încerci din nou.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Rând 1: Nume + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="nume" style={labelStyle}>Nume complet *</label>
                    <input
                      id="nume"
                      type="text"
                      required
                      placeholder="Ion Popescu"
                      value={form.nume}
                      onChange={(e) => update('nume', e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ion@exemplu.ro"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                    />
                  </div>
                </div>

                {/* Rând 2: Telefon + Județ */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="telefon" style={labelStyle}>Telefon *</label>
                    <input
                      id="telefon"
                      type="tel"
                      required
                      placeholder="07XX XXX XXX"
                      value={form.telefon}
                      onChange={(e) => update('telefon', e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="judet" style={labelStyle}>Județ *</label>
                    <select
                      id="judet"
                      required
                      value={form.judet}
                      onChange={(e) => update('judet', e.target.value)}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                    >
                      <option value="">Selectează județul</option>
                      {judete.map((j) => <option key={j} value={j}>{j}</option>)}
                    </select>
                  </div>
                </div>

                {/* Suprafață */}
                <div>
                  <label htmlFor="suprafata" style={labelStyle}>Suprafața estimată (m²)</label>
                  <input
                    id="suprafata"
                    type="number"
                    min="10"
                    max="10000"
                    placeholder="Ex: 120"
                    value={form.suprafata}
                    onChange={(e) => update('suprafata', e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label htmlFor="mesaj" style={labelStyle}>Detalii despre proiect *</label>
                  <textarea
                    id="mesaj"
                    required
                    rows={4}
                    placeholder="Descrieți pe scurt imobilul, tipul de izolație dorit (acoperiș, perete, podea), grosimea dorită sau orice alte detalii utile..."
                    value={form.mesaj}
                    onChange={(e) => update('mesaj', e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '120px' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--gray-300)')}
                  />
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', lineHeight: 1.5 }}>
                  Prin trimiterea formularului, ești de acord cu{' '}
                  <a href="/politica-confidentialitate" style={{ color: 'var(--accent-dim)' }}>Politica de confidențialitate</a>.
                  Datele tale sunt utilizate exclusiv pentru a-ți oferi un răspuns personalizat.
                </p>

                <button
                  type="submit"
                  disabled={stare === 'loading'}
                  className="btn btn--primary"
                  style={{ opacity: stare === 'loading' ? 0.7 : 1, cursor: stare === 'loading' ? 'wait' : 'pointer' }}
                >
                  {stare === 'loading' ? 'Se trimite...' : 'Trimite solicitarea'}
                </button>
              </form>
            </div>

            {/* Info contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Card Date contact */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1.25rem' }}>Date de contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: '📞', label: 'Telefon', val: '+40 721 000 000', href: 'tel:+40721000000' },
                    { icon: '✉️', label: 'Email', val: 'contact@cellaris.ro', href: 'mailto:contact@cellaris.ro' },
                    { icon: '📍', label: 'Adresă', val: 'București, România', href: null },
                    { icon: '🏢', label: 'CUI / Nr. reg.', val: 'RO12345678 / J40/1234/2020', href: null },
                  ].map(({ icon, label, val, href }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>{icon}</span>
                      <div>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-500)', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: '0.15rem' }}>{label}</p>
                        {href ? (
                          <a href={href} style={{ color: 'var(--accent-dim)', fontWeight: 600 }}>{val}</a>
                        ) : (
                          <p style={{ fontWeight: 500, color: 'var(--gray-800)' }}>{val}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program */}
              <div style={{ background: 'var(--green-900)', borderRadius: 'var(--radius-xl)', padding: '2rem', color: '#fff' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Program de lucru</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { zi: 'Luni — Vineri', ora: '08:00 – 18:00' },
                    { zi: 'Sâmbătă', ora: '09:00 – 13:00' },
                    { zi: 'Duminică', ora: 'Închis' },
                  ].map(({ zi, ora }) => (
                    <div key={zi} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{zi}</span>
                      <span style={{ fontWeight: 600, color: ora === 'Închis' ? 'rgba(255,255,255,0.35)' : 'var(--accent)' }}>{ora}</span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                  În afara programului, poți lăsa un mesaj prin formular și te contactăm prima oră lucrătoare.
                </p>
              </div>

              {/* Hartă placeholder */}
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)', background: 'var(--green-50)', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.5rem' }}>📍</span>
                <p style={{ fontWeight: 600, color: 'var(--green-800)' }}>București, România</p>
                <a
                  href="https://maps.google.com/?q=București,România"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-dim)', fontSize: '0.9rem', fontWeight: 500 }}
                >
                  Deschide în Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
