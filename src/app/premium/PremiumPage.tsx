"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Crown,
  Gift,
  Infinity as InfinityIcon,
  Link2,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";

const APP_STORE_URL = "https://apps.apple.com/us/app/adverport/id1616799187";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mobile.adverport";

function openStore() {
  if (typeof window === "undefined") return;
  const ua = navigator.userAgent || "";
  const isAppleDevice = /iPad|iPhone|iPod/i.test(ua) || (/Macintosh/i.test(ua) && "ontouchend" in document);
  window.open(isAppleDevice ? APP_STORE_URL : PLAY_STORE_URL, "_blank", "noopener,noreferrer");
}

const benefits = [
  { icon: <Crown className="h-7 w-7" />, title: "Premium Kampanyalar", description: "Sadece premium üyelere özel, yüksek komisyonlu kampanyalara erişim." },
  { icon: <TrendingUp className="h-7 w-7" />, title: "Yüksek Komisyon", description: "Standart oranların üzerinde %25'e kadar daha yüksek komisyon kazan." },
  { icon: <Shield className="h-7 w-7" />, title: "Öncelikli Destek", description: "7/24 canlı destek ile sorunlarına anında çözüm bul." },
  { icon: <Gift className="h-7 w-7" />, title: "Alt Limitsiz Çekim", description: "Minimum çekim limiti olmadan kazancını istediğin zaman al." },
  { icon: <Sparkles className="h-7 w-7" />, title: "Özel Linkler", description: "Kendi özelleştirilmiş affiliate bağlantılarını oluştur." },
  { icon: <Users className="h-7 w-7" />, title: "VIP Topluluk", description: "Premium üyelere özel topluluk ve networking etkinlikleri." },
];

const faqs = [
  { q: "Premium üyeliği istediğim zaman iptal edebilir miyim?", a: "Evet, Premium üyeliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar premium özelliklerden yararlanmaya devam edersiniz." },
  { q: "Ödeme yöntemleri nelerdir?", a: "Kredi kartı, banka kartı ve desteklenen mobil ödeme yöntemleri ile güvenli şekilde ödeme yapabilirsiniz." },
  { q: "Premium ile ne kadar daha fazla kazanabilirim?", a: "Premium üyelerimiz seçili kampanyalarda daha yüksek komisyon oranları ve özel fırsatlar sayesinde gelir potansiyelini belirgin şekilde artırır." },
  { q: "Kurumsal plan neleri içerir?", a: "Kurumsal plan, Premium'un tüm özelliklerinin yanı sıra API erişimi, çoklu kullanıcı yönetimi ve özel raporlama içerir." },
];

const pricingRows = [
  { feature: "Kampanya Katılımı", free: "15 kampanya", premium: "Sınırsız" },
  { feature: "Komisyon Oranı", free: "Standart oran", premium: "Yüksek oran" },
  { feature: "Alt Çekim Limiti", free: "250 TL", premium: "Limitsiz" },
  { feature: "Özel Link Oluşturma", free: false, premium: true },
  { feature: "Premium Kampanyalara Erişim", free: false, premium: true },
  { feature: "Anlık Analitik Bildirimler", free: true, premium: true },
  { feature: "Öncelikli Destek", free: false, premium: true },
  { feature: "Haftalık Performans Raporu", free: false, premium: true },
];

