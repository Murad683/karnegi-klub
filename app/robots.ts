import type { MetadataRoute } from "next";

// Statik export üçün build zamanı robots.txt yaranır.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://karnegi.az/sitemap.xml",
  };
}
