
import styles from "./LeftNav.module.css";

export type Section = {
  id: string;
  label: string;
};

type LeftNavProps = {
  sections: Section[];
  activeSection: string;
  onNavigate: (id: string) => void;
};

export default function LeftNav({
  sections,
  activeSection,
  onNavigate,
}: LeftNavProps) {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navList}>
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigate(section.id)}
              className={
                isActive
                  ? `${styles.navItem} ${styles.navItemActive}`
                  : styles.navItem
              }>
              <span
                className={isActive ? styles.navDotActive : styles.navDot}
              />
              <span className={isActive? styles.navLabelActive : styles.navLabel}>{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
