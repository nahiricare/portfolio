import { motion } from "motion/react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  deployUrl?: string;
}


const experiences: Experience[] = [
  
  {
    title: "Desarrolladora Web Freelance",
    company: "Seres Desarrollos",
    period: "10/2025",
    description: "Desarrollo y despliegue de portafolio profesional. Enfoque en accesibilidad, diseño responsivo y optimización de interfaz para el usuario final",
    technologies: ["HTML", "CSS", "JS", "PHP"],
    deployUrl: "https://foxydevsolution.github.io/seres-desarrollos/"
    
  },
    {
    title: "Desarrolladora Web Freelance",
    company: "Casa Anem",
    period: "03/2025",
    description: "Desarrollo y despliegue de portafolio profesional. Enfoque en accesibilidad, diseño responsivo y optimización de interfaz para el usuario final",
    technologies: ["HTML", "CSS", "JS"],
    deployUrl: "https://foxydevsolution.github.io/CasitaAnem-SitioWebResponsive/"
    
  },
 {
    title: "Co-propietaria y responsable de administración",
    company: "Kiosco Icare",
    period: "2019 - Actualidad",
    description: "Gestión de procesos operativos, control de stock y atención al cliente. Desarrollo de habilidades en resolución de problemas complejos, trabajo bajo presión y optimización de flujos administrativos.",
    technologies: ["Management", "Analysis", "Organization"]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
              WORK_HISTORY
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground">
            Experiencia Profesional
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-[7.5px] bg-primary border-4 border-background" />

                <div className="bg-card border border-border p-8 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-primary bg-primary/10 px-3 py-1 w-fit">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Container aligning technologies on the left and button on the right */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Solo un bloque de tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-foreground text-xs font-mono border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botón a la derecha */}
                    {exp.deployUrl && (
                      <a
                        href={exp.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium shrink-0"
                      >
                        <ExternalLink size={16} />
                        Ver Proyecto
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
