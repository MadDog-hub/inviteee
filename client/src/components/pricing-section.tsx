import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const standardFeatures = [
    "Up to 50 guests",
    "Smart RSVP management", 
    "Digital guestbook",
    "Basic seating charts",
    "Mobile-responsive design",
    "Email support"
  ];

  const premiumFeatures = [
    "Up to 200 guests",
    "AI-powered RSVP optimization",
    "Enhanced guestbook with media",
    "AI seating optimization", 
    "Real-time analytics dashboard",
    "Priority 24/7 support",
    "Custom domain included"
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-background"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="pricing-title">
            Pricing That Makes Sense
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the perfect package for your event. All plans include our AI-powered features and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Standard Package */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover" data-testid="pricing-standard">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <div className="text-4xl font-bold gradient-text mb-4">₱1,999</div>
              <p className="text-muted-foreground">Perfect for intimate gatherings</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
              data-testid="button-choose-standard"
            >
              Choose Standard
            </Button>
          </div>

          {/* Premium Package */}
          <div className="bg-gradient-to-br from-primary/10 to-pink-500/10 blur-overlay rounded-2xl p-8 border-2 border-primary/50 card-hover relative overflow-hidden" data-testid="pricing-premium">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <div className="text-4xl font-bold gradient-text mb-4">₱2,499</div>
              <p className="text-muted-foreground">For larger celebrations</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToContact}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
              data-testid="button-choose-premium"
            >
              Choose Premium
            </Button>
          </div>
        </div>

        {/* Subscription Options */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6" data-testid="subscription-title">Need Multiple Events?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card/20 blur-overlay rounded-xl p-6 border border-border/30" data-testid="monthly-plan">
              <h4 className="text-xl font-semibold mb-2">Monthly Plan</h4>
              <div className="text-2xl font-bold gradient-text mb-2">
                ₱1,499<span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Perfect for event planners</p>
            </div>
            <div className="bg-card/20 blur-overlay rounded-xl p-6 border border-border/30" data-testid="annual-plan">
              <h4 className="text-xl font-semibold mb-2">Annual Plan</h4>
              <div className="text-2xl font-bold gradient-text mb-2">
                ₱14,999<span className="text-sm text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground">Save 17% with yearly billing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
