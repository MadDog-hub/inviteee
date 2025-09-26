import { useEffect } from "react";
import { Mail, Phone, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const { toast } = useToast();
  
  // Formspree hook with your actual form ID
  const [state, handleSubmit] = useForm("xwprpjnq");
  
  // Handle success state with useEffect to avoid re-rendering issues
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
    }
  }, [state.succeeded, toast]);
  
  // Handle error state with useEffect
  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }, [state.errors, toast]);
  
  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-heading text-foreground mb-6">Thank You!</h2>
            <p className="text-xl text-muted-foreground">
              Your message has been sent successfully. We'll get back to you soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const socialLinks = [
    { platform: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577068231367", name: "inviteee" },
    { platform: "Instagram", icon: Instagram, href: "https://www.instagram.com/invit_eee/", name: "invit_eee" },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-6" data-testid="contact-title">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
              Ready to transform your event experience? Get in touch with our team and we'll help you create the perfect digital invitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card/30 blur-overlay rounded-2xl p-8 border border-border/50" data-testid="contact-form">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Full Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe" 
                      required
                      data-testid="input-name"
                      className="mt-2"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com" 
                      required
                      data-testid="input-email"
                      className="mt-2"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+63 912 345 6789" 
                      data-testid="input-phone"
                      className="mt-2"
                    />
                    <ValidationError 
                      prefix="Phone" 
                      field="phone"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                      data-testid="select-event-type"
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                    <ValidationError 
                      prefix="Event Type" 
                      field="eventType"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Tell us about your event
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="I'm planning a beach wedding for 100 guests in Boracay..."
                      required
                      data-testid="textarea-message"
                      className="mt-2"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
                    disabled={state.submitting}
                    data-testid="button-send-message"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <ValidationError 
                    errors={state.errors}
                    className="text-sm text-red-500 mt-2"
                  />
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-testid="contact-info">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  We're here to help you create unforgettable experiences. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center" data-testid="contact-email">
                  <div className="bg-primary/20 rounded-lg p-3 mr-4">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">rsvpblisscreations@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center" data-testid="contact-phone">
                  <div className="bg-primary/20 rounded-lg p-3 mr-4">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">09760023887</div>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50" data-testid="social-links">
                <div className="font-semibold mb-4">Follow us</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card/50 hover:bg-primary/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2"
                        data-testid={`social-${social.platform.toLowerCase()}`}
                        aria-label={social.platform}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
