import { ArrowRight, Star, Users, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 section-padding bg-white">
      <div className="container-width text-center">
        {/* Main Heading - Large Typography like Cluely */}
        <h1 className="text-large text-foreground mb-6 max-w-4xl mx-auto animate-fade-in-up" data-testid="hero-title">
          Digital Event Invitations That Think for You
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Inviteee is a smart event website platform that creates beautiful, personalized invitations with RSVP tracking, digital guestbooks, and intelligent guest management for weddings, debuts, birthdays and corporate events.
        </p>
        
        {/* CTA Buttons - Clean like Cluely */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('pricing')}
            className="button-primary inline-flex items-center space-x-2"
            data-testid="cta-get-started"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="button-secondary inline-flex items-center space-x-2"
            data-testid="cta-view-examples"
          >
            <span>View Examples</span>
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="font-medium">5.0 rating</span>
            <span>from 200+ happy couples</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-500" />
            <span className="font-medium">10,000+</span>
            <span>guests managed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-green-500" />
            <span className="font-medium">500+</span>
            <span>events created</span>
          </div>
        </div>
      </div>
    </section>
  );
}