import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink, Check, Star, Users, Calendar, MapPin, Heart, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WeddingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const samples = [
    { name: "Ernestly & Melaif", url: "https://www.ernestlymelaif.site/" },
    { name: "Rustin & Isabel", url: "https://rustin-isabel-2025.vercel.app/" },
    { name: "Paul & Diana", url: "https://paul-diana-2025.vercel.app/" },
    { name: "Rustic Wedding", url: "https://rustic-wedding.vercel.app/" },
    { name: "Kayrenzel & Kathynadhana", url: "https://kayrenzelkathynadhana.vercel.app/" },
    { name: "Jose & Jane", url: "https://jose-jane-2025.vercel.app/" },
    { name: "Rico & Julie", url: "https://rico-julie-2025.vercel.app/" },
    { name: "Aldous & Laika", url: "https://aldous-laika-2025.vercel.app/" },
    { name: "Donjie & Marge", url: "https://donjie-marge-2025.vercel.app/" }
  ];

  const pricingPackages = [
    {
      name: "Basic Package",
      price: "₱1,499",
      icon: "💍",
      popular: false,
      features: [
        "Wedding Website Invitation (Full Design)",
        "Event Details (Date, Venue, Timeline, Photos, Video, etc.)",
        "Automatic Background Music",
        "Responsive on Any Device",
        "RSVP (via Google Form)"
      ]
    },
    {
      name: "Standard Package",
      price: "₱1,999",
      icon: "💝",
      popular: true,
      features: [
        "Wedding Website Invitation (Full Design)",
        "Event Details (Date, Venue, Timeline, Photos, Video, etc.)",
        "Automatic Background Music",
        "Responsive on Any Device",
        "Smart RSVP with Guest Management",
        "Digital Guestbook"
      ]
    },
    {
      name: "Premium Package",
      price: "₱2,499",
      icon: "💎",
      popular: false,
      features: [
        "Wedding Website Invitation (Full Design)",
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
      description: "Provide us with important information like names, date, venue, attire guide, and timeline. Optional details include hashtag, love story, images, prenup photos, save the date video, QR code for gifts, entourage, background music, and venue images."
    },
    {
      step: 4,
      title: "Share Your Images",
      description: "Put all details in a Word document or message us on Messenger. Upload images to Google Drive to maintain quality and prevent blurring."
    },
    {
      step: 5,
      title: "Wait 1-3 Days",
      description: "Sit back and relax while we create your beautiful wedding website."
    },
    {
      step: 6,
      title: "Unlimited Revisions",
      description: "Review the website and request any changes you'd like. We offer unlimited revisions until you're completely happy!"
    }
  ];

  const reviews = [
    {
      name: "Jeizl",
      role: "Bride",
      rating: 5,
      review: "Super bilis ni Inviteee gumawa! Nasunod lahat ng gusto namin sa website, mula sa kulay hanggang sa layout. Ang ganda ng kinalabasan, sobrang elegant at classy. Worth it talaga!"
    },
    {
      name: "Kate",
      role: "Bride",
      rating: 5,
      review: "Ang ganda ng smart rsvp, mabilis ang proseso. Hindi kailangan ng full payment agad kaya ang dali magpa-reserve."
    },
    {
      name: "Jerry",
      role: "Groom",
      rating: 5,
      review: "Grabe, sobrang saya namin sa outcome ng website! Akala namin mahirap gawin, pero ang bilis lang ng process. From the first inquiry hanggang sa final deployment, lahat clear at maayos."
    },
    {
      name: "Paula",
      role: "Bride",
      rating: 5,
      review: "Madaling kausap at sobrang accommodating. Ang linis ng design, nagustuhan ng pamilya namin."
    },
    {
      name: "Jode",
      role: "Groom",
      rating: 5,
      review: "Yung Smart RSVP nila ang pinaka-best feature! Ang dali namin ma-track kung sino ang confirmed guests at ilan ang plus-ones. Ang laking tulong para sa seating arrangement."
    },
    {
      name: "Kath",
      role: "Bride",
      rating: 5,
      review: "Sobrang ganda ng website invitation namin! Mas maganda pa sa expectation. Ang dali lang ng process, and in a few days ready na agad. Ang daming guests ang nag-message sa amin na unique at elegant daw."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 rounded-full text-sm">
              <Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="text-pink-800 dark:text-pink-300 font-medium">Wedding Website Invitations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" data-testid="hero-title">
              Create Your Dream Wedding Website
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Beautiful, personalized wedding invitation websites with smart RSVP, guest management, and more. Make your special day even more memorable!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('samples')}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg"
                data-testid="button-view-samples"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View Samples
              </Button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-6 text-lg"
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
              Real Wedding Websites We've Created
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at beautiful wedding websites we've designed for our happy couples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {samples.map((sample, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`sample-card-${index}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{sample.name}</span>
                    <Heart className="h-5 w-5 text-pink-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={sample.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-colors"
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
              🎀 Wedding Website Pricing 🎀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {pricingPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.popular ? 'border-pink-500 border-2 shadow-xl' : ''}`}
                data-testid={`pricing-card-${index}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white">
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
                    className={`w-full mt-6 ${pkg.popular ? 'bg-pink-600 hover:bg-pink-700' : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900'}`}
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
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                      {service.price}
                    </div>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      variant="outline"
                      className="w-full border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20"
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
                    <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
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

            <div className="mt-12 p-6 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Required Information:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Names</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Date</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Venue</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Attire Rules/Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Timeline</span>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Optional Details (can be followed up later):
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="text-gray-700 dark:text-gray-300">• Hashtag</li>
                <li className="text-gray-700 dark:text-gray-300">• Love Story</li>
                <li className="text-gray-700 dark:text-gray-300">• Groom & Bride Images</li>
                <li className="text-gray-700 dark:text-gray-300">• 12 Prenup Photos</li>
                <li className="text-gray-700 dark:text-gray-300">• 3 Favorite Prenup Photos</li>
                <li className="text-gray-700 dark:text-gray-300">• 1 Best Prenup Photo</li>
                <li className="text-gray-700 dark:text-gray-300">• Save the Date Video</li>
                <li className="text-gray-700 dark:text-gray-300">• QR Code for Gifts</li>
                <li className="text-gray-700 dark:text-gray-300">• Entourage</li>
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
              What Our Happy Couples Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Read testimonials from couples who trusted us with their special day
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
                    <Heart className="h-6 w-6 text-pink-500" />
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
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">2000+</div>
              <div className="text-gray-600 dark:text-gray-300">Guests Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-testid="features-title">
              Smart Features Explained
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Understanding what makes our wedding websites special
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Smart RSVP */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  What is Smart RSVP?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Smart RSVP is an intelligent guest management system that makes tracking your wedding attendees easy and stress-free. Unlike traditional paper RSVPs or basic Google Forms, our Smart RSVP gives you complete control.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Real-time guest tracking dashboard</li>
                      <li>• Secure login (only you can access)</li>
                      <li>• Track plus-ones automatically</li>
                      <li>• Monitor dietary preferences</li>
                      <li>• See who confirmed, declined, or pending</li>
                      <li>• Export guest list anytime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-pink-500" />
                      Benefits:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• No more manual counting</li>
                      <li>• Instant notifications of responses</li>
                      <li>• Easy to update and manage</li>
                      <li>• Professional and organized</li>
                      <li>• Reduces planning stress</li>
                      <li>• Accurate headcount for catering</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="https://www.facebook.com/reel/1165460462137382/?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F19MwHmVRuk&rdid=EjzxmkdfcGyxrF7F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    data-testid="button-smart-rsvp-tutorial"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Tutorial: How to Use Smart RSVP
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Seating Plan Management */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  What is Seating Plan Management?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Seating Plan Management is a powerful tool that helps you organize where your guests will sit at your wedding reception. Say goodbye to confusing Excel sheets and manual arrangements!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Create seating arrangements using confirmed guests only</li>
                      <li>• Built-in search bar makes arranging guests super easy</li>
                      <li>• Track confirmed guests per table in real-time</li>
                      <li>• Update arrangements with one click</li>
                      <li>• Simple and intuitive interface</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-pink-500" />
                      Benefits:
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Avoid seat confusion on wedding day</li>
                      <li>• Efficiently use venue space</li>
                      <li>• Group guests thoughtfully</li>
                      <li>• No wasted seats</li>
                      <li>• Easy to reorganize if needed</li>
                      <li>• Professional presentation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="https://www.facebook.com/reel/1337980141120013/?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F19i3hwJ8mi&rdid=Zgaovu44Udfd2D2M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    data-testid="button-seating-tutorial"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Tutorial: How to Use Seating Plan Management
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" data-testid="contact-title">
              Ready to Create Your Dream Wedding Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's make your special day even more memorable with a beautiful, personalized wedding website!
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=61577068231367"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2"
              data-testid="button-messenger"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.45 5.51 3.717 7.202V22l3.406-1.87c.91.252 1.875.387 2.877.387 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.002 12.442l-2.558-2.73-4.995 2.73 5.494-5.832 2.623 2.73 4.931-2.73-5.495 5.832z"/>
              </svg>
              Message on Messenger
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
