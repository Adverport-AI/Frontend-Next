"use client";

import { useState } from 'react';
import { Menu, X, ChevronDown, Star, TrendingUp, Users, Zap, Shield, Gift, Clock } from 'lucide-react';
import svgPaths from '../imports/svg-2ykxxdmmup';
import HeroSectionNew from './components/HeroSectionNew';
import { TrustedBrands } from './components/TrustedBrands';
import { ContactForm } from './components/ContactForm';

function LogoWhite() {
  return (
    <div className="h-[37.314px] w-[100px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3135">
        <g id="logo white">
          <g id="Group 2">
            <path d={svgPaths.p3e243280} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p60f7f80} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p4f87cf0} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p2fcaaa60} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p2c68200} fill="white" />
            <path d={svgPaths.pd9c8200} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p24fb9700} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3dbee080} fill="white" fillRule="evenodd" />
            <path d={svgPaths.pc074f00} fill="white" />
          </g>
          <path d={svgPaths.p383bd500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[20px] sm:top-[30px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] sm:w-[calc(100%-68px)] max-w-[1280px]">
      <div className="bg-gradient-to-r from-[#d21027] from-[40%] to-black rounded-[18px] sm:rounded-[23px] shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="scale-75 sm:scale-100 origin-left">
              <LogoWhite />
            </div>
          </div>

          {/* Desktop Menu - hidden until 800px */}
          <div className="hidden min-[800px]:flex items-center gap-8 lg:gap-12">
            <a href="#features" className="font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors">
              Özellikler
            </a>
            <a href="#how-it-works" className="font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors">
              Nasıl Çalışır
            </a>
            <a href="#premium" className="font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors">
              Premium
            </a>
            <a href="#faq" className="font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors">
              SSS
            </a>
            <a href="#contact" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">İletişim</a>
          </div>

          {/* CTA Button - hidden until 800px */}
          <div className="hidden min-[800px]:block">
            <button className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-6 py-2.5 rounded-[14px] font-semibold text-[15px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all">
              Ücretsiz Başla
            </button>
          </div>

          {/* Mobile: Button + Menu Button - visible below 800px */}
          <div className="min-[800px]:hidden flex items-center gap-3">
            <button className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-4 py-2 rounded-[14px] font-semibold text-[13px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all">
              Ücretsiz Başla
            </button>
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - visible below 800px */}
        {isMenuOpen && (
          <div className="min-[800px]:hidden mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 items-center">
              <a href="#features" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">Özellikler</a>
              <a href="#how-it-works" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">Nasıl Çalışır</a>
              <a href="#premium" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">Premium</a>
              <a href="#faq" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">SSS</a>
              <a href="#contact" className="font-['Inter',sans-serif] text-white text-[15px] font-medium">İletişim</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return <HeroSectionNew />;
}

function Features() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Kolay Kazanç',
      description: 'Affiliate bağlantılarınızı paylaşın ve her satıştan komisyon kazanın. Minimum efor, maksimum gelir.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Geniş Marka Ağı',
      description: 'Türkiye\'nin önde gelen markalarıyla çalışın. 500+ marka seçeneği ile istediğiniz ürünü tanıtın.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Anlık İstatistikler',
      description: 'Gerçek zamanlı raporlama ile kazançlarınızı, tıklama oranlarınızı ve performansınızı takip edin.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Güvenli Ödeme',
      description: 'Kazançlarınız güvende. Hızlı ve güvenilir ödeme sistemi ile paranıza anında ulaşın.'
    }
  ];

  return (
    <section id="features" className="bg-black py-16 sm:py-20 md:py-24 relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 px-4">Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">adverport</span>?</h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Affiliate pazarlamanın gücünü kullanarak pasif gelir elde etmenin en kolay yolu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#d21027]/50 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-['Inter',sans-serif] text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="font-['Inter',sans-serif] text-white/60 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Kaydol & Markaları Keşfet',
      description: 'Ücretsiz hesap oluştur, 500+ marka arasından favorilerini seç ve affiliate bağlantılarını al.'
    },
    {
      number: '02',
      title: 'Paylaş & Etkileşim Kur',
      description: 'Sosyal medyada, blogunda veya web sitende ürün bağlantılarını paylaş. Takipçilerinle etkileşime geç.'
    },
    {
      number: '03',
      title: 'Kazan & Büyüt',
      description: 'Her satıştan komisyon kazan. Performansını analiz et, stratejini geliştir ve gelirini artır.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#d21027] opacity-5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#EB5200] opacity-5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 px-4">
            Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Çalışır</span>?
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-4">
            3 basit adımda gelir elde etmeye başla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#d21027] to-transparent" />
              )}
              
              <div className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#d21027]/50 transition-all">
                <div className="font-['Inter',sans-serif] text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#d21027] to-[#EB5200] mb-4 sm:mb-6 opacity-50">
                  {step.number}
                </div>
                <h3 className="font-['Inter',sans-serif] text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="font-['Inter',sans-serif] text-white/60 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DualEarningModel() {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 relative">
      <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#d21027] opacity-10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 px-4">
            İkili <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kazanç Modeli</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-4">Hem satışlardan hem de alışverişlerden para kazan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Affiliate Earnings */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-[#d21027]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d21027] opacity-20 blur-[60px] rounded-full group-hover:opacity-30 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter',sans-serif] text-lg sm:text-xl font-bold text-white mb-4">Satış Komisyonu</h3>
              <p className="font-['Inter',sans-serif] text-white/60 mb-6 leading-relaxed text-sm">
                Paylaştığın bağlantılardan yapılan her satıştan %5-20 arası komisyon kazan.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                  %15
                </span>
                <span className="font-['Inter',sans-serif] text-white/60 text-sm">ortalama komisyon</span>
              </div>
            </div>
          </div>

          {/* Premium Referral */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-[#d21027]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB5200] opacity-20 blur-[60px] rounded-full group-hover:opacity-30 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EB5200] to-[#FFBA6F] rounded-2xl flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter',sans-serif] text-lg sm:text-xl font-bold text-white mb-4">Alışveriş Nakit İade</h3>
              <p className="font-['Inter',sans-serif] text-white/60 mb-6 leading-relaxed text-sm">
                Yeni kullanıcı davet et, premium üyeliklerinden sürekli kazanç elde et.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
                  %30
                </span>
                <span className="font-['Inter',sans-serif] text-white/60 text-sm">referans bonusu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { value: '50K+', label: 'Aktif Kullanıcı' },
    { value: '₺12M+', label: 'Ödenen Komisyon' },
    { value: '500+', label: 'Partner Marka' },
    { value: '4.9/5', label: 'Kullanıcı Puanı' }
  ];

  return (
    <section className="bg-[#0a0a0a] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d21027] to-[#EB5200] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppScreenshots() {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#d21027] opacity-5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Her Yerde <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Yanında</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            iOS ve Android uygulamalarımızla kazançlarını her yerden takip et
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {['Dashboard', 'İstatistikler', 'Ödemeler'].map((title, index) => (
            <div key={index} className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-6 hover:border-[#d21027]/50 transition-all">
              <div className="aspect-[9/16] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-white/20 font-bold text-lg sm:text-xl">{title}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white text-center">{title}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12">
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            <span>App Store'dan İndir</span>
          </button>
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            <span>Google Play'den İndir</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function PremiumMembership() {
  const freemiumFeatures = [
    '15 Kampanya Katılım Sınırı',
    '250 TL Alt Çekim Limiti',
    'Anlık Analitik Bildirimler'
  ];

  const premiumFeatures = [
    'Kampanyalara Sınırsız Katılım',
    'Alt Limitsiz Çekim',
    'Anlık Analitik Bildirimler',
    'Premium Kampanyalar',
    'Daha Yüksek Komisyon Oranları',
    'Kendine Özel Link Oluşturma'
  ];

  return (
    <section id="premium" className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Premium
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Freemium Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-gradient-to-r from-white/30 to-white/20 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              ÜCRETSİZ
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Ücretsiz
              </h3>
              <p className="text-white/60 text-base sm:text-lg">
                Başlamak için ihtiyacın olan her şey
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {freemiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-white/40 to-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="text-white text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-white">₺0</span>
                <span className="text-white/60 text-base sm:text-lg">/ay</span>
              </div>
              <button className="w-full sm:w-auto bg-white/20 border border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/30 transition-all">
                Ücretsiz Başla
              </button>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-gradient-to-br from-[#d21027]/20 to-[#EB5200]/10 border-2 border-[#d21027]/30 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              PREMIUM
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Premium Üyelik
              </h3>
              <p className="text-white/60 text-base sm:text-lg">
                Kazancını maksimize et, özel avantajlardan yararlan
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#d21027] to-[#EB5200] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="text-white text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-white">₺99.99</span>
                <span className="text-white/60 text-base sm:text-lg">/ay</span>
              </div>
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all">
                Premium'a Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Adverport nasıl çalışır?',
      answer: 'Adverport, markaların ürünlerini tanıtmanıza ve her satıştan komisyon kazanmanıza olanak tanıyan bir affiliate pazarlama platformudur. Kaydolduktan sonra istediğiniz markaları seçer, özel bağlantılarınızı paylaşır ve kazanmaya başlarsınız.'
    },
    {
      question: 'Komisyon oranları nedir?',
      answer: 'Komisyon oranları marka ve ürün kategorisine göre %5 ile %20 arasında değişmektedir. Premium üyelerimiz en yüksek komisyon oranlarından yararlanır.'
    },
    {
      question: 'Ödemeler ne zaman yapılır?',
      answer: 'Ödemeler aylık olarak yapılır. Minimum ödeme tutarı 100 TL\'dir. Premium üyeler daha hızlı ödeme seçeneklerinden yararlanabilir.'
    },
    {
      question: 'Üyelik ücretsiz mi?',
      answer: 'Evet, temel üyelik tamamen ücretsizdir. İsterseniz daha fazla özellik ve yüksek komisyonlar için Premium üyeliğe geçebilirsiniz.'
    },
    {
      question: 'Hangi ödeme yöntemlerini kullanabilirim?',
      answer: 'Banka havalesi, PayPal ve Papara ile ödemelerinizi alabilirsiniz. Yakında kripto para seçenekleri de eklenecek.'
    },
    {
      question: 'Referans programı nasıl çalışır?',
      answer: 'Arkadaşlarınızı davet ettiğinizde, onların kazançlarından %30 referans bonusu alırsınız. Bu bonus süresiz olarak devam eder.'
    }
  ];

  return (
    <section id="faq" className="bg-black py-24 relative">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#d21027] opacity-5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Sorular</span>
          </h2>
          <p className="text-white/60 text-lg">
            Merak ettiğiniz her şey burada
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#d21027] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#d21027] opacity-10 blur-[150px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Pasif Gelir Elde Etmeye <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">
            Bugün Başla
          </span>
        </h2>
        <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
          Binlerce kullanıcı Adverport ile kazanıyor. Sen de aramıza katıl, ücretsiz hesap oluştur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all">
            Ücretsiz Başla
          </button>
          <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            Demo İzle
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    'Ürün': ['Özellikler', 'Premium', 'Fiyatlandırma', 'Mobil Uygulama'],
    'Şirket': ['Hakkımızda', 'Blog', 'Kariyer', 'İletişim'],
    'Destek': ['Yardım Merkezi', 'SSS', 'Gizlilik', 'Şartlar & Koşullar'],
    'Topluluk': ['Instagram', 'Twitter', 'LinkedIn', 'YouTube']
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Contact Form Section */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">İletişime Geç</h2>
          <p className="text-white/60 text-sm mb-8">
            Sorularınız, iş birliği teklifleriniz veya destek talepleriniz için bize yazın.
          </p>
          <ContactForm />
        </div>

        <div className="border-t border-white/10 pt-12 grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-white font-bold text-2xl mb-4">ADVERPORT</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Affiliate pazarlamanın gücüyle gelir elde et
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Adverport. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <Features />
      <HowItWorks />
      <DualEarningModel />
      <SocialProof />
      <AppScreenshots />
      <PremiumMembership />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}