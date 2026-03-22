"use client";

import { motion } from "motion/react";
import {
  Award,
  Eye,
  Heart,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";

const stats = [
  { value: "500+", label: "Partner Marka" },
  { value: "1M+", label: "Aktif Kullanıcı" },
  { value: "50M+", label: "Paylaşılan Link" },
  { value: "₺10M+", label: "Dağıtılan Komisyon" },
] as const;

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Kullanıcı Odaklı",
    description: "Ürün kararlarımızı içerik üreticilerinin, yayıncıların ve markaların gerçek kullanım senaryolarına göre şekillendiriyoruz.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Güvenilirlik",
    description: "Komisyon, ödeme ve iş ortaklığı süreçlerinde görünür ve sürdürülebilir bir yapı kurmayı önceliklendiriyoruz.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Sürekli Gelişim",
    description: "Platformu veriyle besliyor, kullanıcı geri bildirimleriyle ürün deneyimini düzenli olarak iyileştiriyoruz.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Kalite",
    description: "Doğru marka eşleşmeleri, güçlü kategori dengesi ve anlaşılır deneyim ile yüksek kalite standardı koruyoruz.",
  },
] as const;

const milestones = [
  { year: "2023", title: "Kuruluş", description: "Adverport fikri doğdu ve ilk ekip affiliate odaklı ürün vizyonunu netleştirdi." },
  { year: "2024", title: "Beta Lansmanı", description: "İlk marka iş birlikleri, erken kullanıcı akışları ve ölçümlenebilir performans paneli yayına alındı." },
  { year: "2025", title: "Büyüme", description: "Marka ağı, kullanıcı tabanı ve premium deneyim aynı anda ölçeklenmeye başladı." },
  { year: "2026", title: "Genişleme", description: "Yeni kullanım senaryoları, daha zengin destek yüzeyleri ve genişleyen partner ekosistemiyle büyüme sürüyor." },
] as const;

const teamMembers = [
  { name: "Ahmet Yılmaz", role: "Kurucu & CEO", initials: "AY" },
  { name: "Elif Demir", role: "CTO", initials: "ED" },
  { name: "Mehmet Kaya", role: "Ürün Müdürü", initials: "MK" },
  { name: "Zeynep Arslan", role: "Pazarlama Direktörü", initials: "ZA" },
] as const;

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pb-20 sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-[#d21027] opacity-10 blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">Hakkımızda</span>
            </div>

            <h1 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Alışverişi{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                kazanca dönüştürüyoruz
              </span>
            </h1>

            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Adverport, içerik ile ticaret arasındaki mesafeyi kısaltmak için kuruldu. Kullanıcıların, yayıncıların
              ve markaların aynı performans dilinde buluşabileceği daha net bir oyun alanı tasarlıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-center"
              >
                <p className="font-['Inter',sans-serif] text-3xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-['Inter',sans-serif] text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white">Misyonumuz</h2>
            <p className="mt-4 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">
              Herkesin dijital dünyada daha anlaşılır, takip edilebilir ve sürdürülebilir bir gelir modeli kurabileceği
              güvenilir bir affiliate altyapısı sunmak. Kullanıcıların günlük alışveriş akışını görünür kazanca
              dönüştürmelerine yardımcı oluyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white">Vizyonumuz</h2>
            <p className="mt-4 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">
              Türkiye merkezli, içerik üreticileri, yayıncılar, markalar ve alışveriş severler için ortak büyüme zemini
              kuran lider bir affiliate ekosistemi olmak. Teknoloji, veri ve kullanım kolaylığını tek deneyimde bir araya
              getirmeyi hedefliyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">Değerlerimiz</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition-colors hover:border-[#d21027]/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/20 text-[#EB5200] transition-all group-hover:from-[#d21027] group-hover:to-[#EB5200] group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-base font-semibold text-white">{value.title}</h3>
                <p className="mt-2 font-['Inter',sans-serif] text-sm leading-relaxed text-white/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">Yolculuğumuz</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d21027]/50 via-[#EB5200]/50 to-transparent md:left-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="font-['Inter',sans-serif] text-lg font-bold text-[#FFBA6F]">{milestone.year}</span>
                    <h3 className="mt-1 font-['Inter',sans-serif] text-xl font-semibold text-white">{milestone.title}</h3>
                    <p className="mt-2 font-['Inter',sans-serif] text-sm leading-relaxed text-white/50">{milestone.description}</p>
                  </div>

                  <div className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] md:relative">
                    <div className="h-3 w-3 rounded-full bg-black" />
                  </div>

                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">Ekibimiz</h2>
            <p className="mx-auto mt-3 max-w-xl font-['Inter',sans-serif] text-sm text-white/50 sm:text-base">
              Ürünü, partner ağını ve kullanıcı deneyimini aynı masada büyüten çok disiplinli bir ekip.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-center transition-colors hover:border-[#d21027]/40"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                  <span className="font-['Inter',sans-serif] text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="font-['Inter',sans-serif] text-base font-semibold text-white">{member.name}</h3>
                <p className="mt-1 font-['Inter',sans-serif] text-sm text-white/50">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Adverport'la Kazanmaya"
        highlight="Başla"
        description="Ekosistemimizin bir parçası ol, markalarla içerik üretimi arasında daha görünür bir kazanç modeli kur."
      />

      <Footer />
    </div>
  );
}
