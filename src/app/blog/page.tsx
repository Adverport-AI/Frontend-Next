import type { Metadata } from "next";
import { getAllBlogPostsMeta } from "../../lib/queries";
import { urlFor } from "../../lib/sanity";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { BlogListClient } from "./BlogListClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Adverport blog: affiliate marketing, kampanyalar ve kazanç ipuçları.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPostsMeta();

  const postsWithImages = posts.map((post) => ({
    ...post,
    imageUrl: post.coverImage?.asset
      ? urlFor(post.coverImage).width(800).height(400).url()
      : undefined,
  }));

  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="blog" />
      <BlogListClient posts={postsWithImages} />
      <CtaSection
        title="Yeni İçerikleri Oku,"
        highlight="Uygulamayı İndir"
        description="Blog rehberlerini keşfettin; şimdi Adverport'u indirip önerileri doğrudan kendi akışında denemeye başlayabilirsin."
      />
      <Footer />
    </div>
  );
}
