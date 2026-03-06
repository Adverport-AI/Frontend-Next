import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, CreditCard, Users, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

const faqCategories = [
  { id: 'genel', label: 'Genel', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'kazanc', label: 'Kazanç & Ödeme', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'hesap', label: 'Hesap & Üyelik', icon: <Users className="w-4 h-4" /> },
  { id: 'guvenlik', label: 'Güvenlik', icon: <Shield className="w-4 h-4" /> },
  { id: 'uygulama', label: 'Uygulama', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'premium', label: 'Premium', icon: <TrendingUp className="w-4 h-4" /> },
];

const faqData: Record<string, { q: string; a: string }[]> = {
  genel: [
    { q: 'Adverport nedir?', a: 'Adverport, sevdiğiniz ürünlerin affiliate linklerini paylaşarak komisyon kazanmanızı sağlayan bir platformdur. Herhangi bir ürünün linkini paylaşın, birisi sizin linkinizle alışveriş yaptığında komisyon kazanın.' },
    { q: 'Adverport\'u kullanmak ücretsiz mi?', a: 'Evet! Adverport\'a ücretsiz olarak kaydolabilir ve hemen kazanmaya başlayabilirsiniz. Daha fazla özellik için Premium aboneliğimiz de mevcuttur.' },
    { q: 'Hangi markalarla çalışıyorsunuz?', a: 'Türkiye\'nin ve dünyanın önde gelen 500\'den fazla markasıyla iş birliği yapıyoruz. Moda, teknoloji, kozmetik, ev & yaşam ve daha birçok kategoride markalar platformumuzda yer alıyor.' },
    { q: 'Nasıl başlayabilirim?', a: 'Uygulamayı indirin, ücretsiz hesabınızı oluşturun ve hemen link paylaşmaya başlayın. İlk kazancınızı dakikalar içinde elde edebilirsiniz.' },
  ],
  kazanc: [
    { q: 'Komisyon oranları ne kadar?', a: 'Komisyon oranları markalara göre %5 ile %20 arasında değişmektedir. Premium üyeler ek %2-5 bonus komisyon kazanır.' },
    { q: 'Ödemelerimi nasıl alabilirim?', a: 'Kazançlarınızı banka havalesi veya Papara üzerinden çekebilirsiniz. Minimum çekim tutarı 50 TL\'dir.' },
    { q: 'Ödemeler ne zaman yapılıyor?', a: 'Ödemeler her ayın 1\'inde ve 15\'inde olmak üzere ayda iki kez yapılmaktadır. Onaylanan komisyonlar bir sonraki ödeme döneminde hesabınıza aktarılır.' },
    { q: 'Kendi alışverişlerimden de kazanabilir miyim?', a: 'Evet! Kendi alışverişlerinizden de nakit iade kazanabilirsiniz. Bu özellik tüm kullanıcılar için geçerlidir.' },
  ],
  hesap: [
    { q: 'Hesabımı nasıl oluşturabilirim?', a: 'Uygulamayı App Store veya Google Play\'den indirin, e-posta adresiniz veya telefon numaranızla kayıt olun. Dakikalar içinde hazırsınız.' },
    { q: 'Hesabımı nasıl silebilirim?', a: 'Ayarlar > Hesap bölümünden hesap silme talebinde bulunabilirsiniz. Talebiniz 7 iş günü içinde işleme alınır. Bekleyen ödemeleriniz varsa önce bunlar tamamlanır.' },
    { q: 'Şifremi unuttum, ne yapmalıyım?', a: 'Giriş ekranındaki "Şifremi Unuttum" bağlantısına tıklayın. Kayıtlı e-posta adresinize şifre sıfırlama linki gönderilecektir.' },
    { q: 'Birden fazla hesap açabilir miyim?', a: 'Hayır, her kullanıcı yalnızca bir hesap açabilir. Birden fazla hesap açmak platform kurallarına aykırıdır.' },
  ],
  guvenlik: [
    { q: 'Verilerim güvende mi?', a: 'Evet, tüm verileriniz 256-bit SSL şifreleme ile korunmaktadır. KVKK ve GDPR uyumlu altyapımızla verilerinizin güvenliğini en üst seviyede tutuyoruz.' },
    { q: 'İki faktörlü doğrulama var mı?', a: 'Evet, hesap güvenliğinizi artırmak için SMS veya e-posta ile iki faktörlü doğrulama özelliğini etkinleştirebilirsiniz.' },
    { q: 'Şüpheli bir işlem fark edersem ne yapmalıyım?', a: 'Hemen destek@adverport.com adresine yazın veya uygulama içi canlı destekten bize ulaşın. Hesabınız geçici olarak dondurulabilir.' },
  ],
  uygulama: [
    { q: 'Hangi cihazlarda çalışıyor?', a: 'Adverport iOS 15+ ve Android 10+ işletim sistemlerinde çalışmaktadır. Web tarayıcısı üzerinden de temel özelliklere erişebilirsiniz.' },
    { q: 'Uygulama çok yer kaplıyor mu?', a: 'Uygulamamız yaklaşık 50 MB boyutundadır ve optimize edilmiş altyapısıyla cihazınızın performansını etkilemez.' },
    { q: 'Bildirimler nasıl özelleştirilir?', a: 'Ayarlar > Bildirimler bölümünden hangi bildirimleri almak istediğinizi seçebilirsiniz. Satış, kampanya ve sistem bildirimlerini ayrı ayrı yönetebilirsiniz.' },
  ],
  premium: [
    { q: 'Premium üyelik ne kadar?', a: 'Premium üyelik aylık 79,99 TL veya yıllık 599,99 TL\'dir. Yıllık planda %37 tasarruf edersiniz.' },
    { q: 'Premium üyeliğin avantajları neler?', a: 'Daha yüksek komisyon oranları, öncelikli destek, gelişmiş analitik, özel kampanyalara erişim, reklamsız deneyim ve daha fazlası.' },
    { q: 'Premium üyeliği iptal edebilir miyim?', a: 'Evet, istediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar Premium özelliklerden yararlanmaya devam edersiniz.' },
    { q: 'Ücretsiz deneme süresi var mı?', a: 'Evet, Premium üyeliğin 7 günlük ücretsiz deneme süresi mevcuttur. Deneme süresi içinde iptal ederseniz herhangi bir ücret yansıtılmaz.' },
  ],
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('genel');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = searchQuery.trim()
    ? Object.values(faqData)
        .flat()
        .filter(
          (faq) =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : faqData[activeCategory] || [];

  return (
    <div className="bg-black text-white min-h-screen pt-28 md:pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-[#FF6B00]/20 to-[#E74C3C]/20 border border-[#FF6B00]/30 text-[#FF8C42] px-4 py-1.5 rounded-full text-sm mb-6">
            Sık Sorulan Sorular
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Size Nasıl Yardımcı Olabiliriz?
          </h1>
          <p className="text-white/60 text-lg mb-8">
            En çok merak edilen soruların yanıtlarını burada bulabilirsiniz.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              placeholder="Sorunuzu arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories & FAQ List */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {!searchQuery.trim() && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FF6B00] to-[#E74C3C] text-white'
                    : 'bg-white/[0.06] text-white/60 hover:bg-white/[0.1] border border-white/10'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-white/40">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Aramanızla eşleşen sonuç bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Hâlâ sorunuz mu var?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Aradığınız cevabı bulamadıysanız destek ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#FF6B00] to-[#E74C3C] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all"
            >
              İletişime Geç
            </Link>
            <Link
              to="/yardim-merkezi"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white/[0.06] border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/[0.1] transition-all"
            >
              Yardım Merkezi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
