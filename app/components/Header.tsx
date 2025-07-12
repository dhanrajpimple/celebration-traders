import { useState, useEffect } from "react"
import { Link, useLocation } from "@remix-run/react"
import logo from "../assests/logo1.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-4">
            <div className="relative">
              <img
                src={logo}
                alt="A Star Machines Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-red-500 blur-sm" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {[
              { label: "HOME", path: "/" },
              { label: "ABOUT US", path: "/about" },
              { label: "CONTACT US", path: "/contact" },
              { label: "PRODUCTS", path: "/products" },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`relative font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActive(path) ? "text-red-500" : "text-white hover:text-red-500"
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white hover:text-red-500 p-2 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-7 h-7 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-sm border-t border-red-600/30 py-6 px-4 space-y-4">
          {[
            { label: "HOME", path: "/" },
            { label: "ABOUT US", path: "/about" },
            { label: "CONTACT US", path: "/contact" },
            { label: "PRODUCTS", path: "/products" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`block text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                isActive(path) ? "text-red-500" : "text-white hover:text-red-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
