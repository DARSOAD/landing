import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Cargar la fuente DM Sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"], // Pesos opcionales
});

export const metadata: Metadata = {
  title: "Commercial cleaning sydney",
  description: "Sydney’s best commercial cleaning, we’ll beat any price!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
