import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999414770?text=Olá! Gostaria de saber mais sobre o aluguel de Starlink.', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 47 99941-4770',
      action: () => window.open('tel:+5547999414770')
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@starlinkbrasilia.com.br',
      action: () => window.open('mailto:contato@starlinkbrasilia.com.br')
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Brasília, DF',
      action: () => {}
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Domingo, 24h',
      action: () => {}
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em{' '}
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para levar internet de alta velocidade para seu evento? Entre em contato conosco e solicite seu orçamento.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Informações de Contato
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={info.action}
                    className="flex items-center space-x-4 cursor-pointer group p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                        {info.title}
                      </div>
                      <div className="text-gray-300">
                        {info.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 backdrop-blur-md border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent"
            >
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Atendimento Rápido
                </h3>
                <p className="text-gray-300 mb-6">
                  Fale conosco agora mesmo pelo WhatsApp e receba seu orçamento em minutos!
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="gradient-orange hover:gradient-orange-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Business Info */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Informações da Empresa
              </h3>
              <div className="space-y-2 text-gray-300 text-center">
                <p><strong className="text-orange-400">CNPJ:</strong> 59.760.126/0001-07</p>
                <p><strong className="text-orange-400">Instagram:</strong> @starlink_brasilia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;