import { useEffect, useRef, useState } from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import { Link } from "@remix-run/react"
import video from "../assests/bg.mp4"
import event from "../assests/event.jpg"
import one from "../assests/1.png"
import second from "../assests/2.png"
import third from "../assests/3.png"
import fourth from "../assests/4.png"
import five from "../assests/5.png"
import six from "../assests/6.png"
import party from "../assests/party.jpg"
import wedding from "../assests/wedd.jpg"
import img12 from "../assests/12.jpg";
import img14 from "../assests/14.jpg";
import img15 from "../assests/15.jpg";
import img16 from "../assests/16.jpg";
import img21 from "../assests/21.jpg";
import img25 from "../assests/25.jpg";
import img26 from "../assests/26.jpg";
import img29 from "../assests/29.jpg";
import img30 from "../assests/30.jpg";
import img32 from "../assests/32.jpg";
import img34 from "../assests/34.jpg";
import imgCo2 from "../assests/co.jpeg";
import baner from "../assests/Banner.png"
import seasonal from "../assests/SeaSonal Products.png"
import premimum from "../assests/Premium Kits.png"
import caps from '../assests/Birthday Caps.png'
import eyeMask from "../assests/Eye Mask.png"
import type { MetaFunction } from "@remix-run/cloudflare";
import img12Chanel from "../assests/12chane.jpeg";
import imgFog from "../assests/fo.jpeg";
import imgSparkular from "../assests/sparkula.jpeg";
import imgConfetti from "../assests/confett.jpeg";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "Products - Cold Pyro Machines, CO2 Jets, Sparkular Guns & Party Supplies | A.P. Celebration Traders Satara" },
    { name: "description", content: "Browse A.P. Celebration Traders' complete product range: 12-Channel Cold Pyro, CO2 Jet Machines, Sparkular Guns, Confetti Blasters, Color Smoke Cannons, Cash Cannons & premium party supplies in Satara." },
    
    // SEO Keywords
    { name: "keywords", content: "cold pyro machine, 12 channel cold pyro, CO2 jet machine, sparkular guns, confetti blaster, color smoke cannons, cash cannon, bubble fog machine, party poppers, cake toppers, birthday caps, eye masks, plastic crowns, silver fountains, Ferrari cold pyro, cold pyro firing system, remote control pyro, color smoke cylinders, Indian currency note gloss, party balloons, hangers, dangler 3d butterfly, banners, seasonal products, premium kits, celebration materials catalog, fireworks products Satara, pyrotechnics equipment, party supplies inventory, wedding decoration materials, corporate event products, birthday party items, celebration equipment rental" },
    
    // Open Graph Tags
    { property: "og:title", content: "Products - Cold Pyro, CO2 Jets & Party Supplies | A.P. Celebration Traders" },
    { property: "og:description", content: "Explore our complete range of celebration products: Cold Pyro Machines, CO2 Jets, Sparkular Guns, Confetti Blasters & premium party supplies. Quality guaranteed!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.com/products" },
    { property: "og:image", content: "https://apcelebrationtraders.com/images/products-showcase-ap-celebration.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Products - Cold Pyro, CO2 Jets & Party Supplies | A.P. Celebration Traders" },
    { name: "twitter:description", content: "Explore our complete range of celebration products: Cold Pyro Machines, CO2 Jets, Sparkular Guns & premium party supplies. Quality guaranteed!" },
    { name: "twitter:image", content: "https://apcelebrationtraders.com/images/products-showcase-ap-celebration.jpg" },
    
    // Additional SEO Tags
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "3 days" },
    { name: "author", content: "A.P. Celebration Traders" },
    { name: "copyright", content: "A.P. Celebration Traders" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    
    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },
    
    // Business Contact Information
    { name: "business:contact_data:street_address", content: "Shop No. 5, Near chakor bakery, phutka talav somvar peth" },
    { name: "business:contact_data:locality", content: "Satara" },
    { name: "business:contact_data:region", content: "Maharashtra" },
    { name: "business:contact_data:postal_code", content: "415001" },
    { name: "business:contact_data:country_name", content: "India" },
    { name: "business:contact_data:phone_number", content: "+919359604441" },
    { name: "business:contact_data:email", content: "apcelebrationtrender01@gmail.com" },
    
    // Product Categories
    { name: "product-categories", content: "Cold Pyro Systems, CO2 Effects, Sparkular Equipment, Confetti Systems, Smoke Effects, Party Supplies, Birthday Decorations, Wedding Materials, Corporate Event Equipment" },
    { name: "main-products", content: "12-Channel Cold Pyro, CO2 Jet Machine, Sparkular Guns, Confetti Blaster, Color Smoke Cannons, Cash Cannon, Bubble Fog Machine" },
    { name: "party-supplies", content: "Party Balloons, Cake Toppers, Birthday Caps, Eye Masks, Plastic Crowns, Party Poppers, Banners, Danglers" },
    
    // Product Features
    { name: "cold-pyro-features", content: "Remote control, 12-channel system, Ferrari cold pyro, firing stands, assorted products" },
    { name: "special-effects", content: "CO2 jets, color smoke, silver fountains, bubble fog, confetti blasting" },
    { name: "decoration-items", content: "3D butterfly danglers, seasonal products, premium kits, Indian currency note gloss" },
    
    // Inventory & Availability
    { name: "product-availability", content: "In-stock celebration materials, rental equipment available, wholesale quantities" },
    { name: "inventory-status", content: "Wide range of celebration products always in stock" },
    { name: "bulk-orders", content: "Wholesale quantities available for bulk orders" },
    
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
    { rel: "canonical", href: "https://apcelebrationtraders.com/products" },
    
    // Breadcrumb Navigation
    { name: "breadcrumb", content: "Home > Products" },
    
    // Product Page Specific Tags
    { name: "page-type", content: "Product Catalog Page" },
    { name: "catalog-size", content: "Extensive range of celebration materials and equipment" },
    
    // Quality & Certification
    { name: "product-quality", content: "Certified celebration materials, tested pyrotechnic equipment" },
    { name: "safety-standards", content: "All products meet safety standards and regulations" },
    { name: "quality-assurance", content: "Premium quality celebration materials guaranteed" },
    
    // Local Business Tags
    { name: "local-business-type", content: "Celebration Materials and Equipment Supplier" },
    { name: "local-business-category", content: "Party Supplies, Fireworks, Event Equipment, Decoration Materials" },
    { name: "service-type", content: "Retail and Wholesale celebration products" },
    
    // Event-Specific Products
    { name: "birthday-products", content: "Birthday caps, cake toppers, party balloons, decoration packages" },
    { name: "wedding-products", content: "Cold pyro systems, fireworks, LED lighting, mandap materials" },
    { name: "corporate-products", content: "Stage materials, AV equipment, branding supplies, professional effects" },
    
    // Equipment Rental
    { name: "rental-equipment", content: "Cold pyro machines, CO2 jets, sound systems, lighting equipment available for rent" },
    { name: "booking-products", content: "Equipment booking available for events and celebrations" },
    
    // Rich Snippets Support
    { name: "application-name", content: "A.P. Celebration Traders - Products" },
    { name: "msapplication-tooltip", content: "Browse celebration materials and party equipment catalog" },
    
    // Product Search Keywords
    { name: "product-search-terms", content: "cold pyro machine price, CO2 jet machine rental, sparkular guns booking, confetti blaster hire, color smoke cannon price, cash cannon rental, bubble fog machine cost, party supplies catalog, celebration equipment list, fireworks products Satara, pyrotechnic equipment suppliers, party decoration materials, wedding celebration products, birthday party supplies, corporate event equipment" },
    
    // Schema Markup Hints
    { name: "schema-type", content: "Product, ProductCollection, LocalBusiness" },
    { name: "product-schema", content: "Individual products with prices, availability, descriptions" },
    
    // Pricing & Purchase Information
    { name: "pricing-info", content: "Competitive prices, wholesale rates available, rental options" },
    { name: "purchase-options", content: "Buy, rent, or book celebration equipment and materials" },
    { name: "payment-methods", content: "Multiple payment options accepted" },
    
    // Technical Specifications
    { name: "technical-products", content: "12-channel cold pyro firing systems, remote control pyrotechnics, professional grade equipment" },
    { name: "product-specifications", content: "Detailed specifications available for all technical equipment" },
    
    // Long-tail Product Keywords
    { name: "long-tail-product-keywords", content: "best cold pyro machine in Satara, CO2 jet machine rental prices, sparkular guns for wedding, confetti blaster booking Maharashtra, color smoke cannon effects, professional pyrotechnic equipment, premium party supplies catalog, celebration materials wholesale prices, birthday decoration packages, wedding fireworks products, corporate event equipment rental, party supplies near me Satara" },
    
    // Customer Benefits
    { name: "product-benefits", content: "Wide selection, competitive prices, quality guaranteed, expert guidance, quick delivery" },
    { name: "customer-advantages", content: "One-stop shop for all celebration needs, professional equipment, certified products" }
  ];
};


