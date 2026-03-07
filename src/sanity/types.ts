import type { PortableTextBlock } from "sanity";

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
  alt?: string;
};

export type BlogPost = {
  _id: string;
  _type: "blogPost";
  title: string;
  /** GROQ projection returns slug.current as a plain string */
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  excerpt: string;
  coverImage?: SanityImage & { alt?: string };
  body?: PortableTextBlock[];
  categories?: string[];
  readTimeMinutes?: number;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: SanityImage;
};

export type BlogPostMeta = Omit<BlogPost, "body">;

export type Brand = {
  _id: string;
  _type: "brand";
  name: string;
  logo?: SanityImage & { alt?: string };
  websiteUrl?: string;
  description?: string;
  category?: string;
  isActive: boolean;
  order?: number;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  siteTitle: string;
  seoDescription?: string;
  ogImage?: SanityImage;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
};
