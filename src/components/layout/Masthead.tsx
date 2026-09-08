import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons/Icons";
import styles from "./Masthead.module.css";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-IN", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

export function Masthead() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.edition}>Gurugram Edition</span>
        </div>

        <a href="/" className={styles.centerLink}>
          <div className={styles.center}>
            <span className={styles.mark} aria-hidden="true">
              V
            </span>
            <div>
              <h1 className={styles.wordmark}>{profile.name}</h1>
              <p className={styles.tagline}>Field Notes of a Senior Software Engineer</p>
            </div>
          </div>
        </a>

        <div className={styles.right}>
          <a className={styles.cta} href="#contact">
            Get in Touch
          </a>
          <nav className={styles.iconRow} aria-label="Elsewhere">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon className={styles.icon} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className={styles.icon} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon className={styles.icon} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
