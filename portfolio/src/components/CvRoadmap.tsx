import { useId, useState } from "react";
import styles from "./CvRoadmap.module.css";
import text from "../assets/styles/text.module.css";

type CvItem = {
  title: string;
  org: string;
  period: string;
  tags?: string[];
  description: React.ReactNode;
};

export function CvRoadmap({ items }: { items: CvItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const baseId = useId();

  return (
    <div className={styles.timeline} role="list">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        const contentId = `cv-item-${baseId}-${idx}`;

        return (
          <div
            key={`${it.title}-${it.org}-${idx}`}
            className={styles.item}
            role="listitem">
            <div className={styles.rail}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.line} aria-hidden="true" />
            </div>

            <button
              type="button"
              className={styles.card}
              aria-expanded={open}
              aria-controls={contentId}
              onClick={() => setOpenIndex(open ? null : idx)}>
              <div className={styles.header}>
                <div className={text.titleRow}>
                  <h3 className={text.nav}>{it.title}</h3>
                  <span className={text.header2}>{it.period}</span>
                </div>

                <div className={styles.orgRow}>
                  <span className={text.body3}>{it.org}</span>
                  {it.tags?.length ? (
                    <span className={styles.tags}>
                      {it.tags.map((t) => (
                        <span key={t} className={styles.tag}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </div>
              </div>

              <div id={contentId} className={styles.descWrap}>
                <div className={styles.descInner}>
                  <div
                    className={`${styles.desc} ${
                      open ? styles.descOpen : styles.descClosed
                    }`}>
                    <span className={text.body3}>{it.description}</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export function CvRoadmapSm({ items }: { items: CvItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const baseId = useId();

  return (
    <div className={styles.timeline} role="list">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        const contentId = `cv-item-${baseId}-${idx}`;

        return (
          <div
            key={`${it.title}-${it.org}-${idx}`}
            className={styles.item}
            role="listitem">
            <div className={styles.rail}>
              <div className={styles.line} aria-hidden="true" />
            </div>

            <button
              type="button"
              className={styles.cardSm}
              aria-expanded={open}
              aria-controls={contentId}
              onClick={() => setOpenIndex(open ? null : idx)}>
              <div className={styles.header}>
                <div className={text.titleRow}>
                  <h3 className={text.nav}>{it.title}</h3>
                  <span className={text.header2}>{it.period}</span>
                </div>

                <div className={styles.orgRow}>
                  <span className={text.body3}>{it.org}</span>
                  {it.tags?.length ? (
                    <span className={styles.tags}>
                      {it.tags.map((t) => (
                        <span key={t} className={styles.tag}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </div>
              </div>

              <div id={contentId} className={styles.descWrap}>
                <div className={styles.descInner}>
                  <div
                    className={`${styles.desc} ${
                      open ? styles.descOpen : styles.descClosed
                    }`}>
                    <span className={text.body3}>{it.description}</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
