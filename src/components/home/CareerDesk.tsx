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
          description="A chronological record of roles, teams, and the systems built along the way."
        />

        <ol className={styles.timeline}>
          {experience.map((entry, index) => (
            <li key={entry.company} className={styles.entry}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
                {index < experience.length - 1 ? <span className={styles.line} /> : null}
              </div>
              <div className={styles.body}>
                <p className="byline">{entry.dateRange}</p>
                <h3 className={styles.role}>{entry.role}</h3>
                <p className={styles.company}>{entry.company}</p>
                {entry.context ? <p className={styles.context}>{entry.context}</p> : null}
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
