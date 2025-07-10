import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = '404 - Sayfa Bulunamadı | Zeymir Makine';
  }, []);

  return (
    <main className="notfound-container">
      <div className="notfound-content">
        {/* 404 Illustration */}
        <div className="notfound-illustration">
          <div className="notfound-number">404</div>
          <div className="notfound-gears">
            <div className="gear gear-1">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,10 L58,26 L76,26 L62,38 L66,56 L50,46 L34,56 L38,38 L24,26 L42,26 Z"/>
                <circle cx="50" cy="42" r="8" fill="white"/>
              </svg>
            </div>
            <div className="gear gear-2">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,15 L56,28 L70,28 L60,38 L64,52 L50,44 L36,52 L40,38 L30,28 L44,28 Z"/>
                <circle cx="50" cy="40" r="6" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="notfound-text">
          <h1 className="notfound-title">Sayfa Bulunamadı</h1>
          <p className="notfound-description">
            Aradığınız sayfa maalesef mevcut değil. Sayfa taşınmış, silinmiş 
            veya geçici olarak erişilemez durumda olabilir.
          </p>
          
          {/* Helpful Actions */}
          <div className="notfound-actions">
            <Link to="/" className="btn-notfound btn-primary-notfound">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Ana Sayfaya Dön
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="btn-notfound btn-secondary-notfound"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19L5 12L12 5"/>
              </svg>
              Geri Git
            </button>
          </div>

          {/* Quick Links */}
          <div className="notfound-links">
            <p className="notfound-links-title">Aradığınızı bulamadınız mı? Bu bağlantıları deneyin:</p>
            <div className="notfound-quick-links">
              <Link to="/urunler" className="quick-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                Ürünlerimiz
              </Link>
              
              <Link to="/hakkimizda" className="quick-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Hakkımızda
              </Link>
              
              <Link to="/iletisim" className="quick-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="notfound-background">
        <div className="bg-pattern"></div>
      </div>
    </main>
  );
};

export default NotFound; 