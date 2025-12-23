import heroFood from "@/assets/hero-food.jpg";
import { MapPin, Phone, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Delicious Punjabi food spread at Patwari Dhaba"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Decorative Element */}
        <div className="mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="inline-block rounded-full border border-saffron/40 bg-saffron/20 px-6 py-2 text-sm font-medium tracking-wider text-primary-foreground uppercase">
            Est. Since 1985 • Jalandhar
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-primary-foreground animate-fade-up opacity-0 md:text-7xl lg:text-8xl" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Patwari Dhaba
        </h1>

        {/* Tagline */}
        <p className="mb-8 max-w-2xl font-body text-lg text-primary-foreground/90 animate-fade-up opacity-0 md:text-xl" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          Experience the authentic taste of Punjab with our traditional recipes 
          passed down through generations. Where every meal feels like home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-primary-foreground shadow-warm transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Explore Our Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/60 hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" />
            Contact Us
          </a>
        </div>

        {/* Quick Info */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-saffron" />
            <span className="text-sm">GT Road, Jalandhar</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-saffron" />
            <span className="text-sm">Open 7 AM - 11 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-saffron" />
            <span className="text-sm">+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-primary-foreground/40 p-1">
          <div className="h-2 w-2 rounded-full bg-saffron animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
