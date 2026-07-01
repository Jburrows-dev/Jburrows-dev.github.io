import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['/'],
    unoptimized: true,
  },
};

export default nextConfig;
