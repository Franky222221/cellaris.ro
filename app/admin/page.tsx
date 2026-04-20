import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  published: boolean;
}

async function getStats() {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'data', 'blog-posts.json'), 'utf-8');
    const posts: BlogPost[] = JSON.parse(raw);
    const published = posts.filter((p) => p.published).length;
    const drafts = posts.filter((p) => !p.published).length;
    const last = posts.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
    return { total: posts.length, published, drafts, lastDate: last?.date || '—', lastTitle: last?.title || '—' };
  } catch {
    return { total: 0, published: 0, drafts: 0, lastDate: '—', lastTitle: '—' };
  }
}

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '12px',
  padding: '1.5rem',
  border: '1px solid #e5e7eb',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
};

const statValueStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '800',
  color: '#111827',
  lineHeight: 1,
  marginBottom: '0.25rem',
};

const statLabelStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  color: '#6b7280',
  fontWeight: '500',
};

const quickLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '1rem 1.25rem',
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  textDecoration: 'none',
  color: '#111827',
  fontSize: '0.9375rem',
  fontWeight: '500',
  transition: 'all 0.15s',
  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
};

export default async function AdminDashboardPage() {
  const stats = await getStats();

  return (
    <div style={{ maxWidth: '1100px' }}>
      {/* Page header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: '0 0 0.25rem 0' }}>
          Dashboard
        </h1>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
          Bun venit în panoul de administrare CELLARIS
        </p>
      </div>

      {/* Stats cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div style={cardStyle}>
          <div style={{ ...statValueStyle, color: '#16A34A' }}>{stats.total}</div>
          <div style={statLabelStyle}>Total articole</div>
        </div>
        <div style={cardStyle}>
          <div style={{ ...statValueStyle, color: '#34D399' }}>{stats.published}</div>
          <div style={statLabelStyle}>Articole publicate</div>
        </div>
        <div style={cardStyle}>
          <div style={{ ...statValueStyle, color: '#f59e0b' }}>{stats.drafts}</div>
          <div style={statLabelStyle}>Draft-uri</div>
        </div>
        <div style={{ ...cardStyle, gridColumn: 'span 1' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem', lineHeight: 1.3 }}>
            {stats.lastTitle !== '—' && stats.lastTitle.length > 50
              ? stats.lastTitle.slice(0, 50) + '...'
              : stats.lastTitle}
          </div>
          <div style={statLabelStyle}>Ultimul articol · {stats.lastDate}</div>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', margin: '0 0 1rem 0' }}>
          Acțiuni rapide
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}
        >
          <Link href="/admin/blog/new" style={{ ...quickLinkStyle, borderColor: '#16A34A', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #16A34A, #34D399)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: '600', color: '#166534' }}>Articol nou</div>
              <div style={{ fontSize: '0.75rem', color: '#15803d' }}>Creează conținut blog</div>
            </div>
          </Link>

          <Link href="/admin/blog" style={quickLinkStyle}>
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: '600' }}>Gestionează articole</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{stats.total} articole totale</div>
            </div>
          </Link>

          <Link href="/admin/settings" style={quickLinkStyle}>
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: '600' }}>Setări site</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Contact, social, ore</div>
            </div>
          </Link>

          <Link
            href="/"
            target="_blank"
            style={quickLinkStyle}
          >
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: '600' }}>Preview site</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Deschide în tab nou</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Blog link */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{ fontWeight: '600', color: '#166534', marginBottom: '0.25rem' }}>
            Blog public CELLARIS
          </div>
          <div style={{ fontSize: '0.8125rem', color: '#15803d' }}>
            {stats.published} articole publicate sunt vizibile vizitatorilor
          </div>
        </div>
        <Link
          href="/blog"
          target="_blank"
          style={{
            padding: '0.5rem 1rem',
            background: '#16A34A',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            whiteSpace: 'nowrap',
          }}
        >
          Vezi blog →
        </Link>
      </div>
    </div>
  );
}
