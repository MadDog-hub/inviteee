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
    "Automatic Background Music",
    "Complete Event Details",
    "Custom-Made Website (not Canva)",
    "Smart RSVP with Plus Guests Management (not Google Form)",
    "Digital Guestbook",
    "Free Domain Name",
    "Free Website Hosting",
    "Responsive on Any Device"
  ];

  const premiumFeatures = [
    "Everything in Standard PLUS:",
    "Seating & Table Management",
    "Page of Confirmed Guests"
  ];

  const rsvpOnlyAFeatures = [
    "Smart RSVP with Plus Guests Management",
    "Digital Guestbook", 
    "Search Bar (track your guest easily one by one)",
    "Free Domain Name",
    "Free Hosting Website",
    "QR Code to print on invitations or share as a link"
  ];

  const rsvpOnlyBFeatures = [
    "Everything in ₱500 plan PLUS:",
    "Seating & Table Management",
    "Page of Confirmed Guests"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Standard Package */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover" data-testid="pricing-standard">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <div className="text-4xl font-bold gradient-text mb-4">₱1,999</div>
              <p className="text-muted-foreground">Perfect for intimate gatherings</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span className="text-sm">{feature}</span>
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
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <div className="text-4xl font-bold gradient-text mb-4">₱2,499</div>
              <p className="text-muted-foreground">For larger celebrations</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span className="text-sm">{feature}</span>
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

        {/* RSVP Only Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* RSVP Only A */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover" data-testid="pricing-rsvp-a">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-2">RSVP Only A</h3>
              <div className="text-4xl font-bold gradient-text mb-4">
                ₱500<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Essential RSVP management</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {rsvpOnlyAFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
              data-testid="button-choose-rsvp-a"
            >
              Choose RSVP Only A
            </Button>
          </div>

          {/* RSVP Only B */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover" data-testid="pricing-rsvp-b">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="text-2xl font-bold mb-2">RSVP Only B</h3>
              <div className="text-4xl font-bold gradient-text mb-4">
                ₱799<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Advanced RSVP with seating</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {rsvpOnlyBFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
              data-testid="button-choose-rsvp-b"
            >
              Choose RSVP Only B
            </Button>
          </div>
        </div>

        {/* Contact for Custom Solutions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6" data-testid="custom-solutions-title">Need Something Custom?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Planning multiple events or need special features? We'd love to create a custom solution for you.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
            data-testid="button-contact-custom"
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
