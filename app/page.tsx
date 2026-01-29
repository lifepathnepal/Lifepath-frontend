import HeroSection from "./components/home/HeroSection";
import StorySection from "./components/home/StorySection";
import CategorySection from "./components/home/CategorySection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import StudentTestimonialsSection from "./components/home/StudentTestimonialsSection";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorySection />
      <StorySection />
      <HowItWorksSection />
      <StudentTestimonialsSection />
      <FAQSection />
    </div>
  );
}
