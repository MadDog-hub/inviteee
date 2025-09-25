import { CheckCircle2, BookHeart, Network, BarChart3, Smartphone, Star } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart RSVP Management",
      description: "AI automatically follows up with guests, sends reminders, and even suggests optimal invitation timing based on your event type.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      benefits: ["Automated follow-ups", "Dietary preferences tracking", "Plus-one management"]
    },
    {
      icon: BookHeart,
      title: "Interactive Guestbook",
      description: "Beautiful digital guestbooks with photo uploads, voice messages, and AI-moderated content to keep memories safe and special.",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
      benefits: ["Photo & video messages", "AI content moderation", "Instant memory book generation"]
    },
    {
      icon: Network,
      title: "AI Seating Optimization",
      description: "Our AI analyzes guest relationships, preferences, and social dynamics to create the perfect seating arrangement automatically.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      benefits: ["Relationship analysis", "Conflict detection", "One-click optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track engagement, monitor RSVP trends, and get AI insights to optimize your event planning in real-time.",
      gradient: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Beautiful, responsive designs that work perfectly on all devices, ensuring your guests have a seamless experience.",
      gradient: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="features-title">
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
                className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover group"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2 text-sm">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="text-yellow-500 mr-2 h-4 w-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover group"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
