import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', 
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'jburrows-dev.github.io',
        pathname: '**'
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
