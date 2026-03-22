"use client";

import { ArrowRight, BadgeCheck, Globe2, Handshake, LineChart, Sparkles, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const pillars = [
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Marka ve içerik üreticisini buluşturur",
    description:
      "Adverport, markaların performans odaklı büyümesini içerik üreticileri ve yayıncılarla aynı zeminde yönetmesini sağlar.",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Ölçülebilir kazanç modeli sunar",
    description:
      "Tıklama, dönüşüm ve gelir akışını görünür kılan net bir performans modeliyle herkes neyin işe yaradığını anlayabilir.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Güven ve şeffaflığı merkeze alır",
    description:
      "Kampanya katılımından ödeme süreçlerine kadar platform deneyimini sürdürülebilir ve takip edilebilir hale getirir.",
  },
];

const values = [
  "Affiliate sürecini herkes için erişilebilir hale getirmek",
  "Kazancı yalnızca büyük yayıncılara değil, büyümek isteyen herkese açmak",
  "Markalar için daha verimli, kullanıcılar için daha anlaşılır bir performans kanalı sunmak",
  "Teknoloji, veri ve kullanım kolaylığını aynı deneyimde birleştirmek",
];

const stats = [
  { value: "500+", label: "Partner Marka" },
  { value: "1M+", label: "Aktif Kullanıcı" },
  { value: "50M+", label: "Paylaşılan Link" },
  { value: "₺10M+", label: "Dağıtılan Komisyon" },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-20 pt-[140px] sm:pb-24 sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-[#d21027] opacity-10 blur-[170px]" />
        <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">
                Hakkımızda
              </span>
            </div>

            <h1 className="mb-6 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Alışverişi{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                Kazanca Dönüştürüyoruz
              </span>
            </h1>

            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Adverport, kullanıcıların sevdikleri ürünlerin linklerini paylaşarak kazanç elde etmesini sağlayan
              yenilikçi bir affiliate pazarlama platformudur.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-center"
              >
                <div className="font-['Inter',sans-serif] text-2xl font-bold text-transparent bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text sm:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-2 font-['Inter',sans-serif] text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:px-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white">
                {pillar.icon}
              </div>
              <h2 className="mb-3 font-['Inter',sans-serif] text-xl font-bold text-white">
                {pillar.title}
              </h2>
              <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/55">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5">
              <Globe2 className="h-4 w-4 text-[#EB5200]" />
              <span className="font-['Inter',sans-serif] text-xs font-semibold uppercase tracking-wide text-white/70">
                Misyonumuz
              </span>
            </div>
            <h2 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl">
              İçerik ve ticaret arasındaki mesafeyi{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                kısaltıyoruz
              </span>
            </h2>
            <p className="max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60">
              Kullanıcılar artık yalnızca link paylaşmak istemiyor; ne kadar kazandığını görmek, hangi
              markaların daha iyi performans verdiğini anlamak ve bunu sürdürülebilir bir gelir modeline
              dönüştürmek istiyor. Adverport bu ihtiyacı karşılamak için tasarlandı.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#d21027]/12 to-white/[0.03] p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#FFBA6F]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white">Bizi yönlendiren ilkeler</h3>
                <p className="font-['Inter',sans-serif] text-sm text-white/45">
                  Ürün kararlarından kullanıcı deneyimine kadar
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </div>
                  <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/70">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-6 py-10 sm:px-10 sm:py-14">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-4xl">
              Adverport ile büyümek isteyen herkes için{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                daha net bir oyun alanı
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-['Inter',sans-serif] text-sm leading-relaxed text-white/60 sm:text-base">
              İçerik üreticisi, yayıncı ya da marka olun; doğru kampanyayı, doğru performans verisini ve
              sürdürülebilir gelir modelini tek yerde yönetebilmeniz için çalışıyoruz.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/markalar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-7 py-3.5 font-['Inter',sans-serif] text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.35)]"
              >
                Markaları İncele
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-['Inter',sans-serif] text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Bizimle İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
