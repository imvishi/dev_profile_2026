import type { Story } from "../../data/types";
import { StoryArt } from "./StoryArt";
import styles from "./StoryCard.module.css";

interface StoryCardProps {
  story: Story;
  size?: "regular" | "compact";
}

export function StoryCard({ story, size = "regular" }: StoryCardProps) {
  return (
    <article className={`${styles.card} ${size === "compact" ? styles.compact : ""}`}>
      <a href={`/story/${story.slug}`} className={styles.artLink} tabIndex={-1} aria-hidden="true">
        <StoryArt seed={story.artSeed} label={story.company} className={styles.art} />
      </a>
      <p className="kicker">{story.kicker}</p>
      <h3 className={styles.headline}>
        <a href={`/story/${story.slug}`}>{story.headline}</a>
      </h3>
      <p className={styles.dek}>{story.dek}</p>
      <p className={`byline ${styles.byline}`}>{story.company} — {story.dateline}</p>
    </article>
  );
}
