"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  ExternalLink,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  PlayCircle,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type HelpCategory = {
  title: string;
  description: string;
  icon: ReactNode;
  articles: string[];
};

type PopularArticle = {
  title: string;
  category: string;
  readTime: string;
};

const helpCategories: HelpCategory[] = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Başlangıç Rehberi",
    description: "Adverport'a ilk adımlarınızı atın.",
    articles: ["Hesap oluşturma", "Profil ayarları", "İlk linkinizi paylaşma", "Panel kullanımı"],
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Kazanç & Ödemeler",
    description: "Komisyonlar ve ödeme süreçleri.",
    articles: ["Komisyon hesaplama", "Ödeme yöntemleri", "Çekim limitleri", "Ödeme takvimi"],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Hesap Yönetimi",
    description: "Hesap ayarları ve güvenlik kontrolleri.",
    articles: ["Şifre değiştirme", "E-posta güncelleme", "Hesap doğrulama", "Hesap silme"],
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Uygulama Kullanımı",
    description: "Mobil deneyim ve gündelik kullanım.",
    articles: ["Link oluşturma", "Koleksiyon yönetimi", "Bildirim ayarları", "Güncelleme süreci"],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Güvenlik & Gizlilik",
    description: "Veri koruma ve hesap güvenliği.",
    articles: ["Veri güvenliği", "Gizlilik tercihleri", "Şüpheli aktivite bildirimi", "KVKK hakları"],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Premium Üyelik",
    description: "Premium özellikler ve abonelik süreçleri.",
    articles: ["Premium avantajları", "Abonelik yönetimi", "Deneme süreci", "Fiyatlandırma"],
  },
];

const popularArticles: PopularArticle[] = [
  { title: "Adverport'a nasıl başlarım?", category: "Başlangıç", readTime: "3 dk" },
  { title: "Komisyon oranları nasıl belirlenir?", category: "Kazanç", readTime: "2 dk" },
  { title: "Ödeme ne zaman yapılır?", category: "Ödeme", readTime: "4 dk" },
  { title: "Premium üyelik avantajları nelerdir?", category: "Premium", readTime: "3 dk" },
  { title: "Hesabımı nasıl güvende tutarım?", category: "Güvenlik", readTime: "5 dk" },
  { title: "Link paylaşım performansı nasıl artırılır?", category: "Rehber", readTime: "6 dk" },
];

const quickActions = [
  {
    icon: <PlayCircle className="h-5 w-5" />,
    title: "Video Rehberler",
    description: "Uygulama akışlarını hızlı öğrenin",
    href: "#yardim-konulari",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Kullanım Kılavuzu",
    description: "En temel akışları toplu inceleyin",
    href: "#populer-makaleler",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Hızlı İpuçları",
    description: "Kazanç odaklı pratik öneriler",
    href: "/sss",
  },
];

