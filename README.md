# Zeymir Makine - Kurumsal Web Sitesi

Zeymir Makine Otom. İnş. Seramik San. ve Tic. Ltd. Şti. için modern, responsive ve SEO uyumlu kurumsal web sitesi.

## 🏭 Firma Bilgileri

- **Firma Adı:** Zeymir Makine
- **Tam Adı:** Zeymir Makine Otom. İnş. Seramik San. ve Tic. Ltd. Şti.
- **Faaliyet Alanı:** Isıtma fırınları, seramik pişirme fırınları, hassas döküm makinaları, kesim makinaları ve baskı makinaları üretimi
- **Konum:** Konya, Türkiye
- **Deneyim:** 25+ yıl

## 🚀 Teknolojiler

- **Frontend:** React 19.1.0
- **Build Tool:** Vite 7.0.0
- **Routing:** React Router DOM
- **Styling:** CSS3 (Custom Properties, Grid, Flexbox)
- **Responsive Design:** Mobile-first approach
- **Performance:** Optimized for speed and SEO
- **SEO:** Meta tags, Schema.org, Open Graph, Twitter Cards

## 📁 Proje Yapısı

```
zeymir-makine/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logos/           # Firma logoları
│       ├── sliders/         # Anasayfa slider görselleri
│       ├── products/        # Ürün görselleri
│       │   ├── firinlar/
│       │   ├── seramik-pisirme-firinlari/
│       │   ├── hassas-dokum/
│       │   ├── kesim-makineleri/
│       │   └── baski-makineleri/
│       └── references/      # Referans firma logoları
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Carousel.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/             # CSS dosyaları
│   │   ├── global.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Carousel.css
│   │   ├── WhatsAppButton.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Products.css
│   │   ├── ProductDetail.css
│   │   ├── Contact.css
│   │   └── NotFound.css
│   ├── utils/              # Yardımcı fonksiyonlar
│   │   └── whatsapp.js
│   ├── App.jsx             # Ana uygulama bileşeni
│   └── main.jsx            # Giriş noktası
├── index.html              # HTML şablonu
├── package.json            # Bağımlılıklar
├── vite.config.js          # Vite konfigürasyonu
└── README.md               # Bu dosya
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Kırmızı:** #dc2626
- **İkincil Kırmızı:** #b91c1c
- **Ana Siyah:** #111827
- **Ana Beyaz:** #ffffff
- **Açık Gri:** #f3f4f6
- **Koyu Gri:** #374151

### Tipografi
- **Font Ailesi:** Inter (Google Fonts)
- **Ağırlıklar:** 300, 400, 500, 600, 700, 900

### Responsive Breakpoints
- **Mobile:** < 480px
- **Tablet:** 480px - 768px
- **Desktop:** > 768px

## 📄 Sayfalar ve Özellikler

### 1. Anasayfa (/)
- **Carousel Slider:** Otomatik geçişli ürün tanıtımı
- **Hero Section:** Firma tanıtımı ve istatistikler
- **Neden Zeymir Makine?:** Kaliteli üretim, güvenilir hizmet, özel çözümler
- **Ürün Kategorileri:** 5 ana kategori önizlemesi
- **Referanslar:** 13 referans firma logosu
- **SEO:** Title, meta description, Open Graph, Twitter Cards

### 2. Hakkımızda (/hakkimizda)
- **Firma Bilgileri:** 25+ yıl deneyim, küçük ölçekli yapı
- **Misyon ve Vizyon:** Müşteri odaklı yaklaşım
- **İstatistikler:** Gerçekçi proje ve müşteri sayıları
- **SEO:** Sayfa özel meta etiketleri

### 3. Ürünler (/urunler)
- **Kategori Filtreleme:** 5 ana kategori
  - Isıtma / Tavlama Fırınları
  - Seramik Pişirme Fırınları
  - Hassas Döküm Makinaları
  - Kesim Makinaları
  - Baskı Makineleri
- **Ürün Kartları:** Görsel, başlık, açıklama
- **URL Yapısı:** SEO uyumlu `/urunler/:kategori` ve `/urun/:slug`
- **Breadcrumb Navigation:** Schema.org uyumlu

### 4. Ürün Detay (/urun/:slug)
- **Ürün Görselleri:** Ana görsel ve thumbnail'lar
- **Ürün Açıklaması:** Detaylı ürün bilgileri
- **Teknik Özellikler:** Özellik listesi
- **SEO:** Product schema, Open Graph, Twitter Cards
- **Breadcrumb:** Schema.org uyumlu

### 5. İletişim (/iletisim)
- **İletişim Bilgileri:** Adres, telefon, e-posta
- **İletişim Formu:** Ad, e-posta, mesaj alanları
- **Çalışma Saatleri:** Pazartesi-Cuma 08:00-18:00
- **WhatsApp Butonu:** Direkt iletişim

### 6. 404 Sayfası (/404)
- **Kullanıcı Dostu:** Anasayfaya yönlendirme
- **SEO:** Uygun meta etiketleri

## 🔍 Google Search Console Kurulumu

### Site Sahipliği Doğrulama
Site Google Search Console'da doğrulanmıştır. Doğrulama için HTML meta etiketi yöntemi kullanılmıştır.

**Doğrulama Meta Etiketi:**
- `index.html` dosyasının `<head>` bölümüne Google Search Console doğrulama meta etiketi eklenmiştir
- Meta etiketi: `<meta name="google-site-verification" content="jDoIBOG77znITbff4WzUvpS95dfJIde6WfTELIC6Lbc" />`
- **Önemli:** Doğrulama başarılı olduktan sonra bu meta etiketi kaldırılmamalıdır, aksi halde doğrulama kaybolur

**Yeni Doğrulama Yapılacaksa:**
1. Google Search Console'dan yeni doğrulama kodu alın
2. `index.html` dosyasındaki mevcut meta etiketini yeni kodla güncelleyin
3. Değişiklikleri deploy edin
4. Google Search Console'da "Doğrula" butonuna tıklayın

## 🔧 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum
```bash
# Projeyi klonlayın
git clone https://github.com/hsynkbulut/zeymir-makine.git
cd zeymir-makine

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Tarayıcıda açın
# http://localhost:5173
```

### Build
```bash
# Production build
npm run build

