
import AboutSection from '../components/AboutSection'
import styles from './AboutPage.module.css'
import HomeSection from '../components/HomeSection'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <HomeSection />
      <AboutSection />
    </div>
  );
}
