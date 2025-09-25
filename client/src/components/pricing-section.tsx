import { Check, Star } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: "Standard Package",
      icon: "💍",
      price: "₱1,999",
      period: "one-time",
      description: "Perfect for intimate gatherings",
      popular: false,
      features: [
        "Automatic Background Music",
        "Complete Event Details",
        "Custom-Made Website (not Canva)",
        "Smart RSVP with Plus Guests Management",
        "Digital Guestbook",
        "Free Domain Name",
        "Free Website Hosting",
        "Responsive on Any Device"
      ]
    },
    {
      name: "Premium Package",
      icon: "💎",
      price: "₱2,499",
      period: "one-time",
      description: "Everything you need for larger events",
      popular: true,
      features: [
        "Everything in Standard PLUS:",
        "Seating & Table Management",
        "Page of Confirmed Guests",
        "Priority Support",
        "Advanced Customization"
      ]
    },
    {
      name: "RSVP Only A",
      icon: "📖",
      price: "₱500",
      period: "per month",
      description: "Simple RSVP tracking",
      popular: false,
      features: [
        "Smart RSVP with Plus Guests Management",
        "Digital Guestbook", 
        "Search Bar (track guests easily)",
        "Free Domain Name",
        "Free Hosting Website",
        "QR Code for invitations"
      ]
    },
    {
      name: "RSVP Only B",
      icon: "🪑",
      price: "₱799",
      period: "per month",
      description: "RSVP with seating management",
      popular: false,
      features: [
        "Everything in ₱500 plan PLUS:",
        "Seating & Table Management",
        "Page of Confirmed Guests",
        "Advanced Analytics"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="pricing-title">
            Choose the Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Experience the convenience of having everything you need in one place, enhancing your event experience effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                pkg.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              data-testid={`pricing-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-muted-foreground ml-1">/{pkg.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-500 mr-3 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                data-testid={`button-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {pkg.popular ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include our AI-powered features and 24/7 support. 
            <span className="font-semibold"> No setup fees or hidden costs.</span>
          </p>
        </div>
      </div>
    </section>
  );
}