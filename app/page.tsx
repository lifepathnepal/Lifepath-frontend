import HeroSection from "./components/home/HeroSection";
import CategorySection from "./components/home/CategorySection";
// import FeaturesSection from "./components/home/FeaturesSection";
import HowItWorksSection from "./components/home/HowItWorksSection";
// import PersonalitySection from "./components/home/PersonalitySection";
import JobsSection from "./components/home/JobsSection";
import CoursesSection from "./components/home/CoursesSection";
import NewsletterCTA from "./components/home/NewsletterCTA";
import StudentTestimonialsSection from "./components/home/StudentTestimonialsSection";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorySection />
      <HowItWorksSection />
      {/* <FeaturesSection /> */}
      <JobsSection />
      <NewsletterCTA
        title="Join the class today"
        imageSrc="/heroImages/woman2.png"
        description="Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your career development."
        btnText="Join Now"
      />
      <CoursesSection />
      <StudentTestimonialsSection />
      {/* <NewsletterCTA title="Join the class today" imageSrc="/woman2.png" /> */}
      <FAQSection />
      {/* <NewsletterCTA title="Join the class today" imageSrc="/woman2.png" /> */}
    </div>
  );
}
