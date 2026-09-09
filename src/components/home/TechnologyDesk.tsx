import { skillGroups } from "../../data/skills";
import { SectionHeading } from "../layout/SectionHeading";
import { StoryVisual } from "../story/StoryVisual";
import styles from "./TechnologyDesk.module.css";

const featuredGroup = skillGroups.find((group) => group.featured) ?? skillGroups[0];
const otherGroups = skillGroups.filter((group) => group !== featuredGroup);

export function TechnologyDesk() {
  return (
    <section id="technology" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Desk"
          title="The Tools Behind the Work"
        />

        <article className={styles.top}>
          <div className={styles.topText}>
            <p className="kicker">{featuredGroup.category}</p>
            <h3 className={styles.topHeadline}>{featuredGroup.description}</h3>
            <p className={styles.topStack}>{featuredGroup.items.join(" · ")}</p>
          </div>
          <div className={styles.topArt}>
            <StoryVisual
              story={{ image: featuredGroup.image, artSeed: featuredGroup.artSeed, company: featuredGroup.category }}
            />
          </div>
        </article>

        <div className={`${styles.grid} divided`}>
          {otherGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <p className="kicker">{group.category}</p>
              <h4 className={styles.cardHeadline}>{group.description}</h4>
              <p className={styles.cardStack}>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
