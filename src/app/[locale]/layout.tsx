import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl"; // Importa el provider de next-intl
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing"; // Asegúrate de que esto esté configurado correctamente

import "@/src/app/globals.css"; // Importamos los estilos globales
import Head from "next/head";
import GoogleScripts from "@/src/components/GoogleScripts"; // Importamos el componente cliente

// Configuración de la fuente DM_Sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  display: "swap",
});

// Metadatos de la aplicación
export const metadata = {
  title: "Commercial Cleaning Sydney",
  description: "Sydney’s best commercial cleaning, we’ll beat any price!",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>; // Recupera el `locale` desde los parámetros
}) {
  // Asegúrate de que el `locale` entrante sea válido
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound(); // Si el locale no es válido, redirige a una página 404
  }

  return (
    <html lang={locale}>
      <Head>
        {/* Meta etiquetas optimizadas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={`${dmSans.variable} antialiased bg-gray-50`}>
        <GoogleScripts /> {/* Aquí ejecutamos los scripts como un componente cliente */}
        
        {/* Proveedor de next-intl para manejo de internacionalización */}
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
