import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getAllBlogSlugs, getBlogPostBySlug } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const ogImageUrl = post.ogImage?.asset
    ? urlFor(post.ogImage).width(1200).height(630).url()
    : post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "tr_TR",
      url: `https://adverport.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      ...(ogImageUrl && { images: [{ url: ogImageUrl }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author ?? "Adverport" },
    publisher: {
      "@type": "Organization",
      name: "Adverport",
      logo: { "@type": "ImageObject", url: "https://adverport.com/assets/logo.png" },
    },
    mainEntityOfPage: `https://adverport.com/blog/${post.slug}`,
    ...(post.coverImage?.asset && {
      image: urlFor(post.coverImage).width(1200).height(630).url(),
    }),
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <Link href="/blog" className="text-sm text-white/70 hover:text-white">
          ← Blog&apos;a dön
        </Link>
        <article className="mt-6">
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
          <p className="mt-3 text-white/75">{post.excerpt}</p>
          <div className="mt-4 text-sm text-white/60">
            {new Date(post.publishedAt).toLocaleDateString("tr-TR")} ·{" "}
            {post.author ?? "Adverport"}
          </div>

          {post.coverImage?.asset && (
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.coverImage).width(1200).height(600).url()}
                alt={post.coverImage.alt ?? post.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
          )}

          {post.body && (
            <div className="prose prose-invert prose-headings:text-white prose-a:text-[#ff6b6b] prose-p:text-white/90 mt-10 max-w-none">
              <PortableText value={post.body} />
            </div>
          )}
        </article>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
