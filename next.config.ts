import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Permite importar SVGs como componentes
    });
    return config;
  },
};

export default nextConfig;
