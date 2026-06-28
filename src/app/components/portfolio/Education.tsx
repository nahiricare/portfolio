import { motion } from "motion/react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certification"| "official";
  credentialUrl?: string;
  badgeUrl?: string;
}

const education: EducationItem[] = [
  {
    title: "Tecnicatura Superior en Desarrollo en Software",
    institution: "Intituto Formación Técnica Superior N°29",
    year: "2024 - 2026",
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

const officialCertifications: EducationItem[] = [
  {
    title: "AWS Academy Graduate, Cloud Foundations - Training Badge",
    institution: "Amazon Web Services Training and Certification",
    year: "2025",
    type: "official",
    credentialUrl: "https://www.credly.com/badges/49095d7b-5964-4657-92a1-cc77aaeb36ef/linked_in_profile",
    badgeUrl: "/AWS.png" 
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    institution: "Oracle",
    year: "2026",
    type: "official",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=91CE9CC73E551A3D748A302FE0ECF5BA86C70C4A30AD10145ABA30ACBB991626",
    badgeUrl: "/OCI.png"
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

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-secondary" size={24} />
                <h4 className="text-xl font-bold text-foreground">Educación Formal</h4>
              </div>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="bg-card border border-border p-6 hover:border-secondary/40 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-foreground">{item.title}</h5>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">{item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-secondary" size={24} />
                <h4 className="text-xl font-bold text-foreground">Certificaciones Oficiales</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {officialCertifications.map((item, index) => (
                  <a key={index} href={item.credentialUrl} target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-4 hover:border-secondary/40 transition-all duration-300 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <img src={item.badgeUrl} alt={item.title} className="w-10 h-10 object-contain" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.institution}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{item.year}</span>
                      <ExternalLink className="text-muted-foreground group-hover:text-secondary transition-colors" size={16} />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-accent" size={24} />
              <h4 className="text-xl font-bold text-foreground">Certificaciones</h4>
            </div>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index} className="bg-card border border-border p-6 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground text-sm">{item.title}</h5>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">{item.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
