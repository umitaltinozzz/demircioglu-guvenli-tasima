
import React, { useState } from 'react';
import { Award, Users, Clock, Shield, Heart, CheckCircle } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';


const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "20 Yıllık Tecrübe",
      description: "Sektördeki uzun yıllara dayanan deneyimimizle her türlü nakliye çözümünü sunuyoruz."
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Eğitimli ve deneyimli personelimiz ile eşyalarınız emin ellerde."
    },
    {
      icon: Shield,
      title: "Sigortalı Güvence",
      description: "Tüm taşıma işlemlerimiz kapsamlı sigorta güvencesi altındadır."
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Belirlenen tarih ve saatte eksiksiz teslimat garantisi veriyoruz."
    },
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description: "Koşulsuz müşteri memnuniyeti ilkesiyle hizmet veriyoruz."
    },
    {
      icon: CheckCircle,
      title: "Halis Demircioğlu Farkı",
      description: "İşimizin başındayız, tüm süreci Halis Demircioğlu kişisel olarak yönetir."
    }
  ];

  const testimonials = [
    {
      name: "Mehmet Özkan",
      location: "Ankara",
      text: "Halis Bey ve ekibi gerçekten profesyonel. Eşyalarımın hiçbirinde çizik bile olmadı. Kesinlikle tavsiye ederim.",
      rating: 5
    },
    {
      name: "Ayşe Demir",
      location: "İstanbul", 
      text: "Taşınma sürecinde hiç stres yaşamadım. Her şey zamanında ve düzenli yapıldı. Çok memnun kaldım.",
      rating: 5
    },
    {
      name: "Ali Yılmaz",
      location: "İzmir",
      text: "Ofis taşımamızı çok hızlı ve sorunsuz hallettiler. İş akışımız hiç aksамadı. Teşekkürler!",
      rating: 5
    },
      {
    name: "Elif Kara",
    location: "Bursa",
    text: "Eşyalarımızı şehirlerarası taşıttık, zamanında ve sorunsuz bir şekilde teslim edildi. Ekip çok ilgiliydi.",
    rating: 5
  }
  ];
    
    
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
        const [selectedIndex, setSelectedIndex] = useState(0);

        const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
        const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-6">
            Neden <span className="text-brand-orange">Demircioğlu Nakliyat</span>?
          </h2>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Güvenilir hizmet anlayışımız ve müşteri odaklı yaklaşımımızla 
            nakliye sektöründe fark yaratıyoruz.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-brand-light transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/20 transition-colors">
                <reason.icon className="text-brand-orange" size={36} />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-xl text-brand-navy mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="font-lato text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-brand-light rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-bold text-3xl text-brand-navy mb-4">
              Müşterilerimiz Ne Diyor?
            </h3>
            <p className="font-lato text-gray-600">
              Hizmet kalitemizi müşteri yorumlarımızdan öğrenebilirsiniz.
            </p>
          </div>

            <div className="relative">
                {/* Slider buttons */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-gray-100 transition hidden md:block"
                  aria-label="Önceki"
                  style={{ left: '-40px' }}
                >
                  <svg width="24" height="24" fill="none" className="text-brand-navy"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-gray-100 transition hidden md:block"
                  aria-label="Sonraki"
                  style={{ right: '-40px' }}
                >
                  <svg width="24" height="24" fill="none" className="text-brand-navy"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div ref={emblaRef} className="overflow-hidden">
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <div
                        className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                        key={index}
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow mx-2">
                          {/* Stars */}
                          <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          {/* Text */}
                          <p className="font-lato text-gray-600 text-center mb-6 italic">
                            "{testimonial.text}"
                          </p>
                          <div className="text-center">
                            <p className="font-poppins font-semibold text-brand-navy">
                              {testimonial.name}
                            </p>
                            <p className="font-lato text-sm text-gray-500">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-montserrat font-bold text-3xl mb-4">
              Siz de Memnun Müşterilerimize Katılın!
            </h3>
            <p className="font-lato text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Güvenilir ve kaliteli nakliye hizmeti için hemen iletişime geçin. 
              Ücretsiz keşif ve fiyat teklifi alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905326862245?text=Merhaba, nakliye hizmeti için bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-poppins font-semibold transition-colors"
              >
                WhatsApp'tan İletişime Geç
              </a>
              <a 
                href="tel:+905326862245"
                className="bg-orange-500 hover:bg-brand-orange text-whit hover:text-black px-8 py-4 rounded-xl font-poppins font-semibold transition-colors"
              >
                Hemen Ara: 0532 686 22 45
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
