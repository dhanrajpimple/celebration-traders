import type { MetaFunction } from "@remix-run/cloudflare";
import About from "~/components/About";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import ProductDetails from "~/components/ProductDetails";
import ProductShowcase from "~/components/ProductShowcase";
import WhyChooseUs from "~/components/WhyChooseUs";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "A.P. Celebration Traders - Best Celebration Materials" },
    { name: "description", content: "A.P. Celebration Traders - Satara's #1 supplier of firecrackers, cold pyro machines, birthday party supplies, wedding decorations & celebration materials. CO2 jets, sparkular guns, confetti blasters & more. Wholesale & retail available." },
    
    // SEO Keywords
    { name: "keywords", content: "firecrackers Satara, cold pyro machine, celebration materials Satara, birthday party supplies, wedding decorations, CO2 jet machine, sparkular guns, confetti blaster, party supplies Satara, fireworks Satara, cold pyro firing system, bubble fog machine, cash cannon, color smoke cannons, wedding mandap materials, corporate event supplies, party balloons, cake toppers, celebration traders, Maharashtra fireworks, pyrotechnics Satara, party equipment rental, LED lighting systems, sound system rental, photo booth setup, backdrop materials, AV equipment rental, premium celebration kits, seasonal decorations, party poppers, eye masks, birthday caps, banners, danglers, wholesale fireworks, retail celebration supplies" },
    
    // Open Graph Tags
    { property: "og:title", content: "A.P. Celebration Traders - Premium Firecrackers & Party Supplies in Satara" },
    { property: "og:description", content: "Satara's trusted supplier of firecrackers, cold pyro machines, birthday & wedding supplies. CO2 jets, sparkular guns & complete celebration solutions. Book now!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.com" },
    { property: "og:image", content: "https://apcelebrationtraders.com/images/ap-celebration-og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "A.P. Celebration Traders - Premium Firecrackers & Party Supplies in Satara" },
    { name: "twitter:description", content: "Satara's trusted supplier of firecrackers, cold pyro machines, birthday & wedding supplies. CO2 jets, sparkular guns & complete celebration solutions." },
    { name: "twitter:image", content: "https://apcelebrationtraders.com/images/ap-celebration-twitter-image.jpg" },
    
    // Additional SEO Tags
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "7 days" },
    { name: "author", content: "A.P. Celebration Traders" },
    { name: "copyright", content: "A.P. Celebration Traders" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    
    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },
    
    // Business Schema
    { name: "business:contact_data:street_address", content: "Shop No. 5, Near chakor bakery, phutka talav somvar peth" },
    { name: "business:contact_data:locality", content: "Satara" },
    { name: "business:contact_data:region", content: "Maharashtra" },
    { name: "business:contact_data:postal_code", content: "415001" },
    { name: "business:contact_data:country_name", content: "India" },
    { name: "business:contact_data:phone_number", content: "+919359604441" },
    { name: "business:contact_data:email", content: "apcelebrationtrender01@gmail.com" },
    
    // Local Business Tags
    { name: "local-business-type", content: "Fireworks Store" },
    { name: "local-business-category", content: "Party Supplies, Celebration Materials, Fireworks" },
    
    // Mobile Optimization
    { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
    { name: "format-detection", content: "telephone=yes" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    
    // Theme Colors
    { name: "theme-color", content: "#FF4500" },
    { name: "msapplication-TileColor", content: "#FF4500" },
    
    // Canonical URL
    { rel: "canonical", href: "https://apcelebrationtraders.com" },
    
    // Preconnect for Performance
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    
    // Additional Local SEO
    { name: "locality", content: "Satara" },
    { name: "region", content: "Maharashtra" },
    { name: "country", content: "India" },
    
    // Rich Snippets Support
    { name: "application-name", content: "A.P. Celebration Traders" },
    { name: "msapplication-tooltip", content: "Premium Celebration Materials & Fireworks in Satara" },
    
    // Long-tail Keywords for Better Ranking
    { name: "long-tail-keywords", content: "best fireworks shop in Satara, cold pyro machine rental Satara, birthday party decorations Satara, wedding celebration materials Maharashtra, professional pyrotechnics Satara, party equipment suppliers near me, celebration traders somvar peth, firecrackers wholesale Satara, CO2 jet machine booking, sparkular guns rental Maharashtra" }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductShowcase/>
      <ProductDetails/>
      <WhyChooseUs/>
      <FAQ/>
      <Footer />
    </div>
  );
}

