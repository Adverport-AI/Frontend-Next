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
  "readTimeMinutes": round(length(pt::text(body)) / 1000),
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

  try {
    return await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) { ${blogPostMetaFields} }`,
      {},
      { next: { revalidate: 3600, tags: ["blogPost"] } }
    );
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null;

  try {
    const post = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] { ${blogPostFullFields} }`,
      { slug },
      { next: { revalidate: 3600, tags: [`blogPost-${slug}`] } }
    );
    return post ?? null;
  } catch {
    return null;
  }
}

export async function getAdjacentBlogPosts(
  publishedAt: string,
  slug: string
): Promise<{
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
  prevIsCircular: boolean;
  nextIsCircular: boolean;
}> {
  if (!client) {
    return { prev: null, next: null, prevIsCircular: false, nextIsCircular: false };
  }

  // prev = closer OLDER post (← Önceki Yazı)
  // next = closer NEWER post (Sonraki Yazı →)
  try {
    const [prevNormal, nextNormal] = await Promise.all([
      client.fetch<BlogPostMeta | null>(
        `*[_type == "blogPost" && publishedAt < $publishedAt] | order(publishedAt desc)[0] { ${blogPostMetaFields} }`,
        { publishedAt },
        { next: { revalidate: 3600, tags: ["blogPost"] } }
      ),
      client.fetch<BlogPostMeta | null>(
        `*[_type == "blogPost" && publishedAt > $publishedAt] | order(publishedAt asc)[0] { ${blogPostMetaFields} }`,
        { publishedAt },
        { next: { revalidate: 3600, tags: ["blogPost"] } }
      ),
    ]);

    let prev = prevNormal ?? null;
    let next = nextNormal ?? null;
    let prevIsCircular = false;
    let nextIsCircular = false;

    // Circular: en eski post'ta Önceki = en yeni'ye dön
    if (!prev) {
      const wrap = await client.fetch<BlogPostMeta | null>(
        `*[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc)[0] { ${blogPostMetaFields} }`,
        { slug },
        { next: { revalidate: 3600, tags: ["blogPost"] } }
      );
      if (wrap) {
        prev = wrap;
        prevIsCircular = true;
      }
    }

    // Circular: en yeni post'ta Sonraki = en eski'ye dön
    if (!next) {
      const wrap = await client.fetch<BlogPostMeta | null>(
        `*[_type == "blogPost" && slug.current != $slug] | order(publishedAt asc)[0] { ${blogPostMetaFields} }`,
        { slug },
        { next: { revalidate: 3600, tags: ["blogPost"] } }
      );
      if (wrap) {
        next = wrap;
        nextIsCircular = true;
      }
    }

    return { prev, next, prevIsCircular, nextIsCircular };
  } catch {
    return { prev: null, next: null, prevIsCircular: false, nextIsCircular: false };
  }
}

export async function getRecentBlogPosts(excludeSlug?: string): Promise<BlogPostMeta[]> {
  if (!client) return [];

  try {
    return await client.fetch(
      `*[_type == "blogPost" && ($excludeSlug == null || slug.current != $excludeSlug)] | order(publishedAt desc)[0...3] { ${blogPostMetaFields} }`,
      { excludeSlug: excludeSlug ?? null },
      { next: { revalidate: 3600, tags: ["blogPost"] } }
    );
  } catch {
    return [];
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!client) return [];

  try {
    const posts = await client.fetch<{ slug: string }[]>(
      `*[_type == "blogPost"] { "slug": slug.current }`,
      {},
      { next: { revalidate: 3600, tags: ["blogPost"] } }
    );
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
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
