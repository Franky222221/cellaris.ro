'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CATEGORIES = ['Ghid tehnic', 'nZEB', 'Finanțare', 'Materiale', 'Proiecte', 'Legislație', 'General'];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ăâ]/g, 'a')
    .replace(/[îí]/g, 'i')
    .replace(/[șş]/g, 's')
    .replace(/[țţ]/g, 't')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function renderMarkdownPreview(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 style="font-size:1.25rem;font-weight:700;margin:1.5rem 0 0.5rem">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:1rem;font-weight:600;margin:1.25rem 0 0.375rem">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li style="margin:0.25rem 0">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li style="margin:0.25rem 0">$1. $2</li>')
    .replace(/\n\n/g, '</p><p style="margin:0 0 0.75rem">')
    .replace(/^(?!<[h|l|p])(.+)$/gm, '<p style="margin:0 0 0.75rem">$1</p>');
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.625rem 0.875rem',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '0.9375rem',
  color: '#111827',
  outline: 'none',
  background: '#ffffff',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '0.375rem',
};

export default function NewBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('General');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('5 min');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (!slugManual) {
      setSlug(slugify(title));
    }
  }, [title, slugManual]);

  async function handleSubmit(e: FormEvent, publish: boolean) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          category,
          excerpt,
          content,
          readTime,
          published: publish,
          author: 'Echipa CELLARIS',
          date: new Date().toISOString().split('T')[0],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Eroare la salvare');
      } else {
        router.push('/admin/blog');
        router.refresh();
      }
    } catch {
      setError('Eroare de conexiune');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: '960px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <Link
          href="/admin/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '0.875rem',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Înapoi
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>
          Articol nou
        </h1>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setPreview(!preview)}
            style={{
              padding: '0.5rem 0.875rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              background: preview ? '#f0fdf4' : '#ffffff',
              color: preview ? '#16A34A' : '#374151',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            {preview ? 'Editor' : 'Preview'}
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            color: '#dc2626',
            fontSize: '0.875rem',
            marginBottom: '1.25rem',
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e, true)}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          {/* Main fields */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div>
              <label style={labelStyle}>Titlu *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Titlul articolului..."
                style={{ ...inputStyle, fontSize: '1.0625rem', fontWeight: '500' }}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Slug URL *
                <span style={{ fontWeight: '400', color: '#9ca3af', marginLeft: '0.5rem' }}>
                  /blog/{slug || 'slug-articol'}
                </span>
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setSlugManual(true);
                }}
                required
                placeholder="slug-articol"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
              {slugManual && (
                <button
                  type="button"
                  onClick={() => { setSlugManual(false); setSlug(slugify(title)); }}
                  style={{ marginTop: '0.375rem', background: 'none', border: 'none', color: '#16A34A', fontSize: '0.75rem', cursor: 'pointer', padding: 0 }}
                >
                  ↺ Regenerează din titlu
                </button>
              )}
            </div>

            <div>
              <label style={labelStyle}>Rezumat (Excerpt)</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                placeholder="Scurtă descriere a articolului (apare în listare)..."
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.5' }}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Conținut (Markdown)
                {preview && <span style={{ fontWeight: '400', color: '#9ca3af', marginLeft: '0.5rem' }}>— mod previzualizare activ</span>}
              </label>
              {preview ? (
                <div
                  style={{
                    minHeight: '320px',
                    padding: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    background: '#fafafa',
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: '#111827',
                    overflowY: 'auto',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderMarkdownPreview(content) || '<p style="color:#9ca3af">Scrie conținut în editor pentru a vedea previzualizarea...</p>' }}
                />
              ) : (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={14}
                  placeholder={'## Introducere\n\nScrie conținutul articolului în format Markdown.\n\n## Secțiune 1\n\n**Text bold**, *text italic*...'}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: "'Courier New', monospace", fontSize: '0.875rem', lineHeight: '1.6' }}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              )}
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.375rem', marginBottom: 0 }}>
                Suportat: ## H2, ### H3, **bold**, *italic*, - liste, 1. liste numerotate
              </p>
            </div>
          </div>

          {/* Sidebar options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Publish */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <h3 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', margin: '0 0 1rem 0' }}>
                Publicare
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '0.625rem 1rem',
                    background: 'linear-gradient(135deg, #16A34A, #34D399)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {loading ? 'Se salvează...' : 'Publică articolul'}
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={(e) => handleSubmit(e as unknown as FormEvent, false)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 1rem',
                    background: '#f9fafb',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  Salvează ca draft
                </button>
              </div>
            </div>

            {/* Category & meta */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h3 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', margin: 0 }}>
                Detalii articol
              </h3>

              <div>
                <label style={labelStyle}>Categorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Timp citire</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="ex: 8 min"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              </div>

              <div>
                <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#16A34A' }}
                  />
                  Publicat imediat
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
