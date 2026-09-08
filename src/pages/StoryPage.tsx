import { Navigate, useParams } from "react-router-dom";
import { stories } from "../data/stories";
import { StoryArt } from "../components/story/StoryArt";
import styles from "./StoryPage.module.css";

export function StoryPage() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return <Navigate to="/" replace />;
  }

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <article className={`container ${styles.wrap}`}>
      <a href="/" className={styles.back}>
        ← Back to the Front Page
      </a>

      <p className="kicker">{story.kicker}</p>
      <h1 className={styles.headline}>{story.headline}</h1>
      <p className={styles.dek}>{story.dek}</p>
      <p className={`byline ${styles.byline}`}>
        By Vishal Verma · {story.company} · {story.dateline}
      </p>

      <div className={styles.artFrame}>
        <StoryArt seed={story.artSeed} label={story.company} />
      </div>

      <div className={styles.layout}>
        <div className={styles.body}>
          {story.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.tagBox}>
            <p className={styles.sidebarHeading}>Stack &amp; Tools</p>
            <ul className={styles.tagList}>
              {story.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.sidebarHeading}>More From the Desk</p>
            <ul className={styles.relatedList}>
              {related.map((item) => (
                <li key={item.slug}>
                  <a href={`/story/${item.slug}`}>{item.headline}</a>
                  <span className="byline">{item.company}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
