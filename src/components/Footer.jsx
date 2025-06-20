import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Wifi } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5547999414770?text=Olá! Gostaria de saber mais sobre o aluguel de Starlink.",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/starlinkbrasilia", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contato@starlinkbrasilia.com.br");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Starlink Brasília
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Especialistas em aluguel de internet de alta velocidade Starlink
              para eventos, produções e áreas rurais em Brasília e região.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-gray-400 text-sm">
                <strong>CNPJ:</strong> 59.760.126/0001-07
              </p>
              <p className="text-gray-400 text-sm">
                Atendimento 24 horas, 7 dias por semana
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-white mb-4 block">
                Links Rápidos
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("precos")}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Preços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-white mb-4 block">
                Contato
              </span>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>+55 47 99941-4770</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleEmailClick}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>contato@starlinkbrasilia.com.br</span>
                  </button>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Brasília, DF</span>
                </li>
                <li>
                  <button
                    onClick={handleInstagramClick}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>@starlinkbrasilia</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Starlink Brasília. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Internet de alta velocidade para eventos e áreas rurais
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
