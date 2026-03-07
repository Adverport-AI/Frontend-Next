"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Store } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgAyakkabiDunyasiPaths from "../../imports/svg-kx1ychoqgl";

const imgBeymenLogo = "/assets/475353305f5614af0afb11ccf4b79302062766a8.png";
const imgAddaxLogo = "/assets/9e42cf66091a458eba6553e70ae200fd5a337f46.png";

const categories = [
  { id: "one-cikan", label: "Öne Çıkan" },
  { id: "tumu", label: "Tümü" },
  { id: "moda", label: "Moda" },
  { id: "aksesuar", label: "Aksesuar" },
  { id: "anne-bebek-oyuncak", label: "Anne, Bebek, Oyuncak" },
  { id: "ev-yasam-kirtasiye-ofis", label: "Ev, Yaşam, Kırtasiye, Ofis" },
  { id: "evcil-hayvanlar", label: "Evcil Hayvanlar" },
  { id: "eglence", label: "Eğlence, Seyahat" },
  { id: "finans", label: "Finans" },
  { id: "fitnes-beslenme-saglik", label: "Fitnes, Beslenme, Sağlık" },
  { id: "kozmetik-kisisel-bakim", label: "Kozmetik, Kişisel Bakım" },
  { id: "muzik-kultur-sanat", label: "Müzik, Kültür, Sanat" },
  { id: "oto-tasit-bahce-yapi-market", label: "Oto, Taşıt, Bahçe, Yapı Market" },
  { id: "oyun", label: "Oyun" },
  { id: "spor-outdoor", label: "Spor, Outdoor" },
  { id: "teknoloji-elektronik", label: "Teknoloji, Elektronik" },
  { id: "yiyecek-icecek", label: "Yiyecek, İçecek" },
  { id: "diger", label: "Diğer" },
];

interface Brand {
  id: number;
  name: string;
  category: string;
  description: string;
  featured: boolean;
  campaigns: number;
  logoType?: "text" | "image" | "svg";
  logoSrc?: string;
  logoText?: string;
  logoStyle?: string;
}

