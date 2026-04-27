
import React from 'react';
import { Phone, MessageCircle, Shield, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  return (
        <section
          id="ana-sayfa"
          className="
            relative min-h-screen flex items-center justify-center
            bg-gradient-to-br from-brand-navy via-blue-800 to-brand-navy
            pt-36 sm:pt-20 md:pt-24
          "
        >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-fade-in">
            <span className="text-brand-orange">Demircioğlu Nakliyat</span>
            <br />
            <span className="text-3xl md:text-4xl">ile Güvenle Taşının</span>
          </h1>

          {/* Subtitle */}
          <p className="font-lato text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            <strong>Halis Demircioğlu</strong> güvencesiyle, sigortalı, asansörlü ve 
            <br className="hidden md:block" />
            profesyonel evden eve nakliyat hizmetleri
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="text-brand-orange" size={20} />
              <span className="font-lato">Sigortalı Taşıma</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="text-brand-orange" size={20} />
              <span className="font-lato">20 Yıl Tecrübe</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="text-brand-orange" size={20} />
              <span className="font-lato">Profesyonel Ekip</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://wa.me/905326862245?text=Merhaba, nakliyat hizmeti için fiyat teklifi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle size={24} className="group-hover:animate-pulse" />
              <span>WhatsApp'tan Fiyat Teklifi Al</span>
            </a>
            
            <a 
              href="tel:+905326862245"
              className="group flex items-center justify-center space-x-3 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Hemen Ara: 0532 686 22 45</span>
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-blue-200 mt-8 font-lato animate-fade-in" style={{animationDelay: '0.8s'}}>
            <strong>Ücretsiz keşif ve fiyat teklifi</strong> için hemen iletişime geçin!
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => {
            const target = document.getElementById('iletisim');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Aşağı Kaydır"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start group-hover:border-white transition-all">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-white"></div>
          </div>
        </div>

    </section>
  );
};

export default HeroSection;
