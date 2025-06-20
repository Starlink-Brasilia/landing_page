import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Wifi, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999414770?text=Olá! Gostaria de saber mais sobre o aluguel de Starlink.', '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Starlink Brasília</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              className="gradient-orange hover:gradient-orange-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('precos')}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Contato
              </button>
              <Button
                onClick={handleWhatsAppClick}
                className="gradient-orange hover:gradient-orange-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;