"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  CreditCard,
  Users,
  Shield,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type FaqCategoryId = "genel" | "kazanc" | "hesap" | "guvenlik" | "uygulama" | "premium";

type FaqItem = {
  q: string;
  a: string;
};

const faqCategories: { id: FaqCategoryId; label: string; icon: ReactNode }[] = [
  { id: "genel", label: "Genel", icon: <HelpCircle className="h-4 w-4" /> },
  { id: "kazanc", label: "Kazanç & Ödeme", icon: <CreditCard className="h-4 w-4" /> },
  { id: "hesap", label: "Hesap & Üyelik", icon: <Users className="h-4 w-4" /> },
  { id: "guvenlik", label: "Güvenlik", icon: <Shield className="h-4 w-4" /> },
  { id: "uygulama", label: "Uygulama", icon: <Smartphone className="h-4 w-4" /> },
  { id: "premium", label: "Premium", icon: <TrendingUp className="h-4 w-4" /> },
];

const faqData: Record<FaqCategoryId, FaqItem[]> = {
  genel: [
    {
      q: "Adverport nedir?",
      a: "Adverport, sevdiğiniz ürünlerin affiliate linklerini paylaşarak komisyon kazanmanızı sağlayan bir platformdur. Birisi sizin linkinizle alışveriş yaptığında gelir elde edersiniz.",
    },
    {
      q: "Adverport'u kullanmak ücretsiz mi?",
      a: "Evet. Adverport'a ücretsiz kaydolabilir ve hemen kazanmaya başlayabilirsiniz. Daha fazla özellik isteyen kullanıcılar için Premium paketi de bulunur.",
    },
    {
      q: "Hangi markalarla çalışıyorsunuz?",
      a: "Moda, teknoloji, kozmetik, ev ve yaşam gibi birden fazla kategoride yüzlerce markayla iş birliği modeli sunuyoruz.",
    },
    {
      q: "Nasıl başlayabilirim?",
      a: "Uygulamayı indirip hesabınızı oluşturun. Sonrasında link paylaşmaya ve performansınızı panelden takip etmeye başlayabilirsiniz.",
    },
  ],
  kazanc: [
    {
      q: "Komisyon oranları ne kadar?",
      a: "Komisyon oranları markaya ve kampanyaya göre değişir. Premium kullanıcılar seçili kampanyalarda ek avantajlardan yararlanabilir.",
    },
    {
      q: "Ödemelerimi nasıl alabilirim?",
      a: "Kazançlarınızı banka havalesi veya desteklenen ödeme yöntemleri üzerinden çekebilirsiniz. Güncel limit ve koşullar yardım içeriklerinde belirtilir.",
    },
    {
      q: "Ödemeler ne zaman yapılıyor?",
      a: "Onaylanan komisyonlar belirlenen ödeme takvimine göre hesabınıza aktarılır. Kesin tarihler kampanya ve onay süreçlerine göre değişebilir.",
    },
    {
      q: "Kendi alışverişimden de kazanabilir miyim?",
      a: "Uygun kampanyalarda kendi alışverişiniz üzerinden de cashback veya komisyon modeli uygulanabilir. Kampanya kurallarını kontrol etmek gerekir.",
    },
  ],
  hesap: [
    {
      q: "Hesabımı nasıl oluşturabilirim?",
      a: "Mobil uygulamayı indirip e-posta adresiniz veya telefon numaranızla kayıt olabilirsiniz. Hesap kurulumu dakikalar içinde tamamlanır.",
    },
    {
      q: "Hesabımı nasıl silebilirim?",
      a: "Ayarlar > Hesap bölümünden hesap silme talebinde bulunabilirsiniz. Bekleyen ödemeler veya doğrulamalar varsa önce onlar sonuçlandırılır.",
    },
    {
      q: "Şifremi unuttum, ne yapmalıyım?",
      a: "Giriş ekranındaki şifre sıfırlama akışını kullanın. Kayıtlı iletişim bilgilerinize şifre yenileme bağlantısı gönderilir.",
    },
    {
      q: "Birden fazla hesap açabilir miyim?",
      a: "Hayır. Her kullanıcı için tek hesap mantığı uygulanır. Çoklu hesap kullanımı güvenlik ve ödeme süreçlerini olumsuz etkiler.",
    },
  ],
  guvenlik: [
    {
      q: "Verilerim güvende mi?",
      a: "Evet. Hesap ve işlem verileri güvenlik odaklı altyapı üzerinde saklanır. Ek olarak mevzuat uyumluluğu ve erişim kontrolleri uygulanır.",
    },
    {
      q: "İki faktörlü doğrulama var mı?",
      a: "Güvenlik adımları hesap türüne ve uygulama akışına göre değişebilir. Destek ekibi size en güncel doğrulama seçeneklerini iletebilir.",
    },
    {
      q: "Şüpheli bir işlem fark edersem ne yapmalıyım?",
      a: "Hemen destek ekibine ulaşın. Gerekiyorsa hesap geçici olarak korunur ve oturumlar yeniden doğrulanır.",
    },
  ],
  uygulama: [
    {
      q: "Hangi cihazlarda çalışıyor?",
      a: "Adverport mobil odaklı bir deneyim sunar. Desteklenen sürümler ve platform detayları yardım merkezi içeriğinde güncel tutulur.",
    },
    {
      q: "Uygulama çok yer kaplıyor mu?",
      a: "Uygulama boyutu sürüme göre değişir. Yeni güncellemeler performans ve boyut optimizasyonları ile birlikte gelir.",
    },
    {
      q: "Bildirimler nasıl özelleştirilir?",
      a: "Ayarlar ve bildirim tercihleri alanından kampanya, satış ve sistem bildirimlerini ayrı ayrı yönetebilirsiniz.",
    },
  ],
  premium: [
    {
      q: "Premium üyelik ne kadar?",
      a: "Premium fiyatlandırma dönemsel olarak güncellenebilir. En güncel paket bilgisi premium sayfasında yer alır.",
    },
    {
      q: "Premium üyeliğin avantajları neler?",
      a: "Daha yüksek komisyon fırsatları, gelişmiş analitikler, öncelikli destek ve özel kampanyalara erişim öne çıkan faydalardandır.",
    },
    {
      q: "Premium üyeliği iptal edebilir miyim?",
      a: "Evet. Aktif dönem sonuna kadar mevcut haklarınız korunur, sonrasında planınız standart üyeliğe döner.",
    },
    {
      q: "Ücretsiz deneme süresi var mı?",
      a: "Deneme ve kampanya koşulları dönemsel olabilir. Güncel bilgi için premium sayfasını veya yardım merkezini kontrol edin.",
    },
  ],
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] transition-colors hover:border-white/20">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-white/8 px-5 pb-5 pt-4 sm:px-6">
              <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function SssPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>("genel");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return Object.values(faqData)
        .flat()
        .filter((faq) => faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query));
    }

    return faqData[activeCategory] ?? [];
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-12 pt-[140px] sm:pb-16 sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[440px] w-[440px] rounded-full bg-[#d21027] opacity-10 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <HelpCircle className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">
                Sık Sorulan Sorular
              </span>
            </div>

            <h1 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Size nasıl
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent"> yardımcı olabiliriz?</span>
            </h1>
            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              En çok merak edilen soruların yanıtlarını kategorilere ayrılmış ve aranabilir bir yapıda topladık.
            </p>

            <div className="relative mx-auto mt-8 max-w-2xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Sorunuzu arayın..."
                className="w-full rounded-[20px] border border-white/10 bg-white/[0.06] py-4 pl-12 pr-4 font-['Inter',sans-serif] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#EB5200]/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] pb-20 pt-6 sm:pt-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {!searchQuery.trim() ? (
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={
                      isActive
                        ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-4 py-2 text-sm font-semibold text-white"
                        : "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
                    }
                  >
                    {category.icon}
                    {category.label}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className="mx-auto max-w-3xl space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <FAQItem question={faq.q} answer={faq.a} />
                </motion.div>
              ))
            ) : (
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center">
                <HelpCircle className="mx-auto mb-4 h-12 w-12 text-white/25" />
                <p className="font-['Inter',sans-serif] text-sm text-white/50">
                  Aradığınız ifadeyle eşleşen bir sonuç bulunamadı.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <h2 className="mb-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">
            Hâlâ sorunuz mu var?
          </h2>
          <p className="mx-auto mb-8 max-w-md font-['Inter',sans-serif] text-sm leading-relaxed text-white/50 sm:text-base">
            Aradığınız cevabı bulamadıysanız destek ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-3.5 font-['Inter',sans-serif] text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(210,16,39,0.4)]"
            >
              İletişime Geç
            </Link>
            <Link
              href="/yardim-merkezi"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-['Inter',sans-serif] text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/20"
            >
              Yardım Merkezi
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
