import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware protejează toate rutele /admin/* și /api/admin/*
// exceptând /admin/login și /api/admin/login
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permite accesul la pagina de login și API-ul de login fără autentificare
  if (
    pathname === '/admin/login' ||
    pathname === '/api/admin/login' ||
    pathname === '/api/admin/logout'
  ) {
    return NextResponse.next();
  }

  // Verifică dacă ruta este protejată
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  if (isAdminRoute) {
    const sessionCookie = request.cookies.get('admin_session');

    if (!sessionCookie || !sessionCookie.value) {
      // Redirect la login pentru rute de pagini
      if (pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
      // Returnează 401 pentru rute API
      return NextResponse.json({ error: 'Neautorizat' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
