import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight, User, Tag } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts, blogCategories, type BlogPost } from './blogData';

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all cursor-pointer h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="font-['Inter',sans-serif] bg-white/10 backdrop-blur-sm text-[#FFBA6F] px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3 text-white/40 text-xs font-['Inter',sans-serif]">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>

          <h3 className="font-['Inter',sans-serif] text-white font-bold text-base sm:text-lg mb-3 group-hover:text-[#FFBA6F] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="font-['Inter',sans-serif] text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d21027]/50 to-[#EB5200]/50 flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="font-['Inter',sans-serif] text-white/60 text-xs">{post.author}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#EB5200] transition-colors" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  // Sync category from URL search params on mount and when params change
  useEffect(() => {
    if (categoryFromUrl && blogCategories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory('Tümü');
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'Tümü') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const matchesCategory = (post: BlogPost) =>
    activeCategory === 'Tümü' || post.category === activeCategory;

  const filteredPosts = blogPosts.filter(matchesCategory);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-8 sm:pb-10 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-white font-semibold text-sm sm:text-base">Adverport Blog</span>
            </div>

            <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              <span>Trendler, Stratejiler ve </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kazanç Rehberi</span>
            </h1>

            <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Influencer'lar ve alışveriş severler için güncel ipuçları, platform stratejileri ve affiliate dünyasındaki son gelişmeler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Blog Grid */}
      <section className="bg-black py-10 sm:py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-['Inter',sans-serif] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white shadow-[0_0_20px_rgba(210,16,39,0.3)]'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Inter',sans-serif] text-white/40 text-lg">Bu kategoride henüz yazı bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-14 sm:py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d21027] opacity-8 blur-[150px] rounded-full" />

        <div className="relative max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            <span>Yeni Yazıları </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kaçırma</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base mb-6">
            Haftalık bültenimize abone ol, en son ipuçları ve stratejileri doğrudan posta kutuna al.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm"
            />
            <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif] whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
