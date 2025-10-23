import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TutorialSection from "@/components/tutorial-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ComparisonSection from "@/components/comparison-section";
import PortfolioSection from "@/components/portfolio-section";
import ReviewsSection from "@/components/reviews-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TutorialSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PortfolioSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
