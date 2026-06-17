import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Institution Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-primary font-serif font-semibold text-xl">29</span>
              </div>
              <div>
                <div className="font-serif font-semibold text-lg leading-tight">
                  IFTS N°29
                </div>
                <div className="text-xs text-primary-foreground/80 font-sans">
                  Instituto de Tecnología
                </div>
              </div>
            </div>
            <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed">
              Formación técnica superior en desarrollo de software con estándares académicos de excelencia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6" style={{ fontWeight: 600 }}>
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  Av. Corrientes 1234, CABA<br />Buenos Aires, Argentina
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  +54 11 4567-8900
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  info@ifts29.edu.ar
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6" style={{ fontWeight: 600 }}>
              Enlaces Rápidos
            </h3>
            <nav className="space-y-3">
              <a href="#institucional" className="block font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Institucional
              </a>
              <a href="#carreras" className="block font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Carreras
              </a>
              <a href="#noticias" className="block font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Noticias
              </a>
              <a href="#" className="block font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Portal del Alumno
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-lg mb-6" style={{ fontWeight: 600 }}>
              Redes Sociales
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-primary-foreground/60">
              © 2026 IFTS N°29. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Términos y Condiciones
              </a>
            </div>
          </div>
          <p className="font-sans text-xs text-primary-foreground/40 mt-4 text-center md:text-left">
            Información institucional citada según Normas APA 7ª edición
          </p>
        </div>
      </div>
    </footer>
  );
}
