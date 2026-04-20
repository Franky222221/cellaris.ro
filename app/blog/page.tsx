import Link from 'next/link';
import { readFileSync } from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Ghidul izolației din celuloză | CELLARIS',
  description: 'Articole tehnice, ghiduri și sfaturi despre izolații din fibre de celuloză, eficiență energetică și standarde nZEB.',
};

type Post = {
  id: string; slug: string; title: string; category: string;
  excerpt: string; date: string; readTime: string; published: boolean;
};

function getPosts(): Post[] {
  try {
    const p = path.join(process.cwd(), 'data', 'blog-posts.json');
    return JSON.parse(readFileSync(p, 'utf-8')).filter((p: Post) => p.published);
  } catch { return []; }
}

const catColors: Record<string, string> = {
  'Ghid tehnic': '#3b82f6',
  'nZEB': '#16a34a',
  'Finanțare': '#f59e0b',
  'Sustenabilitate': '#8b5cf6',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main>
      <section style={{ background: 'var(--green-900)', padding: '6rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Resurse & Articole</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', margin: '0.5rem 0 1rem', letterSpacing: '-0.03em' }}>
            Ghidul complet al izolației
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.7 }}>
            Articole tehnice, comparații și sfaturi practice despre izolații din celuloză, eficiență energetică și standarde nZEB.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ color: '#6b7280', textAlign: 'center', padding: '4rem 0' }}>Nu există articole publicate încă.</p>
          ) : (
            <style>{`.blog-card{transition:box-shadow .2s,transform .2s}.blog-card:hover{box-shadow:0 8px 32px rgba(0,0,0,.1);transform:translateY(-2px)}`}</style>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {posts.map(post => (
                <article key={post.id} className="blog-card" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}
                >
                  <div style={{ height: '160px', background: 'linear-gradient(135deg, #102018, #2D6148)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(52,211,153,.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ display: 'inline-block', background: catColors[post.category] || '#6b7280', color: '#fff', fontSize: '0.6875rem', fontWeight: 700, padding: '0.2em 0.7em', borderRadius: '99px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                      {post.category}
                    </span>
                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', lineHeight: 1.4, marginBottom: '0.625rem' }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</Link>
                    </h2>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem', color: '#9ca3af' }}>
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
