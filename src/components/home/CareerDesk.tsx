import { experience } from "../../data/experience";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./CareerDesk.module.css";

export function CareerDesk() {
  return (
    <section id="career" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Career Desk"
          title="Nine Years on the Beat"
        />

        <ol className={`${styles.list} divided`}>
          {experience.map((entry) => {
            return (
              <li key={entry.company} className={styles.entry}>
                <span className={styles.dot} aria-hidden="true" />
                <div className={styles.entryBody}>
                  <h3 className={styles.role}>{entry.role}</h3>
                  <p className={styles.company}>{entry.company}</p>
                </div>
                <p className={`byline ${styles.dateRange}`}>{entry.dateRange}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
