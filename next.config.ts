import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  // Optional: Add trailing slash for better compatibility with static servers
  trailingSlash: true,
  // Optional: Change the output directory from 'out' to 'dist'
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
