import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  published: boolean;
  excerpt: string;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'data', 'blog-posts.json'), 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default async function AdminBlogPage() {
  const posts = await getPosts();
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const thStyle: React.CSSProperties = {
    padding: '0.75rem 1rem',
    textAlign: 'left',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #e5e7eb',
    background: '#f9fafb',
    whiteSpace: 'nowrap',
  };

  const tdStyle: React.CSSProperties = {
    padding: '1rem',
    borderBottom: '1px solid #f3f4f6',
    verticalAlign: 'middle',
  };

  return (
    <div style={{ maxWidth: '1100px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: '0 0 0.25rem 0' }}>
            Articole Blog
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
            {posts.length} articole · {posts.filter((p) => p.published).length} publicate
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.125rem',
            background: 'linear-gradient(135deg, #16A34A, #34D399)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Articol nou
        </Link>
      </div>

      {/* Table */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {sorted.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '1rem', opacity: 0.4 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <p style={{ margin: 0, fontSize: '0.9375rem' }}>Nu există articole încă.</p>
            <Link href="/admin/blog/new" style={{ color: '#16A34A', fontWeight: '600', textDecoration: 'none', display: 'inline-block', marginTop: '0.5rem' }}>
              Creează primul articol →
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Titlu</th>
                  <th style={thStyle}>Categorie</th>
                  <th style={thStyle}>Dată</th>
                  <th style={{ ...thStyle, textAlign: 'center' }}>Status</th>
                  <th style={{ ...thStyle, textAlign: 'right' }}>Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((post) => (
                  <tr key={post.id} style={{ transition: 'background 0.1s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#fafafa')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                  >
                    <td style={tdStyle}>
                      <div style={{ fontWeight: '600', color: '#111827', fontSize: '0.9375rem', marginBottom: '0.125rem' }}>
                        {post.title.length > 60 ? post.title.slice(0, 60) + '...' : post.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>/{post.slug}</div>
                    </td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.2rem 0.6rem',
                          background: '#f0fdf4',
                          color: '#16A34A',
                          borderRadius: '999px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                        }}
                      >
                        {post.category}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, color: '#6b7280', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
                      {post.date}
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '999px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: post.published ? '#dcfce7' : '#fef3c7',
                          color: post.published ? '#166534' : '#92400e',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: post.published ? '#16A34A' : '#f59e0b',
                            display: 'inline-block',
                          }}
                        />
                        {post.published ? 'Publicat' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          style={{
                            padding: '0.375rem 0.625rem',
                            color: '#6b7280',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '0.8125rem',
                            border: '1px solid #e5e7eb',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                          title="Previzualizează"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </Link>
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          style={{
                            padding: '0.375rem 0.75rem',
                            background: '#f3f4f6',
                            color: '#374151',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '0.8125rem',
                            fontWeight: '500',
                            border: '1px solid #e5e7eb',
                          }}
                        >
                          Editează
                        </Link>
                        <DeleteButton postId={post.id} postTitle={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
