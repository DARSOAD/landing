import { NextRequest, NextResponse } from "next/server";
import { env } from "@/src/config/env";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // 🔁 Proxy al backend FastAPI
    const apiRes = await fetch(`${env.BACKEND_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json({ message: result.message || "Invalid credentials" }, { status: apiRes.status });
    }

    const { access_token, refresh_token, name } = result;

    const response = NextResponse.json({ name });

    // 1. Cookies seguras con tokens
    response.cookies.set("accessToken", access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15,
    });

    response.cookies.set("refreshToken", refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    // 2. Guardar el nombre del usuario como cookie visible desde JS
    response.cookies.set("userName", name, {
      httpOnly: false, // ✅ accesible desde el cliente
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
