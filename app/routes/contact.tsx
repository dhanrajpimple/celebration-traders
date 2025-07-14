import { useState, useEffect, useRef } from "react"
import type React from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import video from "../assests/bg.mp4"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
  

      {/* Hero Section */}
      <section className="relative h-96 bg-black overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
          src={video} // Make sure bg.mp4 is in your public/assets folder
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
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider animate-fade-in-up font-heading">Contact AP Celebration Trader</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 animate-fade-in-up stagger-2"></div>
          </div>
        </div>
      </section>


      {/* Contact Info Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-orange-500 font-semibold mb-2 animate-pulse font-subheading">Have questions about firecrackers or celebration materials?</p>
            <h2 className="text-4xl font-bold text-gray-900 font-heading">We're here to help you celebrate safely and joyfully.</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call Us */}
            <div
              className={`text-center transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading">
                Call Us:
              </h3>
              <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text">
                7977066877, 9359604441
              </p>
            </div>

            {/* Mail Us */}
            <div
              className={`text-center transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading">
                Mail Us:
              </h3>
              <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text">
              apcelebrationtrender01@gmail.com
              </p>
            </div>

            {/* Location */}
            <div
              className={`text-center transition-all duration-700 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading">
                Location:
              </h3>
              <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text">
                Shop No. 5, Near chakor bakery, phutka talav somvar peth Satara, Maharashtra 415001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              className={`transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-subheading">Let's Start a Conversation</h3>
              <div className="w-24 h-1 bg-red-600 mb-8"></div>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 font-text">
                We'd love to help you with your firecracker and celebration material needs. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your message (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 resize-vertical font-text"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting<span className="loading-dots"></span>
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 animate-fade-in-up font-subheading">
            If You Have Any Query Feel Free to Get in Touch with our Support Team that Will Always be Happy to Assist
            you.
          </h3>
        </div>
      </section>

      <Footer />
    </div>
  )
}
