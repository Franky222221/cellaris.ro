import { NextResponse } from 'next/server';

// POST /api/admin/logout — șterge cookie-ul de sesiune și redirecționează
export async function POST() {
  const response = NextResponse.json({ success: true, redirectTo: '/admin/login' });

  response.cookies.set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });

  return response;
}

// GET pentru compatibilitate cu link-uri directe
export async function GET() {
  const response = NextResponse.redirect(
    new URL('/admin/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
  );

  response.cookies.set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });

  return response;
}
