// app/admin/layout.tsx
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import getRequestConfig from '@/lib/i18n';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const { locale, messages } = await getRequestConfig({ requestLocale: Promise.resolve('en') });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
