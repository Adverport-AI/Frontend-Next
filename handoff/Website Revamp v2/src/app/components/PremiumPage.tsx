import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ArrowRight, Zap, Crown, Shield, TrendingUp, Gift, Users, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Ücretsiz',
    subtitle: 'Başlamak için ideal',
    price: '₺0',
    period: '/ay',
    badge: 'ÜCRETSİZ',
    badgeClass: 'bg-gradient-to-r from-white/30 to-white/20',
    cardClass: 'bg-gradient-to-br from-white/10 to-white/5 border-white/20',
    features: [
      '15 Kampanya Katılım Sınırı',
      '250 TL Alt Çekim Limiti',
      'Anlık Analitik Bildirimler',
      'Temel Dashboard',
      'Standart Komisyon Oranları',
      'E-posta Desteği',
    ],
    cta: 'Ücretsiz Başla',
    ctaClass: 'bg-white/20 border border-white/30 text-white hover:bg-white/30',
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Kazancını maksimize et',
    price: '₺99.99',
    period: '/ay',
    badge: 'EN POPÜLER',
    badgeClass: 'bg-gradient-to-r from-[#d21027] to-[#EB5200]',
    cardClass: 'bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 border-[#d21027]/30',
    features: [
      'Kampanyalara Sınırsız Katılım',
      'Alt Limitsiz Çekim',
      'Anlık Analitik Bildirimler',
      'Premium Kampanyalar',
      'Daha Yüksek Komisyon Oranları',
      'Kendine Özel Link Oluşturma',
      'Öncelikli Destek',
      'Gelişmiş Analitik Dashboard',
    ],
    cta: "Premium'a Geç",
    ctaClass: 'bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white hover:shadow-[0_0_30px_rgba(210,16,39,0.5)]',
  },
  {
    id: 'enterprise',
    name: 'Kurumsal',
    subtitle: 'Ekipler ve ajanslar için',
    price: 'Özel',
    period: 'fiyat',
    badge: 'KURUMSAL',
    badgeClass: 'bg-gradient-to-r from-[#FFBA6F] to-[#EB5200]',
    cardClass: 'bg-gradient-to-br from-[#EB5200]/15 to-[#FFBA6F]/5 border-[#EB5200]/20',
    features: [
      'Premium Tüm Özellikler',
      'Çoklu Kullanıcı Yönetimi',
      'API Erişimi',
      'Özel Komisyon Oranları',
      'Dedicated Account Manager',
      'Özel Raporlama',
      'Beyaz Etiket Çözümleri',
      'SLA Garantisi',
    ],
    cta: 'İletişime Geç',
    ctaClass: 'bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] text-white hover:shadow-[0_0_30px_rgba(235,82,0,0.5)]',
  },
];

const benefits = [
  { icon: <Crown className="w-7 h-7" />, title: 'Premium Kampanyalar', description: 'Sadece premium üyelere özel, yüksek komisyonlu kampanyalara erişim.' },
  { icon: <TrendingUp className="w-7 h-7" />, title: 'Yüksek Komisyon', description: 'Standart oranların üzerinde %25\'e kadar daha yüksek komisyon kazan.' },
  { icon: <Shield className="w-7 h-7" />, title: 'Öncelikli Destek', description: '7/24 canlı destek ile sorunlarına anında çözüm bul.' },
  { icon: <Gift className="w-7 h-7" />, title: 'Alt Limitsiz Çekim', description: 'Minimum çekim limiti olmadan kazancını istediğin zaman al.' },
  { icon: <Sparkles className="w-7 h-7" />, title: 'Özel Linkler', description: 'Kendi özelleştirilmiş affiliate bağlantılarını oluştur.' },
  { icon: <Users className="w-7 h-7" />, title: 'VIP Topluluk', description: 'Premium üyelere özel topluluk ve networking etkinlikleri.' },
];

