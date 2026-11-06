import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/` for Cloudflare Pages.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // cacheComponents and partialPrefetching are left off: they enable PPR, which static export does not support.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
