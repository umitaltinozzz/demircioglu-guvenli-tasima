import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 500);
      setTimeout(() => setShowTooltip(false), 5500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = "Merhaba Halis Bey, nakliye hizmetiniz hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/905326862245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative mb-4 md:mb-6 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5 max-w-[300px] md:max-w-[360px] w-[90vw] md:w-[340px] relative">
            {/* Kapat */}
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs transition-colors"
              aria-label="Kapat"
            >
              <X size={12} />
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-11 h-11 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-poppins font-semibold text-base">HD</span>
              </div>
              <div>
                <p className="font-poppins font-semibold text-brand-navy text-sm md:text-base mb-1">
                  Halis Demircioğlu
                </p>
                <p className="font-lato text-gray-600 text-sm md:text-base leading-relaxed">
                  Merhaba! Nakliye hizmetimiz için hemen <strong>WhatsApp'tan</strong> yazabilirsiniz.<br />
                  <span className="inline-block mt-1">Ücretsiz teklif alın! 🚚</span>
                </p>
              </div>
            </div>
            {/* Baloncuk Oku */}

          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className={`
          group relative w-16 h-16 md:w-20 md:h-20 bg-green-500 hover:bg-green-600 text-white 
          rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 
          flex items-center justify-center hover:scale-110 focus:outline-none
          ${isVisible ? 'animate-bounce-in' : ''}
        `}
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle size={32} className="group-hover:animate-pulse z-10" />
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 z-0"></div>
        {/* Hover text - sadece md ve üstü */}
        <div className="hidden md:block absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-lato whitespace-nowrap shadow">
            WhatsApp'tan yazın
          </div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
