'use client';

import { useState, FormEvent, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const CATEGORIES = ['Ghid tehnic', 'nZEB', 'Finanțare', 'Materiale', 'Proiecte', 'Legislație', 'General'];

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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  published: boolean;
}

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = (params?.id ?? '') as string;

  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('General');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('5 min');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [preview, setPreview] = useState(false);

  const loadPost = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/blog/${id}`);
      if (!res.ok) {
        setNotFound(true);
        return;
      }
      const post: BlogPost = await res.json();
      setTitle(post.title);
      setSlug(post.slug);
      setCategory(post.category);
      setExcerpt(post.excerpt);
      setContent(post.content);
      setReadTime(post.readTime);
      setPublished(post.published);
      setLoaded(true);
    } catch {
      setError('Eroare la încărcarea articolului');
    }
  }, [id]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  async function handleSubmit(e: FormEvent, pub: boolean) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug, category, excerpt, content, readTime, published: pub }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Eroare la salvare');
      } else {
        setSuccess('Articolul a fost salvat cu succes!');
        setPublished(pub);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch {
      setError('Eroare de conexiune');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `Ești sigur că vrei să ștergi articolul:\n"${title}"?\n\nAceastă acțiune nu poate fi anulată.`
    );
    if (!confirmed) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/admin/blog');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Eroare la ștergere');
      }
    } catch {
      setError('Eroare de conexiune');
    } finally {
      setDeleting(false);
    }
  }

  if (notFound) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
        <p>Articolul nu a fost găsit.</p>
        <Link href="/admin/blog" style={{ color: '#16A34A' }}>← Înapoi la articole</Link>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
        Se încarcă...
      </div>
    );
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
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0, flex: 1 }}>
          Editează articol
        </h1>
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
        <Link
          href={`/blog/${slug}`}
          target="_blank"
          style={{
            padding: '0.5rem 0.875rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            background: '#ffffff',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '0.875rem',
          }}
        >
          Previzualizează →
        </Link>
      </div>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '0.75rem 1rem', color: '#dc2626', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
          {error}
        </div>
      )}
      {success && (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '0.75rem 1rem', color: '#16A34A', fontSize: '0.875rem', marginBottom: '1.25rem', fontWeight: '500' }}>
          ✓ {success}
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e, true)}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.25rem', alignItems: 'start' }}>
          {/* Main */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Titlu *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ ...inputStyle, fontSize: '1.0625rem', fontWeight: '500' }}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Slug URL *
                <span style={{ fontWeight: '400', color: '#9ca3af', marginLeft: '0.5rem' }}>/blog/{slug}</span>
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <div>
              <label style={labelStyle}>Rezumat</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.5' }}
                onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <div>
              <label style={labelStyle}>Conținut (Markdown)</label>
              {preview ? (
                <div
                  style={{ minHeight: '320px', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fafafa', fontSize: '0.9375rem', lineHeight: '1.7', color: '#111827', overflowY: 'auto' }}
                  dangerouslySetInnerHTML={{ __html: renderMarkdownPreview(content) }}
                />
              ) : (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={14}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: "'Courier New', monospace", fontSize: '0.875rem', lineHeight: '1.6' }}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', margin: '0 0 1rem 0' }}>Publicare</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', padding: '0.625rem 1rem', background: 'linear-gradient(135deg, #16A34A, #34D399)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? 'Se salvează...' : 'Salvează & publică'}
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={(e) => handleSubmit(e as unknown as FormEvent, false)}
                  style={{ width: '100%', padding: '0.625rem 1rem', background: '#f9fafb', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '500', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
                >
                  Salvează ca draft
                </button>
              </div>
              <div style={{ marginTop: '0.75rem', padding: '0.625rem', background: published ? '#f0fdf4' : '#fefce8', borderRadius: '6px', fontSize: '0.8125rem', color: published ? '#166534' : '#92400e', textAlign: 'center', fontWeight: '500' }}>
                Status curent: {published ? 'Publicat' : 'Draft'}
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', margin: 0 }}>Detalii</h3>
              <div>
                <label style={labelStyle}>Categorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                >
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Timp citire</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#16A34A')}
                  onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
            </div>

            {/* Delete zone */}
            <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#dc2626', margin: '0 0 0.75rem 0' }}>Zonă periculoasă</h3>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                style={{ width: '100%', padding: '0.625rem 1rem', background: deleting ? '#fecaca' : '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600', cursor: deleting ? 'not-allowed' : 'pointer' }}
              >
                {deleting ? 'Se șterge...' : '🗑 Șterge articolul'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
