import { TrendingUp, Share2 } from "lucide-react";

export function DualEarning() {
  return (
    <section className="relative bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1e1e1e] border border-[#e75f01]/30 rounded-[12px] px-4 py-2 mb-6">
            <span className="text-[#e75f01] text-[14px] font-semibold tracking-[1px] uppercase">
              Kazanç Modeli
            </span>
          </div>
          <h2 className="text-white text-[48px] md:text-[64px] font-bold mb-6 leading-tight">
            İkili{" "}
            <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
              Kazanç Sistemi
            </span>
          </h2>
          <p className="text-white/70 text-[18px] max-w-[600px] mx-auto">
            Hem reklam izleyerek hem de arkadaşlarını davet ederek kazanç elde
            et. Çift gelir kaynağıyla kazancını ikiye katla.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Direct Earning */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#e75f01]/50 rounded-[32px] p-10 overflow-hidden hover:border-[#e75f01] transition-all duration-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e75f01]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Decorative Circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#d21027]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#d21027] to-[#e75f01] rounded-[20px] flex items-center justify-center shadow-[0px_4px_24px_0px_rgba(231,95,1,0.4)]">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-white text-[36px] font-bold">
                  Doğrudan Kazanç
                </h3>
                <p className="text-white/70 text-[18px] leading-relaxed">
                  Her izlediğin reklam için anında para kazan. Günlük
                  görevleri tamamla, bonusları topla ve kazancını artır.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-[#e75f01] text-[32px] font-bold">₺5-20</p>
                  <p className="text-white/50 text-[14px]">
                    Reklam başına kazanç
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#e75f01] text-[32px] font-bold">
                    20-50
                  </p>
                  <p className="text-white/50 text-[14px]">Günlük reklam sayısı</p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Video reklam izleyerek kazan
                </li>
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Günlük görevler ve bonuslar
                </li>
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Premium ile %50 daha fazla kazan
                </li>
              </ul>
            </div>
          </div>

          {/* Affiliate Earning */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#e75f01]/50 rounded-[32px] p-10 overflow-hidden hover:border-[#e75f01] transition-all duration-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e75f01]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Decorative Circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#d21027]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#d21027] to-[#e75f01] rounded-[20px] flex items-center justify-center shadow-[0px_4px_24px_0px_rgba(231,95,1,0.4)]">
                <Share2 className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-white text-[36px] font-bold">
                  Affiliate Kazancı
                </h3>
                <p className="text-white/70 text-[18px] leading-relaxed">
                  Arkadaşlarını davet et, onların kazançlarından komisyon al.
                  Pasif gelir kaynağı oluştur ve network'ünü büyüt.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-[#e75f01] text-[32px] font-bold">%15</p>
                  <p className="text-white/50 text-[14px]">
                    Komisyon oranı
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#e75f01] text-[32px] font-bold">
                    Sınırsız
                  </p>
                  <p className="text-white/50 text-[14px]">Referans sayısı</p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Arkadaşlarının kazançlarından %15 al
                </li>
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Sınırsız referans sistemi
                </li>
                <li className="flex items-center gap-3 text-white/80 text-[16px]">
                  <div className="w-1.5 h-1.5 bg-[#e75f01] rounded-full" />
                  Ömür boyu pasif gelir kazan
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 relative bg-gradient-to-r from-[#d21027] to-[#e75f01] rounded-[24px] p-8 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-white text-[32px] font-bold">
                İki kazanç modelini birleştir
              </h3>
              <p className="text-white/90 text-[18px]">
                Hem reklam izle hem de arkadaşlarını davet et. Kazancını maksimize et.
              </p>
            </div>
            <button className="shrink-0 bg-white text-[#d21027] px-8 py-4 rounded-[16px] text-[18px] font-semibold hover:bg-white/90 transition-all shadow-[0px_4px_24px_0px_rgba(0,0,0,0.2)]">
              Hemen Başla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
