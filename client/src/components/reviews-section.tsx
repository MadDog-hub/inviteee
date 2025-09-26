import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Maria Santos",
      role: "Bride",
      event: "Beach Wedding, Boracay",
      rating: 5,
      review: "Inviteee made our wedding planning so much easier! The RSVP system was flawless, and our guests loved the interactive website. The seating arrangement feature saved us hours of stress. Absolutely recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Miguel Rodriguez",
      role: "Groom",
      event: "Garden Wedding, Tagaytay",
      rating: 5,
      review: "We were amazed by the quality and professionalism. The custom website was exactly what we envisioned, and the guest management system made everything seamless.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Isabella Cruz",
      role: "Debutante",
      event: "18th Birthday Debut",
      rating: 5,
      review: "My debut website was absolutely perfect! The design was elegant and the RSVP tracking helped my parents manage everything smoothly. All my friends were asking how we made such a beautiful invitation!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Carlos Mendoza",
      role: "Event Planner",
      event: "Corporate Events",
      rating: 5,
      review: "As an event planner, I've used many platforms, but Inviteee stands out. The analytics dashboard gives me real-time insights, and clients love the professional look.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Ana Reyes",
      role: "Mother of the Bride",
      event: "Church Wedding, Manila",
      rating: 5,
      review: "The team at Inviteee was incredibly helpful throughout the process. The website looked so professional, and managing RSVPs was a breeze.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Lim",
      role: "Groom",
      event: "Modern Wedding, BGC",
      rating: 5,
      review: "Everything exceeded our expectations! The website design was stunning, the RSVP system worked flawlessly, and our guests were constantly complimenting the invitation.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance through reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="reviews-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="reviews-subtitle">
            Don't just take our word for it. See what couples and families are saying about their Inviteee experience.
          </p>
        </div>

        {/* Single Review Card with Fade Transition */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                data-testid={`review-${index}`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                      "{review.review}"
                    </p>
                    
                    {/* Reviewer Info */}
                    <div className="flex items-center justify-center">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-sm text-gray-600">{review.role}</p>
                        <p className="text-sm text-gray-500">{review.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                data-testid={`review-dot-${index}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">18</div>
            <div className="text-sm text-muted-foreground">Events Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2000</div>
            <div className="text-sm text-muted-foreground">Guests Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
}