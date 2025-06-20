import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cable, 
  Car, 
  Smartphone, 
  Router, 
  Wrench,
  MessageCircle,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      icon: Wifi,
      title: 'Antenas Starlink',
      description: 'Mini e Standard disponíveis',
      items: [
        'Starlink Mini - Portátil e compacta',
        'Starlink Standard - Alta performance',
        'Antenas de reposição',
        'Kits completos novos e usados'
      ],
      color: 'text-orange-400'
    },
    {
      icon: Cable,
      title: 'Cabos e Adaptadores',
      description: 'Todos os tipos de conectores',
      items: [
        'Cabos ethernet de 25m, 75m e 150m',
        'Adaptadores USB-C para ethernet',
        'Extensões de energia',
        'Conectores e adaptadores diversos'
      ],
      color: 'text-blue-400'
    },
    {
      icon: Car,
      title: 'Kit Veicular',
      description: 'Solução completa para veículos',
      items: [
        'Suporte magnético para teto',
        'Cabo 12V para veículos',
        'Inversor de energia',
        'Base de fixação permanente'
      ],
      color: 'text-green-400'
    },
    {
      icon: Router,
      title: 'Roteadores e Acessórios',
      description: 'Equipamentos complementares',
      items: [
        'Roteadores Wi-Fi 6',
        'Switches de rede',
        'Access Points',
        'Amplificadores de sinal'
      ],
      color: 'text-purple-400'
    },
    {
      icon: Wrench,
      title: 'Ferramentas de Instalação',
      description: 'Tudo para uma instalação perfeita',
      items: [
        'Kits de perfuração',
        'Parafusos e buchas',
        'Vedações e proteções',
        'Ferramentas especializadas'
      ],
      color: 'text-yellow-400'
    },
    {
      icon: Package,
      title: 'Periféricos Diversos',
      description: 'Outros equipamentos disponíveis',
      items: [
        'Cases de transporte',
        'Fontes de alimentação',
        'Testadores de rede',
        'Cabos de diversos tipos'
      ],
      color: 'text-pink-400'
    }
  ];

  const handleCommercialWhatsApp = () => {
    const message = 'Olá! Gostaria de falar com o comercial sobre a compra de equipamentos Starlink e periféricos.';
    window.open(`https://wa.me/5547999414770?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Também{' '}
            <span className="gradient-text">Vendemos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma linha completa de equipamentos Starlink e periféricos para todas suas necessidades de conectividade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 ${product.color}`}>
                <product.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">
                {product.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <Smartphone className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe comercial está pronta para ajudar você a encontrar a solução ideal. 
              Fale conosco e receba uma cotação personalizada para seus equipamentos.
            </p>

            <Button
              onClick={handleCommercialWhatsApp}
              className="gradient-orange hover:gradient-orange-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Comercial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;