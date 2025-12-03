import React from "react";
import styles from "./ProjectCardSm.module.css";

type ProjectCardSmProps = {
  cardTitle: string;
  cardDescription: string;
  imgSrc: string;
  imgSmall: boolean;
};

export default function ProjectCardSm({
  cardTitle,
  cardDescription,
  imgSrc,
  imgSmall,
}: ProjectCardSmProps) {
  return (
    <div className={styles.card} >
      <div className={styles.cardText}>
        <h1 className={styles.cardHeader}>{cardTitle}</h1>
        <p className={styles.cardDescription}>{cardDescription}</p>
      </div>
      {imgSmall && <img className={styles.cardImageS} src={imgSrc} alt={cardTitle} />}
      <img className={styles.cardImageM} src={imgSrc} alt={cardTitle} />
    </div>
  );
}
