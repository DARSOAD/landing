// src/lib/fetchWithAuth.ts

import { getSession, signOut } from "next-auth/react";

/**
 * Wrapper de fetch que agrega automáticamente el token JWT en el header Authorization.
 * Si el token está expirado, ya fue refrescado automáticamente por NextAuth.
 */
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const session = await getSession();

  const token = session?.user?.accessToken;

  if (!token) {
    console.error("❌ No access token found");
    signOut(); // Finaliza sesión si no hay token
    throw new Error("No access token available.");
  }

  console.log("Opciones de fetch:", options);
  console.log("URL de fetch:", url);
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (response.status === 401) {
    console.warn("🔒 Acceso no autorizado. Cerrando sesión.");
    signOut();
  }

  return response;
}
