"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { CtaSection } from "../components/CtaSection";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-posta",
    description: "Destek ekibimize e-posta gönderin",
    value: "destek@adverport.com",
    href: "mailto:destek@adverport.com",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Yardım Merkezi",
    description: "Sık sorulan konular için hızlı erişim",
    value: "Yardım içeriklerini görüntüle",
    href: "/yardim-merkezi",
  },
  {
    icon: <Send className="h-6 w-6" />,
    title: "Mesaj",
    description: "Formumuzu doldurun",
    value: "Mesaj gönderin",
    href: "#mesaj-formu",
  },
] as const;

const faqItems = [
  {
    q: "Hesabımı nasıl silebilirim?",
    a: "Ayarlar > Hesap bölümünden hesap silme talebinde bulunabilirsiniz. Bekleyen ödeme ve doğrulama süreçleriniz tamamlandıktan sonra talebiniz işleme alınır.",
  },
  {
    q: "Ödemem gecikti, ne yapmalıyım?",
    a: "Ödeme durumunuzu yardım merkezi veya destek ekibimiz üzerinden paylaşın. Ekibimiz ilgili ödeme dönemini kontrol ederek size dönüş yapar.",
  },
  {
    q: "Marka başvurusu nasıl yapabilirim?",
    a: "Marka iş birlikleri için iletişim formunu doldurabilir ya da isbirligi@adverport.com adresine kısa bir tanıtım gönderebilirsiniz.",
  },
  {
    q: "Premium üyeliği nasıl iptal ederim?",
    a: "Aktif aboneliğinizi uygulama içi hesap ayarlarından yönetebilirsiniz. İptal sonrası mevcut dönem sonuna kadar premium haklarınız korunur.",
  },
] as const;

function QuickFaqItem({
  answer,
  isOpen,
  onToggle,
  question,
}: {
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent transition-colors hover:border-[#d21027]/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <span className="font-['Inter',sans-serif] text-base font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#EB5200]"
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
            <div className="border-t border-white/8 px-6 pb-5 pt-4 sm:px-8">
              <p className="font-['Inter',sans-serif] text-sm leading-relaxed text-white/60">{answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function IletisimPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <Navbar activePage="iletisim" />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pb-20 sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-[#d21027] opacity-10 blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <Headphones className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">İletişim</span>
            </div>

            <h1 className="mb-5 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Bize{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                ulaşın
              </span>
            </h1>

            <p className="mx-auto max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/60 sm:text-lg">
              Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşın. En kısa sürede dönüş yapalım.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-[#0a0a0a] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {contactMethods.map((method, index) => {
              if (method.href.startsWith("/")) {
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative"
                  >
                    <Link href={method.href} className="absolute inset-0 z-10 rounded-2xl" aria-label={method.title} />
                    <div className="rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white transition-transform group-hover:scale-105">
                        {method.icon}
                      </div>
                      <h2 className="font-['Inter',sans-serif] text-base font-bold text-white">{method.title}</h2>
                      <p className="mt-1 font-['Inter',sans-serif] text-xs text-white/45">{method.description}</p>
                      <p className="mt-3 font-['Inter',sans-serif] text-sm font-medium text-[#FFBA6F]">{method.value}</p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative block rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition-colors hover:border-[#d21027]/40"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-colors group-hover:border-[#d21027]/40" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200] text-white transition-transform group-hover:scale-105">
                      {method.icon}
                    </div>
                    <h2 className="font-['Inter',sans-serif] text-base font-bold text-white">{method.title}</h2>
                    <p className="mt-1 font-['Inter',sans-serif] text-xs text-white/45">{method.description}</p>
                    <p className="mt-3 font-['Inter',sans-serif] text-sm font-medium text-[#FFBA6F]">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ofis" className="border-b border-white/5 bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[350px] sm:h-[420px] lg:min-h-[460px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.749!2d29.1172!3d40.9923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b07b5c6d%3A0x0!2zQXRhdMO8cmsgTWFoLiBFcnR1xJ9ydWwgR2F6aSBTay4gQXRhxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adverport ofis konumu"
                  className="absolute inset-0 h-full w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/35" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">Ofis adresimiz</h2>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-xs text-white/40">Adres</p>
                      <p className="mt-1 font-['Inter',sans-serif] text-sm text-white">Atatürk Mahallesi Ertuğrul Gazi Sk.</p>
                      <p className="font-['Inter',sans-serif] text-sm text-white">A Blok Apt. No: 2 E</p>
                      <p className="font-['Inter',sans-serif] text-sm text-white/55">Ataşehir / İstanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-xs text-white/40">Çalışma Saatleri</p>
                      <p className="mt-1 font-['Inter',sans-serif] text-sm text-white">Pazartesi - Cuma</p>
                      <p className="font-['Inter',sans-serif] text-sm text-white/55">09:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200]">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-xs text-white/40">E-posta</p>
                      <p className="mt-1 font-['Inter',sans-serif] text-sm text-white">destek@adverport.com</p>
                      <p className="font-['Inter',sans-serif] text-sm text-white/55">isbirligi@adverport.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mesaj-formu" className="relative bg-[#0a0a0a] py-16 sm:py-24">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-5 blur-[150px]" />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <div className="text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">
              Mesaj{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                gönderin
              </span>
            </h2>
            <p className="mb-8 mt-2 font-['Inter',sans-serif] text-sm text-white/50">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 text-left sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-16 sm:py-24">
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#d21027] opacity-5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl">
              Hızlı{" "}
              <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">yanıtlar</span>
            </h2>
            <p className="mt-3 font-['Inter',sans-serif] text-sm text-white/60">
              En sık sorulan iletişim ve destek konularını burada topladık.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <QuickFaqItem
                key={faq.q}
                answer={faq.a}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                question={faq.q}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Desteğe Ulaştın,"
        highlight="Şimdi Uygulamayı Dene"
        description="Adverport deneyimini doğrudan cihazında görmek için store’dan indir ve akışı içeriden keşfet."
      />

      <Footer />
    </div>
  );
}
