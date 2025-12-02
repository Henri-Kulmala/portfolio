import React from 'react'
import styles from './ProjectsSection.module.css'
import ProjectCard from './ProjectCard';
import ProjectCardSm from './ProjectCardSm';
import { EComImg, ProductManagerImg } from '../assets/media';

export default function ProjectsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.textContent}>
        <h1 className={styles.heroTitle}>Currently Working on</h1>
        <p className={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          obcaecati sint distinctio qui repellat vel, soluta autem earum officia
          maxime provident id ea at ipsam.
        </p>
      </div>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectCard}>
          <ProjectCard
            cardTitle="Bölen Hella"
            cardDescription="Verkkokauppa"
            imgSrc={EComImg}
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCardSm
            cardTitle="Tuotehallinta"
            cardDescription="Tuotehallintasovellus"
            imgSrc={ProductManagerImg}
          />
        </div>
      </div>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectCard}>
          <ProjectCardSm
            cardTitle="Tuotehallinta"
            cardDescription="Tuotehallintasovellus"
            imgSrc={ProductManagerImg}
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            cardTitle="Bölen Hella"
            cardDescription="Verkkokauppa"
            imgSrc={EComImg}
          />
        </div>
      </div>
    </div>
  );
}
