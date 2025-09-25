import { Star, Quote } from "lucide-react";

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
      review: "We were amazed by the quality and professionalism. The custom website was exactly what we envisioned, and the guest management system made everything seamless. Our wedding coordinator was impressed!",
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
      review: "As an event planner, I've used many platforms, but Inviteee stands out. The analytics dashboard gives me real-time insights, and clients love the professional look. It's now my go-to solution!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Ana Reyes",
      role: "Mother of the Bride",
      event: "Church Wedding, Manila",
      rating: 5,
      review: "The team at Inviteee was incredibly helpful throughout the process. The website looked so professional, and managing RSVPs was a breeze. Our daughter's wedding was perfect, and the digital guestbook is a treasure!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Lim",
      role: "Groom",
      event: "Modern Wedding, BGC",
      rating: 5,
      review: "Everything exceeded our expectations! The website design was stunning, the RSVP system worked flawlessly, and our guests were constantly complimenting the invitation. Worth every peso!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100"
    }
  ];

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
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="reviews-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="reviews-subtitle">
            Don't just take our word for it. See what couples and families are saying about their Inviteee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50 card-hover relative"
              data-testid={`review-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4" data-testid={`review-rating-${index}`}>
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`review-text-${index}`}>
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`review-avatar-${index}`}
                />
                <div>
                  <h4 className="font-semibold" data-testid={`review-name-${index}`}>
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`review-role-${index}`}>
                    {review.role}
                  </p>
                  <p className="text-xs text-muted-foreground" data-testid={`review-event-${index}`}>
                    {review.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center" data-testid="stat-clients">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center" data-testid="stat-events">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">750+</div>
            <div className="text-muted-foreground">Events Created</div>
          </div>
          <div className="text-center" data-testid="stat-guests">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-muted-foreground">Guests Managed</div>
          </div>
          <div className="text-center" data-testid="stat-satisfaction">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}