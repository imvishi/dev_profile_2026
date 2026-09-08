import { highlights } from "../../data/highlights";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./Highlights.module.css";

export function Highlights() {
  return (
    <section id="highlights" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading eyebrow="Highlights" title="By the Numbers" />
        <div className={styles.grid}>
          {highlights.map((item) => (
            <div key={item.label} className={styles.stat}>
              <p className={styles.figure}>{item.figure}</p>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