const brands: Brand[] = [
  { id: 1, name: "Addax", category: "moda", description: "Günlük ve şık kadın giyim koleksiyonlarıyla trend kazanç fırsatları.", featured: true, campaigns: 12, logoType: "image", logoSrc: imgAddaxLogo },
  { id: 2, name: "Ayakkabı Dünyası", category: "moda", description: "Türkiye'nin en büyük ayakkabı perakendecisi ile geniş kampanya ağı.", featured: true, campaigns: 8, logoType: "svg" },
  { id: 3, name: "Beymen", category: "moda", description: "Lüks moda segmentinde premium alışveriş deneyimi.", featured: true, campaigns: 15, logoType: "image", logoSrc: imgBeymenLogo },
  { id: 4, name: "Bialetti", category: "ev-yasam-kirtasiye-ofis", description: "İtalyan mutfak kültürünün simgesi, kaliteli ev gereçleri.", featured: true, campaigns: 4 },
  { id: 5, name: "COLIN'S", category: "moda", description: "Denim ve casual giyimde köklü Türk markası.", featured: true, campaigns: 9, logoType: "text", logoText: "COLIN'S", logoStyle: "tracking-[0.2em] text-[16px] sm:text-[20px] italic" },
  { id: 6, name: "Casper", category: "teknoloji-elektronik", description: "Yerli teknoloji markasıyla dijital ürün kampanyaları.", featured: true, campaigns: 6 },
  { id: 7, name: "Columbia", category: "spor-outdoor", description: "Outdoor ve doğa sporları segmentinde global marka.", featured: true, campaigns: 7 },
  { id: 8, name: "Cosmed", category: "kozmetik-kisisel-bakim", description: "Eczane güzellik ürünlerinde güvenilir kozmetik markası.", featured: true, campaigns: 5 },
  { id: 9, name: "DAGİ", category: "moda", description: "İç giyim ve ev giyimde konfor odaklı koleksiyonlar.", featured: true, campaigns: 6 },
  { id: 10, name: "ElbiseBul", category: "moda", description: "Abiye ve özel gün kıyafetlerinde geniş seçenek.", featured: false, campaigns: 3 },
  { id: 11, name: "Evdeeczane", category: "kozmetik-kisisel-bakim", description: "Online eczane ürünleri ve kişisel bakım kampanyaları.", featured: true, campaigns: 4 },
  { id: 12, name: "Fakir", category: "ev-yasam-kirtasiye-ofis", description: "Küçük ev aletlerinde Türkiye'nin güvenilir markası.", featured: true, campaigns: 8 },
  { id: 13, name: "Fitmoda", category: "fitnes-beslenme-saglik", description: "Spor giyim ve fitness aksesuarlarında aktif yaşam markası.", featured: false, campaigns: 2 },
  { id: 14, name: "Flavus", category: "kozmetik-kisisel-bakim", description: "Doğal içerikli kişisel bakım ve cilt bakım ürünleri.", featured: false, campaigns: 3 },
  { id: 15, name: "Flo", category: "moda", description: "Türkiye'nin lider ayakkabı markasıyla yüksek satış potansiyeli.", featured: true, campaigns: 14, logoType: "text", logoText: "FLO", logoStyle: "tracking-[0.3em] text-[22px] sm:text-[28px]" },
  { id: 16, name: "Forever 21", category: "moda", description: "Global fast-fashion markasının Türkiye kampanyaları.", featured: true, campaigns: 5 },
  { id: 17, name: "GAP", category: "moda", description: "Global moda devinden tüm sezon kampanyaları.", featured: true, campaigns: 11, logoType: "text", logoText: "GAP", logoStyle: "tracking-[0.15em] text-[24px] sm:text-[30px]" },
  { id: 18, name: "General Mobile", category: "teknoloji-elektronik", description: "Yerli akıllı telefon ve aksesuar kampanyaları.", featured: false, campaigns: 2 },
  { id: 19, name: "Hatemoğlu", category: "moda", description: "Erkek giyimde klasik ve modern tarzın buluşma noktası.", featured: true, campaigns: 7 },
  { id: 20, name: "Havhav", category: "evcil-hayvanlar", description: "Evcil hayvan mama ve aksesuar alışverişi.", featured: false, campaigns: 3 },
  { id: 21, name: "Hotiç", category: "moda", description: "Şık ayakkabı ve çanta koleksiyonlarıyla premium moda.", featured: true, campaigns: 10 },
  { id: 22, name: "Jacadi", category: "anne-bebek-oyuncak", description: "Fransız çocuk giyim markasında zarif koleksiyonlar.", featured: true, campaigns: 4 },
  { id: 23, name: "JeansLab", category: "moda", description: "Denim odaklı genç ve dinamik moda markası.", featured: false, campaigns: 2 },
  { id: 24, name: "Konyalı Saat", category: "aksesuar", description: "Saat ve aksesuar segmentinde köklü perakendeci.", featured: false, campaigns: 3 },
  { id: 25, name: "Korkmaz", category: "ev-yasam-kirtasiye-ofis", description: "Mutfak gereçleri ve çelik ürünlerde Türk markası.", featured: true, campaigns: 6 },
  { id: 26, name: "Koton", category: "moda", description: "Genç ve dinamik moda anlayışıyla geniş kampanya ağı.", featured: true, campaigns: 13, logoType: "text", logoText: "KOTON", logoStyle: "tracking-[0.25em] text-[18px] sm:text-[22px]" },
  { id: 27, name: "Koçtaş", category: "oto-tasit-bahce-yapi-market", description: "Yapı market ve bahçe ürünlerinde Türkiye'nin lideri.", featured: true, campaigns: 9 },
  { id: 28, name: "Kuaförümden", category: "kozmetik-kisisel-bakim", description: "Profesyonel saç bakım ürünleri ve güzellik araçları.", featured: false, campaigns: 2 },
  { id: 29, name: "Kütahya Porselen", category: "ev-yasam-kirtasiye-ofis", description: "Geleneksel Türk porselen sanatının modern yorumu.", featured: true, campaigns: 5 },
  { id: 30, name: "Linens", category: "ev-yasam-kirtasiye-ofis", description: "Ev tekstili ve yatak odası ürünlerinde premium kalite.", featured: true, campaigns: 7 },
  { id: 31, name: "Lizay", category: "aksesuar", description: "Pırlanta ve altın mücevherat koleksiyonları.", featured: true, campaigns: 6 },
  { id: 32, name: "Madame Coco", category: "ev-yasam-kirtasiye-ofis", description: "Ev dekorasyon ve yaşam ürünlerinde şık tasarımlar.", featured: true, campaigns: 8 },
  { id: 33, name: "Mama Plus", category: "anne-bebek-oyuncak", description: "Anne ve bebek bakım ürünlerinde güvenilir seçenek.", featured: false, campaigns: 2 },
  { id: 34, name: "Marka Park", category: "diger", description: "Çoklu marka outlet alışverişinde avantajlı fırsatlar.", featured: false, campaigns: 3 },
  { id: 35, name: "Marks Spencer", category: "moda", description: "İngiliz moda ve yaşam markasının Türkiye kampanyaları.", featured: true, campaigns: 10 },
  { id: 36, name: "Miyav", category: "evcil-hayvanlar", description: "Kedi mama ve aksesuar ürünlerinde uzman marka.", featured: false, campaigns: 2 },
  { id: 37, name: "Mizalle", category: "moda", description: "Modern ve şık kadın giyim koleksiyonları.", featured: false, campaigns: 3 },
  { id: 38, name: "Nevzat Onay", category: "moda", description: "El yapımı erkek ayakkabılarında zanaatkâr kalitesi.", featured: true, campaigns: 5 },
  { id: 39, name: "Puma", category: "spor-outdoor", description: "Global spor markasıyla yüksek hacimli kampanyalar.", featured: true, campaigns: 16, logoType: "text", logoText: "PUMA", logoStyle: "tracking-[0.2em] text-[20px] sm:text-[26px] italic" },
  { id: 40, name: "RECETE", category: "fitnes-beslenme-saglik", description: "Sağlıklı yaşam ve beslenme ürünleri platformu.", featured: false, campaigns: 2 },
  { id: 41, name: "S Sports Plus", category: "spor-outdoor", description: "Spor yayıncılığı ve dijital abonelik kampanyaları.", featured: false, campaigns: 3 },
  { id: 42, name: "Saat and Saat", category: "aksesuar", description: "Saat perakendeciliğinde geniş marka portföyü.", featured: true, campaigns: 7 },
  { id: 43, name: "Scooter", category: "moda", description: "Günlük ve rahat ayakkabı modellerinde popüler marka.", featured: false, campaigns: 4 },
  { id: 44, name: "Slazenger", category: "spor-outdoor", description: "Spor giyim ve ayakkabıda uygun fiyatlı seçenekler.", featured: true, campaigns: 8 },
  { id: 45, name: "Sporthink", category: "spor-outdoor", description: "Spor ekipmanları ve outdoor aksesuarlarında uzman.", featured: false, campaigns: 2 },
  { id: 46, name: "Sportive", category: "spor-outdoor", description: "Çoklu spor markası perakendecisi, geniş ürün yelpazesi.", featured: false, campaigns: 5 },
  { id: 47, name: "Supplementler", category: "fitnes-beslenme-saglik", description: "Spor takviye ve beslenme ürünlerinde Türkiye'nin lideri.", featured: true, campaigns: 9 },
  { id: 48, name: "Tatil Budur", category: "eglence", description: "Tatil ve seyahat rezervasyonlarında cazip fırsatlar.", featured: true, campaigns: 11 },
  { id: 49, name: "Taç", category: "ev-yasam-kirtasiye-ofis", description: "Ev tekstili ve nevresim setlerinde köklü marka.", featured: false, campaigns: 4 },
  { id: 50, name: "TekneVia", category: "eglence", description: "Tekne kiralama ve deniz turizmi deneyimleri.", featured: false, campaigns: 2 },
  { id: 51, name: "Touristica", category: "eglence", description: "Tur ve gezi organizasyonlarında güvenilir seyahat markası.", featured: false, campaigns: 3 },
  { id: 52, name: "Toyzz Shop", category: "anne-bebek-oyuncak", description: "Oyuncak ve çocuk eğlence ürünlerinde geniş seçenek.", featured: false, campaigns: 5 },
  { id: 53, name: "Tudors", category: "moda", description: "Erkek gömlek ve aksesuarlarda şık iş giyimi.", featured: true, campaigns: 6 },
  { id: 54, name: "Taze Çicek", category: "diger", description: "Online çiçek siparişi ve hediye gönderim hizmeti.", featured: true, campaigns: 4 },
  { id: 55, name: "Vitaminler", category: "fitnes-beslenme-saglik", description: "Vitamin ve takviye ürünlerinde online alışveriş.", featured: false, campaigns: 3 },
  { id: 56, name: "ebebek", category: "anne-bebek-oyuncak", description: "Bebek ve çocuk ürünlerinde Türkiye'nin en büyük platformu.", featured: true, campaigns: 12, logoType: "text", logoText: "ebebek", logoStyle: "tracking-[0.1em] text-[18px] sm:text-[24px] lowercase" },
  { id: 57, name: "İlvi", category: "moda", description: "El yapımı deri ayakkabı ve çanta koleksiyonları.", featured: false, campaigns: 3 },
];

