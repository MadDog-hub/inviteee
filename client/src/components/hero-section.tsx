import { ArrowRight, Star, Users, Calendar, Award } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center section-padding bg-white">
      <div className="container-width relative z-10">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-50 border border-gray-200 rounded-full text-sm">
            <Award className="h-4 w-4 text-orange-500" />
            <span className="text-gray-600 font-medium">Perfect for Modern Couples</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" data-testid="hero-title">
            More than an Invite,<br />it's an Experience
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create beautiful digital wedding invitations that your guests will love. Manage RSVPs, track attendance, and create lasting memories.
          </p>

          {/* Event Type Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Wedding
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Debut
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Event Planner
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Event Coordinator
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md"
            >
              Event Place
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-sm text-gray-600 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-900">30+</span>
              <span>happy clients</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-gray-900">4000+</span>
              <span>guests managed</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-gray-900">30+</span>
              <span>events created</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
