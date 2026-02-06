import { useEffect, useRef, useState } from "react"
import { Link } from "@remix-run/react"
import logo from "../assests/logo1.png"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* CTA Area Placeholder - Add your Call To Action here */}

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="text-xl font-semibold mb-6 text-white font-subheading hover:text-red-500 transition duration-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors font-text hover:translate-x-1 duration-300 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors font-text hover:translate-x-1 duration-300 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="text-xl font-semibold mb-6 text-white font-subheading hover:text-red-500 transition duration-300">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-5 h-5 text-red-600 mt-1 group-hover:animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400 group-hover:text-white font-text transition-colors">
                 apcelebrationtrender01@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3 group">
              <a href="tel:+919359604441" className="flex items-start gap-3 group hover:no-underline">
  <svg
    className="w-5 h-5 text-red-600 mt-1 group-hover:animate-pulse"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
  <span className="text-gray-400 group-hover:text-white font-text transition-colors">
    +91 9359604441
  </span>
</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="text-xl font-semibold mb-6 text-white font-subheading hover:text-red-500 transition duration-300">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1751U2Rnfr/"
                className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="https://www.instagram.com/ap_celebration_traders?igsh=eHAyMzh2YWw4ZGhp"
                className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@aniketpimpale585?si=FZEr9b-8q1HSnIQk"
                className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Logo / Brand Column */}
          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            } flex flex-col items-center md:items-end`}
          >
            <img
              src={logo}
              alt="A Star Machines Logo"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-red-600 shadow-xl"
            />
           
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        Designed & Developed by +91-7219111601
      </div>
    </footer>
  )
}
