import { ExternalLink, Calendar, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Wedding Sample",
      type: "Wedding",
      url: "https://wedding-sample-phi.vercel.app/",
      description: "Elegant beach wedding with modern design and seamless RSVP flow",
      guests: "150+",
      features: ["RSVP Management", "Digital Guestbook", "Photo Gallery"],
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Ralph & Paula",
      type: "Wedding",
      url: "https://ralph-paula-wedding.vercel.app/",
      description: "Romantic wedding website with custom timeline and guest messaging",
      guests: "200+",
      features: ["Custom Timeline", "Seating Chart", "Gift Registry"],
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Brown Wedding",
      type: "Wedding",
      url: "https://brown-wedding-sample.vercel.app/",
      description: "Classic wedding invitation with sophisticated design elements",
      guests: "100+",
      features: ["RSVP System", "Event Details", "Photo Memories"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Jerry & Leemar",
      type: "Wedding",
      url: "https://jerryfinalleemarriedtonina.vercel.app/",
      description: "Personalized wedding site with interactive guest experience",
      guests: "180+",
      features: ["Interactive Maps", "RSVP Tracking", "Love Story"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Kayrenzel & Kathyna",
      type: "Wedding",
      url: "https://kayrenzelkathynadhana.vercel.app/",
      description: "Modern wedding website with elegant animations and layouts",
      guests: "250+",
      features: ["Animated Elements", "Guest Management", "Event Timeline"],
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "Erich's 18th Birthday",
      type: "Debut",
      url: "https://www.erichcurtaincallat18.site/",
      description: "Stunning debut celebration with theatrical theme and guest interactions",
      guests: "120+",
      features: ["Debut Program", "Guest Messages", "Photo Showcase"],
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-pink-900/5"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="portfolio-title">
            Our Work & Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            See how we've helped couples and celebrants create unforgettable digital experiences for their special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-card/30 blur-overlay rounded-2xl overflow-hidden border border-border/50 card-hover group"
              data-testid={`portfolio-item-${index}`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${item.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  {item.type}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2" data-testid={`portfolio-title-${index}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {item.guests} guests
                    </div>
                  </div>
                  {item.type === "Wedding" ? (
                    <Heart className="w-8 h-8 text-pink-500" />
                  ) : (
                    <Calendar className="w-8 h-8 text-purple-500" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  data-testid={`portfolio-visit-${index}`}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to create your own stunning event website?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            data-testid="portfolio-cta"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}