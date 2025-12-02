import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  CSSIcon,
  HTMLIcon,
  JSIcon,
  ReactIcon,
  NodeIcon,
  GitIcon,
  JavaIcon,
  PythonIcon,
  SQLIcon,
  DockerIcon,
  WPIcon,
} from "../assets/media";
import styles from "./IconCarousel.module.css";
import "./embla.css";

export function IconCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    }),
  ]);



  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img className={styles.logoIcon} src={HTMLIcon} alt="HTML5" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={CSSIcon} alt="CSS" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={JSIcon} alt="JavaScript" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={JavaIcon} alt="Java" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={ReactIcon} alt="React" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={NodeIcon} alt="NodeJs" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={PythonIcon} alt="Python" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={SQLIcon} alt="SQL" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={DockerIcon} alt="Docker" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={WPIcon} alt="WP" />
        </div>
        <div className="embla__slide">
          <img className={styles.logoIcon} src={GitIcon} alt="Git" />
        </div>
      </div>
    </div>
  );
}
