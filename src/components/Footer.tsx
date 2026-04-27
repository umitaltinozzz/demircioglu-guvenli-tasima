
import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-montserrat font-bold text-3xl text-white mb-4">
              <a href="/">
                            <span className="text-brand-orange">D</span>emircioğlu
              <div className="text-lg font-medium text-blue-200">NAKLİYAT</div>
              </a>
            </div>
            <p className="font-lato text-blue-100 leading-relaxed mb-6 max-w-md">
              <strong>Halis Demircioğlu</strong> güvencesiyle 20 yılı aşkın tecrübe ile 
              sigortalı, güvenli ve profesyonel nakliye hizmetleri sunuyoruz.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Shield size={16} className="text-brand-orange" />
                <span className="font-lato text-sm">Sigortalı</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <Award size={16} className="text-brand-orange" />
                <span className="font-lato text-sm">20+ Yıl Tecrübe</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-brand-orange">5000+</div>
                <div className="font-lato text-sm text-blue-200">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl text-brand-orange">100%</div>
                <div className="font-lato text-sm text-blue-200">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-6">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('ana-sayfa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-lato text-blue-200 hover:text-brand-orange transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-lato text-blue-200 hover:text-brand-orange transition-colors"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('hakkimizda')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-lato text-blue-200 hover:text-brand-orange transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-lato text-blue-200 hover:text-brand-orange transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>

            <h4 className="font-poppins font-medium text-white mt-8 mb-4">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="font-lato text-blue-200">• Evden Eve Nakliyat</li>
              <li className="font-lato text-blue-200">• Ofis Taşıma</li>
              <li className="font-lato text-blue-200">• Asansörlü Nakliyat</li>
              <li className="font-lato text-blue-200">• Sigortalı Taşımacılık</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-6">
              İletişim Bilgileri
            </h3>
            
            {/* Phone */}
            <div className="flex items-start space-x-3 mb-4">
              <Phone className="text-brand-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <a 
                  href="tel:+905326862245"
                  className="font-lato text-blue-100 hover:text-brand-orange transition-colors block"
                >
                  0532 686 22 45
                </a>
                <span className="text-blue-300 text-sm">7/24 Ulaşılabilir</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3 mb-4">
              <MessageCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <a 
                  href="https://wa.me/905326862245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lato text-blue-100 hover:text-green-400 transition-colors block"
                >
                  WhatsApp Hattı
                </a>
                <span className="text-blue-300 text-sm">Hızlı Teklif</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="text-brand-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <span className="font-lato text-blue-100 block">Pazartesi - Pazar</span>
                <span className="font-lato text-blue-100 block">08:00 - 22:00</span>
                <span className="text-blue-300 text-sm">Acil: 7/24 Destek</span>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-brand-orange mt-1 flex-shrink-0" size={20} />
              <div>
                <span className="font-lato text-blue-100 block">Hizmet Bölgesi</span>
                <span className="text-blue-300 text-sm">Türkiye Geneli</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 space-y-3">
              <a 
                href="https://wa.me/905326862245?text=Merhaba, nakliye hizmeti için teklif almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-lato font-medium transition-colors"
              >
                <MessageCircle size={16} />
                <span>Hızlı Teklif</span>
              </a>
              <a 
                href="tel:+905326862245"
                className="w-full flex items-center justify-center space-x-2 bg-brand-orange hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-lato font-medium transition-colors"
              >
                <Phone size={16} />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-lato text-blue-200 text-sm">
                © {currentYear} <strong>Demircioğlu Nakliyat</strong>. Tüm hakları saklıdır.
              </p>
              <p className="font-lato text-blue-300 text-xs mt-1">
                Halis Demircioğlu güvencesiyle profesyonel nakliye hizmetleri
              </p>
            </div>
            <div className="flex items-center space-x-6 text-blue-300 text-sm">
              <span className="font-lato">Güvenilir • Sigortalı • Profesyonel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
