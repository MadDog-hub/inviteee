import { Star } from "lucide-react";

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

        {/* Infinite Loop Reviews */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll-reviews">
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div
                key={`first-${index}`}
                className="card-minimal min-w-[350px] flex-shrink-0"
                data-testid={`review-${index}`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role} • {review.event}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">"{review.review}"</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div
                key={`second-${index}`}
                className="card-minimal min-w-[350px] flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role} • {review.event}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Events Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Guests Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
}