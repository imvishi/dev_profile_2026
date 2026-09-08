import { skillGroups } from "../../data/skills";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./TechnologyDesk.module.css";

export function TechnologyDesk() {
  return (
    <section id="technology" className="section">
      <div className="container">
        <SectionHeading eyebrow="Technology Desk" title="The Stack Report" />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <p className={styles.kicker}>{group.category}</p>
              <p className={styles.stack}>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
