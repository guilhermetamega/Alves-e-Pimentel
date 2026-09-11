import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/privacidade`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/aviso-legal`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
