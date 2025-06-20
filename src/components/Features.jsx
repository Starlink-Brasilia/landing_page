import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Globe, Shield, Users, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Internet de Alta Velocidade',
      description: 'Velocidades de download de até 150 Mbps e upload de 20 Mbps para suas necessidades mais exigentes.',
      color: 'text-orange-400'
    },
    {
      icon: Globe,
      title: 'Cobertura Global',
      description: 'Acesso à internet em qualquer lugar, mesmo nas áreas mais remotas do Brasil.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Instalação Rápida',
      description: 'Setup em menos de 15 minutos. Plug and play para eventos e produções urgentes.',
      color: 'text-yellow-400'
    },
    {
      icon: Shield,
      title: 'Conexão Segura',
      description: 'Criptografia de ponta a ponta e proteção avançada contra interferências.',
      color: 'text-green-400'
    },
    {
      icon: Users,
      title: 'Múltiplos Dispositivos',
      description: 'Suporte para mais de 100 dispositivos conectados simultaneamente.',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Suporte técnico e atendimento disponível todos os dias da semana.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a{' '}
            <span className="gradient-text">Starlink Brasília</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos a melhor solução de internet satelital para eventos, produções e áreas rurais em Brasília e região.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-300">Eventos Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Garantido</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24h</div>
            <div className="text-gray-300">Suporte Técnico</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">150+</div>
            <div className="text-gray-300">Mbps Velocidade</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;