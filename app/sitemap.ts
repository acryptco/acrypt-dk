import type { MetadataRoute } from "next";

const BASE = "https://acrypt.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/lca-epd", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/csrd", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/services/carbon", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/strategy", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cases", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cases/nlmk", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/cases/nlmk-pcf", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/articles", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/articles/double-materiality-esg-reporting", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/articles/scope-3-emissions-tracking", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/articles/esg-reporting-frameworks", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/articles/epds-nordic-building-regulations", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/articles/why-companies-invest-in-epds", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/articles/lca-esg-excellence", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
