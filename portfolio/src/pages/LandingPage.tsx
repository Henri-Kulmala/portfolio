import styles from "./LandingPage.module.css";

import ProjectsSection from "../components/ProjectsSection";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <ProjectsSection />
      </main>
    </div>
  );
}
