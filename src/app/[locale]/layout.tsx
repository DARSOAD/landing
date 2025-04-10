import { ReactNode } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl"; 
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

// Importaciones de tu layout
import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";

import DashCodeHeader from "@/src/components/partials/header";
import DashCodeSidebar from "@/src/components/partials/sidebar";
import DashCodeFooter from "@/src/components/partials/footer";
import ThemeCustomize from "@/src/components/partials/customizer";
import PageTitle from "@/src/components/page-title";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Verifica que el `locale` recibido sea válido
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        {/* El proveedor de next-intl envuelve todo el contenido de la página */}
        <NextIntlClientProvider>
          {/* Aquí va el layout global, con los componentes de tu aplicación */}
          <LayoutProvider>
            <ThemeCustomize />
            <DashCodeHeader />
            <DashCodeSidebar />
            <LayoutContentProvider>
              <main className="p-6">
                <PageTitle className="mb-6" />
                {children}
              </main>
            </LayoutContentProvider>
            <DashCodeFooter />
          </LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
