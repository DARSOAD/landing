//src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
  }
}

const handler = NextAuth({
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
          id: data.user.id, // 👈 Aquí puedes usar el ID del usuario si lo necesitas
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
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.name = user.name;
        token.image = user.image;
        token.sub = user.id;
        token.email = user.email;
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
});

export { handler as GET, handler as POST };
