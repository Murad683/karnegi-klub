import type { MetadataRoute } from "next";
import { hazirTelimler, telimYolu } from "@/content/telimler";

// Statik export üçün build zamanı sitemap.xml yaranır.
export const dynamic = "force-static";

const BASE = "https://karnegi.az";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/telimler/`, changeFrequency: "monthly", priority: 0.9 },
    ...hazirTelimler.map((t) => ({
      url: `${BASE}${telimYolu(t.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
