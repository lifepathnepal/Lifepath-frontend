import HeroSection from "./components/home/HeroSection";
import StorySection from "./components/home/StorySection";
import PathCardsSection from "./components/home/PathCardsSection";
import CategorySection from "./components/home/CategorySection";
import MBTISection from "./components/home/MBTISection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import ExampleCareerPathsSection from "./components/home/ExampleCareerPathsSection";
import StudentTestimonialsSection from "./components/home/StudentTestimonialsSection";
import FAQSection from "./components/home/FAQSection";
import NewsletterCTA from "./components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorySection />
      <StorySection />
      <PathCardsSection />
      <MBTISection />
      <HowItWorksSection />
      <ExampleCareerPathsSection />
      <StudentTestimonialsSection />
      <FAQSection />
      <NewsletterCTA
        title="Clarity changes everything."
        btnText="Subscribe"
        imageSrc="/heroImages/woman2.png"
        description="Build a career that fits you — one insight at a time."
      />
    </div>
  );
}
