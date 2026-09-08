import { featuredStory, secondaryStories } from "../../data/stories";
import { StoryVisual } from "../story/StoryVisual";
import { StoryCard } from "../story/StoryCard";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./FeaturedStories.module.css";

export function FeaturedStories() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Project Highlights"
          title="Under the Hood "
        />

        <article className={styles.top}>
          <div className={styles.topText}>
            <p className="kicker ">
              <a href={featuredStory.website_link} target="_blank" rel="noopener noreferrer">
                {featuredStory.kicker}
              </a>
            </p>
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
            <StoryVisual story={featuredStory} />
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
