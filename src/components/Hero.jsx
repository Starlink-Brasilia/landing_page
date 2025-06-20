import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999414770?text=Olá! Gostaria de saber mais sobre aluguel e venda de Starlink.', '_blank');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('precos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-orange rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-orange rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-orange rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Satellite Image */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="animate-float"
        >
          <img  alt="Satélite Starlink no espaço" className="w-64 h-64 object-contain opacity-30" src="https://images.unsplash.com/photo-1676944229914-2194fdafd024" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-6">
                Você <span className="gradient-text">conectado</span> em qualquer lugar!
              </h1>
              
              <p className="hero-subtitle mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Aluguel e venda de Starlink em Brasília para eventos remotos, produção de vídeo e áreas rurais. 
                Conexão confiável onde você mais precisa, com opção de compra do seu próprio kit.
              </p>

              {/* Features Pills */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-full px-4 py-2 flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Alta Velocidade</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-full px-4 py-2 flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Cobertura Global</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-full px-4 py-2 flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Conexão Segura</span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleWhatsAppClick}
                  className="gradient-orange hover:gradient-orange-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  Reserve Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={scrollToPricing}
                  variant="outline"
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Ver Preços
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img  alt="Antena Starlink instalada em evento ao ar livre" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1697600828804-dce89c9ec6f1" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -left-4 glass rounded-xl p-4 backdrop-blur-md"
              >
                <div className="text-2xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-300">Mbps Download</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl p-4 backdrop-blur-md"
              >
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;