import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Pricing = () => {
  const plans = [
    {
      name: 'Starlink Uso Fixo',
      price: '160',
      period: 'diária',
      description: 'Ideal para eventos fixos e escritórios temporários',
      features: [
        'Velocidade até 150 Mbps',
        'Instalação incluída',
        'Suporte técnico',
        'Até 50 dispositivos',
        'Antena fixa'
      ],
      popular: false,
      icon: Wifi
    },
    {
      name: 'Starlink Móvel + Kit Carro',
      price: '250',
      period: 'diária',
      description: 'Perfeito para produções móveis e eventos itinerantes',
      features: [
        'Velocidade até 150 Mbps',
        'Kit para veículo',
        'Instalação móvel',
        'Suporte técnico 24/7',
        'Até 75 dispositivos',
        'Antena portátil'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Starlink Standard',
      price: '300',
      period: 'diária',
      description: 'Solução premium para grandes eventos e produções',
      features: [
        'Velocidade até 200 Mbps',
        'Suporte +100 dispositivos',
        'Instalação premium',
        'Suporte técnico dedicado',
        'Backup de conectividade',
        'Monitoramento 24/7'
      ],
      popular: false,
      icon: Star
    }
  ];

  const handleWhatsAppClick = (planName) => {
    const message = `Olá! Gostaria de reservar o plano ${planName}.`;
    window.open(`https://wa.me/5547999414770?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Planos de{' '}
            <span className="gradient-text">Aluguel</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para seu evento ou projeto. Preços transparentes e sem taxas ocultas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative glass rounded-2xl p-8 backdrop-blur-md border transition-all duration-300 ${
                plan.popular 
                  ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-transparent' 
                  : 'border-white/10 hover:border-orange-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'text-orange-400' : 'text-gray-400'
                }`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-300 ml-2">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsAppClick(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'gradient-orange hover:gradient-orange-dark text-white'
                    : 'border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Reserve Agora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Incluído em todos os planos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <strong className="text-orange-400">Instalação Gratuita</strong>
                <p className="text-sm mt-1">Setup completo sem custos adicionais</p>
              </div>
              <div>
                <strong className="text-orange-400">Suporte Técnico</strong>
                <p className="text-sm mt-1">Assistência durante todo o período</p>
              </div>
              <div>
                <strong className="text-orange-400">Sem Taxa de Setup</strong>
                <p className="text-sm mt-1">Preço transparente, sem surpresas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;