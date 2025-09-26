
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Jeizl",
      role: "Bride",
      event: "Wedding",
      rating: 5,
      review: "Super bilis ni Inviteee gumawa! Nasunod lahat ng gusto namin sa website, mula sa kulay hanggang sa layout. Ang ganda ng kinalabasan, sobrang elegant at classy. Worth it talaga!"
    },
    {
      name: "Kate",
      role: "Bride",
      event: "Wedding",
      rating: 5,
      review: "Ang ganda ng smart rsvp, mabilis ang proseso. Hindi kailangan ng full payment agad kaya ang dali magpa-reserve."
    },
    {
      name: "Jerry",
      role: "Groom",
      event: "Wedding",
      rating: 5,
      review: "Grabe, sobrang saya namin sa outcome ng website! Akala namin mahirap gawin, pero ang bilis lang ng process kay Inviteee. From the first inquiry hanggang sa final deployment, lahat clear at maayos. Ang pinaka-nagustuhan ko ay nasunod lahat ng gusto namin like yung kulay, music, pati yung event timeline, eksakto sa vision namin. Parang stress-free na rin ang preparation kasi lahat ng details nasa isang website na. Highly recommended!"
    },
    {
      name: "Paula",
      role: "Bride",
      event: "Wedding",
      rating: 5,
      review: "Madaling kausap at sobrang accommodating. Ang linis ng design, nagustuhan ng pamilya namin"
    },
    {
      name: "Jode",
      role: "Groom",
      event: "Wedding",
      rating: 5,
      review: "Yung Smart RSVP nila ang pinaka-best feature! Ang dali namin ma-track kung sino ang confirmed guests at ilan ang plus-ones. Ang laking tulong para sa seating arrangement."
    },
    {
      name: "Kath",
      role: "Bride",
      event: "Wedding",
      rating: 5,
      review: "Sobrang ganda ng website invitation namin! Honestly, medyo kinakabahan ako nung una kung ma-achieve ba yung gusto naming style and theme. Pero nung nakita na namin yung final design, grabe, mas maganda pa sa expectation. Ang dali lang ng process, sinend lang namin details and pictures, tapos in a few days ready na agad. Nakuha talaga ni Inviteee yung vibe na gusto namin, from the colors, music, hanggang sa layout ng love story at event timeline. Ang daming guests ang nag-message sa amin na unique at elegant daw ang website. We're so happy kasi hindi lang basta invitation, parang full event experience online. Thank you Inviteee, sobrang sulit!"
    },
    {
      name: "Erich",
      role: "Debutant",
      event: "18th Birthday Debut",
      rating: 5,
      review: "Sulit ang bayad, mabilis gumawa at hindi komplikado ang process. Mas pinadali ang preparation namin"
    },
    {
      name: "Gwyneth",
      role: "Debutant",
      event: "18th Birthday Debut",
      rating: 5,
      review: "Super satisfied kami sa Inviteee. Ang bilis ng process, hindi kami nahirapan magbigay ng details at agad nila na-turn into a beautiful website. Kumpleto lahat, from RSVP to guestbook, kaya mas organized ang event namin"
    },
    {
      name: "Kelvin",
      role: "Groom",
      event: "Wedding",
      rating: 5,
      review: "Super satisfied kami sa Inviteee. Ang bilis ng process, hindi kami nahirapan magbigay ng details at agad nila na-turn into a beautiful website. Kumpleto lahat, from RSVP to guestbook, kaya mas organized ang event namin."
    },
    {
      name: "Jean",
      role: "Bride",
      event: "Wedding",
      rating: 5,
      review: "Napaka-professional at madaling kausap. Hindi mo kailangan ng full payment agad kaya less worry financially. Ang bilis makagawa ng draft, tapos pag may revisions, inaayos agad. Ang ganda ng design, very elegant at unique, hindi katulad ng mga nakikita lang sa Canva. Our guests were amazed when we sent the link, kasi complete na talaga—details, photos, music, pati FAQs!"
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

        {/* Sliding Review Cards */}
        <div className="relative max-w-4xl mx-auto mb-12 overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
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
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                      <p className="text-sm text-gray-500">{review.event}</p>
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
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Events Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Guests Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