const faqs = [
  { q: 'Premium üyeliği istediğim zaman iptal edebilir miyim?', a: 'Evet, Premium üyeliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar premium özelliklerden yararlanmaya devam edersiniz.' },
  { q: 'Ödeme yöntemleri nelerdir?', a: 'Kredi kartı, banka kartı ve Papara ile ödeme yapabilirsiniz. Tüm ödemeler 256-bit SSL ile güvence altındadır.' },
  { q: 'Premium ile ne kadar daha fazla kazanabilirim?', a: 'Premium üyelerimiz ortalama %40 daha fazla kazanç elde ediyor. Yüksek komisyon oranları ve özel kampanyalar sayesinde gelir potansiyeliniz önemli ölçüde artar.' },
  { q: 'Kurumsal plan neleri içerir?', a: 'Kurumsal plan, Premium\'un tüm özelliklerinin yanı sıra API erişimi, çoklu kullanıcı yönetimi, özel raporlama ve dedicated account manager içerir.' },
];

export default function PremiumPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d21027] opacity-10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#EB5200] opacity-8 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] px-4 py-2 mb-6">
              <span className="font-['Inter',sans-serif] text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#FFBA6F]" />
                Premium Planlar
              </span>
            </div>

            <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Kazancını{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Maksimize Et</span>
            </h1>

            <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              İhtiyacına uygun planı seç, premium özelliklerden yararlan ve kazancını artır.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`font-['Inter',sans-serif] px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly' ? 'bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Aylık
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`font-['Inter',sans-serif] px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly' ? 'bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Yıllık
                <span className="bg-[#FFBA6F]/20 text-[#FFBA6F] px-2 py-0.5 rounded-full text-xs font-bold">-20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative border-2 rounded-3xl p-6 sm:p-8 md:p-10 ${plan.cardClass} ${
                  plan.id === 'premium' ? 'lg:scale-105 lg:-my-4 shadow-[0_0_60px_rgba(210,16,39,0.15)]' : ''
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-6 right-6 ${plan.badgeClass} text-white px-3 py-1.5 rounded-full text-xs font-bold`}>
                  {plan.badge}
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="font-['Inter',sans-serif] text-white/60 text-sm">{plan.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-['Inter',sans-serif] text-4xl sm:text-5xl font-bold text-white">
                    {plan.id === 'enterprise' ? plan.price : billingCycle === 'yearly' && plan.id === 'premium' ? '₺79.99' : plan.price}
                  </span>
                  <span className="font-['Inter',sans-serif] text-white/60 text-base">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.id === 'free' ? 'text-white/40' : 'text-[#EB5200]'}`} />
                      <span className="font-['Inter',sans-serif] text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full px-6 py-3.5 rounded-full font-bold text-base transition-all font-['Inter',sans-serif] ${plan.ctaClass}`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="bg-black py-16 sm:py-24 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EB5200] opacity-5 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Premium{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Avantajları</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base max-w-xl mx-auto">
              Premium üyelikle elde edeceğin tüm ayrıcalıklar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#d21027]/40 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="font-['Inter',sans-serif] text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#0a0a0a] py-12 sm:py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '15K+', label: 'Premium Üye' },
              { value: '%40', label: 'Daha Fazla Kazanç' },
              { value: '4.9/5', label: 'Memnuniyet Puanı' },
              { value: '%98', label: 'Yenileme Oranı' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d21027] to-[#EB5200] mb-2">
                  {stat.value}
                </div>
                <div className="font-['Inter',sans-serif] text-white/60 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16 sm:py-24 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#d21027] opacity-5 blur-[120px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-3">
              Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Sorular</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-['Inter',sans-serif] text-white font-semibold text-base pr-6">{faq.q}</span>
                  <Zap className={`w-5 h-5 text-[#EB5200] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
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

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Premium ile{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Farkı Hisset</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            30 gün ücretsiz dene, memnun kalmazsan iptal et. Risk yok.
          </p>
          <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-10 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif] inline-flex items-center gap-2">
            30 Gün Ücretsiz Dene
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
