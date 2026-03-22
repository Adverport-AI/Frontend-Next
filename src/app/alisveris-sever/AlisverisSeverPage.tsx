"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CreditCard,
  Gift,
  Heart,
  Percent,
  ShoppingBag,
  Star,
  Tag,
  Wallet,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { openGooglePlayStore } from "../components/StoreButtons";

const steps = [
  {
    icon: <ShoppingBag className="h-7 w-7 text-white" />,
    title: "Uygulamayı İndir",
    description: "Adverport hesabını aç ve kazanç odaklı alışveriş deneyimine giriş yap.",
  },
  {
    icon: <Tag className="h-7 w-7 text-white" />,
    title: "Kampanyaları Keşfet",
    description: "Sevdiğin markaların kupon, indirim ve nakit iade fırsatlarını filtrele.",
  },
  {
    icon: <Wallet className="h-7 w-7 text-white" />,
    title: "Alışveriş Yap ve Kazan",
    description: "Link üzerinden alışveriş yap, geri kazanım ve puanlarını panelden takip et.",
  },
];

const benefits = [
  {
    icon: <Percent className="h-8 w-8 text-white" />,
    title: "Nakit iade",
    description: "Alışverişlerinden düzenli geri kazanım elde et ve harcamanı daha verimli yönet.",
    stat: "%15",
    statLabel: "ortalama iade",
  },
  {
    icon: <Gift className="h-8 w-8 text-white" />,
    title: "Özel kuponlar",
    description: "Öne çıkan markaların kampanyalarına tek panelden eriş.",
    stat: "500+",
    statLabel: "marka",
  },
  {
    icon: <Star className="h-8 w-8 text-white" />,
    title: "Puan katlama",
    description: "Kazancını adverport puanlarına çevirip farklı avantajlarla büyüt.",
    stat: "2-5x",
    statLabel: "katlama",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "Esnek çekim",
    description: "Kazancını takip et, uygun olduğunda hesabına aktar.",
    stat: "₺0",
    statLabel: "başlangıç limiti",
  },
];

const categories = [
  { name: "Moda & Giyim", icon: <Heart className="h-6 w-6" /> },
  { name: "Elektronik", icon: <Tag className="h-6 w-6" /> },
  { name: "Kozmetik", icon: <Star className="h-6 w-6" /> },
  { name: "Ev & Yaşam", icon: <ShoppingBag className="h-6 w-6" /> },
  { name: "Spor", icon: <Gift className="h-6 w-6" /> },
  { name: "Yeme & İçme", icon: <CreditCard className="h-6 w-6" /> },
];

export default function AlisverisSeverPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pb-24 sm:pt-[160px]">
        <div className="absolute left-1/2 top-1/4 h-[620px] w-[720px] -translate-x-1/2 rounded-full bg-[#EB5200] opacity-[0.08] blur-[220px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EB5200]/30 bg-gradient-to-r from-[#EB5200]/20 to-[#FFBA6F]/10 px-5 py-2">
              <ShoppingBag className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold uppercase tracking-wide text-[#FFBA6F]">
                Alışveriş Sever
              </span>
            </div>
            <h1 className="mx-auto mb-6 max-w-4xl font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Alışveriş yap,{' '}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                nakit iade kazan
              </span>
            </h1>
            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Sevdiğin markalardan alışveriş yaparken kampanya, kupon ve geri kazanımları tek akışta yönet.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={openGooglePlayStore}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] px-8 py-4 font-['Inter',sans-serif] text-base font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(235,82,0,0.45)]"
              >
                Markaları Uygulamada Keşfet
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/sss"
                className="font-['Inter',sans-serif] text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                SSS'ye Git
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Nasıl <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">çalışır</span>?
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">3 kolay adımda geri kazanım sürecini başlat</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EB5200] to-[#FFBA6F] shadow-[0_4px_24px_rgba(235,82,0,0.3)]">
                  {step.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#EB5200] opacity-[0.06] blur-[150px]" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Alışveriş sever <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">avantajları</span>
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">Alışveriş yaparken kazancı görünür hale getiren deneyim</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-colors hover:border-[#EB5200]/50"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EB5200] to-[#FFBA6F] transition-transform group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{benefit.description}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-['Inter',sans-serif] text-2xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text">
                    {benefit.stat}
                  </span>
                  <span className="font-['Inter',sans-serif] text-xs text-white/50">{benefit.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Popüler <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">kategoriler</span>
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">Farklı kategorilerde kampanya ve nakit iade fırsatları</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-center transition-colors hover:border-[#EB5200]/50 hover:bg-white/10"
              >
                <div className="mb-3 flex justify-center text-[#EB5200] transition-transform group-hover:scale-110">{category.icon}</div>
                <p className="font-['Inter',sans-serif] text-sm font-medium text-white">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Alışveriş Yaparken"
        highlight="Bugün Kazanmaya Başla"
        description="Uygulamayı indir, kampanyaları keşfet ve kupon ile nakit iade akışını tek yerde yönet."
      />

      <Footer />
    </div>
  );
}
