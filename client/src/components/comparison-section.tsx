import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const competitors = [
    {
      name: "Canva (DIY Invitations)",
      icon: "🎨",
      description: "Template-based design tool",
      pros: ["Good for posters and graphics"],
      cons: [
        "Template-based – you design your own invite (no coding needed)",
        "Mostly static – just a design or sometimes a simple link",
        "No smart RSVP (you can only put a link to Google Form)",
        "No guest management, seating plan, or confirmed guest page"
      ],
      summary: "Canva = good for posters, but not for complete event management."
    },
    {
      name: "Google Form (Basic RSVP)",
      icon: "📋",
      description: "Simple form builder",
      pros: ["Good for simple Yes/No RSVP"],
      cons: [
        "No integration with event website design",
        "No plus guest management, seating plan, guestbook, or timeline", 
        "Doesn't look elegant – very plain and generic"
      ],
      summary: "Google Form = good for surveys, but not for events that need elegance."
    },
    {
      name: "Other Website Builders",
      icon: "🌐",
      description: "Wix, Squarespace, etc.",
      pros: ["Flexible customization options"],
      cons: [
        "Takes time, skills, and effort to set up",
        "Some features (RSVP, guestbook, seating) require paid plugins",
        "Monthly fees can be expensive (₱1,000+)"
      ],
      summary: "Other builders = flexible but not made specifically for weddings or debuts."
    }
  ];

  const inviteeeFeatures = [
    "Custom-made website (not a generic template)",
    "Smart RSVP with Plus Guests Management (approve +1 guests easily)",
    "Digital Guestbook (guests can leave wishes/messages)",
    "Seating & Table Management (Premium)",
    "Confirmed Guests Page (Premium)", 
    "Search Bar for Easy Tracking",
    "Free Domain & Hosting (no extra monthly charges unless subscription-based)",
    "Fast Setup (3–5 days)",
    "Elegant Design made for weddings, debuts, birthdays, and events"
  ];

  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="comparison-title">
            Inviteee vs Canva, Google Form, and Other Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="comparison-subtitle">
            See how Inviteee compares to other popular tools and why it's the smart choice for your events.
          </p>
        </div>

        {/* Competitors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {competitors.map((competitor, index) => (
            <div
              key={competitor.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              data-testid={`competitor-${index}`}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{competitor.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {competitor.name}
                </h3>
                <p className="text-sm text-gray-600">{competitor.description}</p>
              </div>

              {/* Pros */}
              {competitor.pros.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-green-700 mb-2 text-sm">What it's good for:</h4>
                  <ul className="space-y-1">
                    {competitor.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start text-sm">
                        <Check className="text-green-500 mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cons */}
              <div className="mb-4">
                <h4 className="font-medium text-red-700 mb-2 text-sm">Limitations:</h4>
                <ul className="space-y-1">
                  {competitor.cons.map((con, conIndex) => (
                    <li key={conIndex} className="flex items-start text-sm">
                      <X className="text-red-500 mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-gray-800">
                  👉 {competitor.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inviteee Card - Featured */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💍</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Inviteee (Your Service)
            </h3>
            <p className="text-lg text-gray-700">
              All-in-one event website + RSVP + guest management tool
            </p>
          </div>

          {/* Inviteee Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {inviteeeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl p-6 border border-blue-100">
            <p className="text-lg font-semibold text-center text-gray-800 mb-4">
              👉 Inviteee = all-in-one event website + RSVP + guest management tool.
            </p>
            <p className="text-center text-gray-700">
              Not just an invitation, but a smart system to save time, money, and stress.
            </p>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">⚡ In Short:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-medium">Canva</p>
              <p className="text-sm text-gray-300">Pretty design only</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📋</div>
              <p className="font-medium">Google Form</p>
              <p className="text-sm text-gray-300">RSVP only</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌐</div>
              <p className="font-medium">Other builders</p>
              <p className="text-sm text-gray-300">Complicated + expensive</p>
            </div>
            <div className="bg-blue-600 rounded-xl p-4">
              <div className="text-3xl mb-2">💍</div>
              <p className="font-bold">Inviteee</p>
              <p className="text-sm text-blue-100">Everything you need, already done for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}