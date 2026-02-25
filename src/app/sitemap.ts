import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adverport.com";
  const now = new Date();
  const posts = getAllBlogPosts();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
