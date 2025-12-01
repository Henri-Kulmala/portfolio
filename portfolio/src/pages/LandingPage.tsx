import React from "react";
import LeftNav from "../components/LeftNav";
import styles from "./LandingPage.module.css";
import HomeSection from "../components/HomeSection";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <LeftNav />
      <main className={styles.content}>
        <section id="home" className={styles.section}>
          <HomeSection />
        </section>
        <section id="projects" className={styles.section}></section>
        <section id="about" className={styles.section}></section>
      </main>
    </div>
  );
}
