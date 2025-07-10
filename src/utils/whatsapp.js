// WhatsApp Utility Functions

export const WHATSAPP_CONFIG = {
  phoneNumber: '905549048511',
  defaultMessage: 'Merhaba, Zeymir Makine ürünleri hakkında bilgi almak istiyorum.'
};

/**
 * WhatsApp URL'i oluşturur
 * @param {string} message - Özel mesaj (opsiyonel, yoksa default mesaj kullanılır)
 * @returns {string} WhatsApp URL'i
 */
export const getWhatsAppURL = (message = WHATSAPP_CONFIG.defaultMessage) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

/**
 * WhatsApp'ı yeni sekmede açar
 * @param {string} message - Özel mesaj (opsiyonel)
 */
export const openWhatsApp = (message) => {
  const url = getWhatsAppURL(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * WhatsApp link özelliklerini döner (React Link component'i için)
 * @param {string} message - Özel mesaj (opsiyonel)
 * @returns {object} Link özellikleri
 */
export const getWhatsAppLinkProps = (message) => ({
  href: getWhatsAppURL(message),
  target: '_blank',
  rel: 'noopener noreferrer'
}); 