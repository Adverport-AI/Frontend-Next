import type { MetadataRoute } from "next";
import { getAllBlogPostsMeta } from "../lib/queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://adverport.com";
  const now = new Date();

  let posts: Awaited<ReturnType<typeof getAllBlogPostsMeta>> = [];
  try {
    posts = await getAllBlogPostsMeta();
  } catch {
    // Sanity henüz yapılandırılmamışsa boş devam et
  }

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
