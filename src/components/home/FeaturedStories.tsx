import { featuredStory, secondaryStories } from "../../data/stories";
import { StoryArt } from "../story/StoryArt";
import { StoryCard } from "../story/StoryCard";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./FeaturedStories.module.css";

export function FeaturedStories() {
  return (
    <section id="stories" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Stories"
          title="From the Engineering Desk"
          description="Six dispatches from the field — real systems shipped, real numbers moved."
        />

        <article className={styles.top}>
          <div className={styles.topText}>
            <p className="kicker">{featuredStory.kicker}</p>
            <h3 className={styles.topHeadline}>
              <a href={`/story/${featuredStory.slug}`}>{featuredStory.headline}</a>
            </h3>
            <p className={styles.topDek}>{featuredStory.dek}</p>
            <p className="byline">{featuredStory.company} — {featuredStory.dateline}</p>
            <ul className={styles.tagList}>
              {featuredStory.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <a href={`/story/${featuredStory.slug}`} className={styles.topArt} aria-hidden="true" tabIndex={-1}>
            <StoryArt seed={featuredStory.artSeed} label={featuredStory.company} />
          </a>
        </article>

        <div className={`${styles.grid} divided`}>
          {secondaryStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
