import { client } from "../sanity/lib/client";
import type { BlogPost, BlogPostMeta, Brand, SiteSettings } from "../sanity/types";

// ─── Blog Queries ────────────────────────────────────────────────────────────

const blogPostMetaFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  author,
  excerpt,
  categories,
  "coverImage": coverImage { asset, alt, hotspot }
`;

const blogPostFullFields = `
  ${blogPostMetaFields},
  body,
  seoTitle,
  seoDescription,
  "ogImage": ogImage { asset, hotspot }
`;

export async function getAllBlogPostsMeta(): Promise<BlogPostMeta[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ${blogPostMetaFields} }`,
    {},
    { next: { revalidate: 3600, tags: ["blogPost"] } }
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${blogPostFullFields} }`,
    { slug },
    { next: { revalidate: 3600, tags: [`blogPost-${slug}`] } }
  );
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!client) return [];
  const posts = await client.fetch<{ slug: string }[]>(
    `*[_type == "blogPost"] { "slug": slug.current }`,
    {},
    { next: { revalidate: 3600, tags: ["blogPost"] } }
  );
  return posts.map((p) => p.slug);
}

// ─── Brand Queries ────────────────────────────────────────────────────────────

export async function getActiveBrands(): Promise<Brand[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "brand" && isActive == true] | order(order asc, name asc) {
      _id,
      name,
      "logo": logo { asset, alt, hotspot },
      websiteUrl,
      description,
      category,
      isActive,
      order
    }`,
    {},
    { next: { revalidate: 3600, tags: ["brand"] } }
  );
}

// ─── Site Settings Query ──────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      siteTitle,
      seoDescription,
      "ogImage": ogImage { asset, hotspot },
      socialLinks
    }`,
    {},
    { next: { revalidate: 3600, tags: ["siteSettings"] } }
  );
}