export default function YardimMerkeziPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return helpCategories;

    const query = searchQuery.toLowerCase();
    return helpCategories
      .map((category) => ({
        ...category,
        articles: category.articles.filter(
          (article) =>
            article.toLowerCase().includes(query) ||
            category.title.toLowerCase().includes(query) ||
            category.description.toLowerCase().includes(query)
        ),
      }))
      .filter(
        (category) =>
          category.articles.length > 0 ||
          category.title.toLowerCase().includes(query) ||
          category.description.toLowerCase().includes(query)
      );
  }, [searchQuery]);

  const filteredPopularArticles = useMemo(() => {
    if (!searchQuery.trim()) return popularArticles;
    const query = searchQuery.toLowerCase();
    return popularArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) || article.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[460px] w-[460px] rounded-full bg-[#d21027] opacity-10 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <BookOpen className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">
                Yardım Merkezi
              </span>
            </div>

            <h1 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Nasıl
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent"> Yardımcı Olabiliriz</span>?
            </h1>
            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Adverport'u en verimli şekilde kullanmanız için ihtiyacınız olan her şey burada.
            </p>

            <div className="relative mx-auto mt-8 max-w-2xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Yardım makalesi arayın..."
                className="w-full rounded-[20px] border border-white/10 bg-white/[0.06] py-4 pl-12 pr-4 font-['Inter',sans-serif] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#EB5200]/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] pb-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {quickActions.map((action, index) => {
              const card = (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 transition-colors hover:border-[#d21027]/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white">
                    {action.icon}
                  </div>
                  <div>
                    <h2 className="font-['Inter',sans-serif] text-sm font-semibold text-white">{action.title}</h2>
                    <p className="mt-1 font-['Inter',sans-serif] text-xs text-white/45">{action.description}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/25 transition-colors group-hover:text-[#FFBA6F]" />
                </motion.div>
              );

              return action.href.startsWith("/") ? (
                <Link key={action.title} href={action.href}>
                  {card}
                </Link>
              ) : (
                <a key={action.title} href={action.href}>
                  {card}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="yardim-konulari" className="bg-black pb-20 pt-2">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="mb-8 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">Yardım Konuları</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white">
                  {category.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white">{category.title}</h3>
                <p className="mt-2 font-['Inter',sans-serif] text-sm leading-relaxed text-white/50">{category.description}</p>
                <ul className="mt-5 space-y-2">
                  {category.articles.map((article) => (
                    <li key={article} className="flex items-start gap-2 text-sm text-white/65">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFBA6F]" />
                      <span className="font-['Inter',sans-serif] leading-relaxed">{article}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 ? (
            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center">
              <p className="font-['Inter',sans-serif] text-sm text-white/50">Aradığınız konuyla eşleşen yardım başlığı bulunamadı.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section id="populer-makaleler" className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <h2 className="mb-8 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">Popüler Konular</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPopularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex items-start justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#d21027]/40"
              >
                <div>
                  <span className="font-['Inter',sans-serif] text-xs font-medium text-[#FFBA6F]">{article.category}</span>
                  <h3 className="mt-1 font-['Inter',sans-serif] text-sm font-semibold text-white transition-colors group-hover:text-[#FFBA6F]">
                    {article.title}
                  </h3>
                  <span className="mt-3 inline-block font-['Inter',sans-serif] text-xs text-white/35">{article.readTime} okuma</span>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-[#FFBA6F]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-4xl">Destek ekibimize ulaşın</h2>
            <p className="mx-auto mt-3 max-w-2xl font-['Inter',sans-serif] text-sm leading-relaxed text-white/55 sm:text-base">
              Aradığınız cevabı bulamadıysanız size en uygun destek kanalını seçin.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href="mailto:destek@adverport.com"
              className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-center transition-colors hover:border-[#d21027]/40"
            >
              <Mail className="mx-auto h-8 w-8 text-[#FFBA6F]" />
              <h3 className="mt-4 font-['Inter',sans-serif] text-base font-bold text-white">E-posta</h3>
              <p className="mt-2 font-['Inter',sans-serif] text-sm text-white/45">destek@adverport.com</p>
            </a>
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-center">
              <MessageCircle className="mx-auto h-8 w-8 text-[#FFBA6F]" />
              <h3 className="mt-4 font-['Inter',sans-serif] text-base font-bold text-white">Canlı Destek</h3>
              <p className="mt-2 font-['Inter',sans-serif] text-sm text-white/45">7/24 çevrimiçi destek akışı</p>
            </div>
            <Link
              href="/iletisim"
              className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-center transition-colors hover:border-[#d21027]/40"
            >
              <Phone className="mx-auto h-8 w-8 text-[#FFBA6F]" />
              <h3 className="mt-4 font-['Inter',sans-serif] text-base font-bold text-white">İletişim Formu</h3>
              <p className="mt-2 font-['Inter',sans-serif] text-sm text-white/45">Talebinizi bize iletin</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
