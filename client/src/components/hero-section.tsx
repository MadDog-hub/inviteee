import { ArrowRight, Star, Users, Calendar } from "lucide-react";
import heroVideoPath from "@assets/home_1758876877536.mp4";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 section-padding cluely-background">
      {/* Floating Keyboard Keys */}
      <div className="floating-element keyboard-key" data-key="A" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className="floating-element keyboard-key" data-key="S" style={{ top: '60%', left: '15%', animationDelay: '2s' }}></div>
      <div className="floating-element cmd-key" style={{ top: '15%', right: '20%', animationDelay: '1s' }}></div>
      <div className="floating-element keyboard-key" data-key="D" style={{ top: '70%', right: '10%', animationDelay: '3s' }}></div>
      <div className="floating-element keyboard-key" data-key="F" style={{ top: '40%', left: '5%', animationDelay: '4s' }}></div>
      <div className="floating-element space-key" style={{ bottom: '20%', left: '25%', animationDelay: '1.5s' }}></div>
      <div className="floating-element keyboard-key" data-key="G" style={{ top: '25%', right: '8%', animationDelay: '2.5s' }}></div>
      <div className="floating-element keyboard-key" data-key="H" style={{ bottom: '30%', right: '25%', animationDelay: '3.5s' }}></div>
      <div className="floating-element keyboard-key" data-key="J" style={{ top: '50%', left: '3%', animationDelay: '5s' }}></div>
      <div className="floating-element keyboard-key" data-key="K" style={{ top: '80%', right: '15%', animationDelay: '6s' }}></div>
      
      <div className="container-width text-center relative z-10">
        {/* Main Heading - Large Typography like Cluely */}
        <h1 className="text-large text-foreground mb-6 max-w-4xl mx-auto animate-fade-in-up" data-testid="hero-title">
          Digital Event Invitations That Think for You
        </h1>
        
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
      
      {/* Hero Video - Full Width */}
      <div className="mt-12">
        <video
          src={heroVideoPath}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          data-testid="hero-video"
        />
      </div>
    </section>
  );
}