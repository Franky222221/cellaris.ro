import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const BLOG_FILE = path.join(process.cwd(), 'data', 'blog-posts.json');

export interface BlogPost {
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

// GET /api/admin/blog — returnează toate articolele
export async function GET() {
  const posts = await readPosts();
  return NextResponse.json(posts);
}

// POST /api/admin/blog — creează articol nou
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { title, slug, category, excerpt, content, author, date, readTime, published } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Titlul și slug-ul sunt obligatorii' },
        { status: 400 }
      );
    }

    const posts = await readPosts();

    // Verifică dacă slug-ul există deja
    const exists = posts.find((p) => p.slug === slug || p.id === slug);
    if (exists) {
      return NextResponse.json(
        { error: 'Un articol cu acest slug există deja' },
        { status: 409 }
      );
    }

    const newPost: BlogPost = {
      id: slug,
      title,
      slug,
      category: category || 'General',
      excerpt: excerpt || '',
      content: content || '',
      author: author || 'Echipa CELLARIS',
      date: date || new Date().toISOString().split('T')[0],
      readTime: readTime || '5 min',
      published: published ?? false,
    };

    posts.unshift(newPost);
    await writePosts(posts);

    return NextResponse.json(newPost, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Eroare internă server' },
      { status: 500 }
    );
  }
}
