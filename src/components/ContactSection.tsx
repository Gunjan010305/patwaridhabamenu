import { Clock, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="mb-2 inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-sm font-medium text-saffron-light">
            Visit Us
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Come & Experience
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/80">
            We're located on the famous GT Road, Jalandhar. 
            Stop by for an unforgettable Punjabi dining experience!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-primary-foreground/15 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-primary-foreground">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-primary-foreground">
              Our Location
            </h3>
            <p className="text-primary-foreground/80">
              GT Road, Near Bus Stand<br />
              Jalandhar, Punjab 144001
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-primary-foreground/15 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-primary-foreground">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-primary-foreground">
              Call Us
            </h3>
            <p className="text-primary-foreground/80">
              +91 98765 43210<br />
              +91 181 2345678
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-primary-foreground/15 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-primary-foreground">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-primary-foreground">
              Opening Hours
            </h3>
            <p className="text-primary-foreground/80">
              Monday - Sunday<br />
              7:00 AM - 11:00 PM
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-primary-foreground/15 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-primary-foreground">
              <Mail className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-primary-foreground">
              Email Us
            </h3>
            <p className="text-primary-foreground/80">
              info@patwaridhaba.com<br />
              reservations@patwaridhaba.com
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 overflow-hidden rounded-2xl border-4 border-primary-foreground/20">
          <iframe
            title="Patwari Dhaba Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54332.31882773248!2d75.5164!3d31.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xfc8a8a9c7b7e4a9d!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[20%] contrast-[1.1]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
