import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

// 👉 Declaraciones personalizadas de tipos
declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: {
      name: string;
      email?: string;
      image?: string;
      accessToken: string;
    };
  }

  interface JWT {
    accessToken?: string | object;
    refreshToken?: string;
    name?: string;
    image?: string;
    role?: string;
    sub?: string;
    email?: string;
  }
}

async function refreshAccessToken(refreshToken: string) {
  const res = await fetch(`${process.env.BACKEND_URL}/users/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!res.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await res.json();

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.BACKEND_URL}/users/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email || "",
            password: credentials?.password || "",
          }),
        });

        const data = await res.json();

        if (!res.ok || !data.access_token) {
          throw new Error(data.message || "Login failed");
        }

        return {
          id: data.user.id,
          image: data.user.picture,
          email: data.user.email,
          name: data.user.name,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          name: user.name,
          image: user.image,
          sub: user.id,
          email: user.email,
        };
      }

      if (typeof token.accessToken === "string") {
        const decoded = jwtDecode<{ exp: number }>(token.accessToken);
        const isExpired = Date.now() >= decoded.exp * 1000;

        if (!isExpired) return token;

        try {
          const refreshed = await refreshAccessToken(token.refreshToken as string);
          return {
            ...token,
            accessToken: refreshed.accessToken,
            refreshToken: refreshed.refreshToken,
          };
        } catch {
          return { ...token, accessToken: "", refreshToken: "" };
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = typeof token.accessToken === "string" ? token.accessToken : "";
      session.user.name = token.name!;
      session.user.image = typeof token.image === "string" ? token.image : undefined;
      session.user.email = token.email!;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
