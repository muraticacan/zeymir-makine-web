import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/Products.css';

// Slug oluşturucu fonksiyon (Home.jsx ile aynı olmalı)
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

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { kategoriSlug } = useParams();

  // Ürün kategorileri
  const categories = [
    { id: 'all', name: 'Tüm Ürünler' },
    { id: 'heating-furnaces', name: 'Isıtma / Tavlama Fırınları' },
    { id: 'ceramic-furnaces', name: 'Seramik Pişirme Fırınları' },
    { id: 'precision-casting', name: 'Hassas Döküm Makinaları' },
    { id: 'cutting-machines', name: 'Kesim Makinaları' }
  ];

  // Kategori adı ile id eşlemesi
  const categoryNameToId = Object.fromEntries(categories.map(cat => [cat.name, cat.id]));
  const categorySlugToId = Object.fromEntries(categories.map(cat => [toSlug(cat.name), cat.id]));

  // URL'den kategori parametresini oku
  function getCategoryFromURL() {
    // Öncelik: slug
    if (kategoriSlug && categorySlugToId[kategoriSlug]) {
      return categorySlugToId[kategoriSlug];
    }
    // Eski query parametre desteği
    const params = new URLSearchParams(location.search);
    const kategori = params.get('kategori');
    if (kategori && categoryNameToId[kategori]) {
      return categoryNameToId[kategori];
    }
    return 'all';
  }

  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromURL());

  useEffect(() => {
    setSelectedCategory(getCategoryFromURL());
  }, [location.search, kategoriSlug]);

  useEffect(() => {
    document.title = 'Ürünler - Zeymir Makine';
    // Meta description güncelle
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Zeymir Makine ürünler: Isıtma fırınları, seramik pişirme fırınları, hassas döküm ve kesim makinaları. Tüm endüstriyel ürünlerimizi inceleyin.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Zeymir Makine ürünler: Isıtma fırınları, seramik pişirme fırınları, hassas döküm ve kesim makinaları. Tüm endüstriyel ürünlerimizi inceleyin.';
      document.head.appendChild(meta);
    }
    // Breadcrumb schema (JSON-LD)
    const breadcrumbId = 'breadcrumb-schema-jsonld';
    let breadcrumbScript = document.getElementById(breadcrumbId);
    if (breadcrumbScript) breadcrumbScript.remove();
    const selectedCat = categories.find(cat => cat.id === selectedCategory);
    if (selectedCat && selectedCat.id !== 'all') {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.id = breadcrumbId;
      breadcrumbScript.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Anasayfa',
            'item': window.location.origin + '/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Ürünler',
            'item': window.location.origin + '/urunler'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': selectedCat.name,
            'item': window.location.href
          }
        ]
      });
      document.head.appendChild(breadcrumbScript);
    }
  }, [selectedCategory, categories]);

  // Ürün verileri - Yeni kategoriler ve ürünler
  const products = [
    {
      id: 1,
      name: 'Kalıp Isıtma Fırını',
      slug: 'kalip-isitma-firini',
      category: 'heating-furnaces',
      description: 'Kalıp ısıtma işlemleri için özel olarak tasarlanmış endüstriyel fırın. Hassas sıcaklık kontrolü ve enerji verimliliği ile maksimum performans.',
      shortDesc: 'Kalıp ısıtma işlemleri için özel fırın',
      features: [
        'Hassas sıcaklık kontrolü',
        'Enerji tasarruflu tasarım',
        'Otomatik ısıtma sistemi',
        'Güvenlik sensörleri',
        'Kolay kullanım arayüzü',
        'Düşük bakım maliyeti'
      ],
      images: [
        '/images/products/firinlar/kalip-isitma-firini-1.jpg'
      ]
    },
    {
      id: 2,
      name: 'Normalize Tavlama Fırını',
      slug: 'normalize-tavlama-firini',
      category: 'heating-furnaces',
      description: 'Metal malzemelerin normalize tavlama işlemleri için geliştirilmiş endüstriyel fırın. Homojen ısıtma ve soğutma ile optimal malzeme özellikleri.',
      shortDesc: 'Metal normalize tavlama işlemleri için fırın',
      features: [
        'Homojen ısıtma sistemi',
        'PLC kontrollü otomatik sistem',
        'Enerji tasarruflu izolasyon',
        'Çoklu güvenlik sensörleri',
        'Otomatik soğutma sistemi',
        'Uzaktan izleme desteği'
      ],
      images: [
        '/images/products/firinlar/normalize-tavlama-firini-1.jpg'
      ]
    },
    {
      id: 3,
      name: 'Normalize Tavlama Fırını (Elektrikli / Doğal Gazlı)',
      slug: 'normalize-tavlama-firini-elektrikli-dogal-gazli',
      category: 'heating-furnaces',
      description: 'Elektrikli ve doğal gazlı seçenekleri ile normalize tavlama işlemleri için çok amaçlı endüstriyel fırın. Enerji kaynağına göre optimize edilmiş tasarım.',
      shortDesc: 'Elektrikli ve doğal gazlı normalize tavlama fırını',
      features: [
        'Çift enerji kaynağı seçeneği',
        'Hassas sıcaklık kontrolü',
        'Enerji tasarruflu tasarım',
        'Otomatik yakıt değiştirme',
        'Güvenlik sensörleri',
        'Kolay bakım ve temizlik'
      ],
      images: [
        '/images/products/firinlar/normalize-tavlama-elektrikli-1.jpg'
      ]
    },
    {
      id: 4,
      name: 'Normalize Tavlama Fırını – 20 Tonluk',
      slug: 'normalize-tavlama-firini-20-tonluk',
      category: 'heating-furnaces',
      description: 'Yüksek kapasiteli normalize tavlama işlemleri için özel olarak tasarlanmış 20 tonluk endüstriyel fırın. Büyük ölçekli üretim için ideal.',
      shortDesc: '20 tonluk yüksek kapasiteli normalize tavlama fırını',
      features: [
        '20 ton kapasite',
        'Yüksek verimli ısıtma',
        'PLC kontrollü sistem',
        'Çoklu güvenlik protokolü',
        'Otomatik yükleme sistemi',
        'Enerji tasarruflu tasarım'
      ],
      images: [
        '/images/products/firinlar/normalize-tavlama-20ton-1.jpg'
      ]
    },
    {
      id: 5,
      name: 'Alüminyum Tavlama Fırını',
      slug: 'aluminyum-tavlama-firini',
      category: 'heating-furnaces',
      description: 'Alüminyum ve alüminyum alaşımlarının tavlama işlemleri için özel olarak tasarlanmış endüstriyel fırın. Hassas sıcaklık kontrolü ile optimal sonuçlar.',
      shortDesc: 'Alüminyum tavlama işlemleri için özel fırın',
      features: [
        'Alüminyum özel tasarım',
        'Hassas sıcaklık kontrolü',
        'Enerji tasarruflu izolasyon',
        'Otomatik soğutma sistemi',
        'Güvenlik sensörleri',
        'Kolay kullanım arayüzü'
      ],
      images: [
        '/images/products/firinlar/aluminyum-tavlama-firini-1.jpg'
      ]
    },
    {
      id: 6,
      name: 'Roller Seramik Pişirme Fırını',
      slug: 'roller-seramik-pisirme-firini',
      category: 'ceramic-furnaces',
      description: 'Seramik ürünlerin pişirilmesi için geliştirilmiş roller sistemli endüstriyel fırın. Sürekli üretim için optimize edilmiş tasarım.',
      shortDesc: 'Roller sistemli seramik pişirme fırını',
      features: [
        'Roller taşıma sistemi',
        'Sürekli üretim kapasitesi',
        'Hassas sıcaklık kontrolü',
        'Otomatik besleme sistemi',
        'Enerji tasarruflu tasarım',
        'Kolay bakım ve temizlik'
      ],
      images: [
        '/images/products/seramik-pisirme-firinlari/roller-seramik-firini-1.jpg',
        '/images/products/seramik-pisirme-firinlari/roller-seramik-firini-2.jpg'
      ]
    },
    {
      id: 7,
      name: 'Hassas Döküm Elektrikli Dönerli Seramik Pişirme Fırını',
      slug: 'hassas-dokum-elektrikli-donerli-seramik-pisirme-firini',
      category: 'ceramic-furnaces',
      description: 'Hassas döküm seramik ürünlerin pişirilmesi için özel olarak tasarlanmış elektrikli dönerli fırın. Hassas sıcaklık kontrolü ile kaliteli üretim.',
      shortDesc: 'Hassas döküm seramik pişirme fırını',
      features: [
        'Dönerli tasarım',
        'Hassas sıcaklık kontrolü',
        'Elektrikli ısıtma sistemi',
        'Otomatik döndürme mekanizması',
        'Enerji tasarruflu tasarım',
        'Güvenlik sensörleri'
      ],
      images: [
        '/images/products/hassas-dokum/hassas-dokum-elektrikli-donerli-seramik-pisirme-firini-1.jpg'
      ]
    },
    {
      id: 8,
      name: 'Hassas Döküm Mum Makinesi',
      slug: 'hassas-dokum-mum-makinesi',
      category: 'precision-casting',
      description: 'Hassas döküm işlemleri için mum model üretimi yapan özel makine. Hassas kalıp üretimi ile kaliteli döküm sonuçları.',
      shortDesc: 'Hassas döküm mum model üretim makinesi',
      features: [
        'Hassas mum üretimi',
        'Otomatik kalıp sistemi',
        'PLC kontrollü işlem',
        'Kalite kontrol sistemi',
        'Kolay kullanım arayüzü',
        'Düşük bakım maliyeti'
      ],
      images: [
        '/images/products/hassas-dokum/hassas-dokum-mum-makinesi-1.jpg',
        '/images/products/hassas-dokum/hassas-dokum-mum-makinesi-2.jpg'
      ]
    },
    {
      id: 9,
      name: 'Hassas Döküm Otavlav Makinesi',
      slug: 'hassas-dokum-otavlav-makinesi',
      category: 'precision-casting',
      description: 'Hassas döküm işlemlerinde otavlav (mum alma) işlemi için özel olarak tasarlanmış makine. Otomatik işlem ile verimli üretim.',
      shortDesc: 'Hassas döküm otavlav işlem makinesi',
      features: [
        'Otomatik otavlav işlemi',
        'Hassas sıcaklık kontrolü',
        'PLC kontrollü sistem',
        'Güvenlik sensörleri',
        'Kolay temizlik sistemi',
        'Enerji tasarruflu tasarım'
      ],
      images: [
        '/images/products/hassas-dokum/hassas-dokum-otavlav-makinesi-1.jpg',
        '/images/products/hassas-dokum/hassas-dokum-otavlav-makinesi-2.jpg',
        '/images/products/hassas-dokum/hassas-dokum-otavlav-makinesi-3.jpg'
      ]
    },

    {
      id: 10,
      name: 'Seramik Kesim Makinesi – İki Kafalı',
      slug: 'seramik-kesim-makinesi-iki-kafali',
      category: 'cutting-machines',
      description: 'Seramik malzemelerin kesimi için geliştirilmiş iki kafalı endüstriyel kesim makinesi. Yüksek verimlilik ve hassas kesim.',
      shortDesc: 'İki kafalı seramik kesim makinesi',
      features: [
        'İki kafalı kesim sistemi',
        'Hassas kesim teknolojisi',
        'Otomatik besleme sistemi',
        'PLC kontrollü işlem',
        'Güvenlik sensörleri',
        'Kolay kullanım arayüzü'
      ],
      images: [
        '/images/products/kesim-makineleri/seramik-kesim-makinesi-iki-kafali-1.jpg'
      ]
    }
  ];

  // Filtrelenmiş ürünler
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (productSlug) => {
    navigate(`/urun/${productSlug}`);
  };

  // Kategori değişim fonksiyonu
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      navigate('/urunler');
    } else {
      const category = categories.find(cat => cat.id === categoryId);
      if (category) {
        navigate(`/urunler/${toSlug(category.name)}`);
      }
    }
  };

  return (
    <div className="products">
      {/* Hero Section with Background */}
      <section className="products-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="products-hero-content">
            <div className="hero-badge">
              ENDÜSTRİYEL MAKİNE ÇÖZÜMLERİ
            </div>
            <h1>Ürünlerimiz</h1>
            <p>Isıtma fırınları, seramik pişirme fırınları, hassas döküm makinaları ve kesim makinaları alanlarında öncü, yenilikçi ve güvenilir makine çözümlerimizi keşfedin. 25+ yıllık deneyimimizle üretim verimliliğinizi artırın.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">YIL DENEYİM</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">ÜRÜN KATEGORİSİ</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">BAŞARILI PROJE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Ürün Kategorileri</h2>
            <p>İhtiyacınıza uygun makine kategorisini seçin</p>
          </div>
          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">
                  ({category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {selectedCategory === 'all' ? 'Tüm Ürünlerimiz' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p>{filteredProducts.length} ürün listeleniyor</p>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-image">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="product-image-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="product-placeholder">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                        <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"/>
                      </svg>
                    </div>
                  )}
                  <div className="product-badge">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </div>
                  <div className="product-overlay">
                    <button 
                      className="quick-view-btn"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      Hızlı İncele
                    </button>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <div className="product-category">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </div>
                  </div>
                  <div className="product-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      Detayları İncele
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => navigate('/iletisim')}
                    >
                      Teklif Al
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 