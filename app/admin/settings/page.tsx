'use client';

import { useState, useEffect, FormEvent } from 'react';

type Settings = {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  workingHours: string;
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    phone: '', email: '', address: '', whatsapp: '',
    facebook: '', instagram: '', workingHours: '',
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(r => r.json())
      .then(data => { setSettings(data); setLoading(false); });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  }

  const field = (label: string, key: keyof Settings, type = 'text') => (
    <div style={{ marginBottom: '1.25rem' }} key={key}>
      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', color: '#374151', marginBottom: '0.375rem' }}>
        {label}
      </label>
      <input
        type={type}
        value={settings[key]}
        onChange={e => setSettings(s => ({ ...s, [key]: e.target.value }))}
        style={{
          width: '100%', padding: '0.625rem 0.875rem',
          border: '1px solid #d1d5db', borderRadius: '8px',
          fontSize: '0.9375rem', outline: 'none',
          transition: 'border-color 0.15s',
          boxSizing: 'border-box',
        }}
        onFocus={e => (e.target.style.borderColor = '#34D399')}
        onBlur={e => (e.target.style.borderColor = '#d1d5db')}
      />
    </div>
  );

  if (loading) return <div style={{ padding: '2rem', color: '#6b7280' }}>Se încarcă...</div>;

  return (
    <div style={{ maxWidth: '680px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', margin: 0 }}>Setări site</h1>
        <p style={{ color: '#6b7280', marginTop: '0.375rem', fontSize: '0.9375rem' }}>
          Modifică datele de contact afișate pe site.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,.06)', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem', marginTop: 0 }}>Contact</h2>
        {field('Telefon', 'phone', 'tel')}
        {field('Email', 'email', 'email')}
        {field('Adresă', 'address')}
        {field('WhatsApp (număr fără +)', 'whatsapp')}
        {field('Program lucru', 'workingHours')}

        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '1.75rem 0 1.25rem' }}>Social media</h2>
        {field('Facebook URL', 'facebook')}
        {field('Instagram URL', 'instagram')}

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
          <button
            type="submit"
            style={{
              padding: '0.625rem 1.5rem', background: '#16A34A', color: '#fff',
              border: 'none', borderRadius: '8px', fontWeight: 700,
              fontSize: '0.9375rem', cursor: 'pointer',
            }}
          >
            Salvează setările
          </button>
          {saved && (
            <span style={{ color: '#16A34A', fontWeight: 600, fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Salvat!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
