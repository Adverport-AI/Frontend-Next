"use client";

import Link from "next/link";
import { TrendingUp, Users, Zap, Shield, Gift, Clock, BarChart2, Link2, Bell, Smartphone, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-black pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d21027] opacity-10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EB5200] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#EB5200] animate-pulse" />
          <span className="font-['Inter',sans-serif] text-white/80 text-sm font-medium">Platform Özellikleri</span>
        </div>

        <h1 className="font-['Inter',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Kazanmak İçin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
            İhtiyacın Olan
          </span>
          <br />Her Şey Burada
        </h1>

        <p className="font-['Inter',sans-serif] text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Adverport, affiliate pazarlama sürecini baştan sona kolaylaştıran araçları tek bir platformda sunuyor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all inline-flex items-center justify-center gap-2">
            Ücretsiz Başla <ArrowRight className="w-4 h-4" />
          </button>
          <Link href="/" className="font-['Inter',sans-serif] bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/15 transition-all inline-flex items-center justify-center gap-2">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Core Features Grid ────────────────────────────────────────────────────── */
const coreFeatures = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Kolay Kazanç",
    description:
      "Affiliate bağlantılarınızı paylaşın ve her satıştan komisyon kazanın. Minimum efor, maksimum gelir.",
    highlight: "%5–20 komisyon",
    color: "from-[#d21027] to-[#EB5200]",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Geniş Marka Ağı",
    description:
      "Türkiye'nin önde gelen 500+ markasıyla çalışın. Her kategoride favori markalarınızı seçin.",
    highlight: "500+ marka",
    color: "from-[#EB5200] to-[#FFBA6F]",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Anlık İstatistikler",
    description:
      "Gerçek zamanlı raporlama ile tıklama, satış ve kazanç verilerinizi anlık takip edin.",
    highlight: "Gerçek zamanlı",
    color: "from-[#d21027] to-[#EB5200]",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Güvenli Ödeme",
    description:
      "Kazançlarınız güvende. Hızlı ve güvenilir ödeme sistemi ile paranıza anında ulaşın.",
    highlight: "Güvenli & hızlı",
    color: "from-[#EB5200] to-[#FFBA6F]",
  },
  {
    icon: <Gift className="w-7 h-7" />,
    title: "Nakit İade",
    description:
      "Kendi alışverişlerinizden de kazanın. Seçili markalarda her satın alımda nakit iade alın.",
    highlight: "Ekstra kazanç",
    color: "from-[#d21027] to-[#EB5200]",
  },
  {
    icon: <Link2 className="w-7 h-7" />,
    title: "Özel Link Oluşturma",
    description:
      "Premium üyeler kendi markalı linklerini oluşturabilir. Takipçilerine profesyonel görünüm sun.",
    highlight: "Premium özellik",
    color: "from-[#EB5200] to-[#FFBA6F]",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "Anlık Bildirimler",
    description:
      "Her tıklama ve satıştan haberdar ol. Kampanya güncellemelerini anında mobil bildirimimle al.",
    highlight: "Push & e-posta",
    color: "from-[#d21027] to-[#EB5200]",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Otomatik Takip",
    description:
      "Linklerinizin performansını otomatik izleyin. Hangi kanalın daha çok kazandırdığını görün.",
    highlight: "7/24 izleme",
    color: "from-[#EB5200] to-[#FFBA6F]",
  },
];

