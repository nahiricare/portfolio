import { motion } from "motion/react";
import { Server, Cloud, Database, Code2, GitBranch, Container } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Backend & Databases (Tu mayor valor)
  { name: "Java (Backend Specialist)", level: 90, icon: <Server size={20}/>, color: "#10b981" },
  { name: "Node.js & JavaScript", level: 85, icon: <Code2 size={20} />, color: "#1e3a5f" },
  { name: "MySQL / SQL", level: 88, icon: <Database size={20} />, color: "#8b5cf6" },
  
  // Cloud (Tu especialización)
  { name: "AWS (Cloud Foundations)", level: 75, icon: <Cloud size={20} />, color: "#10b981" },
  { name: "Oracle Cloud (OCI)", level: 85, icon: <Cloud size={20} />, color: "#1e3a5f" },
  
  // Flujo de trabajo y Frontend
  { name: "Git & GitHub", level: 95, icon: <GitBranch size={20} />, color: "#8b5cf6" },
  { name: "React & Tailwind CSS", level: 75, icon: <Code2 size={20} />, color: "#10b981" },
  { name: "HTML, CSS", level: 80, icon: <Code2 size={20} />, color: "#1e3a5f" },
  
  // Otros
  { name: "C# / Kotlin", level: 50, icon: <Code2 size={20} />, color: "#8b5cf6" },
];

export function SkillTree() {
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
              TECHNICAL_STACK
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-foreground">
            Skill Tree
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-primary" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
