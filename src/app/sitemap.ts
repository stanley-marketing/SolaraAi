import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solaraai.com";

  const staticPages = [
    "",
    "/about",
    "/pricing",
    "/use-cases",
    "/contact",
    "/faq",
    "/blog",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/pricing" ? 0.9 : 0.8,
  }));

  const blogPosts = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
