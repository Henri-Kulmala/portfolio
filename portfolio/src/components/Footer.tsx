
import styles from "./Footer.module.css";
import text from "../assets/styles/text.module.css";
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <h1 className={text.header3}>Pikalinkit</h1>
          <li>
            <a onClick={() => navigate("/")} className={text.link}>
              Etusivu
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/contact")} className={text.link}>
              Ota yhteyttä
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/cv")} className={text.link}>
              Ansioluettelo
            </a>
          </li>
          <li>
            <a href="https://github.com/Henri-Kulmala" className={text.link}>
              GitHub
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <h1 className={text.header3}>Työt & Projektit</h1>
          <li>
            <a
              onClick={() => navigate("/projects/tuotehallinta")}
              className={text.link}>
              Tuotehallintasovellus
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/projects/bolenhella")}
              className={text.link}>
              Bölen Catering-verkkokauppasivu
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ruokakomero/Ruokakomero-App"
              className={text.link}>
              Ruokakomero-sovellus (GitHub)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Henri-Kulmala/Treenikamu-app"
              className={text.link}>
              Treenikamu-sovellus (GitHub)
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <p className={text.body3}>© 2026 Henri Kulmala</p>
      </div>
    </div>
  );
}
