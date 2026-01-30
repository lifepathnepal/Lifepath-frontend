import HeroSection from "./components/home/HeroSection";
import StorySection from "./components/home/StorySection";
import CategorySection from "./components/home/CategorySection";
import MBTISection from "./components/home/MBTISection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import ExampleCareerPathsSection from "./components/home/ExampleCareerPathsSection";
import TrustCredibilitySection from "./components/home/TrustCredibilitySection";
import StudentTestimonialsSection from "./components/home/StudentTestimonialsSection";
import FAQSection from "./components/home/FAQSection";
import NewsletterCTA from "./components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorySection />
      <StorySection />
      <MBTISection />
      <HowItWorksSection />
      <ExampleCareerPathsSection />
      <TrustCredibilitySection />
      <StudentTestimonialsSection />
      <NewsletterCTA
        btnText="Subscribe"
        imageSrc="/heroImages/woman2.png"
        description="Join our newsletter to get the latest career tips and resources delivered straight to your inbox."
      />
      <FAQSection />
    </div>
  );
}
