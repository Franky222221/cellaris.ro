'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Eroare la autentificare');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch {
      setError('Eroare de conexiune. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #081510 0%, #0f1923 50%, #102018 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
        }}
      >
        {/* Logo & Brand */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #16A34A, #34D399)',
              marginBottom: '1rem',
              boxShadow: '0 8px 32px rgba(52, 211, 153, 0.3)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z"
                fill="rgba(255,255,255,0.15)"
              />
              <path
                d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
                fill="rgba(255,255,255,0.25)"
              />
              <path
                d="M13 16l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            style={{
              color: '#ffffff',
              fontSize: '1.75rem',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              margin: '0 0 0.25rem 0',
            }}
          >
            CELLARIS
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
            Panou de administrare
          </p>
        </div>

        {/* Card login */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h2
            style={{
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              textAlign: 'center',
            }}
          >
            Autentificare
          </h2>

          {error && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                color: '#fca5a5',
                fontSize: '0.875rem',
                marginBottom: '1.25rem',
                textAlign: 'center',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#9ca3af',
                  fontSize: '0.8125rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.025em',
                }}
              >
                Utilizator
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                placeholder="admin"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#34D399')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#9ca3af',
                  fontSize: '0.8125rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.025em',
                }}
              >
                Parolă
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#34D399')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: loading
                  ? 'rgba(52, 211, 153, 0.5)'
                  : 'linear-gradient(135deg, #16A34A, #34D399)',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '0.9375rem',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s, transform 0.1s',
                letterSpacing: '0.025em',
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget.style.opacity = '0.9');
              }}
              onMouseLeave={(e) => {
                if (!loading) (e.currentTarget.style.opacity = '1');
              }}
            >
              {loading ? 'Se autentifică...' : 'Intră în panou'}
            </button>
          </form>
        </div>

        <p
          style={{
            textAlign: 'center',
            color: '#374151',
            fontSize: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          CELLARIS © {new Date().getFullYear()} — Panou intern
        </p>
      </div>
    </div>
  );
}
