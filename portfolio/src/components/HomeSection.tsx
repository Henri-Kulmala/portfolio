import React from "react";
import styles from "./HomeSection.module.css";
import profileImg from "../assets/media/Omakuva.jpg";
export default function HomeSection() {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>Henri Kulmala</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            obcaecati sint distinctio qui repellat vel, soluta autem earum
            officia maxime provident id ea at ipsam.
          </p>
        </div>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={profileImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
