import { Link, useLocation } from "@remix-run/react"
import { useEffect, useRef, useState } from "react"
import fourth from "../assests/12chane.jpeg"
import fifth from "../assests/co.jpeg"
import sixth from "../assests/fo.jpeg"

export default function ProductDetails() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, index])
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const products = [
    {
      title: "CO2 Jet Machine",
      description:
        "The CO2 Jet machine creates impressive, dramatic blasts of cryogenic fog, perfect for concerts, nightclubs, and special events. It delivers instant visual impact and a cooling effect, adding excitement to any performance or celebration.",
      features: [
        "Instant cryogenic fog blasts",
        "Dramatic visual impact",
        "Cooling effect for stage and crowd",
        "Ideal for concerts, nightclubs, and events",
        "Easy setup and operation",
        "Durable construction for professional use",
      ],
      image: fifth, // co2.png
      reverse: false,
    },
    {
      title: "12-Channel Cold Pyro Machine",
      description:
        "This 12-channel cold pyro machine offers precise control over multiple cold spark effects. Ideal for synchronized displays at large events, it allows for intricate choreography of non-flammable sparks, creating stunning visual sequences safely and effectively.",
      features: [
        "12 independent channels for spark effects",
        "Precise and synchronized control",
        "Safe, non-flammable cold sparks",
        "Perfect for large events and stage shows",
        "Supports intricate choreography",
        "Wholesale rates available",
      ],
      image: fourth, // 12 chanel.png
      reverse: true,
    },
    {
      title: "Bubble Fog Machines / Multi-Effect Foggers",
      description:
        "These versatile machines combine the effects of fog and bubbles, creating a unique and enchanting atmosphere. Perfect for parties, theater productions, and themed events, they can fill a space with mystical fog while simultaneously releasing a steady stream of bubbles. Available in various wattages (e.g., 900W, 1400W, 1500W) and configurations (multi-output as seen in 1.jpg, or single-output like the S-PRO in 17.jpg), catering to different event sizes and needs. The S-PRO model (17.jpg) is a dedicated fog machine designed for professional use.",
      features: [
        "Combines fog and bubble effects",
        "Creates magical, enchanting atmospheres",
        "Multiple wattage options: 900W, 1400W, 1500W",
        "Multi-output and single-output models available",
        "Ideal for parties, theater, and events",
        "Professional S-PRO model for large venues",
      ],
      image: sixth, // fog.png
      reverse: false,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${product.reverse ? "lg:grid-flow-col-dense" : ""}`}
          >
            <div
              className={`${product.reverse ? "lg:col-start-2" : ""} transition-all duration-700 ${
                visibleSections.includes(index)
                  ? product.reverse
                    ? "animate-fade-in-right"
                    : "animate-fade-in-left"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6 font-heading">{product.title}</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-text">{product.description}</p>

              <div className="space-y-4 mb-10">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center transition-all duration-500 ${
                      visibleSections.includes(index) ? "animate-fade-in-left" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
              
                <Link to="/contact">
                  <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={`${product.reverse ? "lg:col-start-1" : ""} transition-all duration-700 ${
                visibleSections.includes(index)
                  ? product.reverse
                    ? "animate-fade-in-left"
                    : "animate-fade-in-right"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />

                {/* Floating badge */}
               

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-2xl">
                  <div className="text-center text-white">
                    <h4 className="text-3xl font-bold mb-4 font-heading">{product.title}</h4>
                    <p className="text-xl font-text">Premium Quality Equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