function Hero() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-[120px] sm:pb-28 sm:pt-[140px] md:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#d21027] opacity-[0.12] blur-[180px] sm:h-[700px] sm:w-[700px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[200px]"
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#FFBA6F] opacity-[0.06] blur-[120px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#FFBA6F] sm:h-1.5 sm:w-1.5"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%`, opacity: 0.3 + (i % 3) * 0.15 }}
            animate={{ y: [0, -30 - i * 5, 0], x: [0, i % 2 === 0 ? 15 : -15, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d21027]/30 bg-gradient-to-r from-[#d21027]/20 to-[#EB5200]/10 px-5 py-2.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Crown className="h-4 w-4 text-[#FFBA6F]" />
                <span className="font-['Inter',sans-serif] text-sm font-semibold tracking-wide text-[#FFBA6F]">PREMIUM PLAN</span>
              </motion.div>

              <h1 className="mb-6 font-['Inter',sans-serif] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Kazancını <span className="relative inline-block"><span className="bg-gradient-to-r from-[#EB5200] via-[#FFBA6F] to-[#EB5200] bg-clip-text text-transparent">Maksimize</span><motion.div className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#d21027] via-[#EB5200] to-[#FFBA6F]" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }} /></span> Et
              </h1>

              <p className="mx-auto mb-10 max-w-xl font-['Inter',sans-serif] text-base leading-relaxed text-white/50 sm:text-lg md:text-xl lg:mx-0">
                Premium ile sınırsız kampanya, yüksek komisyon ve özel ayrıcalıklarla gelirini katla.
              </p>

              <div className="mb-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:justify-start">
                {[
                  { value: "%40", label: "Daha Fazla Kazanç" },
                  { value: "6x", label: "Kampanya Erişimi" },
                  { value: "7/24", label: "Öncelikli Destek" },
                ].map((stat, i) => (
                  <motion.div key={i} className="text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                    <p className="font-['Inter',sans-serif] text-2xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 font-['Inter',sans-serif] text-xs text-white/40 sm:text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
                  <button type="button" onClick={() => setBillingCycle("monthly")} className={`rounded-full px-5 py-2.5 font-['Inter',sans-serif] text-sm font-medium transition-all ${billingCycle === "monthly" ? "bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white shadow-lg shadow-[#d21027]/25" : "text-white/60 hover:text-white"}`}>
                    Aylık
                  </button>
                  <button type="button" onClick={() => setBillingCycle("yearly")} className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-['Inter',sans-serif] text-sm font-medium transition-all ${billingCycle === "yearly" ? "bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white shadow-lg shadow-[#d21027]/25" : "text-white/60 hover:text-white"}`}>
                    Yıllık
                    <span className="rounded-full bg-[#FFBA6F]/20 px-2 py-0.5 text-xs font-bold text-[#FFBA6F]">-20%</span>
                  </button>
                </div>
                <button type="button" onClick={openStore} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10">
                  Premium'a Geç
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div className="w-full max-w-md flex-1 lg:max-w-lg" initial={{ opacity: 0, x: 40, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#d21027]/30 to-[#EB5200]/20 blur-[60px]" />
              <div className="relative overflow-hidden rounded-3xl border border-[#d21027]/30 bg-gradient-to-br from-[#1a1010] via-[#150a0a] to-[#0d0505] p-8 sm:p-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBA6F]/40 to-transparent" />
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-[#FFBA6F]/20 via-transparent to-transparent" />

                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] shadow-lg shadow-[#d21027]/30">
                    <Crown className="h-7 w-7 text-white" />
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-4 py-1.5 text-xs font-bold tracking-wider text-white">PREMIUM</span>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Inter',sans-serif] text-5xl font-bold text-white sm:text-6xl">₺{billingCycle === "monthly" ? "99.99" : "79.99"}</span>
                    <span className="font-['Inter',sans-serif] text-lg text-white/40">/ay</span>
                  </div>
                  {billingCycle === "yearly" ? <p className="mt-2 font-['Inter',sans-serif] text-sm text-[#FFBA6F]">Yıllık ₺959.88 — ₺240 tasarruf</p> : null}
                </div>

                <div className="mb-8 space-y-4">
                  {[
                    { icon: <InfinityIcon className="h-4 w-4" />, text: "Sınırsız Kampanya Katılım" },
                    { icon: <TrendingUp className="h-4 w-4" />, text: "Yüksek Komisyon Oranları" },
                    { icon: <Link2 className="h-4 w-4" />, text: "Özel Link Oluşturma" },
                    { icon: <BarChart3 className="h-4 w-4" />, text: "Gelişmiş Analitik" },
                    { icon: <Shield className="h-4 w-4" />, text: "Öncelikli 7/24 Destek" },
                  ].map((feature, i) => (
                    <motion.div key={i} className="flex items-center gap-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}>
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#d21027]/20 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 text-[#FFBA6F]">
                        {feature.icon}
                      </div>
                      <span className="font-['Inter',sans-serif] text-sm text-white/80">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button type="button" onClick={openStore} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d21027] to-[#EB5200] py-4 font-['Inter',sans-serif] text-base font-bold text-white transition-all hover:shadow-[0_0_40px_rgba(210,16,39,0.4)]">
                  Premium'a Geç
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <p className="mt-4 text-center font-['Inter',sans-serif] text-xs text-white/30">30 gün ücretsiz dene • İstediğin zaman iptal et</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingCards() {
  const freeFeatures = ["15 Kampanya Katılım Sınırı", "250 TL Alt Çekim Limiti", "Anlık Analitik Bildirimler", "Standart Komisyon Oranları"];
  const premiumFeatures = ["Kampanyalara Sınırsız Katılım", "Alt Limitsiz Çekim", "Anlık Analitik Bildirimler", "Premium Kampanyalar", "Daha Yüksek Komisyon Oranları", "Kendine Özel Link Oluşturma", "Öncelikli Müşteri Desteği", "Haftalık Performans Raporu"];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#d21027] opacity-8 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 md:px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
          <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10">
            <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-white/30 to-white/20 px-3 py-1.5 text-xs font-bold text-white sm:right-8 sm:top-8">ÜCRETSİZ</div>
            <div className="mb-8">
              <h3 className="font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl mb-3">Ücretsiz</h3>
              <p className="font-['Inter',sans-serif] text-base text-white/60">Başlamak için ihtiyacın olan her şey</p>
            </div>
            <div className="mb-10 space-y-3">
              {freeFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <CheckCircle2 className="h-3 w-3 fill-white text-white" />
                  </div>
                  <span className="font-['Inter',sans-serif] text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Inter',sans-serif] text-5xl font-bold text-white">₺0</span>
                <span className="font-['Inter',sans-serif] text-white/60">/ay</span>
              </div>
              <Link href="/" className="w-full rounded-full border border-white/30 bg-white/20 px-8 py-3.5 text-center font-['Inter',sans-serif] font-bold text-white transition-all hover:bg-white/30 sm:w-auto">
                Ücretsiz Başla
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-[#d21027]/40 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d21027] opacity-20 blur-[80px]" />
            <div className="absolute right-6 top-6 z-10 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-3 py-1.5 text-xs font-bold text-white sm:right-8 sm:top-8">PREMIUM</div>
            <div className="relative mb-8">
              <h3 className="font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl mb-3">Premium Üyelik</h3>
              <p className="font-['Inter',sans-serif] text-base text-white/60">Kazancını maksimize et, özel avantajlardan yararlan</p>
            </div>
            <div className="relative mb-10 space-y-3">
              {premiumFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                    <CheckCircle2 className="h-3 w-3 fill-white text-white" />
                  </div>
                  <span className="font-['Inter',sans-serif] text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>
            <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Inter',sans-serif] text-5xl font-bold text-white">₺99.99</span>
                <span className="font-['Inter',sans-serif] text-white/60">/ay</span>
              </div>
              <button type="button" onClick={openStore} className="w-full rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-3.5 font-['Inter',sans-serif] font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] sm:w-auto">
                Premium'a Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumBenefits() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-4">
        <div className="mb-14 text-center sm:mb-20">
          <h2 className="mb-4 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Premium <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Ayrıcalıkları</span>
          </h2>
          <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base text-white/60 sm:text-lg">Neden premium üyeler çok daha fazla kazanıyor?</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 transition-all hover:border-[#d21027]/50">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] transition-transform group-hover:scale-110">
                <div className="text-white">{benefit.icon}</div>
              </div>
              <h3 className="mb-3 font-['Inter',sans-serif] text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mb-6 font-['Inter',sans-serif] text-sm leading-relaxed text-white/55">{benefit.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text font-['Inter',sans-serif] text-3xl font-bold text-transparent">{i === 0 ? "%30" : i === 1 ? "∞" : "2s"}</span>
                <span className="font-['Inter',sans-serif] text-sm text-white/50">{i === 0 ? "daha fazla komisyon" : i === 1 ? "kampanya" : "yanıt süresi"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-28">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 md:px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl">
            Ücretsiz vs <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Premium</span>
          </h2>
          <p className="mx-auto max-w-xl font-['Inter',sans-serif] text-base text-white/60">Hangi plan sana uygun? Tüm farkları yan yana karşılaştır.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-3 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02]">
            <div className="p-5 sm:p-6"><span className="font-['Inter',sans-serif] text-sm font-semibold uppercase tracking-wide text-white/50">Özellik</span></div>
            <div className="border-l border-white/10 p-5 text-center sm:p-6"><span className="font-['Inter',sans-serif] text-sm font-bold text-white sm:text-base">Ücretsiz</span></div>
            <div className="border-l border-[#d21027]/40 bg-gradient-to-b from-[#d21027]/10 to-transparent p-5 text-center sm:p-6"><span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text font-['Inter',sans-serif] text-sm font-bold text-transparent sm:text-base">Premium</span></div>
          </div>

          {pricingRows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}>
              <div className="flex items-center p-4 sm:p-5"><span className="font-['Inter',sans-serif] text-sm text-white/70">{row.feature}</span></div>
              <div className="flex items-center justify-center border-l border-white/5 p-4 sm:p-5">
                {typeof row.free === "boolean" ? row.free ? <CheckCircle2 className="h-5 w-5 text-white/40" /> : <span className="block h-0.5 w-5 rounded-full bg-white/20" /> : <span className="font-['Inter',sans-serif] text-sm text-white/60">{row.free}</span>}
              </div>
              <div className="flex items-center justify-center border-l border-[#d21027]/20 bg-gradient-to-b from-[#d21027]/5 to-transparent p-4 sm:p-5">
                {typeof row.premium === "boolean" ? row.premium ? <CheckCircle2 className="h-5 w-5 text-[#EB5200]" /> : <span className="block h-0.5 w-5 rounded-full bg-white/20" /> : <span className="font-['Inter',sans-serif] text-sm font-medium text-white/80">{row.premium}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-center font-['Inter',sans-serif] font-bold text-white transition-all hover:bg-white/15">
            Ücretsiz Başla
          </Link>
          <button type="button" onClick={openStore} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-3.5 font-['Inter',sans-serif] font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.5)]">
            Premium'a Geç <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent transition-all hover:border-[#d21027]/50">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-['Inter',sans-serif] text-base font-semibold text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className={`flex-shrink-0 text-[#d21027] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-6 pb-5">
              <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-20 sm:py-28 overflow-hidden">
      <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#d21027] opacity-5 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl">
            Sık Sorulan <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Sorular</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] transition-all hover:border-[#d21027]/50">
              <button type="button" onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-['Inter',sans-serif] text-base font-semibold text-white">{faq.q}</span>
                <span className={`flex-shrink-0 text-[#d21027] transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
              {openIndex === i ? (
                <div className="px-6 pb-5">
                  <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{faq.a}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar activePage="premium" />
      <Hero />
      <PricingCards />
      <PremiumBenefits />
      <ComparisonTable />
      <FAQ />
      <CtaSection title="Hemen" highlight="Premium Ol" description="7 günlük ücretsiz denemeyle başla, farkı hisset." />
      <Footer />
    </div>
  );
}
