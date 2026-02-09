import { useMemo, useState } from "react";
import styles from "./TechStack.module.css";
import text from "../assets/styles/text.module.css";

type CategoryKey = "frontend" | "backend" | "data" | "other";

type Category = {
  key: CategoryKey;
  label: string;
  items: string[];
};

export default function TechStack() {
  const categories: Category[] = useMemo(
    () => [
      {
        key: "frontend",
        label: "Frontend",
        items: [
          "React + Typescript",
          "React Native",
          "Expo",
          "MUI/Bootstrap/Tailwind",
        ],
      },
      {
        key: "backend",
        label: "Backend",
        items: [
          "Deno",
          "Node.js",
          "Java + Spring Boot",
          "RESTful API",
          "Unit Testing (Jest, JUnit)",
        ],
      },
      {
        key: "data",
        label: "Data",
        items: ["PrismaORM / Neon", "Kysely", "PostgreSQL", "MySQL", "MariaDB"],
      },
      {
        key: "other",
        label: "Muut",
        items: [
          "Git",
          "Docker",
          "OpenAI Platform",
          "Firebase",
          "Render",
          "CSC Rahti",
          "CI/CD optimointi (devops)",
          "Agile / Scrum",
        ],
      },
    ],
    [],
  );

  const [active, setActive] = useState<CategoryKey>("frontend");
  const activeCategory =
    categories.find((c) => c.key === active) ?? categories[0];

  return (
    <div className={styles.stackRoot}>
      <div className={styles.mobile}>
        <div
          className={styles.chipsRow}
          role="tablist"
          aria-label="Tech stack categories">
          {categories.map((c) => {
            const isActive = c.key === active;
            return (
              <button
                key={c.key}
                type="button"
                className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                onClick={() => setActive(c.key)}
                role="tab"
                aria-selected={isActive}>
                {c.label}
              </button>
            );
          })}
        </div>

        <div className={styles.mobileCard}>
          <div className={styles.mobileHeader}>
            <h1 className={text.headerLight}>{activeCategory.label}</h1>
          </div>

          <div className={styles.tags}>
            {activeCategory.items.map((it) => (
              <span key={it} className={`${styles.tag} ${text.body3Light}`}>
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.desktop}>
        <div className={styles.listWrapper}>
          {categories.map((c) => (
            <div key={c.key} className={styles.list}>
              <div className={styles.listHeader}>
                <h1 className={text.headerLight}>{c.label}</h1>
              </div>
              <div className={styles.listContent}>
                {c.items.map((it) => (
                  <p key={it} className={text.body3Light}>
                    {it}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
