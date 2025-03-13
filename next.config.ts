import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

import type { Configuration } from "webpack";

const nextConfig: NextConfig = withBundleAnalyzer({
  // output: "export", // Habilita la exportación estática
  output: "standalone",
  trailingSlash: true, // Asegura compatibilidad con rutas en S3 o Netlify
  reactStrictMode: true, // Habilita el modo estricto de React para detectar errores
  images: {
    unoptimized: true, // Desactiva optimización de imágenes (para S3, pero revisa si es necesario)
    formats: ['image/avif', 'image/webp'], // 🔥 Next.js elegirá AVIF si el navegador lo soporta
    minimumCacheTTL: 60, // 🔥 Cachea imágenes por 60s mínimo en el servidor
  },
  experimental: {
    scrollRestoration: true, // Mejora la experiencia de usuario evitando recargas innecesarias
    outputFileTracingIncludes: {
      "/*": ["node_modules/some-large-lib/**"], // Evita incluir paquetes innecesarios
    },
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
});

export default nextConfig;
