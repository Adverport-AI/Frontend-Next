"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BadgePercent,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coins,
  Download,
  HandCoins,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import HeroSectionNew from "./components/HeroSectionNew";
import { TrustedBrands } from "./components/TrustedBrands";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CtaSection } from "./components/CtaSection";
import HowItWorksShowcase from "./components/HowItWorksShowcase";
import PremiumTeaser from "./components/PremiumTeaser";

function HeroSection() {
  return <HeroSectionNew />;
}

function HomeFeatures() {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Kolay Kazanç",
      description:
        "Affiliate bağlantılarınızı paylaşın ve her satıştan komisyon kazanın. Minimum efor, maksimum gelir.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Geniş Marka Ağı",
      description:
        "Türkiye'nin önde gelen markalarıyla çalışın. 500+ marka seçeneği ile istediğiniz ürünü tanıtın.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Anlık İstatistikler",
      description:
        "Gerçek zamanlı raporlama ile kazançlarınızı, tıklama oranlarınızı ve performansınızı takip edin.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Güvenli Ödeme",
      description:
        "Kazançlarınız güvende. Hızlı ve güvenilir ödeme sistemi ile paranıza anında ulaşın.",
    },
  ];

  return (
    <section id="features" className="relative bg-black py-16 sm:py-20 md:py-24">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-10 blur-[150px] sm:h-[600px] sm:w-[600px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-4">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 px-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Neden <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">adverport</span>?
          </h2>
          <p className="mx-auto max-w-2xl px-4 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">
            Affiliate pazarlamanın gücünü kullanarak pasif gelir elde etmenin en kolay yolu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition-all hover:border-[#d21027]/50 sm:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] transition-transform group-hover:scale-110">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="mb-3 font-['Inter',sans-serif] text-lg font-bold text-white sm:text-xl">{feature.title}</h3>
              <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DualEarningModel() {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#d21027] opacity-[0.08] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-4">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 px-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Neden <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">adverport</span>?
          </h2>
          <p className="mx-auto max-w-2xl px-4 font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">
            Üç farklı yoldan gelir elde et.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all hover:border-[#d21027]/50 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d21027] opacity-20 blur-[60px] transition-opacity group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                <HandCoins className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 font-['Inter',sans-serif] text-lg font-bold text-white sm:text-xl">Satış Komisyonu</h3>
              <p className="mb-6 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">
                Paylaştığın linklerden yapılan her satıştan %5-20 arası komisyon kazan.
              </p>
              <div>
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text font-['Inter',sans-serif] text-3xl font-bold text-transparent sm:text-4xl">1.200₺</span>
                <p className="mt-1 font-['Inter',sans-serif] text-sm text-white/60">ortalama aylık hakediş*</p>
              </div>
              <p className="mt-3 font-['Inter',sans-serif] text-[11px] text-[#cecece4d]">*Gelir garantisi değildir, örnek senaryolardır</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all hover:border-[#d21027]/50 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#EB5200] opacity-20 blur-[60px] transition-opacity group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EB5200] to-[#FFBA6F]">
                <BadgePercent className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 font-['Inter',sans-serif] text-lg font-bold text-white sm:text-xl">Alışveriş Nakit İadesi</h3>
              <p className="mb-6 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">
                Kendi alışverişlerinden nakit iade kazan. Her harcamandan geri dönüş al.
              </p>
              <div>
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text font-['Inter',sans-serif] text-3xl font-bold text-transparent sm:text-4xl">500₺</span>
                <p className="mt-1 font-['Inter',sans-serif] text-sm text-white/60">ortalama aylık kazanç*</p>
              </div>
              <p className="mt-3 font-['Inter',sans-serif] text-[11px] text-[#cecece4d]">*Gelir garantisi değildir, örnek senaryolardır</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all hover:border-[#d21027]/50 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FFBA6F] opacity-20 blur-[60px] transition-opacity group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFBA6F] to-[#d21027]">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 font-['Inter',sans-serif] text-lg font-bold text-white sm:text-xl">Adverport Puan Katlama</h3>
              <p className="mb-6 font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">
                Kazançlarını adverport puanına çevir, puanları katla ve daha çok kazan.
              </p>
              <div>
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text font-['Inter',sans-serif] text-3xl font-bold text-transparent sm:text-4xl">%65</span>
                <p className="mt-1 font-['Inter',sans-serif] text-sm text-white/60">oranına varan katlama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const metrics = [
    { value: "25.000+", label: "İndirme", iconType: "download" },
    { value: "4.1/5", label: "Kullanıcı Puanı", iconType: "star" },
    { value: "70+", label: "Marka Ortağı", iconType: "building" },
  ] as const;

  const testimonials = [
    {
      name: "Elif Yılmaz",
      role: "İçerik Üreticisi, İstanbul",
      comment:
        '"Adverport sayesinde sosyal medyada paylaştığım ürünlerden harika bir gelir elde ediyorum. Hem sevdiğim markaları tanıtıyorum hem de kazanıyorum!"',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1623577618772-268b10aa2c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHR1cmtpc2glMjB3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzYxMzEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ahmet Yıldırım",
      role: "Dijital Pazarlamacı, Ankara",
      comment:
        '"Affiliate marketing için en iyi platform. Komisyon oranları çok iyi ve ödemeler zamanında yapılıyor. Kesinlikle tavsiye ederim."',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1751730740434-a4bf3d89f984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHR1cmtpc2glMjBtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM2MTMxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Zeynep Kaya",
      role: "Blog Yazarı, İzmir",
      comment:
        '"Premium üyeliğe geçtikten sonra kazançlarım ikiye katlandı. Müşteri desteği de harika, her soruma anında dönüş alıyorum."',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1754639532963-8a44deaebd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwd29tYW4lMjBibG9nZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNjEzMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Mehmet Aksoy",
      role: "Sosyal Medya Uzmanı, Bursa",
      comment:
        '"Başta şüpheliydim ama ilk ayın sonunda sonuçları görünce çok şaşırdım. Artık tam zamanlı işim olarak yapıyorum."',
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiZWFyZCUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNjEzMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Selin Demir",
      role: "Öğrenci, Antalya",
      comment:
        '"Okurken ek gelir elde etmek için mükemmel. Günde sadece 1 saat ayırarak güzel bir gelir sağlıyorum."',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1770028919882-017b31ad6d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHVuaXZlcnNpdHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM2MTMxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goTo = (index: number) => setCurrentIndex(index);

  const renderMetricIcon = (iconType: (typeof metrics)[number]["iconType"]) => {
    if (iconType === "building") return <Building2 className="h-6 w-6 text-[#d21027]" />;
    if (iconType === "download") return <Download className="h-6 w-6 text-[#d21027]" />;
    return <Star className="h-6 w-6 text-[#d21027]" />;
  };

  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-4">
        <div className="mb-16 grid grid-cols-3 gap-6 sm:mb-20 sm:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#d21027]/20 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10">
                  {renderMetricIcon(metric.iconType)}
                </div>
              </div>
              <p className="mb-1 font-['Inter',sans-serif] text-2xl font-bold tracking-wide text-white sm:text-3xl">{metric.value}</p>
              <p className="font-['Inter',sans-serif] text-sm text-white/50">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <h3 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">
              Kullanıcılarımız <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Ne Diyor</span>?
            </h3>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-8 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] sm:p-12"
                >
                  <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "fill-[#C0001A] text-[#C0001A]" : "text-white/20"}`} />
                    ))}
                  </div>

                  <p className="mx-auto mb-8 max-w-2xl text-center font-['Inter',sans-serif] text-base italic leading-relaxed text-white/90 sm:text-lg md:text-xl">
                    {testimonials[currentIndex].comment}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#C0001A]/30">
                      <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-base font-semibold text-white">{testimonials[currentIndex].name}</p>
                      <p className="font-['Inter',sans-serif] text-sm text-white/60">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white sm:-translate-x-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white sm:translate-x-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-gradient-to-r from-[#d21027] to-[#EB5200]" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Adverport nasıl çalışır?",
      answer:
        "Adverport, markaların ürünlerini tanıtmanıza ve her satıştan komisyon kazanmanıza olanak tanıyan bir affiliate pazarlama platformudur. Kaydolduktan sonra istediğiniz markaları seçer, özel bağlantılarınızı paylaşır ve kazanmaya başlarsınız.",
    },
    {
      question: "Komisyon oranları nedir?",
      answer:
        "Komisyon oranları marka ve ürün kategorisine göre %5 ile %20 arasında değişmektedir. Premium üyelerimiz en yüksek komisyon oranlarından yararlanır.",
    },
    {
      question: "Ödemeler ne zaman yapılır?",
      answer:
        "Ödemeler aylık olarak yapılır. Minimum ödeme tutarı 100 TL'dir. Premium üyeler daha hızlı ödeme seçeneklerinden yararlanabilir.",
    },
    {
      question: "Üyelik ücretsiz mi?",
      answer:
        "Evet, temel üyelik tamamen ücretsizdir. İsterseniz daha fazla özellik ve yüksek komisyonlar için Premium üyeliğe geçebilirsiniz.",
    },
    {
      question: "Hangi ödeme yöntemlerini kullanabilirim?",
      answer: "Banka havalesi, PayPal ve Papara ile ödemelerinizi alabilirsiniz.",
    },
    {
      question: "Referans programı nasıl çalışır?",
      answer:
        "Arkadaşlarınızı davet ettiğinizde, onların kazançlarından bonus elde edersiniz. Bu model zamanla pasif gelir akışı oluşturmanıza yardımcı olur.",
    },
  ];

  return (
    <section id="faq" className="relative bg-black py-24">
      <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d21027] opacity-5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Sıkça Sorulan <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Sorular</span>
          </h2>
          <p className="text-lg text-white/60">Merak ettiğiniz her şey burada.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent transition-all hover:border-[#d21027]/50">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="pr-8 text-lg font-semibold text-white">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-6 w-6 flex-shrink-0 text-[#EB5200]" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-white/5 px-8 pb-6 pt-4">
                      <p className="leading-relaxed text-white/60">{faq.answer}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <HowItWorksShowcase />
      <PremiumTeaser />
      <HomeFeatures />
      <DualEarningModel />
      <SocialProof />
      <FAQ />
      <CtaSection
        title="Pasif Gelir Elde Etmeye"
        highlight="Bugün Başla"
        description="Binlerce kullanıcı Adverport ile kazanıyor. Sen de aramıza katıl, uygulamayı indir."
      />
      <Footer showContact />
    </div>
  );
}
