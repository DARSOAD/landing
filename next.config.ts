import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import type { Configuration } from 'webpack';

// Tu configuración actual
const nextConfig: NextConfig = {
  // Configuración estándar de Next.js
  output: 'standalone', // Usar exportación independiente
  trailingSlash: true,  // Asegura compatibilidad con rutas en S3 o Netlify
  reactStrictMode: true, // Habilita el modo estricto de React para detectar errores
  images: {
    unoptimized: true, // Desactiva optimización de imágenes (para S3, pero revisa si es necesario)
    formats: ['image/avif', 'image/webp'], // Next.js elige AVIF si el navegador lo soporta
    minimumCacheTTL: 60, // Cachea imágenes por 60s mínimo en el servidor
  },
  experimental: {
    scrollRestoration: true, // Mejora la experiencia evitando recargas innecesarias
  },
  outputFileTracingIncludes: {
    "/*": ["node_modules/some-large-lib/**"], // Evita incluir paquetes innecesarios
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Elimina `console.log` en producción
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Permite importar SVGs como componentes
    });

    return config;
  },

  // Cualquier otra configuración específica que tengas en tu archivo original...
};

// Crear el plugin next-intl
const withNextIntl = createNextIntlPlugin();

// Combinar ambas configuraciones (tu configuración de Next.js y next-intl)
export default withNextIntl(nextConfig);
