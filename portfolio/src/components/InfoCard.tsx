
import styles from './InfoCard.module.css';
import text from '../assets/styles/text.module.css';

export function InfoCardFront() {
  return (
    <div className={styles.infoCard}>
      <div className={styles.textContent}>
        <h2 className={text.title}>Front-end</h2>
        <p className={text.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.
        </p>
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={text.header}>Tech Stack</h2>

        <div className={styles.content}>
          <div className={styles.techStack}>
            <p className={styles.label}>React</p>
          </div>
          <div className={styles.techStack}>
            <p className={styles.label}>React-Native</p>
          </div>
          <div className={styles.techStack}>
            <p className={styles.label}>JavaScript</p>
          </div>
          <div className={styles.techStack}>
            <p className={styles.label}>TypeScript</p>
          </div>
          <div className={styles.techStack}>
            <p className={styles.label}>HTML</p>
          </div>
          <div className={styles.techStack}>
            <p className={styles.label}>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoCardBack() {
    return (
      <div className={styles.infoCardBack}>
        <div className={styles.textContent}>
          <h2 className={text.title}>Back-end</h2>
          <p className={text.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={text.header}>Tech Stack</h2>

          <div className={styles.content}>
            <div className={styles.techStack}>
              <p className={styles.label}>NodeJs</p>
            </div>
            <div className={styles.techStack}>
              <p className={styles.label}>Java</p>
            </div>
            <div className={styles.techStack}>
              <p className={styles.label}>Python</p>
            </div>
            <div className={styles.techStack}>
              <p className={styles.label}>SQL</p>
            </div>
          </div>
        </div>
      </div>
    );
}