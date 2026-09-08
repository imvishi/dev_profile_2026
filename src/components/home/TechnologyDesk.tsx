import { skillGroups } from "../../data/skills";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./TechnologyDesk.module.css";

export function TechnologyDesk() {
  return (
    <section id="technology" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Desk"
          title="The Stack Report"
          description="Tools and disciplines in active rotation."
        />

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <div key={group.category} className={styles.box}>
              <div className={styles.boxHead}>
                <span className={styles.boxIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.boxTitle}>{group.category}</h3>
              </div>
              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
