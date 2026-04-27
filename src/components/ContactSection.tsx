
import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Merhaba Halis Bey,

Nakliye hizmeti için bilgi almak istiyorum:

• Ad Soyad: ${formData.name}
• Telefon: ${formData.phone}
• Nereden: ${formData.from}
• Nereye: ${formData.to}
• Mesaj: ${formData.message}

En kısa sürede geri dönüş bekliyorum.`;

    const whatsappUrl = `https://wa.me/905326862245?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="iletisim" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            İletişim
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Nakliye hizmetimiz hakkında bilgi almak ve <strong>ücretsiz fiyat teklifi</strong> 
          <br />  almak için hemen iletişime geçin. Halis Demircioğlu size kişisel olarak yardımcı olacak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-poppins font-semibold text-2xl text-brand-navy mb-8">
              İletişim Bilgileri
            </h3>

            {/* Phone */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-brand-navy mb-1">
                  Telefon
                </h4>
                <a 
                  href="tel:+905326862245"
                  className="font-lato text-gray-600 hover:text-brand-orange transition-colors text-lg"
                >
                  0532 686 22 45
                </a>
                <p className="font-lato text-sm text-gray-500 mt-1">
                  7/24 ulaşılabilir
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-brand-navy mb-1">
                  WhatsApp
                </h4>
                <a 
                  href="https://wa.me/905326862245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lato text-gray-600 hover:text-green-600 transition-colors text-lg"
                >
                  0532 686 22 45
                </a>
                <p className="font-lato text-sm text-gray-500 mt-1">
                  Hızlı teklif için önerilen yöntem
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-brand-navy mb-1">
                  Çalışma Saatleri
                </h4>
                <p className="font-lato text-gray-600">
                  Pazartesi - Pazar
                </p>
                <p className="font-lato text-gray-600">
                  08:00 - 22:00
                </p>
                <p className="font-lato text-sm text-gray-500 mt-1">
                  Acil durumlar için 7/24
                </p>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-brand-navy mb-1">
                  Hizmet Bölgesi
                </h4>
                <p className="font-lato text-gray-600">
                  Türkiye geneli nakliye hizmeti
                </p>
                <p className="font-lato text-sm text-gray-500 mt-1">
                  Şehir içi ve şehirlerarası
                </p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/905326862245?text=Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-poppins font-medium transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp'tan Hızlı Teklif</span>
              </a>
              <a 
                href="tel:+905326862245"
                className="w-full flex items-center justify-center space-x-3 bg-brand-orange hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-poppins font-medium transition-colors"
              >
                <Phone size={20} />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-poppins font-semibold text-2xl text-brand-navy mb-2">
                Hızlı Teklif Formu
              </h3>
              <p className="font-lato text-gray-600 mb-8">
                Aşağıdaki formu doldurarak WhatsApp üzerinden detaylı teklif alabilirsiniz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-lato font-medium text-brand-navy mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent font-lato"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-lato font-medium text-brand-navy mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent font-lato"
                      placeholder="0532 XXX XX XX"
                    />
                  </div>
                </div>

                {/* From and To */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from" className="block font-lato font-medium text-brand-navy mb-2">
                      Nereden *
                    </label>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent font-lato"
                      placeholder="Mevcut adresiniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="to" className="block font-lato font-medium text-brand-navy mb-2">
                      Nereye *
                    </label>
                    <input
                      type="text"
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent font-lato"
                      placeholder="Yeni adresiniz"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-lato font-medium text-brand-navy mb-2">
                    Ek Bilgiler
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent font-lato resize-none"
                    placeholder="Taşınacak eşya miktarı, özel istekleriniz, taşınma tarihi gibi detayları belirtebilirsiniz..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-brand-navy hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-poppins font-semibold transition-colors"
                >
                  <Send size={20} />
                  <span>WhatsApp'a Gönder ve Teklif Al</span>
                </button>

                <p className="text-sm text-gray-500 text-center font-lato">
                  Form gönderildiğinde WhatsApp uygulaması açılacak ve 
                  Halis Demircioğlu ile doğrudan iletişime geçeceksiniz.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-brand-navy rounded-3xl p-8 text-white">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              💡 Hızlı İpucu
            </h3>
            <p className="font-lato text-blue-100 max-w-3xl mx-auto leading-relaxed">
              En hızlı ve etkili iletişim yöntemi <strong>WhatsApp</strong>'tır. 
              Halis Demircioğlu size kısa sürede kişisel olarak geri dönüş yapacak 
              ve detaylı fiyat teklifi sunacaktır. Ücretsiz keşif hizmeti de mevcuttur!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
