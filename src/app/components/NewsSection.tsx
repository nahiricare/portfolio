import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Apertura de Inscripciones 2026",
    excerpt: "Inician las inscripciones para las tecnicaturas en desarrollo de software y análisis de sistemas.",
    date: "10 Abril 2026",
    category: "Institucional",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
  },
  {
    id: 2,
    title: "Convenio con Empresas Tech",
    excerpt: "Nuevos acuerdos con empresas líderes en tecnología para prácticas profesionales.",
    date: "5 Abril 2026",
    category: "Convenios",
    image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?w=800&q=80",
  },
  {
    id: 3,
    title: "Hackathon Estudiantil 2026",
    excerpt: "Nuestros estudiantes participarán en el evento de programación más importante del año.",
    date: "28 Marzo 2026",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1570286424573-5795ac9db869?w=800&q=80",
  },
];

export function NewsSection() {
  return (
    <section id="noticias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-sans font-medium text-primary mb-4 tracking-wide uppercase"
          >
            Actualidad
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-6"
            style={{ fontWeight: 600 }}
          >
            Noticias y Novedades
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl"
          >
            Mantente informado sobre las últimas actividades, eventos y logros de nuestra comunidad académica.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-sans font-medium">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={14} className="text-muted-foreground" />
                <time className="text-sm font-sans text-muted-foreground">
                  {news.date}
                </time>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {news.title}
              </h3>

              <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                {news.excerpt}
              </p>

              <div className="flex items-center gap-2 text-primary text-sm font-sans font-medium group-hover:gap-3 transition-all duration-300">
                Leer más
                <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
