import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const demoItems = [
    {
      id: 1,
      title: "Wedding Sample Demo",
      description: "Interactive wedding invitation showcase",
      url: "https://wedding-sample-phi.vercel.app/"
    },
    {
      id: 2,
      title: "Brown Wedding Sample",
      description: "Elegant brown-themed wedding invitation",
      url: "https://brown-wedding-sample.vercel.app/"
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
            Check out these demos to explore how couples around the Philippines have used Inviteee to create beautiful, memorable wedding experiences for their guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {demoItems.map((item) => (
            <div
              key={item.id}
              className="card-minimal"
              data-testid={`demo-item-${item.id}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`demo-title-${item.id}`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`demo-description-${item.id}`}>
                {item.description}
              </p>
              
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full inline-flex items-center justify-center space-x-2"
                data-testid={`demo-link-${item.id}`}
              >
                <span>Visit Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Privacy Message */}
        <div className="text-center p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <p className="text-muted-foreground" data-testid="privacy-message">
            Message us for real samples. We cannot share them with you because of the privacy of our real clients.
          </p>
        </div>
      </div>
    </section>
  );
}