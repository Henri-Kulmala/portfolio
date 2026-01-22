
import styles from "./HomeSection.module.css";
import text from "../assets/styles/text.module.css";
import { FaGithub } from "react-icons/fa";
import { profilePic } from "../assets/media";
import { IconCarousel } from "./IconCarousel";
import { useNavigate } from "react-router-dom";

export default function HomeSection() {

  const navigate = useNavigate();


  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.textContent}>
          <h1 className={text.title}>Henri Kulmala</h1>
          <div className={styles.textContent}>
            <p className={text.body2}>Helsinki, Finland</p>
            <p className={text.body2}>
              BBA / Tradenomi (AMK), Information Technology
            </p>
            <p className={text.body2}>Available for internships / full-time</p>

            <p className={text.body2}>
              React · React Native · Node.js · REST APIs
            </p>
          </div>

          <div className={styles.containerRow}>
            <button
              className={styles.contactButton}
              onClick={() => navigate("/contact")}>
              Ota yhteyttä
            </button>
            <button
              className={styles.contactButton}
              onClick={() => navigate("/cv")}>
              CV
            </button>
            <button
              className={styles.iconButton}
              onClick={() =>
                window.open(
                  "https://github.com/Henri-Kulmala",
                  "_blank",
                  "noopener,noreferrer",
                )
              }>
              <FaGithub size={32} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.image} src={profilePic} alt="" />
        </div>
      </div>

      {/* Possible icon carousel in the future
      <div className={styles.heroFooter}>
        <div className={styles.iconContainer}>
          <IconCarousel />
        </div>
      </div>
    </div>
    */}
    </div>
  );
}
