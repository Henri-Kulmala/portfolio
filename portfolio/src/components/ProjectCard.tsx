import styles from "./ProjectCard.module.css";
import text from "../assets/styles/text.module.css";

type BaseProps = {
  title: string;
  description: string;
  imgSrc: string;
  onClick?: () => void;
};

function CardBase({
  title,
  description,
  imgSrc,
  onClick,
  size,
}: BaseProps & { size: "wide" | "square" }) {
  return (
    <button
      type="button"
      className={size === "wide" ? styles.cardWide : styles.cardSquare}
      onClick={onClick}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={text.cardTitle}>{title}</h3>
          <p className={text.cardText}>{description}</p>
        </div>

        <div className={styles.media}>
          <img
            className={styles.image}
            src={imgSrc}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
    </button>
  );
}

export function ProjectCard(props: BaseProps) {
  return <CardBase {...props} size="wide" />;
}

export function ProjectCardSm(props: BaseProps) {
  return <CardBase {...props} size="square" />;
}
