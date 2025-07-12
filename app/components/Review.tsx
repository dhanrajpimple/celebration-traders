
import { useEffect, useRef, useState } from "react"

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "Event Organizer",
      rating: 5,
      text: "Excellent quality fog machines! Used them for multiple events and they never disappoint. Great customer service too.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Sharma",
      company: "Wedding Planner",
      rating: 5,
      text: "The 360 photo booth was a huge hit at our client's wedding. Professional setup and amazing results. Highly recommended!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Amit Singh",
      company: "DJ & Sound",
      rating: 5,
      text: "Been using A Star Machines equipment for 3 years now. Reliable, durable, and great value for money. Best in Delhi!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Neha Gupta",
      company: "Party Organizer",
      rating: 5,
      text: "Bubble machines are fantastic! Kids love them and they work perfectly every time. Quick delivery and fair pricing.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-text">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <img
                  src={reviews[currentReview].image || "/placeholder.svg"}
                  alt={reviews[currentReview].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-red-600"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 text-center mb-6 italic font-text">
                "{reviews[currentReview].text}"
              </blockquote>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 font-subheading">{reviews[currentReview].name}</h4>
                <p className="text-gray-600 font-text">{reviews[currentReview].company}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid md:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse">500+</div>
            <p className="text-gray-600 font-text">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse">1000+</div>
            <p className="text-gray-600 font-text">Events Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse">7+</div>
            <p className="text-gray-600 font-text">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse">24/7</div>
            <p className="text-gray-600 font-text">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
