import { useEffect, useRef, useState } from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import { Link } from "@remix-run/react"
import video from "../assests/bg.mp4"
import event from "../assests/event.webp"
import one from "../assests/1.webp"
import second from "../assests/2.webp"
import third from "../assests/3.webp"
import fourth from "../assests/4.webp"
import five from "../assests/5.webp"
import six from "../assests/6.webp"
import party from "../assests/party.webp"
import wedding from "../assests/wedd.webp"
import img12 from "../assests/12.webp";
import img14 from "../assests/14.webp";
import img15 from "../assests/15.webp";
import img16 from "../assests/16.webp";
import img21 from "../assests/21.webp";
import img25 from "../assests/25.webp";
import img26 from "../assests/26.webp";
import img29 from "../assests/29.webp";
import img30 from "../assests/30.webp";
import img32 from "../assests/32.webp";
import img34 from "../assests/34.webp";
import imgCo2 from "../assests/co.jpeg";
import baner from "../assests/Banner.png"
import seasonal from "../assests/SeaSonal Products.png"
import premimum from "../assests/Premium Kits.webp"
import caps from '../assests/Birthday Caps.png'
import eyeMask from "../assests/Eye Mask.webp"
import type { MetaFunction } from "@remix-run/cloudflare";
import img12Chanel from "../assests/12chane.webp";
import imgFog from "../assests/fo.webp";
import imgSparkular from "../assests/sparkula.webp";
import imgConfetti from "../assests/confett.jpeg";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "Products - Cold Pyro, CO2 Jets, Mask Machines & Celebration Materials | A.P. Celebration Traders Satara District" },
    { name: "description", content: "Explore A.P. Celebration Traders' products in Satara District: Cold Pyro, CO2 Jets, Mask Machines, Sparkular Guns & party supplies. Best quality celebration materials." },

    // Short Tail Keywords
    { name: "keywords", content: "celebration materials, cold pyro machine, CO2 jet, confetti blaster, sparkular gun, color smoke, birthday caps, party balloons, cake toppers, snow spray, party poppers, event fireworks, Fataka price list Maharashtra, Celebration fataka online kharedi, Rang barang fataka, Lagna madhe fataka, Vadhdivs madhe fataka, Sana mothi fataka, Flowerpot fataka, Sparkle fataka, Anaar fataka Maharashtra, Vadhdivs party decoration items, Balloon arch set, Vadhdivs cake topper, Happy birthday banner Marathi, Vadhdivs party hat Maharashtra, Photo booth props set, Vadhdivs theme decoration, Balloon decoration set online, Lagna decoration items Maharashtra, Mandap decoration samagri, Toran decoration samagri, Marigold (Zendoo) flower decoration, Stage decoration items, Lagna welcome gate decoration, Mehendi ceremony decoration, Party items online Maharashtra, Party popper set, Return gift items Maharashtra, Ribbon wala set party, Party streamers decoration, Confetti set party, फटके किंमत यादी महाराष्ट्र, सेलिब्रेशन फटके ऑनलाइन खरेदी, रंगबरंग फटके, लग्नात फटके, वाढदिवसात फटके, सन मोठे फटके, फ्लावरपॉट फटके, स्पार्कल फटके, अनार फटके महाराष्ट्र, वाढदिवस पार्टी डेकोरेशन वस्तू, बलून आर्क सेट, वाढदिवस केक टॉपर, हॅपी बर्थडे बॅनर मराठी, वाढदिवस पार्टी हॅट महाराष्ट्र, फोटो बूथ प्रॉप्स सेट, वाढदिवस थीम डेकोरेशन, बलून डेकोरेशन सेट ऑनलाइन, लग्न डेकोरेशन वस्तू महाराष्ट्र, मंडप डेकोरेशन सामग्री, तोरण डेकोरेशन सामग्री, जेंडू फूल डेकोरेशन, स्टेज डेकोरेशन वस्तू, लग्न स्वागत गेट डेकोरेशन, मेहेंदी समारंभ डेकोरेशन, पार्टी आयटम्स ऑनलाइन महाराष्ट्र, पार्टी पॉपर सेट, रिटर्न गिफ्ट आयटम्स महाराष्ट्र, रिबन वाला सेट पार्टी, पार्टी स्ट्रीमर्स डेकोरेशन, कन्फेटी सेट पार्टी" },

    // Long Tail Keywords
    { name: "long-tail-keywords", content: "buy cold pyro machine online India, CO2 fog machine for weddings price, electronic crackers for events, remote control fireworks system, stage decoration items wholesale, party smoke machine rental Satara, wedding entry special effects, Fataka price list online Maharashtra, Celebration fataka online booking kharedi, Rang barang fataka for festivals, Lagna madhe fataka decoration items, Vadhdivs madhe fataka celebration items, Sana mothi fataka wholesale price, Flowerpot fataka for home celebration, Sparkle fataka for parties, Anaar fataka best price Maharashtra, Vadhdivs party decoration items set, Balloon arch set for birthday, Vadhdivs cake topper Marathi design, Happy birthday banner Marathi text, Vadhdivs party hat Maharashtra style, Photo booth props set for events, Vadhdivs theme decoration complete set, Balloon decoration set online order, Lagna decoration items Maharashtra wholesale, Mandap decoration samagri traditional, Toran decoration samagri for entrance, Marigold Zendoo flower decoration fresh, Stage decoration items for events, Lagna welcome gate decoration design, Mehendi ceremony decoration items, Party items online Maharashtra delivery, Party popper set wholesale price, Return gift items Maharashtra traditional, Ribbon wala set party decoration, Party streamers decoration colorful, Confetti set party celebration, फटके किंमत यादी ऑनलाइन महाराष्ट्र, सेलिब्रेशन फटके ऑनलाइन बुकिंग खरेदी, रंगबरंग फटके सणासाठी, लग्नात फटके डेकोरेशन वस्तू, वाढदिवसात फटके सेलिब्रेशन आयटम्स, सन मोठे फटके थोक किंमत, फ्लावरपॉट फटके घरच्या सेलिब्रेशनसाठी, स्पार्कल फटके पार्टीसाठी, अनार फटके सर्वोत्तम किंमत महाराष्ट्र, वाढदिवस पार्टी डेकोरेशन वस्तू सेट, बलून आर्क सेट वाढदिवसासाठी, वाढदिवस केक टॉपर मराठी डिझाइन, हॅपी बर्थडे बॅनर मराठी मजकूर, वाढदिवस पार्टी हॅट महाराष्ट्र स्टाइल, फोटो बूथ प्रॉप्स सेट इव्हेंट्ससाठी, वाढदिवस थीम डेकोरेशन संपूर्ण सेट, बलून डेकोरेशन सेट ऑनलाइन ऑर्डर, लग्न डेकोरेशन वस्तू महाराष्ट्र थोक, मंडप डेकोरेशन सामग्री पारंपरिक, तोरण डेकोरेशन सामग्री प्रवेशासाठी, जेंडू फूल डेकोरेशन ताजे, स्टेज डेकोरेशन वस्तू इव्हेंट्ससाठी, लग्न स्वागत गेट डेकोरेशन डिझाइन, मेहेंदी समारंभ डेकोरेशन वस्तू, पार्टी आयटम्स ऑनलाइन महाराष्ट्र डिलिव्हरी, पार्टी पॉपर सेट थोक किंमत, रिटर्न गिफ्ट आयटम्स महाराष्ट्र पारंपरिक, रिबन वाला सेट पार्टी डेकोरेशन, पार्टी स्ट्रीमर्स डेकोरेशन रंगीबेरंगी, कन्फेटी सेट पार्टी सेलिब्रेशन" },

    // High Rank Keywords
    { name: "high-rank-keywords", content: "wedding special effects, concert stage effects, event pyrotechnics, bridal entry fireworks, stage cold sparks, dry ice fog effect, Maharashtra fataka wholesale price, Online fataka booking Satara, Traditional wedding decoration items, Birthday party decoration packages, Party supplies wholesale Maharashtra, Event decoration equipment rental, Celebration items online shopping, Festival decoration special items, Corporate event decoration services, महाराष्ट्र फटके थोक किंमत, ऑनलाइन फटके बुकिंग सातारा, पारंपरिक लग्न डेकोरेशन वस्तू, वाढदिवस पार्टी डेकोरेशन पॅकेज, पार्टी सप्लायज थोक महाराष्ट्र, इव्हेंट डेकोरेशन उपकरण भाडे, सेलिब्रेशन आयटम्स ऑनलाइन शॉपिंग, सण डेकोरेशन विशेष वस्तू, कॉर्पोरेट इव्हेंट डेकोरेशन सर्व्हिसेस" },

    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },

    // Canonical URL
    { rel: "canonical", href: "https://apcelebrationtraders.in/products" }
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