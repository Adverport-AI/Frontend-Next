import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, FileText } from 'lucide-react';

interface LegalPageData {
  title: string;
  lastUpdated: string;
  description: string;
  content: string;
}

const legalPages: Record<string, LegalPageData> = {
  'ziyaretci-ve-kullanici-sozlesmesi': {
    title: 'Ziyaretçi ve Kullanıcı Sözleşmesi',
    lastUpdated: '1 Ocak 2026',
    description: 'Adverport platformunu ziyaret eden ve kullanan kişilerin tabi olduğu sözleşme.',
    content: `## 1. Taraflar

Bu Ziyaretçi ve Kullanıcı Sözleşmesi ("Sözleşme"), Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. ("Adverport") ile platformu ziyaret eden ve/veya kullanan gerçek ve tüzel kişiler ("Kullanıcı") arasında akdedilmiştir.

## 2. Sözleşmenin Konusu

Bu sözleşme, Adverport'un sunduğu hizmetlerin kullanımına ilişkin koşulları ve tarafların karşılıklı hak ve yükümlülüklerini düzenlemektedir.

## 3. Hizmet Tanımı

Adverport, kullanıcıların affiliate (satış ortaklığı) bağlantıları aracılığıyla ürün tanıtımı yaparak komisyon kazanmasını sağlayan bir dijital platformdur.

## 4. Kullanıcı Yükümlülükleri

Kullanıcılar aşağıdaki kurallara uymakla yükümlüdür:

- Platformu yasalara uygun şekilde kullanmak
- Doğru ve güncel bilgi sağlamak
- Hileli veya yanıltıcı faaliyetlerde bulunmamak
- Üçüncü kişilerin haklarını ihlal etmemek
- Platform altyapısına zarar verecek faaliyetlerde bulunmamak
- Spam veya toplu mesaj göndermemek

## 5. Üyelik Koşulları

- Üye olmak için 18 yaşından büyük olmanız gerekmektedir.
- Her kullanıcı yalnızca bir hesap açabilir.
- Kayıt sırasında verilen bilgilerin doğru ve güncel olması zorunludur.
- Hesap bilgilerinizin güvenliği sizin sorumluluğunuzdadır.

## 6. Komisyon ve Ödemeler

- Komisyon oranları markalara göre değişkenlik gösterir.
- Onaylanan komisyonlar belirtilen ödeme takvimine göre ödenir.
- Minimum çekim tutarı 50 TL'dir.
- Haksız veya hileli işlemlerden elde edilen komisyonlar iptal edilir.

## 7. Fikri Mülkiyet

Adverport platformundaki tüm içerik, tasarım, logo ve yazılımlar Adverport'un fikri mülkiyetindedir. İzinsiz kullanımı yasaktır.

## 8. Hesap Askıya Alma ve Kapatma

Adverport, kullanım şartlarını ihlal eden hesapları önceden bildirmeksizin askıya alabilir veya kapatabilir.

## 9. Sorumluluk Sınırı

Adverport, platform üzerinden gerçekleştirilen alışverişlerin içeriğinden sorumlu değildir. Markalarla ilgili sorunlar için ilgili markanın müşteri hizmetleriyle iletişime geçilmelidir.

## 10. Değişiklikler

Bu sözleşme önceden bildirimde bulunarak güncellenebilir. Güncellemeler yayınlandığı tarihte yürürlüğe girer.

## 11. Uygulanacak Hukuk

Bu sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.`,
  },
  'uyelik-aydinlatma-metni': {
    title: 'Üyelik Aydınlatma Metni',
    lastUpdated: '1 Ocak 2026',
    description: '6698 sayılı KVKK kapsamında üyelik sürecine ilişkin aydınlatma metni.',
    content: `## Veri Sorumlusu

Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla, üyelik sürecinde kişisel verilerinizi aşağıda açıklanan şekilde işlemekteyiz.

## İşlenen Kişisel Veriler

**Kimlik Verileri:** Ad, soyad, T.C. kimlik numarası (ödeme süreçleri için)
**İletişim Verileri:** E-posta adresi, telefon numarası, adres
**Finansal Veriler:** Banka hesap bilgileri, ödeme kayıtları
**Dijital Veriler:** IP adresi, çerez verileri, uygulama kullanım verileri
**Görsel Veriler:** Profil fotoğrafı

## Kişisel Verilerin İşlenme Amaçları

Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

- Üyelik işlemlerinin gerçekleştirilmesi
- Hizmetlerin sunulması ve geliştirilmesi
- Komisyon hesaplama ve ödeme işlemleri
- Yasal yükümlülüklerin yerine getirilmesi
- İletişim faaliyetlerinin yürütülmesi
- Bilgi güvenliği süreçlerinin yönetimi
- Kullanıcı deneyiminin iyileştirilmesi

## Kişisel Verilerin İşlenme Hukuki Sebepleri

Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen:

- Açık rızanız
- Sözleşmenin kurulması veya ifası
- Hukuki yükümlülüğün yerine getirilmesi
- Meşru menfaatlerimiz

hukuki sebeplerine dayanılarak işlenmektedir.

## Kişisel Verilerin Aktarılması

Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda:

- İş ortakları ve hizmet sağlayıcılarına
- Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşlarına
- Ödeme hizmet sağlayıcılarına

aktarılabilmektedir.

## Veri Saklama Süresi

Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanmaktadır.

## Haklarınız

KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:

1. Kişisel verilerinizin işlenip işlenmediğini öğrenme
2. İşlenmişse buna ilişkin bilgi talep etme
3. İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
4. Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
5. Eksik veya yanlış işlenmişse düzeltilmesini isteme
6. KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme
7. Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme
8. İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
9. Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme

## Başvuru

Haklarınızı kullanmak için **kvkk@adverport.com** adresine yazabilir veya Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. adresine yazılı başvuruda bulunabilirsiniz.`,
  },
  'websitesi-aydinlatma-metni': {
    title: 'Websitesi Aydınlatma Metni',
    lastUpdated: '1 Ocak 2026',
    description: '6698 sayılı KVKK kapsamında websitesi ziyaretçilerine ilişkin aydınlatma metni.',
    content: `## Veri Sorumlusu

Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla, websitemizi ziyaret ettiğinizde kişisel verilerinizi aşağıda açıklanan şekilde işlemekteyiz.

## Websitesi Ziyaretinde Toplanan Veriler

**Teknik Veriler:** IP adresi, tarayıcı türü ve sürümü, işletim sistemi, ekran çözünürlüğü
**Kullanım Verileri:** Ziyaret edilen sayfalar, tıklama verileri, sayfa görüntüleme süreleri
**Çerez Verileri:** Zorunlu çerezler, analitik çerezler, işlevsellik çerezleri
**Konum Verileri:** Ülke ve şehir düzeyinde yaklaşık konum (IP tabanlı)

## Kişisel Verilerin İşlenme Amaçları

Websitesi ziyaretçilerine ait kişisel veriler aşağıdaki amaçlarla işlenmektedir:

- Websitesinin düzgün çalışmasının sağlanması
- Ziyaretçi deneyiminin iyileştirilmesi
- İstatistiksel analizlerin yapılması
- Bilgi güvenliği süreçlerinin yönetimi
- Yasal yükümlülüklerin yerine getirilmesi
- Hizmetlerin tanıtılması ve pazarlanması

## Çerez Kullanımı

### Zorunlu Çerezler
Websitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz.

### Analitik Çerezler
Ziyaretçi trafiğini ve kullanım alışkanlıklarını analiz etmek için kullanılır. Bu çerezler anonimleştirilmiş veri toplar.

### İşlevsellik Çerezleri
Tercihlerinizi hatırlamamıza ve kişiselleştirilmiş deneyim sunmamıza yardımcı olur.

## Kişisel Verilerin Aktarılması

Websitesi ziyaretçilerine ait veriler:

- Analitik hizmet sağlayıcılarına (Google Analytics vb.)
- Altyapı ve barındırma hizmet sağlayıcılarına
- Yasal düzenlemeler kapsamında yetkili kurumlara

aktarılabilmektedir.

## Veri Saklama Süresi

Websitesi ziyaretçi verileri, ilgili mevzuatta öngörülen sürelerce saklanır. Çerezlerin saklama süreleri türlerine göre değişiklik göstermektedir.

## Haklarınız

KVKK'nın 11. maddesi kapsamında kişisel verilerinize ilişkin haklarınızı kullanmak için **kvkk@adverport.com** adresine başvurabilirsiniz.`,
  },
  'iletisim-aydinlatma-metni': {
    title: 'İletişim Aydınlatma Metni',
    lastUpdated: '1 Ocak 2026',
    description: '6698 sayılı KVKK kapsamında iletişim formu ve kanalları aracılığıyla toplanan verilere ilişkin aydınlatma metni.',
    content: `## Veri Sorumlusu

Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla, iletişim kanallarımız aracılığıyla bizimle paylaştığınız kişisel verilerinizi aşağıda açıklanan şekilde işlemekteyiz.

## İletişim Kanallarında Toplanan Veriler

**Kimlik Verileri:** Ad, soyad
**İletişim Verileri:** E-posta adresi, telefon numarası
**İşlem Verileri:** İletişim konusu, mesaj içeriği, başvuru tarihi
**Teknik Veriler:** IP adresi (çevrimiçi iletişim formu için)

## Kişisel Verilerin İşlenme Amaçları

İletişim kanalları aracılığıyla toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:

- İletişim taleplerinin yanıtlanması
- Şikayet ve başvuruların değerlendirilmesi
- Kullanıcı memnuniyetinin sağlanması
- İş ortaklığı taleplerinin değerlendirilmesi
- Yasal yükümlülüklerin yerine getirilmesi
- Hizmet kalitesinin iyileştirilmesi

## Kişisel Verilerin İşlenme Hukuki Sebepleri

İletişim sürecinde toplanan kişisel verileriniz:

- Açık rızanız
- Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması
- Hukuki yükümlülüğün yerine getirilmesi için zorunlu olması
- Veri sorumlusunun meşru menfaatleri

hukuki sebeplerine dayanılarak işlenmektedir.

## Kişisel Verilerin Aktarılması

İletişim sürecinde toplanan veriler:

- İlgili departman ve çalışanlarına
- Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşlarına
- Hizmet sağlayıcılarına (e-posta sunucu, CRM sistemi vb.)

aktarılabilmektedir.

## Veri Saklama Süresi

İletişim kanalları aracılığıyla toplanan kişisel veriler, iletişim talebinin sonuçlandırılmasını takiben ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanmaktadır.

## Haklarınız

KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:

1. Kişisel verilerinizin işlenip işlenmediğini öğrenme
2. İşlenmişse buna ilişkin bilgi talep etme
3. İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
4. Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
5. Eksik veya yanlış işlenmişse düzeltilmesini isteme
6. Silinmesini veya yok edilmesini isteme
7. Düzeltme, silme veya yok etme işlemlerinin üçüncü kişilere bildirilmesini isteme
8. İşlenen verilerin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonuç ortaya çıkmasına itiraz etme
9. Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme

## Başvuru

Haklarınızı kullanmak için **kvkk@adverport.com** adresine yazabilir veya Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. adresine yazılı başvuruda bulunabilirsiniz.`,
  },
};

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let orderedListItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1.5 text-white/60 text-sm leading-relaxed my-4 pl-2">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
    if (orderedListItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-1.5 text-white/60 text-sm leading-relaxed my-4 pl-2">
          {orderedListItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      orderedListItems = [];
    }
  };

  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/80 font-medium">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${i}`} className="text-white text-xl font-semibold mt-8 mb-3">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="text-white text-lg font-medium mt-6 mb-2">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      listItems.push(line.replace('- ', ''));
    } else if (/^\d+\.\s/.test(line)) {
      orderedListItems.push(line.replace(/^\d+\.\s/, ''));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={`p-${i}`}
          className="text-white/60 text-sm leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
  }
  flushList();
  return elements;
}

export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? legalPages[slug] : null;

  if (!pageData) {
    return (
      <div className="bg-black text-white min-h-screen pt-28 md:pt-32 flex flex-col items-center justify-center px-4">
        <FileText className="w-16 h-16 text-white/20 mb-6" />
        <h1 className="text-2xl font-bold mb-3">Sayfa Bulunamadı</h1>
        <p className="text-white/50 mb-6">Aradığınız yasal doküman bulunamadı.</p>
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#FF8C42] hover:underline"
        >
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-28 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block bg-gradient-to-r from-[#FF6B00]/20 to-[#E74C3C]/20 border border-[#FF6B00]/30 text-[#FF8C42] px-4 py-1.5 rounded-full text-sm mb-5">
            Yasal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageData.title}</h1>
          <p className="text-white/50 mb-4">{pageData.description}</p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Son güncelleme: {pageData.lastUpdated}</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10"
        >
          {renderMarkdown(pageData.content)}
        </motion.div>
      </div>
    </div>
  );
}
