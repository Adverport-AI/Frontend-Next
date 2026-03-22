"use client";

import Link from "next/link";
import { useState } from "react";
import { Star, CheckCircle2, ArrowRight, Zap, TrendingUp, Shield, Crown } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-black pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d21027] opacity-15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EB5200] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d21027]/20 to-[#EB5200]/10 border border-[#d21027]/30 rounded-full px-4 py-1.5 mb-8">
          <Crown className="w-4 h-4 text-[#EB5200]" />
          <span className="font-['Inter',sans-serif] text-white/80 text-sm font-medium">Premium Üyelik</span>
        </div>

        <h1 className="font-['Inter',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Kazancını{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
            Maksimize Et
          </span>
        </h1>

        <p className="font-['Inter',sans-serif] text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Premium üyelikle daha yüksek komisyonlar, sınırsız kampanya erişimi ve özel ayrıcalıklardan yararlan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all inline-flex items-center justify-center gap-2">
            Premium'a Geç <ArrowRight className="w-4 h-4" />
          </button>
          <button className="font-['Inter',sans-serif] bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/15 transition-all">
            Ücretsiz Başla
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Cards ─────────────────────────────────────────────────────────── */
const freemiumFeatures = [
  "15 Kampanya Katılım Sınırı",
  "250 TL Alt Çekim Limiti",
  "Anlık Analitik Bildirimler",
  "Standart Komisyon Oranları",
];

const premiumFeatures = [
  "Kampanyalara Sınırsız Katılım",
  "Alt Limitsiz Çekim",
  "Anlık Analitik Bildirimler",
  "Premium Kampanyalar",
  "Daha Yüksek Komisyon Oranları",
  "Kendine Özel Link Oluşturma",
  "Öncelikli Müşteri Desteği",
  "Haftalık Performans Raporu",
];

function PricingCards() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d21027] opacity-8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Free Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-gradient-to-r from-white/30 to-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold">
              ÜCRETSİZ
            </div>
            <div className="mb-8">
              <h3 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-3">Ücretsiz</h3>
              <p className="font-['Inter',sans-serif] text-white/60 text-base">Başlamak için ihtiyacın olan her şey</p>
            </div>
            <div className="space-y-3 mb-10">
              {freemiumFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="font-['Inter',sans-serif] text-white text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Inter',sans-serif] text-5xl font-bold text-white">₺0</span>
                <span className="font-['Inter',sans-serif] text-white/60">/ay</span>
              </div>
              <button className="w-full sm:w-auto bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/30 transition-all">
                Ücretsiz Başla
              </button>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 border-2 border-[#d21027]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d21027] opacity-20 blur-[80px] rounded-full" />
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-3 py-1.5 rounded-full text-xs font-bold z-10">
              PREMIUM
            </div>
            <div className="relative mb-8">
              <h3 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-3">Premium Üyelik</h3>
              <p className="font-['Inter',sans-serif] text-white/60 text-base">Kazancını maksimize et, özel avantajlardan yararlan</p>
            </div>
            <div className="relative space-y-3 mb-10">
              {premiumFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="font-['Inter',sans-serif] text-white text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <div className="flex items-baseline gap-1.5">
                <span className="font-['Inter',sans-serif] text-5xl font-bold text-white">₺99.99</span>
                <span className="font-['Inter',sans-serif] text-white/60">/ay</span>
              </div>
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all">
                Premium'a Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Premium Benefits ──────────────────────────────────────────────────────── */
const benefits = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Yüksek Komisyon Oranları",
    description: "Standart üyelere kıyasla %30'a kadar daha yüksek komisyon oranlarından yararlan. Aynı satış, daha fazla kazanç.",
    stat: "%30",
    statLabel: "daha fazla komisyon",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Sınırsız Kampanya Erişimi",
    description: "Ücretsiz üyelikteki 15 kampanya sınırı kalkar. Platformdaki tüm kampanyalara aynı anda katılabilirsin.",
    stat: "∞",
    statLabel: "kampanya",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Öncelikli Destek",
    description: "Premium kullanıcılar destek ekibine öncelikli erişim hakkına sahiptir. Sorularına 2 saat içinde yanıt al.",
    stat: "2s",
    statLabel: "yanıt süresi",
  },
];

function PremiumBenefits() {
  return (
    <section className="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d21027] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Ayrıcalıkları
            </span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Neden premium üyeler çok daha fazla kazanıyor?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-[#d21027]/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-white">{b.icon}</div>
              </div>
              <h3 className="font-['Inter',sans-serif] text-xl font-bold text-white mb-3">{b.title}</h3>
              <p className="font-['Inter',sans-serif] text-white/55 text-sm leading-relaxed mb-6">{b.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-['Inter',sans-serif] text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                  {b.stat}
                </span>
                <span className="font-['Inter',sans-serif] text-white/50 text-sm">{b.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ──────────────────────────────────────────────────────── */
const tableRows = [
  { feature: "Kampanya Katılımı", free: "15 kampanya", premium: "Sınırsız" },
  { feature: "Komisyon Oranı", free: "Standart oran", premium: "Yüksek oran" },
  { feature: "Alt Çekim Limiti", free: "250 TL", premium: "Limitsiz" },
  { feature: "Özel Link Oluşturma", free: false, premium: true },
  { feature: "Premium Kampanyalara Erişim", free: false, premium: true },
  { feature: "Anlık Analitik Bildirimler", free: true, premium: true },
  { feature: "Öncelikli Destek", free: false, premium: true },
  { feature: "Haftalık Performans Raporu", free: false, premium: true },
];

function ComparisonTable() {
  return (
    <section className="bg-[#0a0a0a] py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-4">
            Ücretsiz vs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Premium
            </span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base max-w-xl mx-auto">
            Hangi plan sana uygun? Tüm farkları yan yana karşılaştır.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10">
            <div className="p-5 sm:p-6">
              <span className="font-['Inter',sans-serif] text-white/50 text-sm font-semibold uppercase tracking-wide">Özellik</span>
            </div>
            <div className="p-5 sm:p-6 text-center border-l border-white/10">
              <span className="font-['Inter',sans-serif] text-white font-bold text-sm sm:text-base">Ücretsiz</span>
            </div>
            <div className="p-5 sm:p-6 text-center border-l border-[#d21027]/40 bg-gradient-to-b from-[#d21027]/10 to-transparent">
              <span className="font-['Inter',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] font-bold text-sm sm:text-base">Premium</span>
            </div>
          </div>

          {tableRows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="font-['Inter',sans-serif] text-white/70 text-sm">{row.feature}</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center border-l border-white/5">
                {typeof row.free === "boolean" ? (
                  row.free
                    ? <CheckCircle2 className="w-5 h-5 text-white/40" />
                    : <span className="w-5 h-0.5 bg-white/20 rounded-full block" />
                ) : (
                  <span className="font-['Inter',sans-serif] text-white/60 text-sm text-center">{row.free}</span>
                )}
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center border-l border-[#d21027]/20 bg-gradient-to-b from-[#d21027]/5 to-transparent">
                {typeof row.premium === "boolean" ? (
                  row.premium
                    ? <CheckCircle2 className="w-5 h-5 text-[#EB5200]" />
                    : <span className="w-5 h-0.5 bg-white/20 rounded-full block" />
                ) : (
                  <span className="font-['Inter',sans-serif] text-white/80 text-sm font-medium text-center">{row.premium}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-['Inter',sans-serif] bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/15 transition-all">
            Ücretsiz Başla
          </button>
          <button className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all inline-flex items-center gap-2">
            Premium'a Geç <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Premium üyelik iptal edilebilir mi?",
    a: "Evet, istediğin zaman iptal edebilirsin. İptal ettiğinde mevcut döneminin sonuna kadar premium haklarından yararlanmaya devam edersin.",
  },
  {
    q: "Ödeme güvenli mi?",
    a: "Tüm ödemeler SSL ile şifrelenmiş güvenli altyapı üzerinden gerçekleşir. Kart bilgilerin hiçbir zaman sunucularımızda saklanmaz.",
  },
  {
    q: "Yıllık ödeme seçeneği var mı?",
    a: "Evet! Yıllık ödeme planında 2 ay ücretsiz olarak premium özelliklerden faydalanabilirsin.",
  },
  {
    q: "Deneme süresi var mı?",
    a: "7 günlük ücretsiz deneme sunuyoruz. Deneme süresi boyunca tüm premium özelliklerden yararlanabilirsin.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 sm:py-28 relative">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#d21027] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-4">
            Sık Sorulan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Sorular</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-['Inter',sans-serif] text-white font-semibold text-base">{faq.q}</span>
                <span className={`text-[#d21027] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="font-['Inter',sans-serif] text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#d21027] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <Crown className="w-12 h-12 text-[#EB5200] mx-auto mb-6" />
        <h2 className="font-['Inter',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hemen{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
            Premium
          </span>
          {" "}Ol
        </h2>
        <p className="font-['Inter',sans-serif] text-white/60 text-lg sm:text-xl mb-3 max-w-2xl mx-auto">
          7 günlük ücretsiz denemeyle başla, farkı hisset.
        </p>
        <p className="font-['Inter',sans-serif] text-white/40 text-sm mb-10">Kredi kartı gerekmez.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all inline-flex items-center justify-center gap-2">
            7 Gün Ücretsiz Dene <ArrowRight className="w-5 h-5" />
          </button>
          <Link href="/" className="font-['Inter',sans-serif] bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/15 transition-all inline-flex items-center justify-center">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function PremiumPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="premium" />
      <Hero />
      <PricingCards />
      <PremiumBenefits />
      <ComparisonTable />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
