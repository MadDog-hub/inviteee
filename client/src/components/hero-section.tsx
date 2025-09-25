import { Sparkles, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Digital Event Invitations
            <span className="gradient-text block">That Think for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Create stunning wedding and event websites with AI-powered guest management, RSVP tracking, and seating arrangements that work seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToDemo}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
              data-testid="button-see-demo"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              See It In Action
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToPricing}
              className="border-border hover:bg-secondary text-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              data-testid="button-view-packages"
            >
              <Tag className="mr-2 h-5 w-5" />
              View Packages
            </Button>
          </div>
        </div>

        {/* Floating Preview Cards */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Wedding Preview Card */}
            <div className="animate-float bg-card/50 blur-overlay rounded-xl p-6 border border-border/50 card-hover" data-testid="preview-wedding">
              <img 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Beach wedding at sunset" 
                className="rounded-lg mb-4 w-full h-32 object-cover" 
              />
              <h3 className="font-semibold mb-2">Sarah & Michael</h3>
              <p className="text-sm text-muted-foreground">Beach Wedding Collection</p>
            </div>
            
            {/* Corporate Event Preview */}
            <div className="animate-float bg-card/50 blur-overlay rounded-xl p-6 border border-border/50 card-hover" style={{ animationDelay: '1s' }} data-testid="preview-corporate">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Corporate gala event" 
                className="rounded-lg mb-4 w-full h-32 object-cover" 
              />
              <h3 className="font-semibold mb-2">Tech Summit 2024</h3>
              <p className="text-sm text-muted-foreground">Corporate Event Package</p>
            </div>
            
            {/* Birthday Party Preview */}
            <div className="animate-float bg-card/50 blur-overlay rounded-xl p-6 border border-border/50 card-hover" style={{ animationDelay: '2s' }} data-testid="preview-birthday">
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Birthday party celebration" 
                className="rounded-lg mb-4 w-full h-32 object-cover" 
              />
              <h3 className="font-semibold mb-2">Emma's Sweet 16</h3>
              <p className="text-sm text-muted-foreground">Birthday Celebration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
