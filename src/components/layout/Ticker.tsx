import { highlights } from "../../data/highlights";
import styles from "./Ticker.module.css";

const items = highlights.map((h) => `${h.figure} ${h.label}`);
const loop = [...items, ...items];

export function Ticker() {
  return (
    <div className={styles.wrap} role="marquee" aria-label="Career highlights">
      <span className={styles.label}>Latest</span>
      <div className={styles.track}>
        <ul className={styles.list}>
          {loop.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
