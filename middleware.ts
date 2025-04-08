// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Permitir libre acceso a analytics sin autenticación
  if (url.pathname.startsWith('/dashboard/analytics')) {
    return NextResponse.next();
  }

  // Si en el futuro quieres proteger rutas específicas, puedes usar algo como:
  // if (url.pathname.startsWith('/dashboard/protected')) { ... }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*'
  ]
};
