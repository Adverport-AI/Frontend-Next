import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  BookOpen, CreditCard, Users, Smartphone, Shield, TrendingUp,
  ArrowRight, Search, Mail, MessageCircle, Phone, ExternalLink,
  PlayCircle, FileText, Zap
} from 'lucide-react';

const helpCategories = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Başlangıç Rehberi',
    description: 'Adverport\'a ilk adımlarınızı atın',
    articles: ['Hesap oluşturma', 'Profil ayarları', 'İlk linkinizi paylaşma', 'Dashboard kullanımı'],
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Kazanç & Ödemeler',
    description: 'Komisyonlar ve ödeme süreçleri',
    articles: ['Komisyon nasıl hesaplanır', 'Ödeme yöntemleri', 'Minimum çekim tutarı', 'Ödeme takvimi'],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Hesap Yönetimi',
    description: 'Hesap ayarları ve güvenlik',
    articles: ['Şifre değiştirme', 'E-posta güncelleme', 'İki faktörlü doğrulama', 'Hesap silme'],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Uygulama Kullanımı',
    description: 'Mobil uygulama özellikleri',
    articles: ['Link oluşturma', 'Koleksiyon oluşturma', 'Bildirim ayarları', 'Uygulama güncelleme'],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Güvenlik & Gizlilik',
    description: 'Veri koruma ve güvenlik',
    articles: ['Veri güvenliği', 'Gizlilik ayarları', 'Şüpheli aktivite bildirme', 'KVKK hakları'],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Premium Üyelik',
    description: 'Premium özellikler ve abonelik',
    articles: ['Premium avantajları', 'Abonelik yönetimi', 'Ücretsiz deneme', 'Fiyatlandırma'],
  },
];

const popularArticles = [
  { title: 'Adverport\'a nasıl başlarım?', category: 'Başlangıç', readTime: '3 dk' },
  { title: 'Komisyon oranları nasıl belirlenir?', category: 'Kazanç', readTime: '2 dk' },
  { title: 'Ödeme nasıl ve ne zaman yapılır?', category: 'Ödemeler', readTime: '4 dk' },
  { title: 'Premium üyelik avantajları nelerdir?', category: 'Premium', readTime: '3 dk' },
  { title: 'Hesabımı nasıl güvende tutarım?', category: 'Güvenlik', readTime: '5 dk' },
  { title: 'Link paylaşım ipuçları', category: 'Rehber', readTime: '6 dk' },
];

const quickActions = [
  {
    icon: <PlayCircle className="w-5 h-5" />,
    title: 'Video Rehberler',
    description: 'Adım adım video anlatımlar',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Kullanım Kılavuzu',
    description: 'Detaylı yazılı dökümanlar',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Hızlı İpuçları',
    description: 'Kazancınızı artırın',
  },
];

export default function HelpCenterPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 md:pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-[#FF6B00]/20 to-[#E74C3C]/20 border border-[#FF6B00]/30 text-[#FF8C42] px-4 py-1.5 rounded-full text-sm mb-6">
            Yardım Merkezi
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nasıl Yardımcı Olabiliriz?
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Adverport'u en verimli şekilde kullanmanız için ihtiyacınız olan her şey burada.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              placeholder="Yardım makalesi arayın..."
              className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {quickActions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#FF6B00]/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#E74C3C]/20 flex items-center justify-center text-[#FF8C42] shrink-0">
                {action.icon}
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">{action.title}</h3>
                <p className="text-white/40 text-xs mt-0.5">{action.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-[#FF8C42] transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Help Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8">Yardım Konuları</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-[#FF6B00]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00]/20 to-[#E74C3C]/20 flex items-center justify-center text-[#FF8C42] mb-4">
                {cat.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{cat.title}</h3>
              <p className="text-white/40 text-sm mb-4">{cat.description}</p>
              <ul className="space-y-2">
                {cat.articles.map((article) => (
                  <li key={article}>
                    <a href="#" className="text-white/60 hover:text-[#FF8C42] text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold mb-8">Popüler Makaleler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, i) => (
              <motion.a
                key={article.title}
                href="#"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-[#FF6B00]/30 transition-colors group flex items-start justify-between gap-3"
              >
                <div>
                  <span className="text-[#FF8C42] text-xs">{article.category}</span>
                  <h3 className="text-white font-medium text-sm mt-1 group-hover:text-[#FF8C42] transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-white/30 text-xs mt-2 inline-block">{article.readTime} okuma</span>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 shrink-0 mt-1 group-hover:text-[#FF8C42] transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Destek Ekibimize Ulaşın</h2>
            <p className="text-white/50">Aradığınızı bulamadınız mı? Size yardımcı olmaktan mutluluk duyarız.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:destek@adverport.com"
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center hover:border-[#FF6B00]/30 transition-colors"
            >
              <Mail className="w-8 h-8 text-[#FF8C42] mx-auto mb-3" />
              <h3 className="text-white font-medium mb-1">E-posta</h3>
              <p className="text-white/40 text-sm">destek@adverport.com</p>
            </a>
            <a
              href="#"
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center hover:border-[#FF6B00]/30 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-[#FF8C42] mx-auto mb-3" />
              <h3 className="text-white font-medium mb-1">Canlı Destek</h3>
              <p className="text-white/40 text-sm">7/24 çevrimiçi</p>
            </a>
            <Link
              to="/iletisim"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center hover:border-[#FF6B00]/30 transition-colors"
            >
              <Phone className="w-8 h-8 text-[#FF8C42] mx-auto mb-3" />
              <h3 className="text-white font-medium mb-1">İletişim</h3>
              <p className="text-white/40 text-sm">Formu doldurun</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
