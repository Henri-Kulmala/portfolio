import React from "react";
import styles from "./HomeSection.module.css";
import { IoChevronDown } from "react-icons/io5";
import {
  profilePic,
} from "../assets/media";
import { IconCarousel } from "./IconCarousel";


export default function HomeSection({ scrollTo }: { scrollTo: () => void }) {
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
          <img className={styles.image} src={profilePic} alt="" />
        </div>
      </div>
      <div className={styles.heroFooter}>
        <div className={styles.iconContainer}>
          <IconCarousel />
        </div>
        <div className={styles.scrollDown}>
          <IoChevronDown className={styles.icon} onClick={scrollTo} />
        </div>
      </div>
    </div>
  );
}
