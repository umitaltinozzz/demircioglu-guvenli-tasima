
import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-montserrat font-bold text-2xl text-brand-navy">
            <a href="/">
              <span className="text-brand-orange">D</span>emircioğlu
            <div className="text-sm font-medium text-gray-600">NAKLİYAT</div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('ana-sayfa')}
              className="menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('hizmetler')}
              className="menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato"
            >
              Hizmetlerimiz
            </button>
            <button 
              onClick={() => scrollToSection('hakkimizda')}
              className="menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('iletisim')}
              className="menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato"
            >
              İletişim
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex space-x-4">
            <a 
              href="tel:+905326862245"
              className="flex items-center space-x-2 bg-brand-navy text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Phone size={16} />
              <span className="font-lato">Ara</span>
            </a>
            <a 
              href="https://wa.me/905326862245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="font-lato">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-navy"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pb-4">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('ana-sayfa')}
                className="text-left menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato py-2"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('hizmetler')}
                className="text-left menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato py-2"
              >
                Hizmetlerimiz
              </button>
              <button 
                onClick={() => scrollToSection('hakkimizda')}
                className="text-left menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato py-2"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => scrollToSection('iletisim')}
                className="text-left menu__link  text-gray-700 hover:text-brand-navy transition-colors font-lato py-2"
              >
                İletişim
              </button>
              
              {/* Mobile Contact Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <a 
                  href="tel:+905326862245"
                  className="flex items-center justify-center space-x-2 bg-brand-navy text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Phone size={16} />
                  <span className="font-lato">0532 686 22 45</span>
                </a>
                <a 
                  href="https://wa.me/905326862245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span className="font-lato">WhatsApp'tan Teklif Al</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
