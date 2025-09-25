import { MessageSquare, FileText, CreditCard, Palette, Eye, Rocket, Upload, Heart } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Inquiry",
      description: "Message us and choose your package (₱500 / ₱799 monthly or one-time ₱1,999 / ₱2,499)."
    },
    {
      step: 2,
      icon: FileText,
      title: "Send Event Details",
      description: "Provide event info (names, date, venue, theme, photos, videos, guest list if any)."
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Downpayment",
      description: "Secure your booking with a 50% downpayment."
    },
    {
      step: 4,
      icon: Palette,
      title: "Website Creation",
      description: "We design your personalized event website with RSVP, guestbook, seating, and other features from your package."
    },
    {
      step: 5,
      icon: Eye,
      title: "Review & Revisions",
      description: "You check the draft website and request adjustments if needed."
    },
    {
      step: 6,
      icon: Rocket,
      title: "Final Payment & Deployment",
      description: "Settle the balance and your website goes live with free domain & hosting. We also provide a QR code or link you can print on your physical invitations."
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
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="how-it-works-title">
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
                className="card-minimal relative"
                data-testid={`step-${step.step}`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="bg-gray-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid={`step-title-${step.step}`}>
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
          <div className="card-minimal" data-testid="requirements-section">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 rounded-lg p-3 mr-4">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">📝 What We Need From You</h3>
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
          <div className="card-minimal" data-testid="uploads-section">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 rounded-lg p-3 mr-4">
                <Upload className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">📷 Please Upload to Google Drive</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">Share the Google Drive link with us:</p>
            
            <ul className="space-y-4">
              {uploads.map((upload, index) => (
                <li 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4"
                  data-testid={`upload-${index}`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{upload.icon}</span>
                    <span className="font-medium text-foreground">{upload.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-minimal max-w-4xl mx-auto bg-blue-50 border border-blue-100">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Ready to Start Your Journey?</h3>
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
              className="button-primary"
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