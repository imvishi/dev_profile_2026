import { projectImages } from "../../data/projectImages";
import { StoryArt } from "./StoryArt";
import styles from "./StoryArt.module.css";

interface VisualSubject {
  image?: string;
  artSeed: number;
  company: string;
}

interface StoryVisualProps {
  story: VisualSubject;
  className?: string;
}

export function StoryVisual({ story, className }: StoryVisualProps) {
  const src = story.image ? projectImages[story.image] : undefined;

  if (src) {
    return (
      <img
        src={src}
        alt={story.company}
        className={`${styles.art} ${styles.artImage} ${className ?? ""}`}
      />
    );
  }

  return <StoryArt seed={story.artSeed} label={story.company} className={className} />;
}
