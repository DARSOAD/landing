// src/services/authService.ts
import { signIn } from "next-auth/react";

interface LoginPayload {
  email: string;
  password: string;
}

export async function loginUser(data: LoginPayload): Promise<{ error?: string }> {
  try {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      return { error: res.error }; // devuelve el mensaje del backend si existe
    }

    return {};
  } catch {
    return { error: "An unexpected error occurred during login." };
  }
}
