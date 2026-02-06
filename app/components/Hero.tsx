import { useEffect, useState } from "react"
import video from "../assests/bg.mp4"
interface HeroProps {
  title?: string;
}

export default function Hero({ title }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />



      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <div className={`mb-4 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-red-500 text-md font-semibold tracking-wider animate-pulse">
              WELCOME TO THE WORLD OF
            </span>
          </div>
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 tracking-wider transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"} font-heading`}
          >
            A. P. Celebration Traders
          </h1>
          {title && (
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 tracking-wider text-red-500 transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0"} font-heading`}>
              {title}
            </h2>
          )}
          <p
            className={`text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0"} font-text`}
          >
            Wholesale Birthday Products, SFX, Decorations, and All Celebration Materials Available
          </p>
          <div
            className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >

          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}