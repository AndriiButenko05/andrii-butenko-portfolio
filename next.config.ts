import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // CSS is small (~9 KB gzipped), so inlining it removes render-blocking requests.
    inlineCss: true,
  },
};

export default nextConfig;
