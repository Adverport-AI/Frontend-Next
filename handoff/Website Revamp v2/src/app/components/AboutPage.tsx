import { motion } from 'motion/react';
import { Target, Eye, Users, Rocket, Heart, Shield, TrendingUp, Award } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Partner Marka' },
  { value: '1M+', label: 'Aktif Kullanıcı' },
  { value: '50M+', label: 'Paylaşılan Link' },
  { value: '₺10M+', label: 'Dağıtılan Komisyon' },
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Kullanıcı Odaklı',
    description: 'Her kararımızda kullanıcılarımızın deneyimini ön planda tutuyoruz.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Güvenilirlik',
    description: 'Şeffaf komisyon sistemi ve zamanında ödeme garantisi sunuyoruz.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Sürekli Gelişim',
    description: 'Teknolojiyi ve kullanıcı geri bildirimlerini takip ederek sürekli iyileşiyoruz.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Kalite',
    description: 'Yalnızca güvenilir ve kaliteli markalarla iş birliği yapıyoruz.',
  },
];

const milestones = [
  { year: '2023', title: 'Kuruluş', description: 'Adverport fikri doğdu ve ilk ekip bir araya geldi.' },
  { year: '2024', title: 'Beta Lansmanı', description: 'İlk 50 marka ve 10.000 kullanıcıyla beta sürümü yayınlandı.' },
  { year: '2025', title: 'Büyüme', description: '500+ marka, 1 milyon kullanıcıya ulaşıldı. Premium abonelik başlatıldı.' },
  { year: '2026', title: 'Genişleme', description: 'Uluslararası pazarlara açılma ve yeni özelliklerle büyüme devam ediyor.' },
];

const teamMembers = [
  { name: 'Ahmet Yılmaz', role: 'Kurucu & CEO', initials: 'AY' },
  { name: 'Elif Demir', role: 'CTO', initials: 'ED' },
  { name: 'Mehmet Kaya', role: 'Ürün Müdürü', initials: 'MK' },
  { name: 'Zeynep Arslan', role: 'Pazarlama Direktörü', initials: 'ZA' },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 md:pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-[#FF6B00]/20 to-[#E74C3C]/20 border border-[#FF6B00]/30 text-[#FF8C42] px-4 py-1.5 rounded-full text-sm mb-6">
            Hakkımızda
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Alışverişi Kazanca Dönüştürüyoruz
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Adverport, kullanıcıların sevdikleri ürünlerin linklerini paylaşarak kazanç elde etmesini sağlayan
            yenilikçi bir affiliate pazarlama platformudur.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#E74C3C] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-white/50 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00]/20 to-[#E74C3C]/20 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#FF8C42]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-white/60 leading-relaxed">
              Herkesin dijital dünyada kolayca gelir elde edebileceği, şeffaf ve güvenilir bir platform sunmak.
              Kullanıcılarımızın günlük alışveriş alışkanlıklarını sürdürülebilir bir kazanç kaynağına dönüştürmelerine
              yardımcı oluyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00]/20 to-[#E74C3C]/20 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-[#FF8C42]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-white/60 leading-relaxed">
              Türkiye'nin ve bölgenin en büyük affiliate pazarlama ekosistemini oluşturmak. İçerik üreticileri,
              markalar ve tüketicileri bir araya getirerek herkes için değer yaratan bir platform olmayı hedefliyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Değerlerimiz
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-[#FF6B00]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#E74C3C]/20 flex items-center justify-center mb-4 text-[#FF8C42]">
                {value.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{value.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Yolculuğumuz
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00]/50 via-[#E74C3C]/50 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <span className="text-[#FF8C42] font-bold text-lg">{m.year}</span>
                    <h3 className="text-white font-semibold text-xl mt-1">{m.title}</h3>
                    <p className="text-white/50 text-sm mt-2">{m.description}</p>
                  </div>
                  <div className="absolute left-0 md:relative w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E74C3C] flex items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-black" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Ekibimiz
        </motion.h2>
        <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
          Tutkulu ve deneyimli ekibimizle affiliate pazarlama dünyasını dönüştürüyoruz.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center hover:border-[#FF6B00]/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E74C3C] mx-auto flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{member.initials}</span>
              </div>
              <h3 className="text-white font-semibold">{member.name}</h3>
              <p className="text-white/50 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-[#FF8C42]" />
              <Users className="w-6 h-6 text-[#E74C3C]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bize Katılın</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">
              Adverport ailesinin bir parçası olun ve alışveriş deneyiminizi kazanca dönüştürmeye başlayın.
            </p>
            <button
              onClick={() => {
                const ua = navigator.userAgent || navigator.vendor;
                if (/iPad|iPhone|iPod/.test(ua)) {
                  window.open('https://apps.apple.com/app/adverport', '_blank');
                } else if (/android/i.test(ua)) {
                  window.open('https://play.google.com/store/apps/details?id=com.adverport', '_blank');
                } else {
                  window.open('https://apps.apple.com/app/adverport', '_blank');
                }
              }}
              className="bg-gradient-to-r from-[#FF6B00] to-[#E74C3C] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all"
            >
              Ücretsiz Başla
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
