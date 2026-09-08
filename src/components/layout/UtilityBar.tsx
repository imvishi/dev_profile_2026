import { profile } from "../../data/profile";
import styles from "./UtilityBar.module.css";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.date}>{formattedDate}</span>
        <span className={styles.edition}>Gurugram Edition · No. 9</span>
        <nav className={styles.links} aria-label="Contact links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </div>
  );
}
