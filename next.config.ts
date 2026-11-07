import type { NextConfig } from "next";

/**
 * Set NEXT_PUBLIC_BASE_PATH to your GitHub repo name when deploying to
 * https://username.github.io/<repo>/ (e.g. "/expentra-health").
 * Leave empty for custom domains or root hosting.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
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
