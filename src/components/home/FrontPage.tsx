import { experience } from "../../data/experience";
import { profile } from "../../data/profile";
import { highlights } from "../../data/highlights";
import { secondaryStories } from "../../data/stories";
import { StoryArt } from "../story/StoryArt";
import styles from "./FrontPage.module.css";

const railItems = secondaryStories.slice(0, 5);
const currentRole = experience[0];
const statItems = highlights.slice(0, 4);

export function FrontPage() {
  return (
    <section id="top" className={`container ${styles.wrap}`}>
      <aside className={styles.left} aria-label="More stories">
        <div className="moduleHead">
          <h2>Also in the News</h2>
        </div>
        <ul className={`${styles.railList} divided`}>
          {railItems.map((story) => (
            <li key={story.slug}>
              <p className="kicker">{story.kicker}</p>
              <h3 className={styles.railHeadline}>
                <a href={`/story/${story.slug}`}>{story.headline}</a>
              </h3>
            </li>
          ))}
        </ul>
      </aside>

      <div className={styles.lead}>
        <p className="kicker">Introducing</p>
        <h2 className={styles.headline}>Nine Years In: A Software Engineer&rsquo;s Notebook</h2>
        <p className={`byline ${styles.byline}`}>
          By {profile.name} · {profile.location}
        </p>
        <p className={styles.dek}>{profile.summary}</p>
        <div className={styles.leadArt}>
          <StoryArt seed={99} label={profile.name} />
        </div>
        <a className={styles.continue} href="#profile">
          Continue reading — full profile <span aria-hidden="true">→</span>
        </a>
      </div>

      <aside className={styles.right} aria-label="At a glance">
        <div className="moduleHead">
          <h2>At a Glance</h2>
        </div>

        <div className={styles.liveBlock}>
          <span className="badgeLive">Currently</span>
          <p className={styles.liveRole}>{currentRole.role}</p>
          <p className={styles.liveCompany}>{currentRole.company} · {currentRole.dateRange}</p>
        </div>

        <ul className={`${styles.statList} divided`}>
          {statItems.map((item) => (
            <li key={item.label}>
              <span className={styles.statFigure}>{item.figure}</span>
              <span className={styles.statLabel}>{item.label}</span>
            </li>
          ))}
        </ul>

        <a className={styles.railMore} href="#highlights">
          All the numbers <span aria-hidden="true">→</span>
        </a>
      </aside>
    </section>
  );
}
