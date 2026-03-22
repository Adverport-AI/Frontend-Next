import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import { ArrowLeft, ArrowRight, Calendar, Clock, RefreshCw, User } from "lucide-react";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getAdjacentBlogPosts,
  getRecentBlogPosts,
} from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity";
import { slugify } from "../../../lib/slugify";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SocialShareButtons } from "./SocialShareButtons";
import { BlogPostTOC } from "./BlogPostTOC";
import { extractTocItems } from "../../../lib/toc";
import { AppDownloadCTA } from "../../components/AppDownloadCTA";

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

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children, value }) => {
      // value.children is (ArbitraryTypedObject | PortableTextSpan)[] — filter spans with text
      const text = (value.children ?? [])
        .map((c) => ("text" in c ? String(c.text) : ""))
        .join("");
      return (
        <h2 id={slugify(text)} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 scroll-mt-28">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text = (value.children ?? [])
        .map((c) => ("text" in c ? String(c.text) : ""))
        .join("");
      return (
        <h3 id={slugify(text)} className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 scroll-mt-28">
          {children}
        </h3>
      );
    },
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/70 text-base leading-[1.85] my-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 pl-5 border-l-4 border-[#EB5200] bg-gradient-to-r from-[#EB5200]/5 to-transparent py-4 pr-4 rounded-r-xl">
        <p className="text-white/70 text-base italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="text-white/80 italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-white/10 text-[#FFBA6F] px-1.5 py-0.5 rounded text-[0.9em]">
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#EB5200] hover:text-[#FFBA6F] transition-colors underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-2 my-5 pl-1">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="space-y-2 my-5 pl-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-white/60 text-base leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-[#EB5200] flex-shrink-0 mt-2.5" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-white/60 text-base leading-relaxed">
        <span>{children}</span>
      </li>
    ),
  },
  types: {
    image: ({ value }: { value?: { asset?: { _ref?: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value as Parameters<typeof urlFor>[0]).width(900).auto("format").url();
      return (
        <figure className="my-8 sm:my-10">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt ?? ""}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-white/30 text-xs mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getRecentBlogPosts(slug),
  ]);

  if (!post) notFound();

  const tocItems = extractTocItems(post.body ?? []);

  const { prev, next, prevIsCircular, nextIsCircular } = await getAdjacentBlogPosts(post.publishedAt, post.slug);

  const coverImageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1400).height(700).url()
    : null;

  const recentPostsWithImages = recentPosts.map((p) => ({
    ...p,
    imageUrl: p.coverImage?.asset
      ? urlFor(p.coverImage).width(320).height(192).url()
      : undefined,
  }));

  const prevImageUrl = prev?.coverImage?.asset
    ? urlFor(prev.coverImage).width(600).height(300).url()
    : undefined;
  const nextImageUrl = next?.coverImage?.asset
    ? urlFor(next.coverImage).width(600).height(300).url()
    : undefined;

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
    ...(coverImageUrl && { image: coverImageUrl }),
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="blog" />

      {/* Hero Image */}
      <section className="relative bg-black pt-[100px] sm:pt-[120px]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Blog&apos;a Dön
          </Link>

          <div className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[380px] lg:h-[460px] bg-gradient-to-br from-[#d21027]/20 to-black">
            {coverImageUrl && (
              <Image
                src={coverImageUrl}
                alt={post.coverImage?.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.categories && post.categories.length > 0 && (
                  <span className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    {post.categories[0]}
                  </span>
                )}
                <span className="text-white/60 text-xs flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                {post.readTimeMinutes != null && post.readTimeMinutes > 0 && (
                  <span className="text-white/60 text-xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTimeMinutes} dk okuma
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="bg-black py-10 sm:py-16 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-3 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Author Bar + Social Share */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{post.author ?? "Adverport"}</p>
                    <p className="text-white/40 text-xs">İçerik Ekibi</p>
                  </div>
                </div>
                <SocialShareButtons title={post.title} />
              </div>

              {/* Excerpt */}
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Mobile/Tablet TOC */}
              {tocItems.length > 0 && (
                <div className="lg:hidden mb-8">
                  <BlogPostTOC items={tocItems} />
                </div>
              )}

              {/* Article Body */}
              {post.body && (
                <div>
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>
              )}

              {/* Prev / Next Navigation */}
              {(prev || next) && (
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prev && (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all block"
                    >
                      <div className="relative h-32 sm:h-36 overflow-hidden bg-white/5">
                        {prevImageUrl && (
                          <Image src={prevImageUrl} alt={prev.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                            {prevIsCircular
                              ? <><RefreshCw className="w-3 h-3" /><span>En Yeni Yazı</span></>
                              : <><ArrowLeft className="w-3.5 h-3.5" /><span>Önceki Yazı</span></>
                            }
                          </div>
                          <p className="text-white text-sm font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2">
                            {prev.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {next && (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all block"
                    >
                      <div className="relative h-32 sm:h-36 overflow-hidden bg-white/5">
                        {nextImageUrl && (
                          <Image src={nextImageUrl} alt={next.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5 justify-end">
                            {nextIsCircular
                              ? <><span>En Eski Yazı</span><RefreshCw className="w-3 h-3" /></>
                              : <><span>Sonraki Yazı</span><ArrowRight className="w-3.5 h-3.5" /></>
                            }
                          </div>
                          <p className="text-white text-sm font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2 text-right">
                            {next.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-[120px] space-y-6">
                {/* Author Card */}
                <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Adverport Ekibi</p>
                      <p className="text-white/40 text-xs">İçerik Ekibi</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Adverport ekibinde yer alan uzman içerik üreticilerimizden. Affiliate pazarlama stratejileri üzerine düzenli yazılar yayınlamaktadır.
                  </p>
                </div>

                {/* Table of Contents */}
                {tocItems.length > 0 && (
                  <div className="hidden lg:block">
                    <BlogPostTOC items={tocItems} />
                  </div>
                )}

                {/* Recent Posts */}
                {recentPostsWithImages.length > 0 && (
                  <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                    <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#EB5200]" /> Son Yazılar
                    </h4>
                    <div className="space-y-4">
                      {recentPostsWithImages.map((rp) => (
                        <Link
                          key={rp._id}
                          href={`/blog/${rp.slug}`}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                            {rp.imageUrl && (
                              <Image
                                src={rp.imageUrl}
                                alt={rp.title}
                                width={64}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <p className="text-white text-xs font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2 leading-relaxed">
                              {rp.title}
                            </p>
                            <p className="text-white/40 text-[11px] mt-1">
                              {new Date(rp.publishedAt).toLocaleDateString("tr-TR")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black py-14 sm:py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d21027] opacity-5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Yeni Yazıları{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Kaçırma
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mb-6">
            Haftalık bültenimize abone ol, en son ipuçları ve stratejileri doğrudan posta kutuna al.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d21027]/50 transition-colors text-sm"
            />
            <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <AppDownloadCTA />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
