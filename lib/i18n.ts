// lib/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) locale = 'en';
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
