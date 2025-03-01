import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Habilita la exportación estática
  images: {
    unoptimized: true, // Evita la optimización de imágenes (necesario para S3)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Permite importar SVGs como componentes
    });
    return config;
  },
};

export default nextConfig;
