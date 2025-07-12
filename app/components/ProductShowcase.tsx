
import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "@remix-run/react"
import first from "../assests/12 chanel.png"
import second from "../assests/co2.png"
import third from "../assests/sparkular.png"

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)
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
      name: "12-Channel Cold Pyro",
      image: first,
      category: "Photo Booth",
    },
    {
      id: 2,
      name: "CO2 Jet Machine",
      image: second,
      category: "Smoke Effects",
    },
    {
      id: 3,
      name: "Sparkular Guns",
      image: third,
      category: "Special Effects",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} font-heading`}
          >
            A Star Products
          </h2>
          <div
            className={`w-32 h-1 bg-red-600 mx-auto transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          ></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                

                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center">
                      <Link to="/contact">
                        <button className="bg-red-600 border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 font-heading">
                    {product.name}
                  </h3>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <Link to="/products">
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-heading">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
