"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Building2, Link, Megaphone, Store } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgAyakkabiDunyasiPaths from "../../imports/svg-kx1ychoqgl";

const imgBeymenLogo = "/assets/475353305f5614af0afb11ccf4b79302062766a8.png";
const imgAddaxLogo = "/assets/9e42cf66091a458eba6553e70ae200fd5a337f46.png";

const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "one-cikan", label: "Öne Çıkan" },
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

const categoryImages: Record<string, string> = {
  moda:
    "https://images.unsplash.com/photo-1770226415002-dbbd40327ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzczNjIwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  aksesuar:
    "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzczNjAwODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "anne-bebek-oyuncak":
    "https://images.unsplash.com/photo-1766918780914-e19d9de76d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwbnVyc2VyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzYyMDQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "ev-yasam-kirtasiye-ofis":
    "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwZGVjb3IlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM2MjA0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "evcil-hayvanlar":
    "https://images.unsplash.com/photo-1764249453850-faace6e57444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkb2clMjBjYXQlMjBzdXBwbGllc3xlbnwxfHx8fDE3NzM1MzMzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  eglence:
    "https://images.unsplash.com/photo-1770776734788-28a1f70590f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb24lMjB0cmF2ZWx8ZW58MXx8fHwxNzczNTU0MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "fitnes-beslenme-saglik":
    "https://images.unsplash.com/photo-1674834727149-00812f907676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dCUyMHN1cHBsZW1lbnRzfGVufDF8fHx8MTc3MzYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "kozmetik-kisisel-bakim":
    "https://images.unsplash.com/photo-1600417098578-1e858e93dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "spor-outdoor":
    "https://images.unsplash.com/photo-1608138127700-e3c9405832d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBvdXRkb29yJTIwcnVubmluZyUyMGdlYXJ8ZW58MXx8fHwxNzczNjIwNDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "teknoloji-elektronik":
    "https://images.unsplash.com/photo-1605602079417-ae32b68599d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWxlY3Ryb25pY3MlMjBnYWRnZXRzfGVufDF8fHx8MTc3MzYyMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "oto-tasit-bahce-yapi-market":
    "https://images.unsplash.com/photo-1687898326044-12be88f71b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwZ2FyZGVuJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzczNjIwNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  diger:
    "https://images.unsplash.com/photo-1759004612201-87c2bad9eb3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZsb3dlcnMlMjBib3VxdWV0JTIwZGVsaXZlcnl8ZW58MXx8fHwxNzczNjIwNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const categoryImagesAlt: Record<string, string> = {
  moda:
    "https://images.unsplash.com/photo-1629212537116-151e8fb7469f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lcyUyMGZvb3R3ZWFyJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzM2MjA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "ev-yasam-kirtasiye-ofis":
    "https://images.unsplash.com/photo-1611255534761-de0f80f0152c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3NzM2MjA0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

function getCategoryImage(brand: Brand): string {
  if (brand.id % 2 === 0 && categoryImagesAlt[brand.category]) {
    return categoryImagesAlt[brand.category];
  }

  return categoryImages[brand.category] ?? categoryImages.diger;
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
  const coverImage = getCategoryImage(brand);

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
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <ImageWithFallback
          src={coverImage}
          alt={brand.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-black/10" />
        {brand.featured && (
          <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-[#FFBA6F] to-[#EB5200] px-2.5 py-1 text-[10px] font-bold text-white">
            Öne Çıkan
          </div>
        )}
        <div className="absolute bottom-3 right-3">
          <span className="font-['Inter',sans-serif] bg-black/50 backdrop-blur-sm text-[#FFBA6F] px-3 py-1 rounded-full text-xs font-medium">
            {categoryLabel}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/15 bg-[#0d0d0d] shadow-lg">
          <BrandLogo brand={brand} size="sm" />
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
  const [activeCategory, setActiveCategory] = useState("tumu");

  const filteredBrands = brands.filter((brand) => {
    if (activeCategory === "tumu") return true;
    if (activeCategory === "one-cikan") return brand.featured;
    return brand.category === activeCategory;
  });

  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="markalar" />

      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-10 sm:pb-12 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">
                {brands.length}+ Partner Marka
              </span>
            </div>

            <h1 className="font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-5">
              Çalıştığımız{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                Markalar
              </span>
            </h1>

            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Türkiye&apos;nin ve dünyanın sevilen markalarıyla çalışıyor, sana yüksek komisyon ve geniş kampanya erişimi sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] py-16 sm:py-24">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`font-['Inter',sans-serif] rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5 sm:py-2.5 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white shadow-[0_0_20px_rgba(210,16,39,0.3)]"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="mb-6 font-['Inter',sans-serif] text-sm text-white/40">{filteredBrands.length} marka bulundu</p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="py-20 text-center">
              <Store className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="font-['Inter',sans-serif] text-lg text-white/40">Bu kategoride henüz marka bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/5 bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: `${brands.length}+`, label: "Partner Marka", icon: <Building2 className="h-6 w-6 text-[#d21027]" /> },
              { value: "200+", label: "Aktif Kampanya & Koleksiyon", icon: <Megaphone className="h-6 w-6 text-[#d21027]" /> },
              { value: "50K+", label: "Oluşturulan Link", icon: <Link className="h-6 w-6 text-[#d21027]" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#d21027]/20 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10">
                    {stat.icon}
                  </div>
                </div>
                <div className="mb-1 text-2xl font-bold tracking-wide text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="font-['Inter',sans-serif] text-sm font-medium text-white/50 sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-24">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="mb-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Favori Markanla{" "}
            <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
              Kazanmaya Başla
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
            Hemen ücretsiz kaydol, markaları keşfet ve affiliate bağlantılarını paylaşarak kazanç sağla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.open(getStoreUrl(), "_blank", "noopener,noreferrer")}
              className="bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-4 rounded-full font-['Inter',sans-serif] text-base font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.5)]"
            >
              Ücretsiz Başla
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("tumu")}
              className="border border-white/20 bg-white/10 px-8 py-4 rounded-full font-['Inter',sans-serif] text-base font-bold text-white transition-all hover:bg-white/20"
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
