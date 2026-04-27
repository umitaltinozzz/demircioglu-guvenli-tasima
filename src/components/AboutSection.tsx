
import React from 'react';
import { User, Target, Eye, CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';


const AboutSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Güvenilirlik",
      description: "Sözümüzün arkasında durur, verdiğimiz hizmeti eksiksiz yerine getiririz."
    },
    {
      icon: Target,
      title: "Kalite",
      description: "En iyi hizmeti sunmak için sürekli kendimizi geliştiririz."
    },
    {
      icon: User,
      title: "Kişisel Yaklaşım",
      description: "Her müşterimizin özel ihtiyaçlarını anlayıp ona göre hizmet veririz."
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-navy mb-8">
              Hakkımızda
            </h2>
            
            {/* Halis Demircioğlu Introduction */}
            <div className="mb-8">
              <h3 className="font-poppins font-semibold text-2xl text-brand-orange mb-4">
                Halis Demircioğlu
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed mb-6">
                20 yılı aşkın süredir nakliye sektöründe faaliyet gösteren 
                <strong> Halis Demircioğlu</strong>, işine olan tutkusu ve müşteri memnuniyetine 
                verdiği önemle sektörde saygın bir yer edinmiştir.
              </p>
              <p className="font-lato text-gray-600 leading-relaxed mb-6">
                Her nakliye işlemini kişisel olarak takip eden Halis Bey, 
                müşterilerinin eşyalarına kendi eşyası gibi özen göstermektedir. 
                "Güven" kelimesi işimizin temel taşıdır.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-xl text-brand-navy mb-3">
                    Misyonumuz
                  </h4>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    Müşterilerimizin taşınma sürecini stressiz ve güvenli bir şekilde 
                    gerçekleştirmek, her eşyayı kendi eşyamız gibi özenle taşımaktır.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-xl text-brand-navy mb-3">
                    Vizyonumuz
                  </h4>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    Türkiye'nin en güvenilir nakliye firması olmak ve her şehirde 
                    kaliteli hizmet standartlarımızı yaygınlaştırmaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div>
            {/* Placeholder for team photo */}
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-3xl"
            >
              <div className="bg-gradient-to-br from-brand-navy to-blue-800 rounded-3xl p-8 text-white mb-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User size={64} className="text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl mb-2">
                    Halis Demircioğlu
                  </h3>
                  <p className="text-blue-100 mb-4">Kurucu & Genel Müdür</p>
                  <p className="font-lato text-blue-100 leading-relaxed">
                    "Müşterilerimin güveni benim en büyük sermayem. 
                    Her işi kendi evim gibi titizlikle yapıyorum."
                  </p>
                </div>
              </div>
            </Tilt>


            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-light rounded-2xl p-6 text-center">
                <div className="font-montserrat font-bold text-3xl text-brand-navy mb-2">
                  20+
                </div>
                <div className="font-lato text-gray-600">
                  Yıl Tecrübe
                </div>
              </div>
              <div className="bg-brand-light rounded-2xl p-6 text-center">
                <div className="font-montserrat font-bold text-3xl text-brand-navy mb-2">
                  5000+
                </div>
                <div className="font-lato text-gray-600">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="bg-brand-light rounded-2xl p-6 text-center">
                <div className="font-montserrat font-bold text-3xl text-brand-navy mb-2">
                  100%
                </div>
                <div className="font-lato text-gray-600">
                  Memnuniyet
                </div>
              </div>
              <div className="bg-brand-light rounded-2xl p-6 text-center">
                <div className="font-montserrat font-bold text-3xl text-brand-navy mb-2">
                  24/7
                </div>
                <div className="font-lato text-gray-600">
                  Destek
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="font-montserrat font-bold text-3xl text-center text-brand-navy mb-12">
            Değerlerimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-brand-light hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-brand-orange" size={32} />
                </div>
                <h4 className="font-poppins font-semibold text-xl text-brand-navy mb-4">
                  {value.title}
                </h4>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
