import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Adverport blog: affiliate marketing, kampanyalar ve kazanç ipuçları.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

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
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#C0001A]/60 transition-colors"
            >
              <div className="text-sm text-white/60">{new Date(post.date).toLocaleDateString("tr-TR")}</div>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-white/75">{post.description}</p>
              <Link className="mt-4 inline-flex text-[#ff6b6b] hover:text-white" href={`/blog/${post.slug}`}>
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
