import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-saffron font-display text-xl font-bold text-primary-foreground">
            P
          </div>
          <span
            className={`font-display text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Patwari Dhaba
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-saffron ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-5 py-2.5 font-semibold text-primary-foreground shadow-warm transition-all hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-md px-4 py-4 space-y-3 border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 font-medium text-foreground hover:text-saffron transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-5 py-2.5 font-semibold text-primary-foreground shadow-warm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
