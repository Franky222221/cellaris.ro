import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const BLOG_FILE = path.join(process.cwd(), 'data', 'blog-posts.json');

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

async function readPosts(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(BLOG_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writePosts(posts: BlogPost[]): Promise<void> {
  await fs.writeFile(BLOG_FILE, JSON.stringify(posts, null, 2), 'utf-8');
}

type RouteParams = { params: Promise<{ id: string }> };

// GET /api/admin/blog/[id] — returnează un articol
export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const posts = await readPosts();
  const post = posts.find((p) => p.id === id || p.slug === id);

  if (!post) {
    return NextResponse.json({ error: 'Articolul nu a fost găsit' }, { status: 404 });
  }

  return NextResponse.json(post);
}

// PUT /api/admin/blog/[id] — actualizează un articol
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const posts = await readPosts();
    const index = posts.findIndex((p) => p.id === id || p.slug === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Articolul nu a fost găsit' }, { status: 404 });
    }

    const updated: BlogPost = {
      ...posts[index],
      ...body,
      id: posts[index].id, // id-ul nu se modifică
    };

    posts[index] = updated;
    await writePosts(posts);

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Eroare internă server' }, { status: 500 });
  }
}

// DELETE /api/admin/blog/[id] — șterge un articol
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const posts = await readPosts();
    const index = posts.findIndex((p) => p.id === id || p.slug === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Articolul nu a fost găsit' }, { status: 404 });
    }

    const deleted = posts[index];
    posts.splice(index, 1);
    await writePosts(posts);

    return NextResponse.json({ success: true, deleted });
  } catch {
    return NextResponse.json({ error: 'Eroare internă server' }, { status: 500 });
  }
}
