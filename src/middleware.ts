// src/middleware.ts

import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";
import type { NextFetchEvent } from "next/server";

// 1️⃣ Paths protegidos (puedes agregar más rutas si necesitas)
const protectedPaths = ["/dashboard"];

// 2️⃣ Middleware de internacionalización
const intlMiddleware = createIntlMiddleware(routing);

// 3️⃣ Middleware principal
export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  // Detectar el locale, por ejemplo: /en/dashboard → en
  const locale = pathname.split("/")[1];

  // Verificar si el pathname comienza con un path protegido
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(`/${locale}${path}`)
  );

  if (isProtected) {
    // Protegemos la ruta y le pasamos el middleware de intl
    const authMiddleware = withAuth(
      (req) => intlMiddleware(req),
      {
        pages: {
          signIn: `/${locale}/auth/login`, // redirección con soporte al idioma
        },
      }
    );

    // Llamamos al middleware protegido pasando tipado correcto
    return authMiddleware(req as NextRequestWithAuth, event);
  }

  // Si no es ruta protegida, solo aplicamos internacionalización
  return intlMiddleware(req);
}

// 4️⃣ Matcher necesario para aplicar solo en rutas válidas
export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)" // excluye estáticos y API
  ],
};