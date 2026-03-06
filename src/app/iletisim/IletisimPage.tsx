"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-posta",
    description: "Destek ekibimize e-posta gönderin",
    value: "destek@adverport.com",
    action: "mailto:destek@adverport.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefon",
    description: "Hafta içi 09:00 - 18:00",
    value: "+90 (212) 555 0123",
    action: "tel:+902125550123",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Canlı Destek",
    description: "7/24 canlı destek hattı",
    value: "Hemen Başla",
    action: "#",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Ofis",
    description: "Ziyaret etmek isterseniz",
    value: "Levent, İstanbul",
    action: "#",
  },
];

const faqItems = [
  {
    q: "Hesabımı nasıl silebilirim?",
    a: "Ayarlar > Hesap bölümünden hesap silme talebinde bulunabilirsiniz. Talebiniz 7 iş günü içinde işleme alınır.",
  },
  {
    q: "Ödemem gecikti, ne yapmalıyım?",
    a: "Ödeme gecikmeleri nadiren yaşanır. destek@adverport.com adresine yazarak detaylı bilgi alabilirsiniz.",
  },
  {
    q: "Marka başvurusu nasıl yapabilirim?",
    a: "Marka olarak platforma katılmak için İş Ortaklığı formunu doldurmanız yeterlidir. Ekibimiz 48 saat içinde size dönüş yapar.",
  },
  {
    q: "Premium üyeliği nasıl iptal ederim?",
    a: "Ayarlar > Abonelik bölümünden Premium üyeliğinizi istediğiniz zaman iptal edebilirsiniz.",
  },
];

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "genel",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar activePage="iletisim" />

      {/* Hero */}
      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#d21027] opacity-10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#EB5200] opacity-[0.08] blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#FFBA6F]" />
                İletişim
              </span>
            </div>
            <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Bize{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Ulaşın
              </span>
            </h1>
            <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşın. En kısa sürede dönüş yapalım.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-[#0a0a0a] py-12 sm:py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#d21027]/40 transition-all group block"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-base mb-1">{method.title}</h3>
                <p className="font-['Inter',sans-serif] text-white/40 text-xs mb-3">{method.description}</p>
                <p className="font-['Inter',sans-serif] text-[#FFBA6F] text-sm font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-black py-16 sm:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-2">
                Mesaj{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                  Gönderin
                </span>
              </h2>
              <p className="font-['Inter',sans-serif] text-white/50 text-sm mb-8">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-[#d21027]/10 to-[#EB5200]/5 border border-[#d21027]/20 rounded-3xl p-10 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#EB5200] mx-auto mb-4" />
                  <h3 className="font-['Inter',sans-serif] text-white text-xl font-bold mb-2">Mesajınız Alındı!</h3>
                  <p className="font-['Inter',sans-serif] text-white/60 text-sm mb-6">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "genel", message: "" });
                    }}
                    className="text-[#EB5200] hover:text-[#FFBA6F] font-medium text-sm font-['Inter',sans-serif]"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-['Inter',sans-serif] text-white/70 text-sm mb-2 block">Ad Soyad</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="font-['Inter',sans-serif] text-white/70 text-sm mb-2 block">E-posta</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-['Inter',sans-serif] text-white/70 text-sm mb-2 block">Konu</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm appearance-none"
                    >
                      <option value="genel" className="bg-[#1a1a1a]">Genel Soru</option>
                      <option value="teknik" className="bg-[#1a1a1a]">Teknik Destek</option>
                      <option value="odeme" className="bg-[#1a1a1a]">Ödeme Sorunları</option>
                      <option value="isbirligi" className="bg-[#1a1a1a]">İş Birliği Talebi</option>
                      <option value="oneri" className="bg-[#1a1a1a]">Öneri & Geri Bildirim</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-['Inter',sans-serif] text-white/70 text-sm mb-2 block">Mesajınız</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif] inline-flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Gönder
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-[#d21027]/10 to-[#EB5200]/5 border border-[#d21027]/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#EB5200]" />
                  <h3 className="font-['Inter',sans-serif] text-white font-bold text-base">Yanıt Süreleri</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-white/60 text-sm">E-posta</span>
                    <span className="font-['Inter',sans-serif] text-white text-sm font-medium">24 saat içinde</span>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-white/60 text-sm">Canlı Destek</span>
                    <span className="font-['Inter',sans-serif] text-white text-sm font-medium">Anında</span>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-white/60 text-sm">Telefon</span>
                    <span className="font-['Inter',sans-serif] text-white text-sm font-medium">Hafta içi</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-base mb-4">Bizi Takip Edin</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-white/60 text-sm font-medium hover:border-[#d21027]/40 hover:text-white transition-all font-['Inter',sans-serif]"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-base mb-2">İş Ortaklığı</h3>
                <p className="font-['Inter',sans-serif] text-white/50 text-sm mb-4">
                  Markanızı platformumuza eklemek mi istiyorsunuz?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[#EB5200] hover:text-[#FFBA6F] text-sm font-medium transition-colors font-['Inter',sans-serif]"
                >
                  Marka Başvurusu Yap <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#d21027] opacity-5 blur-[120px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-3">
              Hızlı{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                Yanıtlar
              </span>
            </h2>
            <p className="font-['Inter',sans-serif] text-white/60 text-sm">En sık sorulan sorular ve cevapları</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-['Inter',sans-serif] text-white font-semibold text-base pr-6">{faq.q}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-[#EB5200] flex-shrink-0 transition-transform ${openFaq === index ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 sm:px-8 pb-5">
                    <p className="font-['Inter',sans-serif] text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="bg-black py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto min-h-[300px] bg-gradient-to-br from-[#d21027]/10 to-[#EB5200]/5 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#EB5200] animate-pulse" />
                  <div
                    className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-[#d21027] animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#FFBA6F] animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-[#EB5200] animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-[#EB5200] mx-auto mb-3" />
                  <p className="font-['Inter',sans-serif] text-white font-bold text-lg">Adverport HQ</p>
                  <p className="font-['Inter',sans-serif] text-white/50 text-sm">Levent, İstanbul</p>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-xl mb-6">Ofis Adresimiz</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#EB5200] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Inter',sans-serif] text-white text-sm">Levent Mah. Cömert Sok. No:12</p>
                      <p className="font-['Inter',sans-serif] text-white/50 text-sm">Beşiktaş, İstanbul 34340</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#EB5200] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Inter',sans-serif] text-white text-sm">Pazartesi - Cuma</p>
                      <p className="font-['Inter',sans-serif] text-white/50 text-sm">09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#EB5200] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Inter',sans-serif] text-white text-sm">destek@adverport.com</p>
                      <p className="font-['Inter',sans-serif] text-white/50 text-sm">isbirligi@adverport.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
