import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Carousel from '../components/Carousel';

// Slug oluşturucu fonksiyon
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const Home = () => {
  useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = 'Zeymir Makine - Isıtma Fırınları, Seramik Pişirme Fırınları ve Hassas Döküm Makinaları';
    // Meta description güncelle
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Zeymir Makine, Konya’da faaliyet gösteren, 15 yılı aşkın tecrübesiyle ısıtma/tavlama fırınları, seramik pişirme fırınları, hassas döküm ve kesim makinaları üreten küçük bir firmadır. Her müşterisine birebir ilgiyle yaklaşır, pratik ve güvenilir makineler üretir.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Zeymir Makine, Konya’da faaliyet gösteren, 15 yılı aşkın tecrübesiyle ısıtma/tavlama fırınları, seramik pişirme fırınları, hassas döküm ve kesim makinaları üreten küçük bir firmadır. Her müşterisine birebir ilgiyle yaklaşır, pratik ve güvenilir makineler üretir.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
        </svg>
      ),
      title: "Kaliteli Üretim",
      description: "Kaliteli üretim yaparak, müşterilerimize güvenilir ve dayanıklı makineler sunuyoruz."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Güvenilir Hizmet",
      description: "Müşterilerimize güvenilir ve kaliteli hizmet sunarak, ihtiyaçlarını karşılayan çözümler üretiyoruz."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Özel Çözümler",
      description: "Müşterilerimizin özel ihtiyaçlarına göre özelleştirilmiş makine çözümleri geliştiriyoruz."
    }
  ];

  const products = [
    {
      title: "Isıtma / Tavlama Fırınları",
      description: "Kalıp ısıtma, normalize tavlama ve alüminyum tavlama işlemleri için özel olarak tasarlanmış endüstriyel fırınlar.",
      features: ["Hassas Sıcaklık Kontrolü", "Enerji Verimli Tasarım", "Güvenlik Sistemleri"]
    },
    {
      title: "Seramik Pişirme Fırınları", 
      description: "Seramik ürünlerin pişirilmesi için roller sistemli ve dönerli fırınlar ile sürekli üretim çözümleri.",
      features: ["Roller Taşıma Sistemi", "Dönerli Tasarım", "Sürekli Üretim"]
    },
    {
      title: "Hassas Döküm Makinaları",
      description: "Hassas döküm işlemleri için mum makinesi, otavlav makinesi ve seramik pişirme fırınları.",
      features: ["Hassas Üretim", "Otomatik İşlem", "Kalite Kontrol"]
    },
    {
      title: "Kesim Makinaları",
      description: "Seramik malzemelerin kesimi için iki kafalı endüstriyel kesim makinesi.",
      features: ["İki Kafalı Sistem", "Hassas Kesim", "Yüksek Verimlilik"]
    }
  ];

  const references = [
  {
    name: "Akın Makina Oto. San. ve Tic. Ltd. Şti",
    logo: "/images/references/akin-makina-logo.png"
  },
  {
    name: "Ardemir Döküm San. Tic. A.Ş.",
    logo: "/images/references/ardemir-logo.png"
  },
  {
    name: "FERMO GEAR",
    logo: "/images/references/fermo-gear-logo.png"
  },
  {
    name: "FMC HİDROLİK OTOMOTİV MAKİNA SANAYİ TİCARET A.Ş",
    logo: "/images/references/fmc-logo.png"
  },
  {
    name: "GAZİ METAL",
    logo: "/images/references/gazi-metal-logo.png"
  },
  {
    name: "GAYSAN",
    logo: "/images/references/gaysan-logo.png"
  },
  {
    name: "IRONMASTER Metal Tarım Otomotiv Sanayi ve Ticaret A.Ş.",
    logo: "/images/references/ironmaster-logo.png"
  },
  {
    name: "ISC METALURJİ DÖKÜM MAKİNE PETROL İNŞ. OTOM.SAN.VE TİC.AŞ.",
    logo: "/images/references/isc-metalurji-logo.png"
  },
  {
    name: "Konyalılar Yüzey İşlem Teknolojileri",
    logo: "/images/references/konyalilar-logo.png"
  },
  {
    name: "Mutlualpler Döküm ve Makine Sanayi Tic. Ltd. Şti.",
    logo: "/images/references/mutlualpler-logo.png"
  },
  {
    name: "ÖZDEMİRHAN DÖKÜM ve Tarım Makinaları İml. Paz. San. Tic. Ltd. Şti.",
    logo: "/images/references/ozdemirhan-logo.png"
  },
  {
    name: "Şakalak Tarım Makinaları Sanayi ve Tic. A.Ş.",
    logo: "/images/references/sakalak-logo.jpg"
  },
  {
    name: "Voldi Otomotiv Dişli Sanayi",
    logo: "/images/references/voldi-logo.jpg"
  },
  {
    name: "Yenmak Motor Parçaları",
    logo: "/images/references/yenmak-logo.png"
  }
];

  return (
    <main className="home-container">
      <Carousel />
      
      {/* Professional Hero Section */}
      <section className="hero-professional">
        <div className="container">
          <div className="hero-content-professional">
            <h1 className="hero-title-professional">
              <span className="company-name">ZEYMİR MAKİNE</span>
              <span className="company-tagline">Güvenilir Endüstriyel Çözümler</span>
            </h1>
            
            <p className="hero-description-professional">
              15 yılı aşkın deneyimimizle, ısıtma fırınları, seramik pişirme fırınları, hassas döküm makinaları 
              ve kesim makinaları alanlarında sektörün güvenilir çözüm ortağıyız. Kaliteli üretim ve müşteri memnuniyeti önceliğimizdir.
            </p>
            
            <div className="hero-stats-professional">
              <div className="stat-professional">
                <div className="stat-number-professional">100+</div>
                <div className="stat-label-professional">Başarılı Proje</div>
              </div>
              <div className="stat-professional">
                <div className="stat-number-professional">25+</div>
                <div className="stat-label-professional">Yıl Deneyim</div>
              </div>
              <div className="stat-professional">
                <div className="stat-number-professional">99%</div>
                <div className="stat-label-professional">Müşteri Memnuniyeti</div>
              </div>
            </div>
            
            <div className="hero-actions-professional">
              <Link to="/urunler" className="btn-professional btn-primary-professional">
                Ürünlerimizi İnceleyin
              </Link>
              <Link to="/iletisim" className="btn-professional btn-secondary-professional">
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="features-professional">
        <div className="container">
          <div className="section-header-professional">
            <h2 className="section-title-professional">Neden Zeymir Makine?</h2>
            <p className="section-subtitle-professional">
              Sektörde güvenilir konumumuzu korumamızı sağlayan temel değerlerimiz
            </p>
          </div>
          
          <div className="features-grid-professional">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-professional">
                <div className="feature-icon-professional">
                  {feature.icon}
                </div>
                <h3 className="feature-title-professional">{feature.title}</h3>
                <p className="feature-description-professional">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Products Section */}
      <section className="products-professional">
        <div className="container">
          <div className="section-header-professional">
            <h2 className="section-title-professional">Ana Ürün Gruplarımız</h2>
            <p className="section-subtitle-professional">
              Endüstriyel ihtiyaçlarınıza yönelik kaliteli makine çözümleri
            </p>
          </div>
          
          <div className="products-grid-professional">
            {products.map((product, index) => (
              <div key={index} className="product-card-professional">
                <div className="product-content-professional">
                  <h3 className="product-title-professional">{product.title}</h3>
                  <p className="product-description-professional">{product.description}</p>
                  <Link
                    to={`/urunler/${toSlug(product.title)}`}
                    className="product-link-professional"
                  >
                    Detayları İncele →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional References Section */}
      <section className="references-professional">
        <div className="container">
          <div className="section-header-professional">
            <h2 className="section-title-professional">Referanslarımız</h2>
            <p className="section-subtitle-professional">
              Güvenilir çözümlerimizle hizmet verdiğimiz seçkin firmalar
            </p>
          </div>
          
          <div className="references-grid-professional">
            {references.map((reference, index) => (
              <div key={index} className="reference-card-professional">
                <div className="reference-logo-container">
                  <img 
                    src={reference.logo} 
                    alt={reference.name}
                    className="reference-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="reference-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                      <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"/>
                    </svg>
                    <span>{reference.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 