import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (no Node server at runtime).
  output: "export",
  // next/image optimization needs a server; serve images as-is in static mode.
  images: { unoptimized: true },
  // Emit each route as a folder/index.html — clean static routing on CF Pages.
  trailingSlash: true,
};

export default nextConfig;
