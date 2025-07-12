import { useEffect, useRef, useState } from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import shop from "../assests/35.jpg"
import owner from "../assests/owner.jpg"
import video from "../assests/bg.mp4"
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
