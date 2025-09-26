import { Play, Users, Sparkles, MessageSquare } from "lucide-react";

export default function TutorialSection() {

  const highlights = [
    {
      icon: Users,
      title: "Smart Guest Management",
      description: "See how easy it is to track RSVPs and manage plus-ones"
    },
    {
      icon: Sparkles,
      title: "Website Experience",
      description: "This is how our website will amaze your guests"
    },
    {
      icon: MessageSquare,
      title: "Interactive Features",
      description: "Discover the guestbook and real-time communication tools"
    }
  ];

  return (
    <section id="tutorial" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="tutorial-title">
            See Your RSVP System in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="tutorial-subtitle">
            Watch how easy it is to create and manage your event with our smart RSVP system. This quick tutorial shows you everything from setup to guest management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Video Player */}
          <div className="relative" data-testid="tutorial-video">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/800/450"
                  data-testid="rsvp-tutorial-video"
                >
                  <source src="https://res.cloudinary.com/dyfuqwhho/video/upload/v1758883391/AQOSYLFCTjtIv2xbYvQVOrUNlq-BxtEPjhyc4uIFqCk1qGEmpaByTxT1zE_hIoSlXF6IXuVyV_oin82tUSmFL6bCfofhjk308g4_efkvfo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay (shown before video starts) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 cursor-pointer group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary fill-current ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Complete RSVP System Walkthrough
                </h3>
                <p className="text-sm text-muted-foreground">
                  5-minute tutorial showing all features and capabilities
                </p>
              </div>
            </div>
          </div>

          {/* Tutorial Highlights */}
          <div className="space-y-8" data-testid="tutorial-highlights">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                What You'll Learn
              </h3>
              <p className="text-muted-foreground mb-8">
                This comprehensive tutorial covers everything you need to know about using our RSVP system effectively for your events.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                    data-testid={`tutorial-highlight-${index}`}
                  >
                    <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-border/50">
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm text-primary font-medium">
                  💡 Pro Tip: Watch the full video to see advanced features like automated reminders and guest analytics!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}