function getCategoryLabel(categoryId: string): string {
  return categories.find((c) => c.id === categoryId)?.label ?? categoryId;
}

function getInitials(name: string): string {
  const words = name.replace(/['']/g, " ").split(/[\s&]+/).filter(Boolean);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mobile.adverport";
const APP_STORE_URL = "https://apps.apple.com/us/app/adverport/id1616799187";

function getStoreUrl(): string {
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/i.test(ua) || (/Macintosh/i.test(ua) && "ontouchend" in document)) {
    return APP_STORE_URL;
  }
  return PLAY_STORE_URL;
}

function BrandLogo({ brand, size = "lg" }: { brand: Brand; size?: "sm" | "lg" }) {
  const imgSizeClasses =
    size === "sm"
      ? "max-h-6 sm:max-h-8 max-w-[60px] sm:max-w-[80px]"
      : "max-h-12 sm:max-h-16 max-w-[140px] sm:max-w-[200px]";

  if (brand.logoType === "image" && brand.logoSrc) {
    return (
      <img
        src={brand.logoSrc}
        alt={`${brand.name} logo`}
        className={`object-contain select-none brightness-0 invert ${imgSizeClasses}`}
      />
    );
  }

  if (brand.logoType === "svg") {
    const svgClasses = size === "sm" ? "h-4 sm:h-5 w-auto" : "h-6 sm:h-8 w-auto max-w-[180px] sm:max-w-[240px]";
    return (
      <svg className={`block ${svgClasses}`} fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1700 107">
        <g clipPath="url(#clip_ad)">
          <path d={svgAyakkabiDunyasiPaths.p2bb06a00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p1df0b00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p1b8d1bf0} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p35a01fc0} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p3b40eb00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p31b2cf00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p326ca000} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p126a6d00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p1056e300} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p187272a0} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p16c33880} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p3613e9f0} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p1b4ed00} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p21a5200} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p264b8380} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p25173100} fill="white" />
          <path d={svgAyakkabiDunyasiPaths.p15062f00} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_ad">
            <rect fill="white" height="107" width="1700" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (brand.logoType === "text" && brand.logoText) {
    return (
      <span className={`font-['Inter',sans-serif] text-white font-bold select-none ${brand.logoStyle ?? ""}`}>
        {brand.logoText}
      </span>
    );
  }

  const initials = getInitials(brand.name);
  const sizeClasses = size === "sm" ? "text-sm sm:text-base" : "text-2xl sm:text-3xl";
  return (
    <span className={`font-['Inter',sans-serif] text-white/70 font-bold tracking-wider select-none ${sizeClasses}`}>
      {initials}
    </span>
  );
}

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const categoryLabel = getCategoryLabel(brand.category);

  const handleClick = () => {
    window.open(getStoreUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onClick={handleClick}
      className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-[#d21027]/40 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-36 sm:h-44 bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(210,16,39,0.06)_0%,transparent_70%)]" />
        <BrandLogo brand={brand} size="lg" />
        {brand.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FFBA6F] to-[#EB5200] text-white px-2.5 py-1 rounded-full text-[10px] font-bold">
            Öne Çıkan
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className="font-['Inter',sans-serif] bg-white/[0.08] backdrop-blur-sm text-[#FFBA6F] px-3 py-1 rounded-full text-xs font-medium">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-['Inter',sans-serif] text-white text-lg sm:text-xl font-bold">{brand.name}</h3>
          <span className="font-['Inter',sans-serif] bg-white/[0.06] text-[#FFBA6F] px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0">
            {brand.campaigns} Kampanya
          </span>
        </div>
        <p className="font-['Inter',sans-serif] text-white/50 text-sm leading-relaxed line-clamp-2">
          {brand.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function MarkalariPage() {
  const [activeCategory, setActiveCategory] = useState("one-cikan");

  const filteredBrands = brands.filter((brand) => {
    if (activeCategory === "tumu") return true;
    if (activeCategory === "one-cikan") return brand.featured;
    return brand.category === activeCategory;
  });

  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="markalar" />

      {/* Hero Section */}
      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-8 sm:pb-10 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#EB5200] opacity-10 blur-[150px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-white font-semibold text-sm sm:text-base">
                {brands.length}+ Partner Marka
              </span>
            </div>
            <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Çalıştığımız{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Markalar
              </span>
            </h1>
            <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Türkiye&apos;nin ve dünyanın en sevilen markalarıyla çalışıyor, sana en yüksek komisyon oranlarını sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Brand Grid */}
      <section className="bg-[#0a0a0a] py-16 sm:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-['Inter',sans-serif] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white shadow-[0_0_20px_rgba(210,16,39,0.3)]"
                    : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="font-['Inter',sans-serif] text-white/40 text-sm mb-6">{filteredBrands.length} marka bulundu</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
          {filteredBrands.length === 0 && (
            <div className="text-center py-20">
              <Store className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="font-['Inter',sans-serif] text-white/40 text-lg">Bu kategoride henüz marka bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: `${brands.length}+`, label: "Partner Marka" },
              { value: "%15", label: "Ortalama Komisyon" },
              { value: "200+", label: "Aktif Kampanya" },
              { value: "₺12M+", label: "Ödenen Komisyon" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d21027] to-[#EB5200] mb-2">
                  {stat.value}
                </div>
                <div className="font-['Inter',sans-serif] text-white/60 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Favori Markanla{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
              Kazanmaya Başla
            </span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Hemen ücretsiz kaydol, markaları keşfet ve affiliate bağlantılarını paylaşarak kazanç sağla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(getStoreUrl(), "_blank", "noopener,noreferrer")}
              className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif]"
            >
              Ücretsiz Başla
            </button>
            <button
              onClick={() => setActiveCategory("tumu")}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all font-['Inter',sans-serif]"
            >
              Tüm Kampanyaları Gör
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
