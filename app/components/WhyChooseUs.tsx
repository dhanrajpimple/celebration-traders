import { useEffect, useRef, useState } from "react"
import shop from "../assests/35.webp"
export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="text-5xl font-bold mb-8 font-heading">Why Choose Us?</h2>
            <div className="w-32 h-1 bg-red-600 mb-8"></div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-subheading">Trusted Local Experts</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-text">
                    Years of experience serving Satara and nearby cities with a reputation for reliability and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-subheading">Wide Variety of Products</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-text">
                    From firecrackers to party supplies, we offer everything you need for any celebration, all under one roof.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-subheading">Safety & Quality Assurance</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-text">
                    All our products are certified, safe, and of the highest quality. We ensure every item meets legal and safety standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-subheading">Friendly Customer Service</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-text">
                    Our knowledgeable staff is always ready to help you choose the right products and answer any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative">
              <img
                src={shop}
                alt="Why choose us"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>

              {/* Logo overlay */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
