import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during build
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
