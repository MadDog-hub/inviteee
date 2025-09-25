import { ExternalLink, Users, Heart } from "lucide-react";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Jang & Jannica Wedding",
      description: "Elegant beach wedding with 150 guests",
      url: "https://janganijannica.inviteee.co/",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 150, rsvp: "98%" },
      features: ["RSVP Management", "Digital Guestbook", "Photo Gallery"]
    },
    {
      id: 2,
      title: "Mel & Jade Wedding",
      description: "Garden ceremony with modern design",
      url: "https://melandjade.inviteee.co/",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 120, rsvp: "95%" },
      features: ["Seating Arrangements", "Gift Registry", "Timeline"]
    },
    {
      id: 3,
      title: "Ria & Bryan Wedding", 
      description: "Rustic wedding with personalized touches",
      url: "https://riaandbryan.inviteee.co/",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 200, rsvp: "92%" },
      features: ["Custom Design", "Mobile Optimized", "Guest Management"]
    },
    {
      id: 4,
      title: "Aaron & Kimberly Wedding",
      description: "Sophisticated city wedding celebration",
      url: "https://aaronandkimberly.inviteee.co/",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 180, rsvp: "96%" },
      features: ["Live Updates", "Interactive Map", "RSVP Tracking"]
    },
    {
      id: 5,
      title: "Arjay & Kris Wedding",
      description: "Outdoor celebration with interactive features",
      url: "https://arjayandkris.inviteee.co/",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 140, rsvp: "94%" },
      features: ["Photo Sharing", "Guest Messages", "Event Timeline"]
    },
    {
      id: 6,
      title: "Lance & Pau Wedding",
      description: "Intimate ceremony with elegant styling",
      url: "https://lanceandpau.inviteee.co/",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      stats: { guests: 80, rsvp: "100%" },
      features: ["Minimalist Design", "Guest Testimonials", "Event Details"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="portfolio-title">
            Real Weddings, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            See how couples around the Philippines have used Inviteee to create beautiful, memorable wedding experiences for their guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="card-minimal group"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`portfolio-title-${item.id}`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4" data-testid={`portfolio-description-${item.id}`}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{item.stats.guests} guests</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{item.stats.rsvp} RSVP rate</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    data-testid={`portfolio-feature-${item.id}-${index}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full inline-flex items-center justify-center space-x-2"
                data-testid={`portfolio-link-${item.id}`}
              >
                <span>Visit Live Site</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}