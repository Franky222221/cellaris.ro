import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

// POST /api/admin/login
// Credențiale implicite: user=admin, pass=cellaris2025
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const validUser = process.env.ADMIN_USER || 'admin';
    const validPass = process.env.ADMIN_PASS || 'cellaris2025';

    if (username !== validUser || password !== validPass) {
      return NextResponse.json(
        { error: 'Credențiale incorecte' },
        { status: 401 }
      );
    }

    // Generează token simplu: sha256 al parolei + secret
    const secret = process.env.ADMIN_SECRET || 'cellaris-admin-secret-2025';
    const token = createHash('sha256').update(password + secret).digest('hex');

    const response = NextResponse.json({ success: true, redirectTo: '/admin' });

    // Setează cookie httpOnly, secure în producție
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 zile
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Eroare internă server' },
      { status: 500 }
    );
  }
}
