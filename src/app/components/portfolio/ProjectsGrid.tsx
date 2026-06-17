import { motion } from "motion/react";
import { Github, ExternalLink, Folder, BookOpen } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  type: "personal" | "educational";
}

const personalProjects: Project[] = [
{
    title: "Seres Desarrollos Inmobiliarios",
    description: "Landing page diseñada para la presentación de proyectos inmobiliarios, con secciones detalladas para distintas propiedades y formularios de contacto integrados.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/FoxyDevSolution/seres-desarrollos",
    demo: "https://foxydevsolution.github.io/seres-desarrollos/",
    type: "personal"
  },
{
    title: "Mercuria - Sistema de Gestión de Stock y Comercio",
    description: "Plataforma integral para gestión de inventarios y trazabilidad comercial. Actualmente en proceso de modernización hacia una arquitectura de monorepo, utilizando FastAPI para el backend y React Native para la interfaz cross-platform.",
    technologies: ["FastAPI", "Python", "React Native", "MySQL"],
    github: "https://github.com/FoxyDevSolution/Mercuria",
    type: "personal"
  },
{
    title: "Casita Anem - Sitio Web Responsive",
    description: "Sitio web responsive desarrollado para la presentación de Casa Anem, una propiedad de alquiler en la Patagonia, optimizado para garantizar una experiencia de usuario fluida en dispositivos móviles y de escritorio.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FoxyDevSolution/CasitaAnem-SitioWebResponsive",
    demo: "https://foxydevsolution.github.io/CasitaAnem-SitioWebResponsive/",
    type: "personal"
  },
  {
    title: "Menu - Oh La La",
    description: "Menú interactivo y digital desarrollado específicamente para mejorar la experiencia de comensales en el restaurante, enfocado en la usabilidad y la presentación visual de la oferta gastronómica.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FoxyDevSolution/menu-AR-oh-lala",
    type: "personal"
  },
  {
    title: "FoxyDevSolution - Proyectos Freelance",
    description: "Explora el ecosistema de soluciones digitales y proyectos freelance desarrollados bajo la marca FoxyDevSolution.",
    technologies: ["Git", "GitHub", "Freelance Projects"],
    github: "https://github.com/FoxyDevSolution",
    type: "personal"
  }
];

const educationalProjects: Project[] = [
  {
    title: "CloudLearn - Plataforma Educativa Escalable",
    description: "Desarrollo de una plataforma LMS robusta diseñada para garantizar la continuidad educativa. Implementación de autenticación de roles, gestión de cursos y arquitectura escalable con despliegue en la nube.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/nahiricare/ifts29-portal",
    demo: "https://ifts29-portal.vercel.app/",
    type: "educational"
  },
  {
    title: "Club Deportivo App",
    description: "Sistema de gestión integral para clubes deportivos: control de socios, inscripción a actividades, gestión de pagos con descuentos y alertas de vencimientos.",
    technologies: ["Android Studio", "Kotlin", "Figma", "Firebase"],
    github: "https://github.com/nahiricare/ClubDeportivoApp",
    type: "educational"
  },
  {
    title: "Eventify - App de Gestión de Eventos",
    description: "Aplicación web backend desarrollada con Node.js y Express, con integración a base de datos MongoDB para la gestión integral de eventos.",
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/nahiricare/EventifyTP3",
    type: "educational"
  },
  {
    title: "LegoDevs - App Web SPA",
    description: "Migración tecnológica completa: de HTML Vanilla a una Single Page Application (SPA) utilizando React y Vite, con optimizaciones de performance y accesibilidad.",
    technologies: ["React", "Vite", "React Router", "Context API"],
    github: "https://github.com/nahiricare/LegoDevs",
    demo: "https://lego-devs3.vercel.app/",
    type: "educational"
  },
{
    title: "Más Proyectos (Perfil Educativo)",
    description: "Explora mis repositorios educativos en GitHub. Aquí encontrarás ejercicios prácticos, prototipos académicos y scripts de automatización desarrollados durante mi formación técnica.",
    technologies: ["Git", "GitHub", "Continuous Learning"],
    github: "https://github.com/nahiricare?tab=repositories",
    type: "educational"
  }
];

export function ProjectsGrid() {
  const renderProject = (project: Project, index: number) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-card border border-border p-8 hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 ${project.type === 'personal' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
          {project.type === 'personal' ? <Folder size={24} /> : <BookOpen size={24} />}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-xl font-bold text-foreground mb-3">
        {project.title}
      </h4>

      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-muted text-foreground text-xs font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent" />
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">
              SELECTED_WORK
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground">
            Proyectos Destacados
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Folder className="text-primary" size={24} />
              <h4 className="text-2xl font-bold text-foreground">
                Proyectos Personales y Freelance
              </h4>
            </div>
            <div className="space-y-6">
              {personalProjects.map((project, index) => renderProject(project, index))}
            </div>
          </div>

          {/* Educational Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-accent" size={24} />
              <h4 className="text-2xl font-bold text-foreground">
                Proyectos Educativos
              </h4>
            </div>
            <div className="space-y-6">
              {educationalProjects.map((project, index) => renderProject(project, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
