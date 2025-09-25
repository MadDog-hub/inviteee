import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DemoSection from "@/components/demo-section";
import FeaturesSection from "@/components/features-section";
import PortfolioSection from "@/components/portfolio-section";
import ReviewsSection from "@/components/reviews-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <PortfolioSection />
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
