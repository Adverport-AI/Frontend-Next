"use client";

import { Download, Eye, Wallet } from "lucide-react";
import { openGooglePlayStore } from "./StoreButtons";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Uygulamayı İndir",
      description:
        "App Store veya Google Play'den Adverport'u indir ve hesap oluştur.",
    },
    {
      number: "02",
      icon: Eye,
      title: "Reklam İzle",
      description:
        "Günlük reklam görevlerini tamamla ve anında kazanç elde et.",
    },
    {
      number: "03",
      icon: Wallet,
      title: "Para Kazan",
      description:
        "Kazandığın parayı banka hesabına veya dijital cüzdana çek.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#d21027]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e75f01]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#1e1e1e] border border-[#e75f01]/30 rounded-[12px] px-4 py-2 mb-6">
            <span className="text-[#e75f01] text-[14px] font-semibold tracking-[1px] uppercase">
              Nasıl Çalışır
            </span>
          </div>
          <h2 className="text-white text-[48px] md:text-[64px] font-bold mb-6 leading-tight">
            3 Adımda{" "}
            <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
              Kazanmaya Başla
            </span>
          </h2>
          <p className="text-white/70 text-[18px] max-w-[600px] mx-auto">
            Birkaç dakika içinde para kazanmaya başla. Karmaşık süreçler yok,
            sadece basit adımlar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line - Hidden on mobile, shown on md+ */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[60px] left-[calc(50%+40px)] w-[calc(100%+32px)] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-[#e75f01] via-[#e75f01]/50 to-transparent" />
                  </div>
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#d21027] to-[#e75f01] rounded-full flex items-center justify-center shadow-[0px_4px_24px_0px_rgba(231,95,1,0.4)] z-20">
                    <span className="text-white text-[20px] font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative w-32 h-32 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#e75f01]/30 rounded-[24px] flex items-center justify-center mb-6 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.5)]">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e75f01]/20 to-transparent rounded-[24px]" />
                    <Icon className="relative z-10 w-12 h-12 text-[#e75f01]" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-white text-[28px] font-bold">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-[16px] leading-relaxed max-w-[280px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button type="button" onClick={openGooglePlayStore} className="bg-gradient-to-r from-[#d21027] to-[#e75f01] text-white px-10 py-4 rounded-[16px] text-[18px] font-semibold shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] hover:shadow-[0px_6px_24px_8px_rgba(185,5,5,0.5)] transition-all">
            Hemen Başla
          </button>
        </div>
      </div>
    </section>
  );
}
