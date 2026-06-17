import { motion } from "motion/react";
import { Briefcase, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Full Stack Developer en Mercado Libre",
    graduation: "Promoción 2023",
    quote: "La formación práctica y los proyectos reales que desarrollamos en el IFTS 29 fueron fundamentales para conseguir mi primer trabajo en una empresa líder.",
    image: "https://images.unsplash.com/photo-1770922807970-e0515cd0f7c2?w=400&q=80",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Software Engineer en Globant",
    graduation: "Promoción 2022",
    quote: "El nivel académico y la dedicación de los docentes superó mis expectativas. Hoy trabajo en proyectos internacionales gracias a la base que obtuve aquí.",
    image: "https://images.unsplash.com/photo-1770235621101-91b9d255f07a?w=400&q=80",
  },
];

const jobOpportunities = [
  {
    company: "Tech Solutions SA",
    position: "Junior Developer",
    type: "Full-time",
  },
  {
    company: "Digital Innovation",
    position: "Analista Programador",
    type: "Part-time",
  },
  {
    company: "Software Factory",
    position: "Pasantía IT",
    type: "Pasantía",
  },
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block text-sm font-sans font-medium text-primary mb-4 tracking-wide uppercase">
                Casos de Éxito
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
                Testimonios de Egresados
              </h2>
              <p className="font-sans text-lg text-muted-foreground">
                Nuestros graduados trabajan en las empresas tecnológicas más importantes del país.
              </p>
            </motion.div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-secondary p-8 border-l-4 border-primary"
                >
                  <Quote className="text-primary mb-4" size={32} />
                  <p className="font-sans text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <div className="font-sans font-medium text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm font-sans text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs font-sans text-primary mt-1">
                        {testimonial.graduation}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Job Board */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block text-sm font-sans font-medium text-primary mb-4 tracking-wide uppercase">
                Oportunidades
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
                Bolsa de Trabajo
              </h2>
              <p className="font-sans text-lg text-muted-foreground">
                Ofertas laborales exclusivas para estudiantes y egresados del instituto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8"
            >
              <div className="space-y-6">
                {jobOpportunities.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="bg-white p-6 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 text-primary">
                        <Briefcase size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-sans font-medium text-foreground mb-1">
                          {job.position}
                        </h3>
                        <p className="text-sm font-sans text-muted-foreground mb-2">
                          {job.company}
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-sans font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="mt-8 w-full py-3 border border-primary text-primary text-sm font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Ver todas las ofertas
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
