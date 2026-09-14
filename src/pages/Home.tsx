import { CareerDesk } from "../components/home/CareerDesk";
import { ContactSection } from "../components/home/ContactSection";
import { FeaturedStories } from "../components/home/FeaturedStories";
import { FrontPage } from "../components/home/FrontPage";
import { ProfileFeature } from "../components/home/ProfileFeature";
import { TechnologyDesk } from "../components/home/TechnologyDesk";
import { profile } from "../data/profile";
import { useDocumentHead } from "../lib/useDocumentHead";

// Sitewide Person structured data lives as a static <script type="application/ld+json">
// in index.html (so it's present even before JS runs); no need to duplicate it here.
export function Home() {
  useDocumentHead({
    title: `${profile.name}, ${profile.title}`,
    description: `${profile.name} is a ${profile.title.toLowerCase()} in ${profile.location} with ${profile.yearsExperience}+ years building scalable full-stack products in Ruby on Rails, Node.js, React, and distributed systems.`,
    path: "/",
    appendSiteName: false,
  });

  return (
    <>
      <FrontPage />
      <hr className="rule" />
      <FeaturedStories />
      <CareerDesk />
      <TechnologyDesk />
      <ProfileFeature />
      <ContactSection />
    </>
  );
}
