import React from "react";
import styles from "./LeftNav.module.css";

export default function LeftNav() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navList}>
        <button className={styles.navItem}>
          <span className={styles.navDot} />
          <span className={styles.navLabel}>Home</span>
        </button>

        <button className={styles.navItem}>
          <span className={styles.navDot} />
          <span className={styles.navLabel}>Projects</span>
        </button>

        <button className={styles.navItem}>
          <span className={styles.navDot} />
          <span className={styles.navLabel}>About</span>
        </button>
      </div>
    </div>
  );
}
