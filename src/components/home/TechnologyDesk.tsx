import { skillGroups, techIcons } from "../../data/skills";
import { SectionHeading } from "../layout/SectionHeading";
import { StoryVisual } from "../story/StoryVisual";
import styles from "./TechnologyDesk.module.css";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const featuredGroup = skillGroups.find((group) => group.featured) ?? skillGroups[0];
const otherGroups = skillGroups.filter((group) => group !== featuredGroup);

/** Short caption for a tile, e.g. "AWS (EC2, ECS, Lambda, S3)" -> "AWS". */
const caption = (item: string) => item.replace(/\s*\(.*\)$/, "");

function StackListing({ items, size = "sm" }: { items: string[]; size?: "sm" | "lg" }) {
  const withLogo = items.filter((item) => techIcons[item]);
  const textOnly = items.filter((item) => !techIcons[item]);

  return (
    <>
      {withLogo.length > 0 && (
        <ul className={`${styles.tiles} ${size === "lg" ? styles.tilesLg : ""}`}>
          {withLogo.map((item) => {
            const { icon, invertOnDark } = techIcons[item];
            return (
              <li key={item} className={styles.tile} title={item}>
                <img
                  className={`${styles.icon} ${invertOnDark ? styles.invertOnDark : ""}`}
                  src={`${ICON_BASE}/${icon}.svg`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.tileName}>{caption(item)}</span>
              </li>
            );
          })}
        </ul>
      )}
      {textOnly.length > 0 && (
        <p className={styles.alsoFiled}>
          <span className={styles.alsoLabel}>Also filed under</span> {textOnly.join(" · ")}
        </p>
      )}
    </>
  );
}

export function TechnologyDesk() {
  return (
    <section id="technology" className="section">
      <div className="container">
        <SectionHeading eyebrow="Technology Desk" title="The Tools Behind the Work" />

        <article className={styles.top}>
          <div className={styles.topText}>
            <p className="kicker">{featuredGroup.category}</p>
            <h3 className={styles.topHeadline}>{featuredGroup.description}</h3>
            <div className={styles.topStack}>
              <StackListing items={featuredGroup.items} size="lg" />
            </div>
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
              <div className={styles.cardStack}>
                <StackListing items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
