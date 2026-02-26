import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogSlugs, getBlogPostBySlug } from "../../../lib/blog";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
      url: `https://adverport.com/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: { "@type": "Person", name: post.author ?? "Adverport" },
    publisher: { "@type": "Organization", name: "Adverport" },
    mainEntityOfPage: `https://adverport.com/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <Link href="/blog" className="text-sm text-white/70 hover:text-white">← Blog'a dön</Link>
        <article className="mt-6">
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
          <p className="mt-3 text-white/75">{post.description}</p>
          <div className="mt-4 text-sm text-white/60">
            {new Date(post.date).toLocaleDateString("tr-TR")} · {post.author ?? "Adverport"}
          </div>

          <div className="prose prose-invert prose-headings:text-white prose-a:text-[#ff6b6b] prose-p:text-white/90 mt-10 max-w-none whitespace-pre-wrap">
            {post.content}
          </div>
        </article>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
