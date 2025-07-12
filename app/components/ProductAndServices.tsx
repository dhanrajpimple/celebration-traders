
import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "@remix-run/react"

export default function ProductsAndServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("products")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      id: 1,
      name: "360 Degree Selfie Booth",
      image: "/placeholder.svg?height=200&width=200",
      category: "Photo Booth",
      price: "₹45,000",
    },
    {
      id: 2,
      name: "Fog Machine",
      image: "/placeholder.svg?height=200&width=200",
      category: "Smoke Effects",
      price: "₹12,000",
    },
    {
      id: 3,
      name: "Bubble Machine",
      image: "/placeholder.svg?height=200&width=200",
      category: "Special Effects",
      price: "₹8,000",
    },
  ]

  const services = [
    {
      id: 1,
      name: "Event Setup & Management",
      description: "Complete event setup with professional technicians",
      icon: "🎪",
      duration: "Full Day",
      price: "₹5,000/day",
    },
    {
      id: 2,
      name: "Equipment Rental",
      description: "Rent our premium equipment for your events",
      icon: "🎭",
      duration: "Per Event",
      price: "₹2,000/day",
    },
    {
      id: 3,
      name: "Technical Support",
      description: "24/7 technical support and maintenance",
      icon: "🔧",
      duration: "On-demand",
      price: "₹1,500/visit",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} font-heading`}
          >
            Products & Services
          </h2>
          <div
            className={`w-24 h-1 bg-red-600 mx-auto transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          ></div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "products" ? "bg-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "services" ? "bg-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer hover-lift transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 animate-float">
                    <div className="bg-red-600 p-2 rounded shadow-lg">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    {product.price}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 font-heading">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-text">{product.category}</p>
              </div>
            ))}
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white border border-gray-200 rounded-lg p-6 hover-lift transition-all duration-500 hover:border-red-300 hover:shadow-lg ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-300 font-heading">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 font-text">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 font-text">{service.duration}</span>
                  <span className="text-lg font-bold text-red-600 font-heading">{service.price}</span>
                </div>
                <Link to="/contact">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow">
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <Link to="/products">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover-glow">
              View All {activeTab === "products" ? "Products" : "Services"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
