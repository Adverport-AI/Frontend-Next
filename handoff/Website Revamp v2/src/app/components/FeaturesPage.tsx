import { motion } from 'motion/react';
import {
  TrendingUp, Users, Zap, Shield, BarChart3, Link2, Smartphone,
  Globe, Bell, CreditCard, Lock, Layers, ArrowRight, CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const mainFeatures = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Kolay Kazanç Sistemi',
    description: 'Affiliate bağlantılarınızı paylaşın ve her satıştan komisyon kazanın. Minimum efor, maksimum gelir potansiyeli ile pasif gelir elde edin.',
    highlights: ['Her satıştan %5-20 komisyon', 'Otomatik komisyon takibi', 'Anlık kazanç bildirimleri'],
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Geniş Marka Ağı',
    description: 'Türkiye\'nin ve dünyanın önde gelen markalarıyla çalışın. 500+ marka seçeneği ile istediğiniz ürünü tanıtın.',
    highlights: ['500+ partner marka', '8 farklı kategori', 'Sürekli büyüyen ağ'],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Anlık İstatistikler',
    description: 'Gerçek zamanlı raporlama ile kazançlarınızı, tıklama oranlarınızı ve performansınızı detaylı takip edin.',
    highlights: ['Gerçek zamanlı dashboard', 'Detaylı performans analizi', 'Dönüşüm oranı takibi'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Güvenli Ödeme',
    description: 'Kazançlarınız güvende. Hızlı ve güvenilir ödeme sistemi ile paranıza anında ulaşın.',
    highlights: ['Banka havalesi & Papara', 'Aylık düzenli ödeme', '256-bit SSL güvenlik'],
  },
];

const additionalFeatures = [
  { icon: <Link2 className="w-6 h-6" />, title: 'Özel Link Oluşturma', description: 'Kendi özel affiliate bağlantılarınızı saniyeler içinde oluşturun.' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Mobil Uygulama', description: 'iOS ve Android uygulamalarıyla her yerden kazancınızı takip edin.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Sosyal Medya Entegrasyonu', description: 'Instagram, TikTok ve YouTube ile sorunsuz entegrasyon.' },
  { icon: <Bell className="w-6 h-6" />, title: 'Anlık Bildirimler', description: 'Satış, tıklama ve yeni kampanya bildirimlerini anında alın.' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Nakit İade', description: 'Kendi alışverişlerinizden de nakit iade kazanın.' },
  { icon: <Lock className="w-6 h-6" />, title: 'Güvenli Altyapı', description: 'Verileriniz end-to-end şifreleme ile korunur.' },
  { icon: <Layers className="w-6 h-6" />, title: 'Koleksiyon Paylaşımı', description: 'Favori ürünlerinizi koleksiyonlar halinde paylaşın.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Hızlı Entegrasyon', description: 'Dakikalar içinde başlayın, teknik bilgi gerektirmez.' },
];

const comparisonData = [
  { feature: 'Affiliate Link Oluşturma', free: true, premium: true },
  { feature: 'Temel İstatistikler', free: true, premium: true },
  { feature: 'Mobil Uygulama Erişimi', free: true, premium: true },
  { feature: 'Sınırsız Kampanya Katılımı', free: false, premium: true },
  { feature: 'Gelişmiş Analitik', free: false, premium: true },
  { feature: 'Premium Kampanyalar', free: false, premium: true },
  { feature: 'Yüksek Komisyon Oranları', free: false, premium: true },
  { feature: 'Öncelikli Destek', free: false, premium: true },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#d21027] opacity-10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#EB5200] opacity-8 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-white font-semibold text-sm sm:text-base">Platform Özellikleri</span>
            </div>

            <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Kazanç İçin Gereken{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Her Şey</span>
            </h1>

            <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Güçlü araçlar, detaylı analizler ve güvenli ödeme sistemi ile affiliate pazarlamanın keyfini çıkar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-16 sm:space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-2xl flex items-center justify-center mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-4">{feature.title}</h2>
                  <p className="font-['Inter',sans-serif] text-white/60 text-base leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#EB5200] flex-shrink-0" />
                        <span className="font-['Inter',sans-serif] text-white/80 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 aspect-[4/3] flex items-center justify-center relative overflow-hidden group hover:border-[#d21027]/30 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d21027]/5 to-[#EB5200]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/20 rounded-3xl flex items-center justify-center mx-auto mb-4 text-white/40 group-hover:text-white/60 transition-colors">
                        {feature.icon}
                      </div>
                      <p className="font-['Inter',sans-serif] text-white/20 text-sm group-hover:text-white/30 transition-colors">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="bg-black py-16 sm:py-24 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EB5200] opacity-5 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Daha Fazla <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Özellik</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base max-w-xl mx-auto">
              Kazancını artırmak için ihtiyacın olan tüm araçlar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#d21027]/40 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/20 rounded-xl flex items-center justify-center mb-4 text-[#EB5200] group-hover:from-[#d21027] group-hover:to-[#EB5200] group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="font-['Inter',sans-serif] text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#d21027] opacity-5 blur-[120px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Karşılaştırması</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base">Ücretsiz ve Premium arasındaki farkları görün</p>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 sm:px-8 py-5 border-b border-white/10 bg-white/[0.03]">
              <div className="font-['Inter',sans-serif] text-white/60 text-sm font-medium">Özellik</div>
              <div className="font-['Inter',sans-serif] text-white/60 text-sm font-medium text-center">Ücretsiz</div>
              <div className="font-['Inter',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] text-sm font-bold text-center">Premium</div>
            </div>

            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 sm:px-8 py-4 ${index < comparisonData.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="font-['Inter',sans-serif] text-white text-sm">{row.feature}</div>
                <div className="text-center">
                  {row.free ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  ) : (
                    <span className="text-white/20">—</span>
                  )}
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-5 h-5 text-[#EB5200] mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tüm Özellikleri{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Keşfet</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Ücretsiz hesap oluştur ve platformun tüm gücünü deneyimle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif] flex items-center justify-center gap-2">
              Ücretsiz Başla
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
