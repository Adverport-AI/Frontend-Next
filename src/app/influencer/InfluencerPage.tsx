"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Share2,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { openPreferredStore } from "../components/StoreButtons";

const steps = [
  {
    icon: <Users className="h-7 w-7 text-white" />,
    title: "Hesap Oluştur",
    description: "Adverport hesabını aç, profilini tamamla ve sana uygun kampanyaları keşfet.",
  },
  {
    icon: <Share2 className="h-7 w-7 text-white" />,
    title: "Linklerini Paylaş",
    description: "Takipçilerinle uyumlu ürünleri seç, içeriklerinde özel affiliate linklerini kullan.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-white" />,
    title: "Performansı Takip Et",
    description: "Tıklama, satış ve kazanç verilerini tek panelden canlı olarak izle.",
  },
];

const advantages = [
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: "500+ marka erişimi",
    description: "Moda, teknoloji, yaşam ve daha fazla kategoride kampanya seçebilirsin.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Anlık raporlama",
    description: "Hangi içeriğin daha çok dönüşüm getirdiğini hızlıca görür, stratejini buna göre güncellersin.",
  },
  {
    icon: <Star className="h-8 w-8 text-white" />,
    title: "Premium avantajlar",
    description: "Yüksek komisyon oranları ve öne çıkan kampanyalarla kazancını ölçekleyebilirsin.",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Hızlı ödeme akışı",
    description: "Kazançlarını düzenli ve takip edilebilir şekilde yönetebilirsin.",
  },
];

export default function InfluencerPage() {
  const [shares, setShares] = useState(50);

  const earnings = useMemo(() => {
    const min = Math.round(shares * 9);
    const max = Math.round(shares * 18);
    return { min, max };
  }, [shares]);

  const progress = ((shares - 10) / 490) * 100;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pb-24 sm:pt-[160px]">
        <div className="absolute left-1/2 top-1/4 h-[620px] w-[720px] -translate-x-1/2 rounded-full bg-[#d21027] opacity-[0.08] blur-[220px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d21027]/30 bg-gradient-to-r from-[#d21027]/20 to-[#EB5200]/10 px-5 py-2">
              <Megaphone className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold uppercase tracking-wide text-[#FFBA6F]">
                Influencer Programı
              </span>
            </div>
            <h1 className="mx-auto mb-6 max-w-4xl font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Sosyal Medyadan{' '}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                gelir elde et
              </span>
            </h1>
            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Takipçilerinle uyumlu markaları görünür kıl, içerik üretimini sürdürülebilir bir gelir modeline dönüştür.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openPreferredStore}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-4 font-['Inter',sans-serif] text-base font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.45)]"
              >
                Hemen Başla
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={openPreferredStore}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-['Inter',sans-serif] text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Premium&apos;u Uygulamada Gör
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Nasıl <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Çalışır</span>?
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">3 adımda affiliate gelirini başlat</p>
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
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] shadow-[0_4px_24px_rgba(210,16,39,0.3)]">
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
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[620px] -translate-x-1/2 rounded-full bg-[#d21027] opacity-[0.08] blur-[180px]" />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Ne kadar <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">kazanabilirsin</span>?
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">Aylık paylaşım hacmine göre örnek gelir aralığını gör</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-10"
          >
            <label className="mb-4 block font-['Inter',sans-serif] text-base font-semibold text-white sm:text-lg">
              Aylık kaç kişiye link paylaşıyorsun?
            </label>
            <input
              type="range"
              min="10"
              max="500"
              value={shares}
              onChange={(event) => setShares(Number(event.target.value))}
              className="h-4 w-full cursor-pointer appearance-none rounded-full bg-white/10 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-[#d21027] [&::-webkit-slider-thumb]:to-[#EB5200] [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(210,16,39,0.5)]"
              style={{
                background: `linear-gradient(to right, #d21027 0%, #EB5200 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="mt-4 text-center">
              <span className="font-['Inter',sans-serif] text-3xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text sm:text-4xl">
                {shares}
              </span>
            </div>
            <div className="mt-8 rounded-3xl border border-[#d21027]/30 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 p-6 text-center sm:p-8">
              <p className="font-['Inter',sans-serif] text-sm font-medium text-[#FFBA6F]">Tahmini aylık kazanç aralığın</p>
              <p className="mt-3 font-['Inter',sans-serif] text-3xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text sm:text-5xl">
                ₺{earnings.min.toLocaleString("tr-TR")} - ₺{earnings.max.toLocaleString("tr-TR")}
              </p>
              <p className="mt-2 font-['Inter',sans-serif] text-xs text-white/40">*Gelir garantisi değildir, örnek senaryodur.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Influencer <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">avantajları</span>
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">Adverport ile üretimini performans odaklı büyütebilirsin</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 transition-colors hover:border-[#d21027]/50"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] transition-transform group-hover:scale-110">
                  {advantage.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white">{advantage.title}</h3>
                <p className="mt-3 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Influencer Olarak"
        highlight="Bugün Başla"
        description="Uygulamayı indir, kampanyalara bağlan ve içerik üretimini doğrudan kazanca dönüştür."
      />

      <Footer />
    </div>
  );
}