export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            setIsVisible(true)
          }
        }
      },
      { threshold: 0.01, rootMargin: '200px' },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const celebrationServices = [
    {
      id: 1,
      name: "Birthday Party Supplies & Equipment",
      image: party,
      description: "Complete birthday party supply packages with decorations, lighting equipment, and entertainment systems for rent or purchase",
      features: ["Decoration Packages", "Lighting Equipment Rental", "Sound System Rental", "Photo Booth Setup"],
      price: "Starting ₹5,000"
    },
    {
      id: 2,
      name: "Wedding Decoration & Equipment",
      image: wedding,
      description: "Premium wedding supplies including All types of materials, lighting systems, and ceremonial equipment",
      features: ["Mandap Setup Materials", "Fireworks & Crackers", "LED Lighting Systems", "Professional Sound Equipment"],
      price: "Starting ₹20,000"
    },
    {
      id: 3,
      name: "Corporate Event Solutions",
      image: event,
      description: "Professional event equipment and branding materials for corporate functions and conferences",
      features: ["Stage & Backdrop Materials", "AV Equipment Rental", "Corporate Branding Supplies", "Furniture & Seating"],
      price: "Starting ₹10,000"
    }
  ]
  // Array of all product images and names
  const allProductImages = [


    { src: img12, name: "Plastic Crowns" },

    { src: img14, name: "Color Smoke Cannons" },
    { src: img15, name: "Silver Fountains" },
    { src: img16, name: "Color Smoke (cylinders)" },

    { src: img21, name: "Cold Pyro firing machine" },

    { src: img25, name: "Cold Pyro stands" },
    { src: img26, name: "Assorted Cold Pyro products" },

    { src: img29, name: "Ferrari Cold Pyro" },
    { src: img30, name: "Cold Pyro firing system with remote control" },

    { src: img32, name: "12-channel Cold Pyro firing machine" },

    { src: img34, name: "Cash Cannon" },
    { src: imgCo2, name: "CO2 Jet Machine" },
    { src: img12Chanel, name: "12-Channel Cold Pyro" },
    { src: imgFog, name: "Bubble Fog Machines" },
    { src: imgSparkular, name: "Sparkular Guns" },
    { src: imgConfetti, name: "Confetti Blaster" },
    { src: one, name: "Indian Currency Note Gloss" },
    { src: second, name: "Party Ballons" },
    { src: third, name: "Hangers" },
    { src: fourth, name: "Party Popper" },
    { src: five, name: "Cake Toppers" },
    { src: six, name: "Dangler 3d ButterFly" },
    { src: baner, name: "Banners" },
    { src: seasonal, name: "Seasonal Products" },
    { src: premimum, name: "Premimum Kits" },
    { src: eyeMask, name: "Eye Masks" },
    { src: caps, name: "Birthday Caps" },
  ];

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
        <div className="absolute inset-0" />

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
            <h1 className="text-2xl md:text-6xl font-bold tracking-wider animate-fade-in-up font-heading">Trusted Wholesale Birthday Products, SFX Items, and Decoration Materials</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 animate-fade-in-up stagger-2"></div>
          </div>
        </div>
      </section>

      {/* Celebration Services Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Celebration Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-text">Professional event management and celebration services for all your special occasions</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrationServices.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-500 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Link to="/contact">
                        <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100">
                          Book Service
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 font-heading">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-text">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 font-subheading">Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 font-text">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                   
                    <Link to="/contact">
                      <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
                        Get Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-text">All available products and effects</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          {/* Products Grid: Show all images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProductImages.map((img, index) => (
              <div
                key={img.name}
                className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 font-heading">
                    {img.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}