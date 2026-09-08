import styles from "./StoryArt.module.css";

interface StoryArtProps {
  seed: number;
  label: string;
  className?: string;
}

// Small deterministic PRNG so each seed always renders the same artwork.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VIEW = 400;

export function StoryArt({ seed, label, className }: StoryArtProps) {
  const rand = mulberry32(seed * 97 + 13);

  const angle = Math.floor(rand() * 180);
  const hatchCount = 16 + Math.floor(rand() * 10);
  const cx = 90 + rand() * 220;
  const cy = 90 + rand() * 140;
  const dotRows = 9;
  const dotCols = 11;
  const maxR = 9 + rand() * 4;

  const hatchLines = Array.from({ length: hatchCount }, (_, i) => {
    const offset = (i / hatchCount) * VIEW * 1.6 - VIEW * 0.3;
    return { offset, key: i };
  });

  const dots = [];
  for (let r = 0; r < dotRows; r += 1) {
    for (let c = 0; c < dotCols; c += 1) {
      const x = (c + 0.5) * (VIEW / dotCols);
      const y = (r + 0.5) * (VIEW / dotRows);
      const dist = Math.hypot(x - cx, y - cy);
      const radius = Math.max(0, maxR - dist / 22);
      if (radius > 0.4) {
        dots.push({ x, y, radius, key: `${r}-${c}` });
      }
    }
  }

  const companyName = label.split(" — ")[0]?.trim() ?? label;
  const initials = companyName.charAt(0).toUpperCase();

  return (
    <svg
      className={`${styles.art} ${className ?? ""}`}
      viewBox={`0 0 ${VIEW} ${VIEW * 0.62}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Editorial illustration for ${label}`}
    >
      <rect width={VIEW} height={VIEW * 0.62} className={styles.bg} />
      <g
        className={styles.hatch}
        transform={`rotate(${angle} ${VIEW / 2} ${(VIEW * 0.62) / 2})`}
        clipPath="url(#story-art-clip)"
      >
        {hatchLines.map((line) => (
          <line key={line.key} x1={line.offset} y1={-VIEW} x2={line.offset} y2={VIEW * 2} />
        ))}
      </g>
      <defs>
        <clipPath id="story-art-clip">
          <rect width={VIEW} height={VIEW * 0.62} />
        </clipPath>
      </defs>
      <g className={styles.dots}>
        {dots.map((dot) => (
          <circle key={dot.key} cx={dot.x} cy={dot.y} r={dot.radius} />
        ))}
      </g>
      <rect width={VIEW} height={VIEW * 0.62} className={styles.frame} />
      <text x="14" y={VIEW * 0.62 - 14} className={styles.mark}>
        {initials}
      </text>
    </svg>
  );
}
