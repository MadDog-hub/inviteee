import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink, Check, Star, Users, Calendar, MapPin, Heart, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DebutPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const samples = [
    { name: "Nineteen with Jessa", url: "https://nineteenwithjessa.vercel.app/" },
    { name: "Alyssa @ 18", url: "https://alyssa18.vercel.app/" },
    { name: "Celestine @ 18", url: "https://celestine18.vercel.app/" }
  ];

  const pricingPackages = [
    {
      name: "Basic Package",
      price: "₱1,999",
      icon: "👗",
      popular: false,
      features: [
        "Debut Website Invitation (Full Design)",
        "Event Details (Date, Venue, Timeline, Photos, Video, etc.)",
        "Automatic Background Music",
        "Responsive on Any Device",
        "RSVP (via Google Form)"
      ]
    },
    {
      name: "Standard Package",
      price: "₱2,499",
      icon: "✨",
      popular: true,
      features: [
        "Debut Website Invitation (Full Design)",
        "Event Details (Date, Venue, Timeline, Photos, Video, etc.)",
        "Automatic Background Music",
        "Responsive on Any Device",
        "Smart RSVP with Guest Management",
        "Digital Guestbook"
      ]
    },
    {
      name: "Premium Package",
      price: "₱2,999",
      icon: "👑",
      popular: false,
      features: [
        "Debut Website Invitation (Full Design)",
        "Event Details (Date, Venue, Timeline, Photos, Video, etc.)",
        "Automatic Background Music",
        "Responsive on Any Device",
        "Smart RSVP with Guest Management",
        "Digital Guestbook",
        "Seating Plan Management"
      ]
    }
  ];

  const addOnServices = [
    { name: "Only Smart RSVP", price: "₱999" },
    { name: "Smart RSVP + Seating Plan", price: "₱1,499" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Choose Your Package",
      description: "Tell us your desired package that fits your needs and budget."
    },
    {
      step: 2,
      title: "50% Down Payment",
      description: "Secure your booking with a 50% down payment to start the process."
    },
    {
      step: 3,
      title: "Submit Your Details",
      description: "Provide us with important information like names, date, venue, attire guide, and timeline. Optional details include hashtag, love story, images, pre-debut photos, save the date video, QR code for gifts, 18 Roses/Treasures list, background music, and venue images."
    },
    {
      step: 4,
      title: "Share Your Images",
      description: "Put all details in a Word document or message us on Messenger. Upload images to Google Drive to maintain quality and prevent blurring."
    },
    {
      step: 5,
      title: "Wait 1-3 Days",
      description: "Sit back and relax while we create your beautiful debut website."
    },
    {
      step: 6,
      title: "Unlimited Revisions",
      description: "Review the website and request any changes you'd like. We offer unlimited revisions until you're completely happy!"
    }
  ];

  const reviews = [
    {
      name: "Jessa",
      role: "Debutante",
      rating: 5,
      review: "Sobrang ganda ng website ko! Lahat ng friends ko nagandahan sa invitation. Ang dali pa gamitin nung RSVP system."
    },
    {
      name: "Alyssa",
      role: "Debutante",
      rating: 5,
      review: "Highly recommended! Very professional and fast. Nasunod lahat ng colors and theme na gusto ko for my 18th birthday."
    },
    {
      name: "Celestine",
      role: "Debutante",
      rating: 5,
      review: "Thank you so much! Sobrang help nung seating plan and RSVP management. Less stress sa planning part."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-full text-sm">
              <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-800 dark:text-purple-300 font-medium">Debut Website Invitations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" data-testid="hero-title">
              Celebrate Your 18th in Style
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Elegant, personalized debut invitation websites with smart RSVP, guest management, and 18 Roses/Treasures tracking.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('samples')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                data-testid="button-view-samples"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View Samples
              </Button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-6 text-lg"
                data-testid="button-view-pricing"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-testid="samples-title">
              Debut Websites We've Created
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of the beautiful debut websites we've designed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {samples.map((sample, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`sample-card-${index}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{sample.name}</span>
                    <Sparkles className="h-5 w-5 text-purple-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={sample.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors"
                    data-testid={`sample-link-${index}`}
                  >
                    <span>View Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-testid="pricing-title">
              ✨ Debut Website Pricing ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your 18th birthday celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {pricingPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.popular ? 'border-purple-500 border-2 shadow-xl' : ''}`}
                data-testid={`pricing-card-${index}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2" data-testid={`feature-${index}-${fIndex}`}>
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full mt-6 ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900'}`}
                    data-testid={`button-select-${index}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Add-On Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOnServices.map((service, index) => (
                <Card key={index} data-testid={`addon-card-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                      {service.price}
                    </div>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      variant="outline"
                      className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                      data-testid={`button-addon-${index}`}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Order / Process Section */}
      <section id="process" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-testid="process-title">
              How to Order - Easy as 1-2-3!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our simple process from start to finish
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6" data-testid={`process-step-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Required Information:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Name of Debutante</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Date</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Venue</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Attire Rules/Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Timeline</span>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Optional Details:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="text-gray-700 dark:text-gray-300">• Hashtag</li>
                <li className="text-gray-700 dark:text-gray-300">• Love Story / Biography</li>
                <li className="text-gray-700 dark:text-gray-300">• Debutante Images</li>
                <li className="text-gray-700 dark:text-gray-300">• 12 Pre-debut Photos</li>
                <li className="text-gray-700 dark:text-gray-300">• 3 Favorite Pre-debut Photos</li>
                <li className="text-gray-700 dark:text-gray-300">• 1 Best Pre-debut Photo</li>
                <li className="text-gray-700 dark:text-gray-300">• Save the Date Video</li>
                <li className="text-gray-700 dark:text-gray-300">• QR Code for Gifts</li>
                <li className="text-gray-700 dark:text-gray-300">• 18 Roses/Treasures List</li>
                <li className="text-gray-700 dark:text-gray-300">• Background Music</li>
                <li className="text-gray-700 dark:text-gray-300">• Reception & Ceremony Images</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-testid="reviews-title">
              What Our Debutantes Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Read testimonials from debutantes who trusted us with their special 18th birthday
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`review-card-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                    <Sparkles className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{review.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Debutantes Happy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1500+</div>
              <div className="text-gray-600 dark:text-gray-300">Guests Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

