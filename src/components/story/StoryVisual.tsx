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
  priority?: boolean;
}

export function StoryVisual({ story, className, priority }: StoryVisualProps) {
  const src = story.image ? projectImages[story.image] : undefined;

  if (src) {
    return (
      <img
        src={src}
        alt={story.company}
        className={`${styles.art} ${styles.artImage} ${className ?? ""}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    );
  }

  return <StoryArt seed={story.artSeed} label={story.company} className={className} />;
}
