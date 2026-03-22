"use client";

import { motion } from "motion/react";
import { Search, Share2, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Markaları Keşfet",
    description:
      "Uygulamamızı indir, 500+ marka arasından favorilerini seç ve kampanyalara göz at. Popüler markalardan özel fırsatları kaçırma.",
    icon: Search,
    accent: "#EB5200",
    image: "/assets/e9743813bc71b7f26409fdea7c09386f65d27337.png",
  },
  {
    number: "02",
    title: "Paylaş & Kazan",
    description:
      "Sosyal medyanda veya blogunda ürün bağlantılarını paylaş. Her tıklama ve satıştan komisyon kazanmaya hemen başla.",
    icon: Share2,
    accent: "#d21027",
    image: "/assets/b1b3aa23b52c924d9b5738cd6d40a984871f25c2.png",
  },
  {
    number: "03",
    title: "Kazancını Takip Et",
    description:
      "Gerçek zamanlı raporlama ile kazançlarını, aktif linklerini ve komisyon oranlarını takip et. Kazancını istediğin zaman çek.",
    icon: Wallet,
    accent: "#FFBA6F",
    image: "/assets/9905825d6583043e11230f20bb1a2764f0b71007.png",
  },
];

export default function HowItWorksShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#d21027] opacity-[0.05] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[#EB5200] opacity-[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          className="mb-16 text-center sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d21027]/30 bg-[#d21027]/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d21027]" />
            <span className="text-xs font-medium tracking-wide text-[#ff8c8c] sm:text-sm">3 ADIMDA KAZANMAYA BASLA</span>
          </div>
          <h2 className="mb-4 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Nasil <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Calisir</span>?
          </h2>
          <p className="mx-auto max-w-xl font-['Inter',sans-serif] text-sm text-white/50 sm:text-base">
            Adverport ile affiliate gelir elde etmek cok basit. Uygulamayi indir ve hemen basla.
          </p>
        </motion.div>

        <div className="flex flex-col gap-28 sm:gap-36">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const reversed = index % 2 !== 0;

            return (
              <motion.div
                key={step.number}
                className={`flex flex-col rounded-3xl border border-[#d21027]/20 bg-gradient-to-br from-[#d21027]/10 to-[#EB5200]/5 p-8 md:gap-8 md:p-12 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="relative w-[280px] flex-shrink-0 self-center sm:w-[340px] md:w-[420px] lg:w-[460px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[80px]"
                    style={{ background: `radial-gradient(circle, ${step.accent}, transparent 70%)` }}
                  />
                  <img src={step.image} alt={step.title} className="relative h-auto w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]" draggable={false} />
                </motion.div>

                <div className={`flex-1 text-center ${reversed ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >
                    <span
                      className="block select-none font-['Inter',sans-serif] text-6xl font-bold opacity-[0.08] sm:text-7xl md:text-8xl"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent}, #d21027)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.number}
                    </span>

                    <div className={`mb-4 mt-2 flex items-center gap-3 ${reversed ? "justify-center md:justify-end" : "justify-center md:justify-start"}`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `linear-gradient(135deg, ${step.accent}, #d21027)` }}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-['Inter',sans-serif] text-xs font-bold tracking-widest" style={{ color: step.accent }}>
                        ADIM {step.number}
                      </span>
                    </div>

                    <h3 className="mb-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                      {step.title}
                    </h3>

                    <p className={`mx-auto max-w-md font-['Inter',sans-serif] text-sm leading-relaxed text-white/50 sm:text-base ${reversed ? "md:ml-auto md:mr-0" : "md:mx-0"}`}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
