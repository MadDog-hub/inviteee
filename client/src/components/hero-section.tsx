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
            <span className="text-gray-600 font-medium">Easy Website Maker</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" data-testid="hero-title">
            Create Stunning Event<br />Websites in Minutes
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Build beautiful websites for weddings & debuts with RSVP and guest tracking, or create stunning landing pages for event planners, coordinators, and venues.
          </p>

          {/* Event Type Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-2 border-blue-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              data-testid="button-wedding"
            >
              💍 Wedding
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-2 border-pink-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              data-testid="button-debut"
            >
              👗 Debut
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-2 border-purple-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              data-testid="button-event-planner"
            >
              📋 Event Planner
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-2 border-orange-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              data-testid="button-event-coordinator"
            >
              🎯 Event Coordinator
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-2 border-green-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              data-testid="button-event-place"
            >
              🏛️ Event Place
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
