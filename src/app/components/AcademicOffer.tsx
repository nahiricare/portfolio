import { motion } from "motion/react";
import { Code2, ArrowRight } from "lucide-react";

interface Career {
  id: number;
  title: string;
  duration: string;
  profile: string;
  icon: React.ReactNode;
  subjects: number;
}

const careers: Career[] = [
  {
    id: 1,
    title: "Tecnicatura Superior en Desarrollo de Software",
    duration: "3 años",
    profile: "Profesionales capacitados en el diseño, desarrollo y mantenimiento de aplicaciones de software utilizando metodologías ágiles y tecnologías actuales.",
    icon: <Code2 size={32} />,
    subjects: 24,
  },
];

export function AcademicOffer() {
  return (
    <section id="carreras" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-sans font-medium text-primary mb-4 tracking-wide uppercase"
          >
            Formación Académica
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-6"
            style={{ fontWeight: 600 }}
          >
            Oferta Académica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Tecnicaturas superiores reconocidas oficialmente con planes de estudio actualizados según demandas del sector tecnológico.
          </motion.p>
        </div>

        {/* Careers Grid */}
        <div className="max-w-2xl mx-auto">
          {careers.map((career, index) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {career.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-foreground mb-4 leading-tight">
                {career.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <span className="block text-2xl font-serif text-primary" style={{ fontWeight: 600 }}>
                    {career.duration}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground">Duración</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="block text-2xl font-serif text-primary" style={{ fontWeight: 600 }}>
                    {career.subjects}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground">Materias</span>
                </div>
              </div>

              {/* Profile */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-medium text-primary mb-2 uppercase tracking-wide">
                  Perfil Profesional
                </h4>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {career.profile}
                </p>
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2 text-primary text-sm font-sans font-medium group-hover:gap-3 transition-all duration-300">
                Ver plan de estudios
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
