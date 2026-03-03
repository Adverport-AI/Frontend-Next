import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPostsMeta } from "../../lib/queries";
import { urlFor } from "../../lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Adverport blog: affiliate marketing, kampanyalar ve kazanç ipuçları.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPostsMeta();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Adverport Blog</h1>
        <p className="mt-3 text-white/70">
          Affiliate link yönetimi, kampanya stratejileri ve kullanıcı odaklı gelir modelleri.
        </p>

        <div className="mt-10 grid gap-5">
          {posts.map((post) => (
            <article
              key={post._id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#C0001A]/60 transition-colors"
            >
              {post.coverImage?.asset && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={urlFor(post.coverImage).width(800).height(400).url()}
                    alt={post.coverImage.alt ?? post.title}
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              )}
              <div className="text-sm text-white/60">
                {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
              </div>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-white/75">{post.excerpt}</p>
              <Link
                className="mt-4 inline-flex text-[#ff6b6b] hover:text-white"
                href={`/blog/${post.slug}`}
              >
                Yazıyı oku →
              </Link>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70">
              Henüz blog yazısı yok.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
