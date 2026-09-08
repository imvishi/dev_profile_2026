import { CareerDesk } from "../components/home/CareerDesk";
import { ContactSection } from "../components/home/ContactSection";
import { FeaturedStories } from "../components/home/FeaturedStories";
import { FrontPage } from "../components/home/FrontPage";
import { Highlights } from "../components/home/Highlights";
import { ProfileFeature } from "../components/home/ProfileFeature";
import { TechnologyDesk } from "../components/home/TechnologyDesk";

export function Home() {
  return (
    <>
      <FrontPage />
      <hr className="rule" />
      <FeaturedStories />
      <CareerDesk />
      <TechnologyDesk />
      <ProfileFeature />
      <Highlights />
      <ContactSection />
    </>
  );
}
