import { CheckCircle2, BookHeart, Network, BarChart3, Smartphone } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart RSVP Management",
      description: "AI automatically follows up with guests, sends reminders, and even suggests optimal invitation timing based on your event type.",
      benefits: ["Automated follow-ups", "Dietary preferences tracking", "Plus-one management"]
    },
    {
      icon: BookHeart,
      title: "Interactive Guestbook",
      description: "Beautiful digital guestbooks with photo uploads, voice messages, and AI-moderated content to keep memories safe and special.",
      benefits: ["Photo & video messages", "AI content moderation", "Instant memory book generation"]
    },
    {
      icon: Network,
      title: "AI Seating Optimization",
      description: "Our AI analyzes guest relationships, preferences, and social dynamics to create the perfect seating arrangement automatically.",
      benefits: ["Relationship analysis", "Conflict detection", "One-click optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track engagement, monitor RSVP trends, and get AI insights to optimize your event planning in real-time."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Beautiful, responsive designs that work perfectly on all devices, ensuring your guests have a seamless experience."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="features-title">
            Features That Think Ahead
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-subtitle">
            Our AI-powered platform handles every detail of your event management, from guest relations to seating arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.slice(0, 3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-minimal"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-gray-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-minimal"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-gray-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}