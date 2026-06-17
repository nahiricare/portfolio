import { PortfolioHero } from "./components/portfolio/PortfolioHero";
import { SkillTree } from "./components/portfolio/SkillTree";
import { Education } from "./components/portfolio/Education";
import { ExperienceTimeline } from "./components/portfolio/ExperienceTimeline";
import { ProjectsGrid } from "./components/portfolio/ProjectsGrid";
import { ContactFooter } from "./components/portfolio/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
      <PortfolioHero />
      <SkillTree />
      <Education />
      <ExperienceTimeline />
      <ProjectsGrid />
      <ContactFooter />
    </div>
  );
}