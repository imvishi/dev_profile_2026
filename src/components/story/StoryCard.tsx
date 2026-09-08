import type { Story } from "../../data/types";
import { StoryArt } from "./StoryArt";
import styles from "./StoryCard.module.css";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.text}>
        <p className="kicker">{story.kicker}</p>
        <h3 className={styles.headline}>
          <a href={`/story/${story.slug}`}>{story.headline}</a>
        </h3>
        <p className={styles.dek}>{story.dek}</p>
        <p className={`byline ${styles.byline}`}>{story.company}</p>
      </div>
      <a href={`/story/${story.slug}`} className={styles.artLink} tabIndex={-1} aria-hidden="true">
        <StoryArt seed={story.artSeed} label={story.company} />
      </a>
    </article>
  );
}
