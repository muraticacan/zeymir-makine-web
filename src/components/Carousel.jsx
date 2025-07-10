import { useState, useEffect, useRef } from 'react';
import '../styles/Carousel.css';

const slides = [
  {
    image: '/images/sliders/slider-1.png',
    badge: 'ISITMA FIRINLARI',
    title: 'Isıtma ve Tavlama Fırınları',
    subtitle: 'Endüstriyel Isıtma ve Tavlama Çözümleri',
    description: 'Kalıp ısıtma, normalize tavlama ve alüminyum tavlama işlemleri için özel olarak tasarlanmış endüstriyel fırınlar.',
    primaryCTA: 'Ürünlerimizi İnceleyin',
    secondaryCTA: 'Ücretsiz Teklif Al'
  },
  {
    image: '/images/sliders/slider-2.png',
    badge: 'SERAMİK FIRINLARI',
    title: 'Seramik Pişirme Fırınları',
    subtitle: 'Roller ve Dönerli Seramik Pişirme Sistemleri',
    description: 'Seramik ürünlerin pişirilmesi için roller sistemli ve dönerli fırınlar ile sürekli üretim çözümleri.',
    primaryCTA: 'Ürünlerimizi İnceleyin',
    secondaryCTA: 'Ücretsiz Teklif Al'
  },
  {
    image: '/images/sliders/slider-3.png',
    badge: 'HASSAS DÖKÜM',
    title: 'Hassas Döküm Makinaları',
    subtitle: 'Mum Makinesi ve Otavlav Sistemleri',
    description: 'Hassas döküm işlemleri için mum makinesi, otavlav makinesi ve seramik pişirme fırınları ile kaliteli üretim.',
    primaryCTA: 'Ürünlerimizi İnceleyin',
    secondaryCTA: 'Ücretsiz Teklif Al'
  }
];

const AUTO_PLAY_INTERVAL = 7000;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay & progress bar
  useEffect(() => {
    if (isHovered) return;
    
    setProgress(0);
    let start;
    function animateProgress(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      setProgress(Math.min(elapsed / AUTO_PLAY_INTERVAL, 1));
      if (elapsed < AUTO_PLAY_INTERVAL) {
        progressRef.current = requestAnimationFrame(animateProgress);
      } else {
        nextSlide();
      }
    }
    progressRef.current = requestAnimationFrame(animateProgress);
    return () => {
      cancelAnimationFrame(progressRef.current);
    };
  }, [current, isHovered]);

  // Swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
    touchStartX.current = null;
  };

  const currentSlide = slides[current];

  return (
    <div 
      className="carousel-world-class carousel-theme-red"
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, idx) => (
        <div
          className={`carousel-slide-world-class${idx === current ? ' active' : ''}`}
          key={idx}
          aria-hidden={idx !== current}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="carousel-image-world-class"
            loading="lazy"
          />
          <div className="carousel-gradient-overlay" />
        </div>
      ))}
      
      {/* World-Class Content */}
      <div className="carousel-content-world-class">
        <div className="carousel-badge-world-class">
          {currentSlide.badge}
        </div>
        <h1 className="carousel-title-world-class">
          {currentSlide.title}
        </h1>
        <h2 className="carousel-subtitle-world-class">
          {currentSlide.subtitle}
        </h2>
        <p className="carousel-description-world-class">
          {currentSlide.description}
        </p>
        <div className="carousel-cta-buttons">
          <button className="carousel-btn-primary">
            {currentSlide.primaryCTA}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-btn-secondary">
            {currentSlide.secondaryCTA}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 7.5L8.33333 12.5L17.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Premium Navigation - Minimal */}
      <button className="carousel-nav-world-class prev" onClick={prevSlide} aria-label="Önceki">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="carousel-nav-world-class next" onClick={nextSlide} aria-label="Sonraki">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Bottom Center Indicators */}
      <div className="carousel-indicators-world-class">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-indicator-world-class${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Subtle Progress Bar */}
      <div className="carousel-progress-world-class">
        <div className="carousel-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
};

export default Carousel; 