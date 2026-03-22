"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Crown, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Sinirsiz Kampanya",
    description: "Tum kampanyalara limitsiz katil",
  },
  {
    icon: TrendingUp,
    title: "Yuksek Komisyon",
    description: "Daha yuksek komisyon oranlari kazan",
  },
  {
    icon: Shield,
    title: "Oncelikli Destek",
    description: "Premium kullanicilara ozel destek hatti",
  },
  {
    icon: Sparkles,
    title: "Ozel Kampanyalar",
    description: "Sadece Premium uyelere acik firsatlar",
  },
];

export default function PremiumTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d21027] opacity-[0.07] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#EB5200] opacity-[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#d21027]/20 bg-gradient-to-br from-[#d21027]/10 to-[#EB5200]/5 px-6 py-12 sm:px-10 sm:py-16 md:px-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 text-center sm:mb-14">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d21027]/30 bg-gradient-to-r from-[#d21027]/20 to-[#EB5200]/20 px-4 py-1.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Crown className="h-4 w-4 text-[#FF8C42]" />
              <span className="text-xs font-semibold tracking-wide text-[#FF8C42] sm:text-sm">PREMIUM</span>
            </motion.div>

            <h2 className="mb-4 font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Kazancini <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">Maksimize Et</span>
            </h2>
            <p className="mx-auto max-w-lg font-['Inter',sans-serif] text-sm leading-relaxed text-white/50 sm:text-base">
              Premium uyelikle tum sinirlari kaldir, ozel avantajlardan yararlan ve gelirini katlayarak artir.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-14 sm:grid-cols-2 sm:gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition-colors hover:border-[#d21027]/30 sm:p-5"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d21027] to-[#EB5200] transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                    <p className="font-['Inter',sans-serif] text-xs text-white/40 sm:text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/premium"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d21027] to-[#EB5200] px-8 py-3.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(210,16,39,0.4)] sm:px-10 sm:py-4 sm:text-base"
            >
              <span>Premium Planlari Incele</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 font-['Inter',sans-serif] text-xs text-white/30">Ucretsiz plan ile de baslayabilirsin</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
