import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Ürün kategorileri
  const categories = [
    { id: 'all', name: 'Tüm Ürünler' },
    { id: 'heating-furnaces', name: 'Isıtma / Tavlama Fırınları' },
    { id: 'ceramic-furnaces', name: 'Seramik Pişirme Fırınları' },
    { id: 'precision-casting', name: 'Hassas Döküm Makinaları' },
    { id: 'cutting-machines', name: 'Kesim Makinaları' }
  ];

  // Ürün verileri (Products.jsx'ten aynı veriler)
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

  useEffect(() => {
    const foundProduct = products.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} - Zeymir Makine`;
    } else {
      // Ürün bulunamadı, ürünler sayfasına yönlendir
      navigate('/urunler');
    }
  }, [slug, navigate]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Zeymir Makine`;
      // Meta description güncelle
      const metaDesc = document.querySelector('meta[name="description"]');
      // Anahtar kelime odaklı ve özgün açıklama
      const desc = `${product.name} | ${product.shortDesc || ''} ${product.description || ''} Zeymir Makine Konya üretimi.`.trim();
      if (metaDesc) {
        metaDesc.setAttribute('content', desc);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = desc;
        document.head.appendChild(meta);
      }
      // Product schema (JSON-LD)
      const scriptId = 'product-schema-jsonld';
      let script = document.getElementById(scriptId);
      if (script) script.remove();
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: product.name,
        image: product.images && product.images.length > 0 ? window.location.origin + product.images[0] : undefined,
        description: product.description,
        brand: { '@type': 'Brand', name: 'Zeymir Makine' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          url: window.location.href
        }
      });
      document.head.appendChild(script);
      // Canonical link
      const canonicalId = 'canonical-link';
      let canonical = document.getElementById(canonicalId);
      if (canonical) canonical.remove();
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      canonical.id = canonicalId;
      document.head.appendChild(canonical);
      // Open Graph ve Twitter Card
      const ogTags = [
        { property: 'og:title', content: `${product.name} - Zeymir Makine` },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: product.images && product.images.length > 0 ? window.location.origin + product.images[0] : '' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:type', content: 'product' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${product.name} - Zeymir Makine` },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: product.images && product.images.length > 0 ? window.location.origin + product.images[0] : '' },
      ];
      ogTags.forEach(tag => {
        const selector = tag.property ? `meta[property='${tag.property}']` : `meta[name='${tag.name}']`;
        let el = document.head.querySelector(selector);
        if (el) el.remove();
        el = document.createElement('meta');
        if (tag.property) el.setAttribute('property', tag.property);
        if (tag.name) el.setAttribute('name', tag.name);
        el.setAttribute('content', tag.content);
        document.head.appendChild(el);
      });
      // Breadcrumb schema (JSON-LD)
      const breadcrumbId = 'breadcrumb-schema-jsonld';
      let breadcrumbScript = document.getElementById(breadcrumbId);
      if (breadcrumbScript) breadcrumbScript.remove();
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
            'name': product.name,
            'item': window.location.href
          }
        ]
      });
      document.head.appendChild(breadcrumbScript);
    }
  }, [product]);

  if (!product) {
    return <div>Yükleniyor...</div>;
  }

  const categoryName = categories.find(cat => cat.id === product.category)?.name;

  return (
    <div className="product-detail">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Anasayfa</Link>
          <span>/</span>
          <Link to="/urunler">Ürünler</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product Detail Content */}
      <div className="product-detail-content">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                {product.images && product.images.length > 0 ? (
                  <img 
                    src={product.images[activeImageIndex]} 
                    alt={`${product.name} | ${product.shortDesc || ''} | Zeymir Makine`}
                    className="main-image-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="image-placeholder">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                    <p>Ana Görsel</p>
                  </div>
                )}
              </div>
              <div className="thumbnail-images">
                {product.images && product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - Görsel ${index + 1}`}
                        className="thumbnail-img"
                        loading="lazy"
                      />
                    </div>
                  ))
                ) : (
                  <div className="image-placeholder small">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-header">
                <div className="product-category-badge">{categoryName}</div>
                <h1>{product.name}</h1>
                <p className="product-short-desc">{product.shortDesc}</p>
              </div>

              <div className="product-description">
                <h3>Ürün Açıklaması</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Teknik Özellikler</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>



              <div className="product-actions">
                <Link to="/iletisim" className="btn btn-primary">
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 