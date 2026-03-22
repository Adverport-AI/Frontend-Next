"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
  Link2,
  Smartphone,
  Globe,
  Bell,
  CreditCard,
  Lock,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import { openGooglePlayStore } from "../components/StoreButtons";

const mainFeatures = [
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "Kolay Kazanç Sistemi",
    description:
      "Affiliate bağlantılarınızı paylaşın ve her satıştan komisyon kazanın. Minimum efor, maksimum gelir potansiyeli ile pasif gelir elde edin.",
    highlights: ["Her satıştan %5-20 komisyon", "Otomatik komisyon takibi", "Anlık kazanç bildirimleri"],
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Geniş Marka Ağı",
    description:
      "Türkiye'nin ve dünyanın önde gelen markalarıyla çalışın. 500+ marka seçeneği ile istediğiniz ürünü tanıtın.",
    highlights: ["500+ partner marka", "8 farklı kategori", "Sürekli büyüyen ağ"],
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Anlık İstatistikler",
    description:
      "Gerçek zamanlı raporlama ile kazançlarınızı, tıklama oranlarınızı ve performansınızı detaylı takip edin.",
    highlights: ["Gerçek zamanlı dashboard", "Detaylı performans analizi", "Dönüşüm oranı takibi"],
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Güvenli Ödeme",
    description:
      "Kazançlarınız güvende. Hızlı ve güvenilir ödeme sistemi ile paranıza anında ulaşın.",
    highlights: ["Banka havalesi & Papara", "Aylık düzenli ödeme", "256-bit SSL güvenlik"],
  },
];

const additionalFeatures = [
  { icon: <Link2 className="h-6 w-6" />, title: "Özel Link Oluşturma", description: "Kendi özel affiliate bağlantılarınızı saniyeler içinde oluşturun." },
  { icon: <Smartphone className="h-6 w-6" />, title: "Mobil Uygulama", description: "iOS ve Android uygulamalarıyla her yerden kazancınızı takip edin." },
  { icon: <Globe className="h-6 w-6" />, title: "Sosyal Medya Entegrasyonu", description: "Instagram, TikTok ve YouTube ile sorunsuz entegrasyon." },
  { icon: <Bell className="h-6 w-6" />, title: "Anlık Bildirimler", description: "Satış, tıklama ve yeni kampanya bildirimlerini anında alın." },
  { icon: <CreditCard className="h-6 w-6" />, title: "Nakit İade", description: "Kendi alışverişlerinizden de nakit iade kazanın." },
  { icon: <Lock className="h-6 w-6" />, title: "Güvenli Altyapı", description: "Verileriniz end-to-end şifreleme ile korunur." },
  { icon: <Layers className="h-6 w-6" />, title: "Koleksiyon Paylaşımı", description: "Favori ürünlerinizi koleksiyonlar halinde paylaşın." },
  { icon: <Zap className="h-6 w-6" />, title: "Hızlı Entegrasyon", description: "Dakikalar içinde başlayın, teknik bilgi gerektirmez." },
];

const comparisonData = [
  { feature: "Affiliate Link Oluşturma", free: true, premium: true },
  { feature: "Temel İstatistikler", free: true, premium: true },
  { feature: "Mobil Uygulama Erişimi", free: true, premium: true },
  { feature: "Sınırsız Kampanya Katılımı", free: false, premium: true },
  { feature: "Gelişmiş Analitik", free: false, premium: true },
  { feature: "Premium Kampanyalar", free: false, premium: true },
  { feature: "Yüksek Komisyon Oranları", free: false, premium: true },
  { feature: "Öncelikli Destek", free: false, premium: true },
];

export default function OzelliklerPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar activePage="ozellikler" />

      <main>
        <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pb-20 sm:pt-[160px]">
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-[#d21027] opacity-10 blur-[200px]" />
          <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-block rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
                <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">Platform Özellikleri</span>
              </div>

              <h1 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Kazanç İçin Gereken{" "}
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Her Şey</span>
              </h1>

              <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base text-white/60 sm:text-lg">
                Güçlü araçlar, detaylı analizler ve güvenli ödeme sistemi ile affiliate pazarlamanın keyfini çıkar.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-[#0a0a0a] py-16 sm:py-24">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl space-y-16 px-6 sm:space-y-24 sm:px-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white">
                    {feature.icon}
                  </div>
                  <h2 className="mb-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">{feature.title}</h2>
                  <p className="mb-6 font-['Inter',sans-serif] text-base leading-relaxed text-white/60">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#EB5200]" />
                        <span className="font-['Inter',sans-serif] text-sm text-white/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full flex-1">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 transition-all hover:border-[#d21027]/30 sm:p-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d21027]/5 to-[#EB5200]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/20 text-white/40 transition-colors group-hover:text-white/60">
                        {feature.icon}
                      </div>
                      <p className="font-['Inter',sans-serif] text-sm text-white/20 transition-colors group-hover:text-white/30">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative bg-black py-16 sm:py-24">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-5 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-3 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Daha Fazla <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Özellik</span>
              </h2>
              <p className="mx-auto max-w-xl font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">
                Kazancını artırmak için ihtiyacın olan tüm araçlar
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition-all hover:border-[#d21027]/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/20 text-[#EB5200] transition-all group-hover:from-[#d21027] group-hover:to-[#EB5200] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-['Inter',sans-serif] text-base font-bold text-white">{feature.title}</h3>
                  <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/50">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#0a0a0a] py-16 sm:py-24">
          <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-[#d21027] opacity-5 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-3 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Plan <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Karşılaştırması</span>
              </h2>
              <p className="font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">Ücretsiz ve Premium arasındaki farkları görün</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
              <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8">
                <div className="font-['Inter',sans-serif] text-sm font-medium text-white/60">Özellik</div>
                <div className="text-center font-['Inter',sans-serif] text-sm font-medium text-white/60">Ücretsiz</div>
                <div className="text-center font-['Inter',sans-serif] text-sm font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text">Premium</div>
              </div>

              {comparisonData.map((row, index) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 sm:px-8 ${index < comparisonData.length - 1 ? "border-b border-white/5" : ""}`}>
                  <div className="font-['Inter',sans-serif] text-sm text-white">{row.feature}</div>
                  <div className="text-center">
                    {row.free ? <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" /> : <span className="text-white/20">—</span>}
                  </div>
                  <div className="text-center">
                    <CheckCircle2 className="mx-auto h-5 w-5 text-[#EB5200]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={openGooglePlayStore}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B1A1A] via-[#d21027] to-[#EB5200] px-8 py-3.5 font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.4)]"
              >
                Premium'a Geç
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <CtaSection
          title="Tüm Özellikleri"
          highlight="Keşfet"
          description="Ücretsiz hesap oluştur ve platformun tüm gücünü deneyimle."
        />
      </main>

      <Footer />
    </div>
  );
}
