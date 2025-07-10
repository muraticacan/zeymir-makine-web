import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { getWhatsAppLinkProps } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappProps = getWhatsAppLinkProps();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="/images/logos/zeymir-makine-logo-yazili.png" 
              alt="Zeymir Makine Logo" 
              className="footer-logo-image"
            />
          </div>
          <p className="footer-description">
            Zeymir Makine; Isıtma/Tavlama Fırınları, Seramik Pişirme Fırınları, Hassas Döküm Makinaları ve Kesim Makinaları üretiminde pratik, güvenilir ve uzun ömürlü çözümler sunar.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Hızlı Linkler</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Anasayfa</Link></li>
            <li><Link to="/urunler" className="footer-link">Ürünler</Link></li>
            <li><Link to="/hakkimizda" className="footer-link">Hakkımızda</Link></li>
            <li><Link to="/iletisim" className="footer-link">İletişim</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">İletişim</h3>
          <div className="contact-info">
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Büsan OSB, Karatay, Konya</span>
            </div>
            <a href="tel:+905549048511" className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+90 554 904 85 11</span>
            </a>
            <a href="mailto:zeymirmakina@gmail.com" className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>zeymirmakina@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Zeymir Makine. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 