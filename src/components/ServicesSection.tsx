
import React from 'react';
import { Home, Building2, Truck, Shield, Package, ArrowUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Evden Eve Nakliyat",
      description: "Eşyalarınızı titizlikle paketleyip, güvenle yeni evinize taşıyoruz.",
      features: ["Profesyonel paketleme", "Sigortalı taşıma", "Eşya montajı"]
    },
    {
      icon: Building2,
      title: "Ofis Taşıma",
      description: "İş yerinizin taşınmasını minimum kesinti ile gerçekleştiriyoruz.",
      features: ["Hızlı kurulum", "IT ekipman taşıma", "Hafta sonu çalışma"]
    },
    {
      icon: ArrowUp,
      title: "Asansörlü Nakliyat",
      description: "Yüksek katlı binalar için özel asansörlü taşıma hizmeti.",
      features: ["Profesyonel ekipman", "Güvenli taşıma", "Hızlı çözüm"]
    },
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Tüm eşyalarınız nakliye sigortası kapsamında güvende.",
      features: ["Tam kapsam sigorta", "Hasar teminatı", "Güvenli teslimat"]
    },
    {
      icon: Package,
      title: "Eşya Paketleme",
      description: "Kırılabilir ve değerli eşyalarınız için özel paketleme.",
      features: ["Koruyucu malzemeler", "Özel ambalajlama", "Etiketleme sistemi"]
    },
    {
      icon: Truck,
      title: "Araç Filosu",
      description: "Modern ve bakımlı araç filomuzla her boyutta taşıma.",
      features: ["Farklı araç seçenekleri", "GPS takip", "Temiz araçlar"]
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Hizmetlerimiz
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Demircioğlu Nakliyat</strong> olarak, her türlü taşıma ihtiyacınıza 
            profesyonel çözümler sunuyoruz. Halis Demircioğlu güvencesiyle hizmet veriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                <service.icon className="text-brand-orange" size={32} />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-xl text-brand-navy mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/905326862245?text=Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-brand-navy text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-lato font-medium"
              >
                Teklif Al
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-poppins font-semibold text-2xl text-brand-navy mb-4">
              Özel İhtiyaçlarınız İçin
            </h3>
            <p className="font-lato text-gray-600 mb-6">
              Listelediğimiz hizmetler dışında özel bir taşıma ihtiyacınız mı var? 
              Halis Demircioğlu ile iletişime geçin, size özel çözüm üretelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905326862245?text=Merhaba, özel taşıma ihtiyacım var, görüşebilir miyiz?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-poppins font-medium transition-colors"
              >
                WhatsApp'tan Danış
              </a>
              <a 
                href="tel:+905326862245"
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-poppins font-medium transition-colors"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
