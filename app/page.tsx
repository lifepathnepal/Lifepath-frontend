import HeroSection from "./components/home/HeroSection";
// import FeaturesSection from "./components/home/FeaturesSection";
import PersonalitySection from "./components/home/PersonalitySection";
import JobsSection from "./components/home/JobsSection";
import CoursesSection from "./components/home/CoursesSection";
import NewsletterCTA from "./components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/* <FeaturesSection /> */}
      <CoursesSection />
      {/* <NewsletterCTA title="Join the class today" imageSrc="/woman2.png" /> */}
      <JobsSection />
      <NewsletterCTA title="Join the class today" imageSrc="/heroImages/woman2.png" />
      <PersonalitySection />
      <NewsletterCTA title="Join the class today" imageSrc="/woman2.png" />
    </div>
  );
}
