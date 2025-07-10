import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü açıldığında body scroll'unu engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function - component unmount olduğunda scroll'u geri aç
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    // Ürünler sayfası için özel mantık - ürün detay sayfalarında da aktif olsun
    if (path === '/urunler') {
      return location.pathname === '/urunler' || location.pathname.startsWith('/urun/');
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img 
              src="/images/logos/zeymir-makine-logo-yazili.png" 
              alt="Zeymir Makine Logo" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/urunler" 
                  className={`nav-link ${isActive('/urunler') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/hakkimizda" 
                  className={`nav-link ${isActive('/hakkimizda') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/iletisim" 
                  className={`nav-link ${isActive('/iletisim') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header; 