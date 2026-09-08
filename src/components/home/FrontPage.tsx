import { profile } from "../../data/profile";
import { secondaryStories } from "../../data/stories";
import styles from "./FrontPage.module.css";

const teasers = secondaryStories.slice(0, 4);

export function FrontPage() {
  return (
    <section id="top" className={`container ${styles.wrap}`}>
      <div className={styles.lead}>
        <p className="kicker">Introducing</p>
        <h2 className={styles.headline}>Nine Years In: A Software Engineer&rsquo;s Notebook</h2>
        <p className={`byline ${styles.byline}`}>
          By {profile.name} · {profile.location}
        </p>
        <p className={styles.dek}>
          <span className={styles.dropcap}>{profile.summary.charAt(0)}</span>
          {profile.summary.slice(1)}
        </p>
        <a className={styles.continue} href="#profile">
          Continue reading — full profile ↓
        </a>
      </div>

      <aside className={styles.rail} aria-label="More stories">
        <p className={styles.railHeading}>Also on the Front Page</p>
        <ul className={styles.railList}>
          {teasers.map((story) => (
            <li key={story.slug}>
              <p className="kicker">{story.kicker}</p>
              <h3 className={styles.railHeadline}>
                <a href={`/story/${story.slug}`}>{story.headline}</a>
              </h3>
              <p className={`byline ${styles.railByline}`}>{story.company}</p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
