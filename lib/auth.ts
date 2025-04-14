import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function auth() {
  try {
    const token = (await cookies()).get("accessToken")?.value; // ✅ con await
    if (!token) return null;

    interface JwtPayload {
      name: string;
      email: string;
      image?: string;
      exp: number;
    }

    const payload: JwtPayload = jwtDecode<JwtPayload>(token); // puedes tipar esto si lo deseas

    if (payload.exp * 1000 < Date.now()) return null;

    return {
      user: {
        name: payload.name,
        email: payload.email,
        image: payload.image || "/images/default-avatar.png"
      }
    };
  } catch {
    return null;
  }
}
