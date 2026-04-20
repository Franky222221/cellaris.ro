import { readFileSync } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

type Post = {
  id: string; slug: string; title: string; category: string;
  excerpt: string; content: string; author: string;
  date: string; readTime: string; published: boolean;
};

function getPosts(): Post[] {
  try {
    return JSON.parse(readFileSync(path.join(process.cwd(), 'data', 'blog-posts.json'), 'utf-8'));
  } catch { return []; }
}

export async function generateStaticParams() {
  return getPosts().filter(p => p.published).map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | CELLARIS`, description: post.excerpt };
}

function renderMarkdown(md: string) {
  return md.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.375rem', fontWeight: 800, color: '#111827', margin: '2rem 0 0.75rem', letterSpacing: '-0.02em' }}>{block.slice(3)}</h2>;
    if (block.startsWith('### ')) return <h3 key={i} style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1f2937', margin: '1.5rem 0 0.5rem' }}>{block.slice(4)}</h3>;
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(l => l.startsWith('- '));
      return <ul key={i} style={{ paddingLeft: '1.5rem', margin: '0.75rem 0', lineHeight: 1.8, color: '#374151' }}>{items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}</ul>;
    }
    const html = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
    return <p key={i} style={{ lineHeight: 1.8, color: '#374151', margin: '0.75rem 0' }} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find(p => p.slug === slug && p.published);
  if (!post) notFound();

  return (
    <main>
      <section style={{ background: 'var(--green-900)', padding: '5rem 0 3rem', color: '#fff' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,.45)', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Acasă</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>{post.title}</span>
          </nav>
          <span style={{ display: 'inline-block', background: 'rgba(52,211,153,.15)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, padding: '0.25em 0.875em', borderRadius: '99px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(52,211,153,.25)' }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: 'clamp(1.75rem,4.5vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '18ch', margin: '0 0 1.25rem' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'rgba(255,255,255,.45)', fontSize: '0.875rem', flexWrap: 'wrap' }}>
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime} lectură</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr min(680px, 100%)', gap: '0' }}>
            <article style={{ maxWidth: '720px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: 1.75, borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem', marginBottom: '2rem', fontStyle: 'italic' }}>
                {post.excerpt}
              </p>
              <div>{renderMarkdown(post.content)}</div>
            </article>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--green-900)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '1.75rem', marginBottom: '0.75rem' }}>Solicită o evaluare gratuită</h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: '1.75rem' }}>Echipa CELLARIS răspunde în maxim 2 ore.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#oferta" className="btn btn--accent btn--lg">Ofertă gratuită</Link>
            <Link href="/blog" className="btn btn--outline-white">← Înapoi la blog</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
