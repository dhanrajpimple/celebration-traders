import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "@remix-run/react"

export default function ProductFeatures() {
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

  const features = [
    {
      title: "360 Degree Selfie Booth",
      description: "Revolutionary photo booth technology for capturing stunning 360-degree videos and photos.",
      features: [
        "High-quality camera system",
        "LED lighting setup",
        "Social media integration",
        "Custom branding options",
        "Easy setup and operation",
      ],
      image: "/placeholder.svg?height=300&width=400",
      reverse: false,
      price: "₹45,000",
    },
    {
      title: "Fog & Smoke Machine",
      description: "Professional grade fog machines for creating atmospheric effects at events and performances.",
      features: [
        "Variable output control",
        "Quick heat-up time",
        "Low fluid consumption",
        "Remote control operation",
        "Durable construction",
      ],
      image: "/placeholder.svg?height=300&width=400",
      reverse: true,
      price: "₹12,000",
    },
    {
      title: "Bubble Machine",
      description: "Create magical moments with our high-performance bubble machines for any celebration.",
      features: [
        "Continuous bubble production",
        "Adjustable bubble size",
        "Quiet operation",
        "Easy maintenance",
        "Weather resistant",
      ],
      image: "/placeholder.svg?height=300&width=400",
      reverse: false,
      price: "₹8,000",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${feature.reverse ? "md:grid-flow-col-dense" : ""}`}
          >
            <div
              className={`${feature.reverse ? "md:col-start-2" : ""} transition-all duration-700 ${
                visibleSections.includes(index)
                  ? feature.reverse
                    ? "animate-fade-in-right"
                    : "animate-fade-in-left"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl font-bold text-gray-900 font-heading">{feature.title}</h3>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  {feature.price}
                </span>
              </div>
              <p className="text-gray-700 mb-6 font-text">{feature.description}</p>

              <ul className="space-y-3 mb-8">
                {feature.features.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center transition-all duration-500 ${
                      visibleSections.includes(index) ? "animate-fade-in-left" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-text">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-all duration-300 hover:scale-105 hover-glow">
                  Learn More
                </button>
                <Link to="/contact">
                  <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded font-semibold transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={`${feature.reverse ? "md:col-start-1" : ""} transition-all duration-700 ${
                visibleSections.includes(index)
                  ? feature.reverse
                    ? "animate-fade-in-left"
                    : "animate-fade-in-right"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative group">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold animate-float shadow-lg">
                  Available
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="text-center text-white">
                    <h4 className="text-xl font-bold mb-2 font-heading">{feature.title}</h4>
                    <p className="text-lg font-text">{feature.price}</p>
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
