import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productLinks = [
    { label: "Features", action: () => scrollToSection('features') },
    { label: "Pricing", action: () => scrollToSection('pricing') },
    { label: "Demo", action: () => scrollToSection('demo') },
    { label: "Templates", href: "#" }
  ];

  const supportLinks = [
    { label: "Contact", action: () => scrollToSection('contact') },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="border-t border-border bg-background/50 blur-overlay" data-testid="footer">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4" data-testid="footer-logo">
              Inviteee
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Creating beautiful, intelligent event invitations that think for you. Transform your celebrations with AI-powered guest management.
            </p>
            <div className="flex space-x-4" data-testid="footer-social">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div data-testid="footer-product-links">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="hover:text-foreground transition-colors text-left"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-support-links">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="hover:text-foreground transition-colors text-left"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground" data-testid="footer-copyright">
          <p>&copy; 2025 Inviteee. All rights reserved. Made with ❤️ for unforgettable celebrations.</p>
        </div>
      </div>
    </footer>
  );
}
