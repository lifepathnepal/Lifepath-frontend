import HeroSection from "./components/home/HeroSection";
import StorySection from "./components/home/StorySection";
import PathCardsSection from "./components/home/PathCardsSection";
// import MBTISection from "./components/home/MBTISection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import StudentTestimonialsSection from "./components/home/StudentTestimonialsSection";
import FAQSection from "./components/home/FAQSection";
import NewsletterCTA from "./components/home/NewsletterCTA";
import Divider2 from "./components/home/Divider2";
import Divider3 from "./components/home/Divider3";
// import Footer from "./components/layout/Footer";
// import FooterCTA from "./components/footerCTA/FooterCTA";
// import Help from "./components/help/Help";
// import Help2 from "./components/help/Help2";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Divider2 />
      {/* <Help2 /> */}
      <PathCardsSection />
      <StorySection />
      {/* <MBTISection /> */}
      <HowItWorksSection />
      <StudentTestimonialsSection />
      <Divider3 />
      <FAQSection />
      <NewsletterCTA
        title="Clarity changes everything."
        btnText="Start Your Journey"
        imageSrc="/heroImages/woman2.png"
        description="Build a career that fits you — one insight at a time."
      />
      {/* Call */}
      {/* <FooterCTA /> */}
    </div>
  );
}
