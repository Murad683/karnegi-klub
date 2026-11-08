import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // /telimler/ad/ → out/telimler/ad/index.html: nginx üçün sadə qovluq quruluşu.
  trailingSlash: true,
  images: { unoptimized: true },
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
