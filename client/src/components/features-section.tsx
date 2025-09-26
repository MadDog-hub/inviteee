import { CheckCircle2, BookHeart, Network, BarChart3, Smartphone, Music } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart RSVP Management",
      description: "Real-time dashboard with secure login that only you can access. Easily track RSVPs, manage plus-ones, and monitor guest responses instantly.",
      benefits: ["Secure dashboard access", "Real-time RSVP tracking", "Fast plus-one management", "Dietary preferences tracking"]
    },
    {
      icon: BookHeart,
      title: "Interactive Guestbook",
      description: "Beautiful digital guestbooks where guests can leave messages. You can approve or delete messages before they go public for security and content control.",
      benefits: ["Manual message approval", "Delete inappropriate content", "Photo uploads", "Keep memories safe and special"]
    },
    {
      icon: Network,
      title: "Seating & Table Management",
      description: "Easily assign your guests to tables and seats using our smart dashboard. Avoid confusion and wasted seats with clear organization.",
      benefits: ["Drag-and-drop style arrangement", "Track confirmed guests per table", "Built-in Search Bar to find guests instantly", "Update anytime with one click"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track engagement, monitor RSVP trends, and get real-time insights to optimize your event planning with detailed analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Beautiful, responsive designs that work perfectly on all devices, ensuring your guests have a seamless experience."
    },
    {
      icon: Music,
      title: "Automatic Background Music",
      description: "Your event website features elegant automatic background music that creates the perfect atmosphere for your guests while they browse your invitation.",
      benefits: ["Elegant ambient soundtracks", "Auto-play on website visit", "Complements your event theme"]
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="features-title">
            Powerful Event Management Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-subtitle">
            Complete RSVP system with real-time tracking, secure dashboard access, moderated guestbook, and seating arrangement tools for seamless event planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-minimal h-full flex flex-col"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-gray-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}