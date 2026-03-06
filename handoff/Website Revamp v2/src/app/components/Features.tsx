import { Smartphone, DollarSign, Users, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Kolay Kullanım",
      description:
        "Sadece uygulamayı aç, reklam izle ve para kazan. Herhangi bir uzmanlık gerektirmez.",
    },
    {
      icon: DollarSign,
      title: "Günlük Kazanç",
      description:
        "Her gün yeni reklam fırsatları. İzlediğin her reklam için anında kazanç elde et.",
    },
    {
      icon: Users,
      title: "Affiliate Sistemi",
      description:
        "Arkadaşlarını davet et, onların kazançlarından da komisyon al. Pasif gelir kaynağı oluştur.",
    },
    {
      icon: Zap,
      title: "Hızlı Ödemeler",
      description:
        "Kazandığın parayı hızlıca çek. Minimum tutara ulaştığında anında ödeme al.",
    },
  ];

  return (
    <section id="features" className="relative bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1e1e1e] border border-[#e75f01]/30 rounded-[12px] px-4 py-2 mb-6">
            <span className="text-[#e75f01] text-[14px] font-semibold tracking-[1px] uppercase">
              Özellikler
            </span>
          </div>
          <h2 className="text-white text-[48px] md:text-[64px] font-bold mb-6 leading-tight">
            Neden{" "}
            <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
              Adverport?
            </span>
          </h2>
          <p className="text-white/70 text-[18px] max-w-[600px] mx-auto">
            Telefonundan para kazanmanın en kolay yolu. Premium özelliklerle
            kazancını artır.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-[24px] p-8 hover:border-[#e75f01]/50 transition-all duration-300 hover:shadow-[0px_4px_24px_0px_rgba(231,95,1,0.2)]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e75f01]/5 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d21027] to-[#e75f01] rounded-[16px] flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(231,95,1,0.3)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-white text-[24px] font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-[16px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
