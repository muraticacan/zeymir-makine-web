import { useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    document.title = 'Hakkımızda - Zeymir Makine';
    // Meta description güncelle
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = 'Zeymir Makine, Konya’da faaliyet gösteren, 15 yılı aşkın tecrübesiyle ısıtma/tavlama fırınları, seramik pişirme fırınları, hassas döküm ve kesim makinaları üreten küçük bir firmadır. Her müşterisine birebir ilgiyle yaklaşır, pratik ve güvenilir makineler üretir.';
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = desc;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="about-professional">
      {/* Hero Header Section with Background Image */}
      <section className="about-hero-header">
        <div className="hero-header-overlay">
          <div className="container">
            <div className="hero-header-content">
              <div className="corporate-badge">
                <span>KURUMSAL KİMLİK</span>
              </div>
              <h1 className="hero-header-title">Hakkımızda</h1>
              <p className="hero-header-description">
                Zeymir Makine, 15 yılı aşkın tecrübesiyle; Isıtma/Tavlama Fırınları, Seramik Pişirme Fırınları, Hassas Döküm Makinaları ve Kesim Makinaları alanlarında üretim yapan, Konya'da faaliyet gösteren bir firmadır. Her müşterisine birebir ilgiyle yaklaşır, pratik ve güvenilir makineler üretir.
              </p>
              <div className="hero-header-stats">
                <div className="hero-stat-item">
                  <div className="hero-stat-number">25+</div>
                  <div className="hero-stat-label">YIL DENEYİM</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">2012</div>
                  <div className="hero-stat-label">KURULUŞ YILI</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">100+</div>
                  <div className="hero-stat-label">BAŞARILI PROJE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company About Section */}
      <section className="company-about-professional">
        <div className="container">
          <div className="company-about-content">
            <div className="about-header">
              <h2>Firma Hakkında</h2>
              <p className="about-subtitle">Endüstriyel Fırın ve Makine Çözümlerinde Uzmanlık</p>
            </div>
            
            <div className="about-story">
              <div className="story-intro">
                <p className="story-paragraph">
                  <strong>Zeymir Makine</strong>, 2012 yılında kurulmuş ve endüstriyel fırınlar ile makine üretiminde uzmanlaşmış bir firmadır. Isıtma/Tavlama Fırınları, Seramik Pişirme Fırınları, Hassas Döküm Makinaları ve Kesim Makinaları başta olmak üzere, sanayinin ihtiyaç duyduğu yüksek kaliteli ve verimli makineleri yerli mühendislik gücüyle üretmektedir.
                </p>
                
                <p className="story-paragraph">
                  Firmamızın temel amacı, Türkiye ve bölge sanayisinin modern üretim ihtiyaçlarına uygun, güvenilir ve sürdürülebilir çözümler sunmaktır. Ar-Ge ve inovasyon odaklı yaklaşımımızla, müşterilerimizin rekabet gücünü artıracak teknolojiler geliştiriyoruz.
                </p>
              </div>

              <div className="story-development">
                <h3>Gelişim Sürecimiz</h3>
                <p className="story-paragraph">
                  Kuruluşumuzdan bu yana, müşteri memnuniyetini ve kaliteyi ön planda tutarak yüzlerce projeye imza attık. Sektördeki yenilikleri yakından takip ederek, üretim süreçlerimizi sürekli geliştiriyor ve her geçen gün ürün portföyümüzü genişletiyoruz.
                </p>
                
                <p className="story-paragraph">
                  Bugün, Zeymir Makine olarak; ısıtma/tavlama fırınları, seramik pişirme fırınları, hassas döküm makinaları ve kesim makinaları alanlarında, hem yurtiçinde hem de yurtdışında tercih edilen bir çözüm ortağıyız.
                </p>
              </div>

              <div className="story-today">
                <h3>Bugünkü Durumumuz</h3>
                <p className="story-paragraph">
                  2025 yılı itibariyle, Konya'daki işyerimizde, 100'ün üzerinde projeye imza atmış bulunuyoruz. Müşterilerimize ihtiyaçlarına uygun, pratik ve güvenilir makineler üretmeye devam ediyoruz.
                </p>
                
                <p className="story-paragraph">
                  Zeymir Makine olarak, işimizi severek ve özenle yapıyor, her müşterimize birebir ilgiyle yaklaşmayı önemsiyoruz. Kaliteden ödün vermeden, uzun ömürlü ve kullanışlı makineler üretmeye devam edeceğiz.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mission-vision-professional">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card-professional">
              <div className="card-icon-professional">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Misyonumuz</h3>
              <p>
                Müşterilerimize en yüksek kalitede taş, seramik ve cam işleme makineleri 
                sunarak sektörde güvenilir ve tercih edilen marka olmak. Teknolojik 
                yeniliklerle sürekli gelişerek müşteri memnuniyetini en üst seviyede tutmak.
              </p>
            </div>
            
            <div className="vision-card-professional">
              <div className="card-icon-professional">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>Vizyonumuz</h3>
              <p>
                Türkiye'nin önde gelen makine üreticilerinden biri olarak uluslararası 
                pazarlarda tanınan, yenilikçi ve sürdürülebilir çözümler sunan firma olmak. 
                Sektörde standart belirleyen teknolojiler geliştirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-professional">
        <div className="container">
          <div className="section-header-professional">
            <h2>Temel Değerlerimiz</h2>
            <p>İş yapış şeklimizi belirleyen ve başarımızın temelini oluşturan değerler</p>
          </div>
          
          <div className="values-grid-professional">
            <div className="value-card-professional">
              <div className="value-icon-professional">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                </svg>
              </div>
              <h4>Kalite</h4>
              <p>En yüksek kalite standartlarında üretim yaparak müşteri güvenini kazanmak ve sürdürmek.</p>
            </div>
            
            <div className="value-card-professional">
              <div className="value-icon-professional">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Güvenilirlik</h4>
              <p>Müşterilerimizle uzun vadeli güven ilişkileri kurarak sektördeki konumumuzu güçlendirmek.</p>
            </div>
            
            <div className="value-card-professional">
              <div className="value-icon-professional">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4>İnovasyon</h4>
              <p>Sürekli gelişim ve yenilikçi çözümlerle sektöre öncülük eden teknolojiler geliştirmek.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 