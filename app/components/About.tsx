import { useEffect, useRef, useState } from "react"
import shop from "../assests/35.webp"
export default function About() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4 transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0 scale-75"}`}
          >
            <span className="text-white text-2xl font-bold animate-pulse">AP</span>
          </div>
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} font-heading`}
          >
           Your Trusted Celebration Material Supplier in Satara
          </h2>
          <div
            className={`w-24 h-1 bg-red-600 mx-auto transition-all duration-700 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          ></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300 font-text">
              AP Celebration Trader is your trusted wholesaler for Birthday Products and all kinds of celebration materials, proudly serving Satara and nearby cities. We are dedicated to making every celebration brighter, safer, and more memorable with our wide selection of quality products.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300 font-text">
              From traditional firecrackers to modern party supplies, we offer everything you need for festivals, weddings, and special occasions. Our commitment to quality and customer satisfaction has made us a preferred choice for individuals and event organizers across the region.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 hover:text-gray-900 transition-colors duration-300 font-text">
              With years of experience and a reputation for reliability, AP Celebration Trader ensures a smooth and hassle-free shopping experience. Visit us to discover the best deals and the widest range of celebration essentials in Satara and surrounding areas.
            </p>

           
          </div>

          <div
            className={`relative transition-all duration-700 delay-500 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative group">
              <img
                src={shop}
                alt="About our company"
                className="w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg transition-opacity duration-300 group-hover:opacity-75"></div>

              {/* Floating badge */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
