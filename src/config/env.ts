// src/config/env.ts
import { z } from "zod";

// ¿Estás en producción?
const isProduction = process.env.NODE_ENV === "production";

// Esquema de validación de tus variables
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  BACKEND_URL: z
    .string()
    .url({ message: "❌ BACKEND_URL debe ser una URL válida" })
    .or(z.literal("").refine(() => !isProduction, {
      message: "❌ API_URL no puede estar vacía en producción"
    })),
});

// Valores base que pueden venir desde process.env (o definidos manualmente si necesitas fallback)
const rawEnv = {
  NODE_ENV: process.env.NODE_ENV,
  BACKEND_URL: process.env.BACKEND_URL ?? (!isProduction ? "http://localhost:8000" : ""),
};

// ✅ Validación
export const env = envSchema.parse(rawEnv);
export const isProd = env.NODE_ENV === "production";
