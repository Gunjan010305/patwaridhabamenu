import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Patwari Dhaba - Authentic Punjabi Cuisine | Jalandhar</title>
        <meta
          name="description"
          content="Experience authentic Punjabi cuisine at Patwari Dhaba, Jalandhar. Serving traditional dishes like Butter Chicken, Dal Makhani, Sarson Da Saag since 1985. Visit us on GT Road."
        />
        <meta
          name="keywords"
          content="Patwari Dhaba, Punjabi restaurant, Jalandhar, dhaba, butter chicken, dal makhani, tandoori, authentic Punjabi food, GT Road"
        />
        <link rel="canonical" href="https://patwaridhaba.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Patwari Dhaba - Authentic Punjabi Cuisine | Jalandhar" />
        <meta property="og:description" content="Experience authentic Punjabi cuisine at Patwari Dhaba. Traditional recipes since 1985." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Patwari Dhaba",
            "image": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "GT Road, Near Bus Stand",
              "addressLocality": "Jalandhar",
              "addressRegion": "Punjab",
              "postalCode": "144001",
              "addressCountry": "IN"
            },
            "telephone": "+91-98765-43210",
            "servesCuisine": "Punjabi, North Indian",
            "priceRange": "₹₹",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "07:00",
              "closes": "23:00"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <MenuSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
