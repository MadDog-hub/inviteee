import { MessageSquare, FileText, CreditCard, Palette, Eye, Rocket, Upload, Heart } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Inquiry",
      description: "Message us and choose your package (₱500 / ₱799 monthly or one-time ₱1,999 / ₱2,499).",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      step: 2,
      icon: FileText,
      title: "Send Event Details",
      description: "Provide event info (names, date, venue, theme, photos, videos, guest list if any).",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Downpayment",
      description: "Secure your booking with a 50% downpayment.",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-violet-500/20"
    },
    {
      step: 4,
      icon: Palette,
      title: "Website Creation",
      description: "We design your personalized event website with RSVP, guestbook, seating, and other features from your package.",
      color: "text-pink-500",
      bgColor: "from-pink-500/20 to-rose-500/20"
    },
    {
      step: 5,
      icon: Eye,
      title: "Review & Revisions",
      description: "You check the draft website and request adjustments if needed.",
      color: "text-orange-500",
      bgColor: "from-orange-500/20 to-amber-500/20"
    },
    {
      step: 6,
      icon: Rocket,
      title: "Final Payment & Deployment",
      description: "Settle the balance and your website goes live with free domain & hosting. We also provide a QR code or link you can print on your physical invitations.",
      color: "text-indigo-500",
      bgColor: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const requirements = [
    "Name / Name of Couple",
    "Event Date",
    "Venue (Reception & Ceremony)",
    "Color Motif",
    "Event Timeline (Program Flow)",
    "Love Story / Your Story",
    "Attire Guide",
    "Entourage (for weddings & debuts)",
    "Background Music Preference"
  ];

  const uploads = [
    { icon: "🎁", text: "Event Gift / Bank QR Codes" },
    { icon: "📸", text: "Prenup / Predebut Photos" },
    { icon: "🎬", text: "Save the Date Video" }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-pink-900/10"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="how-it-works-title">
            How Your Event Website Invitation Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="how-it-works-subtitle">
            From your first message to going live - here's our simple 6-step process to create your perfect event website.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover relative"
                data-testid={`step-${step.step}`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${step.bgColor} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4" data-testid={`step-title-${step.step}`}>
                  Step {step.step} – {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`step-description-${step.step}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* What We Need From You */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50" data-testid="requirements-section">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-3 mr-4">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">📝 What We Need From You</h3>
            </div>
            
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-muted-foreground"
                  data-testid={`requirement-${index}`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span>{requirement}:</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Upload Requirements */}
          <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50" data-testid="uploads-section">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-3 mr-4">
                <Upload className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold">📷 Please Upload to Google Drive</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">Share the Google Drive link with us:</p>
            
            <ul className="space-y-4">
              {uploads.map((upload, index) => (
                <li 
                  key={index} 
                  className="bg-background/50 rounded-xl p-4 border border-border/30"
                  data-testid={`upload-${index}`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{upload.icon}</span>
                    <span className="font-medium">{upload.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 blur-overlay rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Let's create something beautiful together! Contact us today to begin your event website experience.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
              data-testid="start-journey-button"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}