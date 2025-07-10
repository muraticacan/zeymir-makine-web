import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { getWhatsAppLinkProps } from '../utils/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const whatsappProps = getWhatsAppLinkProps();

  useEffect(() => {
    document.title = 'İletişim - Zeymir Makine';
    // Meta description güncelle
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Zeymir Makine iletişim: Endüstriyel makine çözümleriniz için hızlı iletişim, adres, telefon ve WhatsApp bilgileri.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Zeymir Makine iletişim: Endüstriyel makine çözümleriniz için hızlı iletişim, adres, telefon ve WhatsApp bilgileri.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // 3 saniye sonra status'u temizle
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <h1>İletişime Geçin</h1>
            <p>Endüstriyel makine çözümleriniz için bizimle iletişime geçin. Size en uygun çözümü sunmak için buradayız.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>İletişim Bilgileri</h2>
            <p>Bize en hızlı şekilde ulaşabileceğiniz kanallarımız</p>
          </div>
          <div className="contact-info-grid">
            <div className="contact-info-card glass-card address-card">
              <div className="contact-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="address-content">
                <h3>Adres</h3>
                <div className="address-lines">
                  <p>Fevziçakmak Mahallesi</p>
                  <p>10644. Sk. No: 40/C</p>
                  <p>Büsan Organize Sanayi Bölgesi</p>
                  <p>42050 Karatay / Konya</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cards-column">
              <div className="contact-info-card glass-card phone-card compact">
                <div className="phone-content">
                  <div className="phone-icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="phone-info">
                    <h3>Hemen Ara</h3>
                    <a href="tel:+905549048511" className="phone-number">+90 554 904 85 11</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-info-card glass-card phone-card compact">
                <div className="phone-content">
                  <div className="phone-icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="phone-info">
                    <h3>E-posta</h3>
                    <a href="mailto:zeymirmakina@gmail.com" className="phone-number">zeymirmakina@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-info-card glass-card phone-card compact">
                <div className="phone-content">
                  <div className="phone-icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                    </svg>
                  </div>
                  <div className="phone-info">
                    <h3>WhatsApp</h3>
                    <a {...whatsappProps} className="phone-number">Hızlı Mesajlaşma</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Map & Info */}
            <div className="map-info-container">
              <div className="map-container glass-card">
                <h3>Konum & Ulaşım</h3>
                <p>İşyerimizi ziyaret etmek için aşağıdaki haritayı kullanabilirsiniz.</p>
                
                <div className="map-iframe">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1573.7401594795754!2d32.544031!3d37.919208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d09100100066ef%3A0x9e3d7d7ac736d4cb!2zxLDDp2HDp2FuIFRhcsSxbSAmIFpleW1pciBNYWtpbmU!5e0!3m2!1str!2str!4v1751961323944!5m2!1str!2str" 
                    style={{
                      border: 0,
                      width: '100%',
                      height: '600px',
                      borderRadius: '16px'
                    }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zeymir Makine Konum"
                  ></iframe>
                </div>
              </div>

              <div className="working-hours-container glass-card">
                <h3>Çalışma Saatleri</h3>
                <div className="working-hours">
                  <div className="hours-item">
                    <span>Pazartesi - Cumartesi</span>
                    <span className="time">08:00 - 19:00</span>
                  </div>
                  <div className="hours-item">
                    <span>Pazar</span>
                    <span className="time closed">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 