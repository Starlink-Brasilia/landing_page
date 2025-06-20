import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de mais informações sobre os serviços da Starlink Brasília.';
    window.open(`https://wa.me/5547999414770?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-green-500/30">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-75 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Fale conosco no WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppFloat;