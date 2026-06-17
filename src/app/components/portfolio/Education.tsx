import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certification";
}

const education: EducationItem[] = [
  {
    title: "Tecnicatura Superior en Desarrollo en Software",
    institution: "Intituto Formación Técnica Superior N°29",
    year: "2024 - Presente",
    type: "degree"
  },
];

const certifications: EducationItem[] = [
  {
  title: "Oracle Next Education (ONE) - Tech Advanced",
  institution: "Oracle & Alura Latam",
  year: "2026",
  type: "certification"
},
  {
    title: "Oracle Next Education (ONE) - Full Backend Track",
    institution: "Oracle & Alura Latam",
    year: "2025 - 2026",
    type: "certification"
  },
  {
    title: "Desarrollo Front End React",
    institution: "Educación IT & Telecom",
    year: "2023",
    type: "certification"
  },
  {
    title: "Programación Inicial y Fundamentos",
    institution: "Codo a Codo / Argentina Programa",
    year: "2022",
    type: "certification"
  }
];

export function Education() {
  return (
    <section className="py-32 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-secondary" />
            <h2 className="text-sm font-mono text-secondary uppercase tracking-wider">
              EDUCATION_CREDENTIALS
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground">
            Educación y Certificaciones
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-secondary" size={24} />
              <h4 className="text-xl font-bold text-foreground">Educación Formal</h4>
            </div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border p-6 hover:border-secondary/40 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground">{item.title}</h5>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-accent" size={24} />
              <h4 className="text-xl font-bold text-foreground">Certificaciones</h4>
            </div>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border p-6 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground">{item.title}</h5>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
