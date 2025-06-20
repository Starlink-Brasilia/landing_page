import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Produtor de Eventos',
      company: 'Silva Produções',
      content: 'A Starlink Brasília salvou nosso evento corporativo em uma fazenda. Internet perfeita para 200 pessoas, instalação rápida e suporte excepcional.',
      rating: 5,
      image: 'Homem de negócios sorrindo em um evento corporativo'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Diretora de Vídeo',
      company: 'Cine Brasília',
      content: 'Para nossas produções em locações remotas, a Starlink é essencial. Upload rápido para envio de material e comunicação constante com a equipe.',
      rating: 5,
      image: 'Mulher profissional com equipamentos de filmagem'
    },
    {
      name: 'João Santos',
      role: 'Organizador de Eventos',
      company: 'Eventos DF',
      content: 'Já utilizamos em mais de 50 eventos. Confiabilidade total, velocidade excelente e preço justo. Recomendo para qualquer evento ao ar livre.',
      rating: 5,
      image: 'Homem organizando evento ao ar livre'
    },
    {
      name: 'Maria Costa',
      role: 'Coordenadora de TI',
      company: 'Tech Solutions',
      content: 'Implementamos em nossa filial rural e a diferença foi impressionante. Produtividade da equipe aumentou 300% com a conexão estável.',
      rating: 5,
      image: 'Mulher trabalhando com tecnologia em ambiente rural'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Fotógrafo',
      company: 'Oliveira Fotografia',
      content: 'Para casamentos em chácaras, a Starlink permite upload instantâneo das fotos. Clientes adoram receber as primeiras imagens no mesmo dia.',
      rating: 5,
      image: 'Fotógrafo profissional em casamento ao ar livre'
    },
    {
      name: 'Luciana Ferreira',
      role: 'Gerente de Projetos',
      company: 'Agro Tech',
      content: 'Nossa equipe de campo agora tem acesso total aos sistemas da empresa. Relatórios em tempo real e comunicação sem falhas.',
      rating: 5,
      image: 'Mulher profissional em ambiente agropecuário'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos{' '}
            <span className="gradient-text">clientes</span>{' '}
            dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 500 eventos realizados com sucesso. Veja os depoimentos de quem confia na Starlink Brasília.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-orange-400 mb-4">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-orange-400 to-orange-600">
                  <img  
                    alt={`Foto de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-orange-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Confiança que fala por si
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-300 text-sm">Eventos Realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-300 text-sm">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24h</div>
                <div className="text-gray-300 text-sm">Suporte Disponível</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">5★</div>
                <div className="text-gray-300 text-sm">Avaliação Média</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;