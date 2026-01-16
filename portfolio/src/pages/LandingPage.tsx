
import LeftNav, { type Section } from "../components/LeftNav";
import styles from "./LandingPage.module.css";
import HomeSection from "../components/HomeSection";
import { useActiveSection } from "../hooks/useActiveSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";

const SECTIONS: Section[] = [
  { id: "home", label: "Info" },
  { id: "projects", label: "Työt" },
  { id: "about", label: "Minusta" },
];

export default function LandingPage() {
  const activeSection = useActiveSection(SECTIONS.map((section) => section.id));

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        <LeftNav
          sections={SECTIONS}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>

      <main className={styles.content}>
        <section id="home" className={styles.section}>
          <HomeSection />
        </section>
        <section id="projects" className={styles.section}>
          <ProjectsSection />
        </section>
        <section id="about" className={styles.section}>
          <AboutSection />
        </section>
      </main>
    </div>
  );
}
