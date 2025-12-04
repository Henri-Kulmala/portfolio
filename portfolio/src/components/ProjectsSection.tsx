import React from "react";
import styles from "./ProjectsSection.module.css";
import text from '../assets/styles/text.module.css';
import {ProjectCard, ProjectCardSm} from "./ProjectCard";

import { EComImg, ProductManagerImg, RuokakomeroMockup } from "../assets/media";

export default function ProjectsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Currently Working on</h1>
          <p className={text.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            obcaecati sint distinctio qui repellat vel, soluta autem earum
            officia maxime provident id ea at ipsam.
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
              cardTitleSm="Tuotehallinta"
              cardDescriptionSm="Tuotehallintasovellus"
              imgSrcSm={ProductManagerImg}
              imgSmall={false}
            />
          </div>
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.textContent}>
          <h1 className={text.title}>School Projects</h1>
          <p className={text.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            obcaecati sint distinctio qui repellat vel, soluta autem earum
            officia maxime provident id ea at ipsam.
          </p>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectCard}>
            <ProjectCardSm
              cardTitleSm="Ruokakomero"
              cardDescriptionSm="AI-avusteinen reseptisovellus"
              imgSrcSm={RuokakomeroMockup}
              imgSmall={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
