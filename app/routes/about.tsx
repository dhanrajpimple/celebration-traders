import { useEffect, useRef, useState } from "react"
import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import shop from "../assests/35.jpg"
import owner from "../assests/owner.jpg"
import video from "../assests/bg.mp4"

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "About A.P. Celebration Traders - Leading Fireworks & Celebration Materials Supplier in Satara Since Years" },
    { name: "description", content: "Learn about A.P. Celebration Traders - Satara's most trusted celebration materials supplier. Years of experience in firecrackers, cold pyro systems, party supplies & wedding decorations. Certified products, expert team & exceptional service." },
    
    // SEO Keywords
    { name: "keywords", content: "about AP Celebration Traders, fireworks supplier Satara, celebration materials company, trusted pyrotechnics dealer, experienced party supplies vendor, certified fireworks dealer Maharashtra, professional celebration services, established fireworks business Satara, reliable party equipment supplier, celebration materials expertise, quality fireworks provider, customer service excellence, wholesale celebration supplies, retail party materials, years of experience fireworks, trusted local business Satara, celebration industry leaders, professional pyrotechnics services, party planning expertise, wedding decoration specialists" },
    
    // Open Graph Tags
    { property: "og:title", content: "About A.P. Celebration Traders - Satara's Trusted Celebration Materials Expert" },
    { property: "og:description", content: "Discover the story behind Satara's leading celebration materials supplier. Years of expertise in firecrackers, cold pyro systems & party supplies with certified products & exceptional service." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.com/about" },
    { property: "og:image", content: "https://apcelebrationtraders.com/images/about-ap-celebration-team.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About A.P. Celebration Traders - Satara's Trusted Celebration Expert" },
    { name: "twitter:description", content: "Discover the story behind Satara's leading celebration materials supplier. Years of expertise in firecrackers, cold pyro systems & party supplies." },
    { name: "twitter:image", content: "https://apcelebrationtraders.com/images/about-ap-celebration-team.jpg" },
    
    // Additional SEO Tags
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "14 days" },
    { name: "author", content: "A.P. Celebration Traders" },
    { name: "copyright", content: "A.P. Celebration Traders" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    
    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },
    
    // Business Information
    { name: "business:contact_data:street_address", content: "Shop No. 5, Near chakor bakery, phutka talav somvar peth" },
    { name: "business:contact_data:locality", content: "Satara" },
    { name: "business:contact_data:region", content: "Maharashtra" },
    { name: "business:contact_data:postal_code", content: "415001" },
    { name: "business:contact_data:country_name", content: "India" },
    { name: "business:contact_data:phone_number", content: "+919359604441" },
    { name: "business:contact_data:email", content: "apcelebrationtrender01@gmail.com" },
    
    // Company Profile Tags
    { name: "company-founded", content: "Established celebration materials supplier" },
    { name: "company-specialization", content: "Firecrackers, Cold Pyro Systems, Party Supplies, Wedding Decorations" },
    { name: "service-area", content: "Satara, Maharashtra and nearby cities" },
    { name: "business-model", content: "Wholesale and Retail" },
    
    // Trust & Authority Tags
    { name: "business-values", content: "Quality, Safety, Customer Service, Certified Products" },
    { name: "expertise-areas", content: "Festivals, Weddings, Birthday Parties, Corporate Events" },
    { name: "certifications", content: "Certified fireworks and celebration materials supplier" },
    
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
    { rel: "canonical", href: "https://apcelebrationtraders.com/about" },
    
    // Breadcrumb Navigation
    { name: "breadcrumb", content: "Home > About Us" },
    
    // Local Business Tags
    { name: "local-business-type", content: "Fireworks and Celebration Materials Store" },
    { name: "local-business-category", content: "Party Supplies, Celebration Materials, Fireworks, Event Equipment" },
    { name: "business-hours", content: "Contact for business hours" },
    
    // Experience & Expertise Tags
    { name: "years-of-experience", content: "Experienced celebration materials supplier" },
    { name: "customer-base", content: "Serving Satara and nearby cities" },
    { name: "service-quality", content: "Premium quality products and excellent customer service" },
    
    // Industry-Specific Tags
    { name: "industry", content: "Celebration Materials, Fireworks, Party Supplies, Event Equipment" },
    { name: "target-market", content: "Individual customers, Event planners, Wedding organizers, Corporate clients" },
    { name: "product-range", content: "Cold Pyro Systems, CO2 Jets, Sparkular Guns, Confetti Blasters, Party Decorations" },
    
    // Rich Snippets Support
    { name: "application-name", content: "A.P. Celebration Traders - About Us" },
    { name: "msapplication-tooltip", content: "Learn about Satara's trusted celebration materials supplier" },
    
    // Page-Specific Keywords
    { name: "page-topic", content: "Company history, expertise, values, team, service commitment" },
    { name: "content-focus", content: "About company, business background, experience, quality commitment" },
    
    // Long-tail Keywords for About Page
    { name: "about-page-keywords", content: "who is AP Celebration Traders, celebration materials company history, fireworks supplier background Satara, trusted pyrotechnics dealer story, party supplies business experience, wedding decoration experts about, corporate event specialists background, celebration industry expertise, quality fireworks commitment, customer service philosophy, local business story Satara, celebration materials supplier journey" },
    
    // Schema Markup Hints
    { name: "schema-type", content: "Organization, LocalBusiness" },
    { name: "organization-type", content: "Local Business specializing in Celebration Materials" }
  ];
};

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [teamVisible, setTeamVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (teamRef.current) teamObserver.observe(teamRef.current)

    return () => {
      observer.disconnect()
      teamObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
        <section className="relative h-96 bg-black overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

          <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider animate-fade-in-up font-heading">About Us</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 animate-fade-in-up stagger-2"></div>
          </div>
        </div>
      </section>

      
      {/* Who We Are Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-600 rounded mr-3 animate-pulse"></div>
                <h2 className="text-2xl font-bold text-gray-900 font-heading">Who We Are:</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition-colors duration-300 font-text">
                AP Celebration Trader is Satara's trusted supplier of firecrackers, cold pyro, birthday and party items, electric lights, and all celebration materials. We are dedicated to making every occasion memorable and safe with our wide range of certified products and excellent customer service. Serving Satara and nearby cities, we offer both wholesale and retail options for all your celebration needs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition-colors duration-300 font-text">
                With years of experience and a commitment to quality, AP Celebration Trader has become the go-to destination for festivals, weddings, birthdays, and all special events. Our knowledgeable team is always ready to help you choose the right products and ensure a smooth, hassle-free experience.
              </p>
            </div>

            <div
              className={`relative transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative group">
                <img
                  src={shop}
                  alt="About our company"
                  className="w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div
              className={`relative transition-all duration-700 delay-300 ${teamVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative group">
                <img
                  src={owner}
                  alt="CEO of AP Celebration Trader"
                  className="w-full h-auto object-center rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            {/* CEO Text */}
            <div
              className={`transition-all duration-700 ${teamVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-600 rounded mr-3 animate-pulse"></div>
                <h2 className="text-2xl font-bold text-gray-900 font-heading">Meet Our CEO</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition-colors duration-300 font-text">
                <span className="font-semibold text-red-600">Mr. Anikte Pimpale</span> is the visionary behind AP Celebration Trader. With a passion for celebrations and a commitment to safety and quality, he has led our company to become Satara’s most trusted name for firecrackers and party supplies. His leadership ensures that every customer receives the best products and service, making every occasion truly special.
              </p>
              <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300 font-text">
                Under his guidance, our team continues to innovate and expand, always putting customer satisfaction first. Mr. Pimpale's dedication to excellence inspires us every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section ref={teamRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 ${teamVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Our Commitment</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed transition-all duration-700 delay-200 font-text">
            <p>
              At AP Celebration Trader, we believe every celebration deserves the best. Our mission is to provide safe, high-quality firecrackers and celebration materials at the best prices, with friendly service and expert advice. Thank you for making us Satara's favorite celebration store!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
