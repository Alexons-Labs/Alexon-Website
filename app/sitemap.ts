import type { MetadataRoute } from "next";

const ROUTES = ["", "/about", "/solutions", "/work", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `https://alexon.in${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