function CoreFeatures() {
  return (
    <section className="bg-[#0a0a0a] py-20 sm:py-28 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d21027] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Temel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Özellikler
            </span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Kazancını artırmak için tasarlanmış güçlü araçlar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {coreFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-[#d21027]/50 transition-all group flex flex-col"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform flex-shrink-0`}
              >
                <div className="text-white">{f.icon}</div>
              </div>
              <h3 className="font-['Inter',sans-serif] text-lg font-bold text-white mb-2">
                {f.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-white/55 text-sm leading-relaxed flex-1">
                {f.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5">
                <span
                  className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${f.color}`}
                >
                  {f.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Deep-dive feature rows ────────────────────────────────────────────────── */
function FeatureRow({
  icon,
  badge,
  title,
  description,
  bullets,
  stat,
  statLabel,
  reverse = false,
}: {
  icon: React.ReactNode;
  badge: string;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  stat: string;
  statLabel: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-10 sm:gap-16 items-center`}
    >
      {/* Text side */}
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1.5 mb-6">
          <span className="text-[#EB5200]">{icon}</span>
          <span className="font-['Inter',sans-serif] text-white/70 text-xs font-semibold uppercase tracking-wide">
            {badge}
          </span>
        </div>
        <h3 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
          {title}
        </h3>
        <p className="font-['Inter',sans-serif] text-white/60 text-base leading-relaxed mb-6">
          {description}
        </p>
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#EB5200] flex-shrink-0 mt-0.5" />
              <span className="font-['Inter',sans-serif] text-white/70 text-sm leading-relaxed">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div className="flex-1 w-full">
        <div className="relative bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#d21027] opacity-15 blur-[80px] rounded-full" />
          <div className="relative flex flex-col items-center justify-center gap-2 py-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-3xl flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(210,16,39,0.3)]">
              <div className="text-white scale-150">{icon}</div>
            </div>
            <span className="font-['Inter',sans-serif] text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              {stat}
            </span>
            <span className="font-['Inter',sans-serif] text-white/50 text-sm">{statLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeepDive() {
  return (
    <section className="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EB5200] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-4 relative z-10 space-y-24 sm:space-y-32">
        <FeatureRow
          icon={<BarChart2 className="w-7 h-7" />}
          badge="Analitik"
          title={
            <>
              Gerçek Zamanlı{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Performans
              </span>{" "}
              Takibi
            </>
          }
          description="Dashboard'ınızda tüm kampanyaların, linklerin ve kazançların anlık görünümüne erişin. Hangi içeriğin daha çok sattığını anında görün, stratejinizi buna göre şekillendirin."
          bullets={[
            "Tıklama, satış ve dönüşüm oranlarını tek ekranda görün",
            "Marka bazında performans karşılaştırması yapın",
            "Haftalık ve aylık kazanç trendlerini grafik olarak inceleyin",
            "En iyi performanslı linklerinizi otomatik raporla alın",
          ]}
          stat="3.2x"
          statLabel="daha fazla kazanç"
          reverse={false}
        />

        <FeatureRow
          icon={<Users className="w-7 h-7" />}
          badge="Marka Ağı"
          title={
            <>
              500+ Marka,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Sınırsız
              </span>{" "}
              Fırsat
            </>
          }
          description="Moda'dan elektroniğe, kozmetikten ev dekorasyonuna kadar Türkiye'nin en büyük markalarıyla çalışın. Her niş için doğru markayı bulun ve hedef kitlenize uygun kampanyalar paylaşın."
          bullets={[
            "Tüm kategorilerde Türkiye'nin lider markaları",
            "Yeni markalar her hafta platforma ekleniyor",
            "Marka profillerinde komisyon oranlarını önceden görün",
            "Favori markalarınızı kaydedin, kampanya bildirimlerini alın",
          ]}
          stat="500+"
          statLabel="partner marka"
          reverse={true}
        />

        <FeatureRow
          icon={<Smartphone className="w-7 h-7" />}
          badge="Mobil Uygulama"
          title={
            <>
              Her Yerden{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Yönet
              </span>
              , Her Yerden Kazan
            </>
          }
          description="iOS ve Android uygulamalarımızla tüm işlemlerinizi mobil cihazınızdan kolayca yapın. Sabah uyanır uyanmaz kazancınızı görün, öğleden sonra yeni bir kampanyaya katılın."
          bullets={[
            "iOS ve Android için optimize edilmiş uygulama",
            "Biometrik giriş ile güvenli ve hızlı erişim",
            "Offline mod: internetsiz ortamda geçmiş verilere ulaşın",
            "Koyu tema ile göz yormayan kullanıcı deneyimi",
          ]}
          stat="4.9"
          statLabel="App Store puanı"
          reverse={false}
        />
      </div>
    </section>
  );
}
/* ─── Stats Bar ─────────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "50K+", label: "Aktif Kullanıcı" },
    { value: "₺12M+", label: "Ödenen Komisyon" },
    { value: "500+", label: "Partner Marka" },
    { value: "4.9/5", label: "Kullanıcı Puanı" },
  ];

  return (
    <section className="bg-black border-y border-white/5 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d21027] to-[#EB5200] mb-2">
                {s.value}
              </div>
              <div className="font-['Inter',sans-serif] text-white/60 font-medium text-sm sm:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Ayşe K.",
    role: "Fashion Blogger",
    text: "Adverport sayesinde ayda 3.000 TL'nin üzerinde ek gelir elde ediyorum. Linkleri oluşturmak çok kolay ve istatistikler anlık geliyor.",
    rating: 5,
  },
  {
    name: "Mehmet T.",
    role: "Tech YouTuber",
    text: "500+ marka seçeneği var, her niş için kampanya bulabiliyorsunuz. Premium'a geçtikten sonra komisyonlarım ikiye katlandı.",
    rating: 5,
  },
  {
    name: "Selin A.",
    role: "Instagram İçerik Üreticisi",
    text: "Mobil uygulama harika. Her yerden kazancımı takip edebiliyorum. Ödeme sistemi güvenilir ve hızlı, hiç sorun yaşamadım.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EB5200] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-4">
            Kullanıcılar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Ne Diyor?
            </span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base max-w-xl mx-auto">
            50.000'den fazla kullanıcı Adverport ile kazanıyor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-7 sm:p-8 hover:border-[#d21027]/40 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#EB5200] text-[#EB5200]" />
                ))}
              </div>
              <p className="font-['Inter',sans-serif] text-white/70 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <div className="font-['Inter',sans-serif] text-white font-semibold text-sm">{t.name}</div>
                <div className="font-['Inter',sans-serif] text-white/40 text-xs mt-0.5">{t.role}</div>
              </div>
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
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#d21027] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <h2 className="font-['Inter',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Bugün Başla,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
            Hemen Kazan
          </span>
        </h2>
        <p className="font-['Inter',sans-serif] text-white/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ücretsiz hesap oluştur, 500+ marka arasından seç ve ilk kazancını bugün elde et.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all inline-flex items-center justify-center gap-2">
            Ücretsiz Başla <ArrowRight className="w-5 h-5" />
          </button>
          <Link
            href="/"
            className="font-['Inter',sans-serif] bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/15 transition-all inline-flex items-center justify-center"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function OzelliklerPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="ozellikler" />
      <Hero />
      <StatsBar />
      <CoreFeatures />
      <DeepDive />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
