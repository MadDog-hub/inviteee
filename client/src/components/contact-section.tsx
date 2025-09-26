import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useForm as useFormspree, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const { toast } = useToast();
  
  // Formspree hook - replace YOUR_FORM_ID with your actual Formspree form ID
  const [formspreeState, handleFormspreeSubmit] = useFormspree("YOUR_FORM_ID");
  
  // React Hook Form for validation
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    // Create a form event that Formspree can handle
    const formElement = document.createElement('form');
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('eventType', data.eventType);
    formData.append('message', data.message);
    
    // Create synthetic event for Formspree
    const mockEvent = {
      preventDefault: () => {},
      target: formElement
    };
    
    // Add FormData to the form element
    Object.defineProperty(formElement, 'elements', {
      value: {
        name: { value: data.name },
        email: { value: data.email },
        phone: { value: data.phone || '' },
        eventType: { value: data.eventType },
        message: { value: data.message }
      }
    });
    
    try {
      await handleFormspreeSubmit(mockEvent as any);
    } catch (error) {
      console.error('Formspree submission error:', error);
    }
  };
  
  // Handle Formspree success state
  if (formspreeState.succeeded) {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We'll get back to you soon.",
    });
    form.reset();
  }
  
  // Handle Formspree error state
  if (formspreeState.errors && Object.keys(formspreeState.errors).length > 0) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+63 912 345 6789" 
                            {...field}
                            value={field.value || ""}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-event-type">
                              <SelectValue placeholder="Select an event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your event</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="I'm planning a beach wedding for 100 guests in Boracay..."
                            {...field} 
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full py-3 font-semibold transition-all duration-300 hover:scale-105"
                    disabled={formspreeState.submitting}
                    data-testid="button-send-message"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {formspreeState.submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <ValidationError 
                    prefix="Contact Form" 
                    errors={formspreeState.errors}
                  />
                </form>
              </Form>
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
