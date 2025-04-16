// src/app/(admin)/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import MountedProvider from "@/providers/mounted.provider";
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/src/components/ui/sonner";
// language
import { getLangDir } from "rtl-detect";
import DirectionProvider from "@/providers/direction-provider";
import AuthProvider from "@/providers/auth.provider";
import LayoutProvider from "@/providers/layout.provider";
import ThemeCustomize from "@/src/components/partials/customizer";
import DashCodeHeader from "@/src/components/partials/header";
import DashCodeSidebar from "@/src/components/partials/sidebar";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeFooter from "@/src/components/partials/footer";

export const metadata: Metadata = {
  title: "Dashcode admin Template",
  description: "created by codeshaper",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const direction = getLangDir(locale);
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MountedProvider>
          <DirectionProvider direction={direction}>
            <LayoutProvider >
              <ThemeCustomize />
              {/* <DashCodeHeader /> */}
              <DashCodeSidebar />
              <LayoutContentProvider>
                {children}
              </LayoutContentProvider>
              <DashCodeFooter />
            </LayoutProvider>
          </DirectionProvider>
        </MountedProvider>
        <Toaster />
        <SonnerToaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
