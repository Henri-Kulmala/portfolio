import React from "react";
import LeftNav, { type Section } from "../components/LeftNav";
import styles from "./LandingPage.module.css";
import HomeSection from "../components/HomeSection";
import { useActiveSection } from "../hooks/useActiveSection";
import ProjectsSection from "../components/ProjectsSection";

const SECTIONS: Section[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
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
      <LeftNav
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main className={styles.content}>
        <section id="home" className={styles.section}>
          <HomeSection scrollTo={() => handleNavigate("projects")} />
        </section>
        <section id="projects" className={styles.section}>
          <ProjectsSection />
        </section>
        <section id="about" className={styles.section}></section>
      </main>
    </div>
  );
}
