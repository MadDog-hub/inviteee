import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/554118238_122165491784902274_8465626280708866945_n.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center" data-testid="logo">
            <img 
              src={logoImage} 
              alt="Inviteee Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="button-primary text-sm"
              data-testid="nav-contact"
            >
              Get Started for Free
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-4 px-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid="mobile-nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="button-primary text-sm w-fit"
                data-testid="mobile-nav-contact"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}