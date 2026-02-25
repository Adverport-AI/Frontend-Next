import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
};

export type BlogPost = BlogPostMeta & { content: string };

const blogDir = path.join(process.cwd(), "content", "blog");

function readFileSafe(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = readFileSafe(filePath);
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: data.author ? String(data.author) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    content,
  };
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => !!p)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
