import { Mail, MapPin, Code2, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ContactFooter() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-primary" size={32} />
              <h3 className="text-3xl font-bold text-foreground">
                Let's Build Something
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a construir
              sistemas robustos y escalables.
            </p>
            <a
              href="mailto:nahir.icare@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail size={20} />
              Contacto Nahir Icare
            </a>
            <br />
            <br />
            <a
              href="mailto:foxydevsolution@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail size={20} />
              Contacto FoxyDevSolution
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                Contacto
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail size={18} className="text-primary" />
                  <a
                    href="mailto:nahir.icare@gmail.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    nahir.icare@gmail.com
                  </a>
                                    <a
                    href="mailto:foxydevsolution@gmail.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    foxydevsolution@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>Rio Negro, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                Disponibilidad
              </h4>
              <p className="text-foreground">
                Abierto a proyectos freelance y oportunidades remotas
              </p>
            </div>

              <a
                href="/CV_Nahir_Icare.pdf" 
                download="CV_Nahir_Icare.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="..." // Tus clases aquí
              >
                <FileText size={20} /> 
                Descargar CV
              </a>
              
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-sm font-mono text-muted-foreground">
            © 2026 Nahir Icare. Built with passion. Powered by FoxyDevSolution.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
