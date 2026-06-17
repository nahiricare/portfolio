import { motion } from "motion/react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 text-primary mb-8">
            <Terminal size={20} />
            <span className="text-sm font-mono">nahir_icare.init()</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight"
        >
          Backend &
          <br />
          <span className="text-primary">Cloud Learner</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light"
        >
          Construyendo sistemas escalables mediante arquitecturas modernas en la nube. <br/>
          Actualmente especializándome en servicios AWS mientras consolido mis conocimientos para desarrollar soluciones eficientes y aplicaciones de alto rendimiento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Contacto
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-border text-foreground font-medium hover:border-primary transition-colors duration-200"
          >
            Conocé mis Proyectos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 mt-16"
        >
          <a
            href="https://github.com/nahiricare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={24} />
          </a>
            <a
            href="https://github.com/FoxyDevSolution"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nahiricare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:nahir.icare@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-primary/50"
        />
      </motion.div>
    </section>
  );
}
