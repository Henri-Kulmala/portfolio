import styles from "./ProjectCard.module.css";
import text from "../assets/styles/text.module.css";

type BaseProps = {
  title: string;
  description: string;
  imgSrc: string;
  tags?: string[];
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
};

function CardBase({
  title,
  description,
  imgSrc,
  tags = [],
  onClick,
  size,
  variant,
}: BaseProps & { size: "wide" | "square" }) {
  const cardClass = size === "wide" ? styles.cardWide : styles.cardSquare;

  const buttonVariant = `${styles.cardButton} ${styles[variant ?? "primary"]}`;

  return (
    <div className={cardClass}>
      <button type="button" className={buttonVariant} onClick={onClick}>
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

      {tags.length > 0 && (
        <div className={styles.tags} aria-label={`${title} tech stack`}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectCard(props: BaseProps) {
  return <CardBase {...props} size="wide" />;
}

export function ProjectCardSm(props: BaseProps) {
  return <CardBase {...props} size="square" />;
}
