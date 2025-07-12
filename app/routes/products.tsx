import { useEffect, useRef, useState } from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import { Link } from "@remix-run/react"
import video from "../assests/bg.mp4"
import event from "../assests/event.jpg"
import eng from "../assests/eng.jpg"
import party from "../assests/party.jpg"
import wedding from "../assests/wedd.jpg"
import aniversery from "../assests/ann.jpg"
import festival from "../assests/fettival.jpg"
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.jpg";
import img6 from "../assests/6.jpg";
import img7 from "../assests/7.jpg";
import img8 from "../assests/8.jpg";
import img9 from "../assests/9.jpg";
import img10 from "../assests/10.jpg";
import img11 from "../assests/11.jpg";
import img12 from "../assests/12.jpg";
import img13 from "../assests/13.jpg";
import img14 from "../assests/14.jpg";
import img15 from "../assests/15.jpg";
import img16 from "../assests/16.jpg";
import img17 from "../assests/17.jpg";
import img18 from "../assests/18.jpg";
import img19 from "../assests/19.jpg";
import img20 from "../assests/20.jpg";
import img21 from "../assests/21.jpg";
import img22 from "../assests/22.jpg";
import img23 from "../assests/23.jpg";
import img24 from "../assests/24.jpg";
import img25 from "../assests/25.jpg";
import img26 from "../assests/26.jpg";
import img28 from "../assests/28.jpg";
import img29 from "../assests/29.jpg";
import img30 from "../assests/30.jpg";
import img31 from "../assests/31.jpg";
import img32 from "../assests/32.jpg";
import img33 from "../assests/33.jpg";
import img34 from "../assests/34.jpg";
import imgCo2 from "../assests/co.jpeg";
import img12Chanel from "../assests/12chane.jpeg";
import imgFog from "../assests/fo.jpeg";
import imgSparkular from "../assests/sparkula.jpeg";
import imgConfetti from "../assests/confett.jpeg";
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
      name: "Birthday Party Booking",
      image: party,
      description: "Complete birthday celebration packages with decorations, lighting, and entertainment",
      features: ["Custom Decorations", "Lighting Setup", "Entertainment", "Photography"],
      price: "Starting ₹15,000"
    },
    {
      id: 2,
      name: "Wedding Celebration",
      image: wedding,
      description: "Grand wedding ceremonies with traditional and modern celebration elements",
      features: ["Mandap Decoration", "Fireworks Display", "LED Lighting", "Sound System"],
      price: "Starting ₹50,000"
    },
    {
      id: 3,
      name: "Corporate Events",
      image: event,
      description: "Professional corporate event management with premium services",
      features: ["Stage Setup", "Audio Visual", "Corporate Branding", "Catering Coordination"],
      price: "Starting ₹25,000"
    },
    {
      id: 4,
      name: "Festival Celebrations",
      image: festival,
      description: "Traditional festival celebrations with authentic decorations and arrangements",
      features: ["Traditional Decor", "Cultural Setup", "Religious Arrangements", "Community Events"],
      price: "Starting ₹20,000"
    },
    {
      id: 5,
      name: "Anniversary Parties",
      image: aniversery,
      description: "Romantic and elegant anniversary celebration packages",
      features: ["Romantic Decor", "Ambient Lighting", "Floral Arrangements", "Memory Displays"],
      price: "Starting ₹18,000"
    },
    {
      id: 6,
      name: "Engagement Ceremonies",
      image: eng,
      description: "Beautiful engagement ceremony setups with modern and traditional elements",
      features: ["Ring Ceremony Setup", "Floral Decorations", "Photography Corner", "Guest Arrangements"],
      price: "Starting ₹30,000"
    }
  ]

  // Array of all product images and names
  const allProductImages = [
    { src: img1, name: "1" },
    { src: img2, name: "2" },
    { src: img3, name: "3" },
    { src: img4, name: "4" },
    { src: img5, name: "5" },
    { src: img6, name: "6" },
    { src: img7, name: "7" },
    { src: img8, name: "8" },
    { src: img9, name: "9" },
    { src: img10, name: "10" },
    { src: img11, name: "11" },
    { src: img12, name: "12" },
    { src: img13, name: "13" },
    { src: img14, name: "14" },
    { src: img15, name: "15" },
    { src: img16, name: "16" },
    { src: img17, name: "17" },
    { src: img18, name: "18" },
    { src: img19, name: "19" },
    { src: img20, name: "20" },
    { src: img21, name: "21" },
    { src: img22, name: "22" },
    { src: img23, name: "23" },
    { src: img24, name: "24" },
    { src: img25, name: "25" },
    { src: img26, name: "26" },
    { src: img28, name: "28" },
    { src: img29, name: "29" },
    { src: img30, name: "30" },
    { src: img31, name: "31" },
    { src: img32, name: "32" },
    { src: img33, name: "33" },
    { src: img34, name: "34" },
    { src: imgCo2, name: "co2" },
    { src: img12Chanel, name: "12 chanel" },
    { src: imgFog, name: "fog" },
    { src: imgSparkular, name: "sparkular" },
    { src: imgConfetti, name: "confetti" }
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
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider animate-fade-in-up font-heading">Services & Products</h1>
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