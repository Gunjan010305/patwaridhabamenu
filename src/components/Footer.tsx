import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-saffron font-display text-2xl font-bold text-primary-foreground">
              P
            </div>
            <span className="font-display text-2xl font-bold text-background">
              Patwari Dhaba
            </span>
          </div>

          {/* Tagline */}
          <p className="text-center text-background/70 max-w-md">
            Serving authentic Punjabi cuisine with love since 1985. 
            Experience the true taste of Punjab at GT Road, Jalandhar.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-background/70 hover:text-saffron transition-colors">
              Home
            </a>
            <a href="#menu" className="text-background/70 hover:text-saffron transition-colors">
              Menu
            </a>
            <a href="#about" className="text-background/70 hover:text-saffron transition-colors">
              About
            </a>
            <a href="#contact" className="text-background/70 hover:text-saffron transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-background/20" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <span>© {new Date().getFullYear()} Patwari Dhaba. Made with</span>
            <Heart className="h-4 w-4 text-tandoori fill-current" />
            <span>in Punjab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
