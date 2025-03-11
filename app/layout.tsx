import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import GoogleScripts from "./components/GoogleScripts"; // Importamos el componente cliente

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"], // Pesos opcionales
  display: "swap",
});

export const metadata: Metadata = {
  title: "Commercial Cleaning Sydney",
  description: "Sydney’s best commercial cleaning, we’ll beat any price!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Meta etiquetas optimizadas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={`${dmSans.variable} antialiased bg-gray-50`}>
        <GoogleScripts /> {/* Aquí ejecutamos los scripts como un componente cliente */}
        {children}
      </body>
    </html>
  );
}
