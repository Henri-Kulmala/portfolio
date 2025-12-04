import React from "react";
import styles from "./ProjectCard.module.css";


type ProjectCardProps = {
  cardTitle: string;
  cardDescription: string;
  imgSrc: string;
};

type ProjectCardSmProps = {
  cardTitleSm: string;
  cardDescriptionSm: string;
  imgSrcSm: string;
  imgSmall: boolean;
};

export function ProjectCard({
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

export function ProjectCardSm({
  cardTitleSm,
  cardDescriptionSm,
  imgSrcSm,
  imgSmall,
}: ProjectCardSmProps) {
  return (
    <div className={styles.cardSm}>
      <div className={styles.cardTextSm}>
        <h1 className={styles.cardHeaderSm}>{cardTitleSm}</h1>
        <p className={styles.cardDescriptionSm}>{cardDescriptionSm}</p>
      </div>
      {imgSmall && (
        <img className={styles.cardImageS} src={imgSrcSm} alt={cardTitleSm} />
      )}
      <img className={styles.cardImageM} src={imgSrcSm} alt={cardTitleSm} />
    </div>
  );
}