# Build önizleme
npm run preview
```

## 📱 Özellikler

### ✅ Tamamlanan Özellikler
- [x] Responsive tasarım (mobil, tablet, desktop)
- [x] Modern ve kurumsal görünüm
- [x] Gelişmiş SEO optimizasyonu
- [x] React Router ile sayfa yönlendirme
- [x] WhatsApp iletişim butonu
- [x] İletişim formu
- [x] 5 ürün kategorisi ve filtreleme
- [x] Ürün detay sayfaları
- [x] Carousel slider (otomatik geçiş)
- [x] Referanslar bölümü
- [x] Schema.org JSON-LD
- [x] Open Graph ve Twitter Cards
- [x] Breadcrumb navigation
- [x] Canonical URL'ler
- [x] robots.txt ve sitemap.xml
- [x] Google Search Console doğrulama
- [x] Performance optimizasyonu
- [x] Accessibility (ARIA labels)
- [x] Cross-browser uyumluluk

## 🎯 SEO Optimizasyonu

### Meta Etiketleri
- **Title:** Her sayfa için optimize edilmiş başlıklar
- **Description:** Anahtar kelime odaklı açıklamalar
- **Keywords:** Ürün kategorileri ve anahtar kelimeler
- **Google Search Console:** Site sahipliği doğrulama meta etiketi (index.html'de mevcut)
- **Open Graph:** Facebook ve sosyal medya paylaşımları
- **Twitter Cards:** Twitter paylaşımları
- **Canonical:** Duplicate content önleme
- **Robots:** Arama motoru yönergeleri

### Schema.org (JSON-LD)
- **Product Schema:** Ürün detay sayfalarında
- **Breadcrumb Schema:** Sayfa navigasyonunda
- **Organization Schema:** Firma bilgileri

### Teknik SEO
- **URL Yapısı:** SEO uyumlu URL'ler
- **Sitemap:** XML sitemap
- **Robots.txt:** Arama motoru yönergeleri
- **Google Search Console:** Site sahipliği doğrulaması yapıldı (meta etiketi index.html'de mevcut)
- **Image Alt Tags:** Anahtar kelime odaklı
- **Page Speed:** Optimized loading

### Performance
- **Lazy Loading:** Görseller için
- **Image Optimization:** WebP desteği
- **Minified CSS/JS:** Production build
- **Fast Loading:** Vite optimizasyonu

### Accessibility
- **Semantic HTML:** Anlamlı HTML yapısı
- **ARIA Labels:** Screen reader uyumluluğu
- **Keyboard Navigation:** Klavye navigasyonu
- **Color Contrast:** Yeterli kontrast oranları

## 🏭 Ürün Kategorileri

### 1. Isıtma / Tavlama Fırınları
- Kalıp Isıtma Fırını
- Normalize Tavlama Fırını
- Normalize Tavlama Fırını (Elektrikli / Doğal Gazlı)
- Normalize Tavlama Fırını – 20 Tonluk
- Alüminyum Tavlama Fırını

### 2. Seramik Pişirme Fırınları
- Roller Seramik Pişirme Fırını
- Hassas Döküm Elektrikli Dönerli Seramik Pişirme Fırını

### 3. Hassas Döküm Makinaları
- Hassas Döküm Mum Makinesi
- Hassas Döküm Otavlav Makinesi

### 4. Kesim Makinaları
- Seramik Kesim Makinesi – İki Kafalı

### 5. Baskı Makineleri
- Yarı Otomatik Düz Serigrafi Baskı Makinası

## 📞 İletişim Bilgileri

### Firma Bilgileri
- **Telefon:** +90 554 904 85 11
- **E-posta:** zeymirmakina@gmail.com
- **Adres:** Büsan OSB, Karatay, Konya
- **Çalışma Saatleri:** Pazartesi-Cuma 08:00-19:00

## 📝 Lisans

Bu proje Zeymir Makine için özel olarak geliştirilmiştir.

## 🤝 Katkıda Bulunma

Bu proje kurumsal bir web sitesi olduğu için katkıda bulunma kapalıdır. Sorularınız için lütfen iletişime geçin.

---

**Zeymir Makine** - Kalite ve İnovasyonun Adresi 🏭

*Son güncelleme: Kasım 2025*
