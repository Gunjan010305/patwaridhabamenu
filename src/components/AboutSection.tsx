import { ChefHat, Flame, Heart, Users, Code } from "lucide-react";
import gunjanPhoto from "@/assets/gunjan-saxena.jpg";

const features = [
  {
    icon: ChefHat,
    title: "Traditional Recipes",
    description: "Authentic Punjabi recipes passed down through three generations",
  },
  {
    icon: Flame,
    title: "Tandoor Fresh",
    description: "Everything cooked fresh in our traditional clay ovens",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared with passion and Punjabi hospitality",
  },
  {
    icon: Users,
    title: "Family Legacy",
    description: "Serving families since 1985 with the same warmth",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <span className="mb-2 inline-block rounded-full bg-saffron/10 px-4 py-1 text-sm font-medium text-saffron">
              Our Story
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              A Legacy of <span className="text-gradient-saffron">Punjabi Flavors</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Nestled on the iconic GT Road in Jalandhar, <strong>Patwari Dhaba</strong> has been 
              serving authentic Punjabi cuisine since 1985. What started as a humble roadside 
              eatery by the Patwari family has grown into one of Punjab's most beloved dhabas.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Our secret? We believe in the traditional methods — from hand-ground spices 
              to slow-cooked curries in heavy-bottomed handis. Every dish tells a story 
              of our rich Punjabi heritage and the love we put into our cooking.
            </p>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-xl bg-background p-4 animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-saffron text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-hero p-8 text-center text-primary-foreground shadow-warm animate-scale-in">
                <p className="font-display text-5xl font-bold">38+</p>
                <p className="mt-2 text-primary-foreground/80">Years of Service</p>
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-saffron p-8 text-center text-primary-foreground shadow-warm animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <p className="font-display text-5xl font-bold">50+</p>
                <p className="mt-2 text-primary-foreground/80">Menu Items</p>
              </div>
              <div className="rounded-2xl bg-card border-2 border-saffron/20 p-8 text-center shadow-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <p className="font-display text-5xl font-bold text-saffron">1M+</p>
                <p className="mt-2 text-muted-foreground">Happy Customers</p>
              </div>
              <div className="mt-8 rounded-2xl bg-coriander p-8 text-center text-primary-foreground shadow-warm animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <p className="font-display text-5xl font-bold">100%</p>
                <p className="mt-2 text-primary-foreground/80">Fresh Ingredients</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-saffron/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-burgundy/10 blur-2xl" />
          </div>
        </div>

        {/* Made By Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="relative">
              <img
                src={gunjanPhoto}
                alt="Gunjan Saxena - Website Developer"
                className="h-24 w-24 rounded-full object-cover border-4 border-saffron shadow-warm"
              />
              <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-saffron text-primary-foreground">
                <Code className="h-4 w-4" />
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Website Created By</p>
              <h3 className="font-display text-2xl font-bold text-foreground">Gunjan Saxena</h3>
              <p className="text-sm text-saffron font-medium">Web Developer & Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
