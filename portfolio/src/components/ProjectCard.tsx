import React from "react";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  cardTitle: string;
  cardDescription: string;
  imgSrc: string;
};

export default function ProjectCard({
  cardTitle,
  cardDescription,
  imgSrc,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardText}>
        <h1 className={styles.cardHeader}>{cardTitle}</h1>
        <p className={styles.cardDescription}>{cardDescription}</p>
      </div>
      <div className={styles.cardImageWrapper}>
        <img className={styles.cardImage} src={imgSrc} alt={cardTitle} />
      </div>
    </div>
  );
}
