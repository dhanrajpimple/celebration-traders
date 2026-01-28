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
    { title: "A.P. Celebration Traders | Best Celebration Materials & Firecrackers in Satara District" },
    { name: "description", content: "A.P. Celebration Traders - Satara District's leading supplier of firecrackers, mask machines, cold pyro, birthday & wedding supplies. Wholesale & retail available. Quality celebration materials for all events." },

    // SEO Keywords
    { name: "keywords", content: "firecrackers Satara District, mask machine Satara, cold pyro machine, celebration materials Satara, birthday party supplies Satara, wedding decorations Satara, Somvar Peth Satara, Chakor Bakery Satara, Phutka Talav Satara, AP Celebration Trader" },

    // Open Graph Tags
    { property: "og:title", content: "A.P. Celebration Traders - Best Firecrackers & Party Supplies in Satara District" },
    { property: "og:description", content: "Satara District's trusted supplier of firecrackers, mask machines, cold pyro, and party supplies. Complete celebration solutions for weddings & events." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.in" },
    { property: "og:image", content: "https://apcelebrationtraders.in/images/ap-celebration-og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },

    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "A.P. Celebration Traders - Premium Firecrackers & Party Supplies in Satara District" },
    { name: "twitter:description", content: "Satara District's best for firecrackers, mask machines, and celebration materials." },
    { name: "twitter:image", content: "https://apcelebrationtraders.in/images/ap-celebration-twitter-image.jpg" },

    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "7 days" },
    { name: "author", content: "A.P. Celebration Traders" },

    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },

    // Additional Local SEO
    { name: "locality", content: "Satara" },
    { name: "region", content: "Maharashtra" },
    { name: "country", content: "India" },
    { name: "district", content: "Satara District" },

    // Long-tail Keywords for Better Ranking
    { name: "long-tail-keywords", content: "best fireworks shop in Satara District, mask machine for party Satara, cold pyro machine dealer Satara, birthday party decorations Satara city, wholesale celebration materials Satara" }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <ProductDetails />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}

