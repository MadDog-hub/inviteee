import { Check } from "lucide-react";

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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="pricing-title">
            Pricing That Makes Sense
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the perfect package for your event. All plans include our AI-powered features and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Standard Package */}
          <div className="card-minimal" data-testid="pricing-standard">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Standard Package</h3>
              <div className="text-4xl font-bold text-foreground mb-4">₱1,999</div>
              <p className="text-muted-foreground">Perfect for intimate gatherings</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={scrollToContact}
              className="button-primary w-full"
              data-testid="button-standard"
            >
              Choose Standard
            </button>
          </div>

          {/* Premium Package */}
          <div className="card-minimal border-2 border-primary" data-testid="pricing-premium">
            <div className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium text-center mb-6">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Premium Package</h3>
              <div className="text-4xl font-bold text-foreground mb-4">₱2,499</div>
              <p className="text-muted-foreground">Everything you need for larger events</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={scrollToContact}
              className="button-primary w-full"
              data-testid="button-premium"
            >
              Choose Premium
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* RSVP Only A */}
          <div className="card-minimal" data-testid="pricing-rsvp-a">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">RSVP Only A</h3>
              <div className="text-4xl font-bold text-foreground mb-4">₱500<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground">Simple RSVP tracking</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {rsvpOnlyAFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={scrollToContact}
              className="button-secondary w-full"
              data-testid="button-rsvp-a"
            >
              Choose RSVP A
            </button>
          </div>

          {/* RSVP Only B */}
          <div className="card-minimal" data-testid="pricing-rsvp-b">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">RSVP Only B</h3>
              <div className="text-4xl font-bold text-foreground mb-4">₱799<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground">RSVP with seating management</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {rsvpOnlyBFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={scrollToContact}
              className="button-secondary w-full"
              data-testid="button-rsvp-b"
            >
              Choose RSVP B
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}