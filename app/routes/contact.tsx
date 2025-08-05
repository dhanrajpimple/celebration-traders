import { useState, useEffect, useRef } from "react"
import type React from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import video from "../assests/bg.mp4"
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "Contact A.P. Celebration Traders - Call +919359604441 | Fireworks & Party Supplies Store in Satara" },
    { name: "description", content: "Contact A.P. Celebration Traders for firecrackers, cold pyro machines & party supplies. Call +919359604441, WhatsApp, or visit our Satara store near Chakor Bakery. Get quotes for celebration materials today!" },
    
    // SEO Keywords
    { name: "keywords", content: "contact AP Celebration Traders, fireworks store contact Satara, celebration materials shop phone number, party supplies store location, cold pyro machine booking contact, wedding decoration contact, birthday party supplies contact, corporate event equipment contact, fireworks dealer phone number, celebration materials quote, party equipment rental contact, CO2 jet machine booking, sparkular guns rental contact, confetti blaster booking, bubble fog machine contact, cash cannon rental phone, Satara fireworks store address, somvar peth celebration shop, chakor bakery fireworks store, Maharashtra party supplies contact" },
    
    // Open Graph Tags
    { property: "og:title", content: "Contact A.P. Celebration Traders - Fireworks & Party Supplies Store Satara" },
    { property: "og:description", content: "Get in touch with Satara's trusted celebration materials supplier. Call +919359604441 for firecrackers, cold pyro systems & party supplies. Visit our store or get quotes online!" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.com/contact" },
    { property: "og:image", content: "https://apcelebrationtraders.com/images/contact-ap-celebration-store.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact A.P. Celebration Traders - Call +919359604441" },
    { name: "twitter:description", content: "Get in touch with Satara's trusted celebration materials supplier. Call for firecrackers, cold pyro systems & party supplies. Visit our store today!" },
    { name: "twitter:image", content: "https://apcelebrationtraders.com/images/contact-ap-celebration-store.jpg" },
    
    // Additional SEO Tags
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "7 days" },
    { name: "author", content: "A.P. Celebration Traders" },
    { name: "copyright", content: "A.P. Celebration Traders" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    
    // Geographic Tags (Enhanced for Contact Page)
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },
    
    // Primary Business Contact Information
    { name: "business:contact_data:street_address", content: "Shop No. 5, Near chakor bakery, phutka talav somvar peth" },
    { name: "business:contact_data:locality", content: "Satara" },
    { name: "business:contact_data:region", content: "Maharashtra" },
    { name: "business:contact_data:postal_code", content: "415001" },
    { name: "business:contact_data:country_name", content: "India" },
    { name: "business:contact_data:phone_number", content: "+919359604441" },
    { name: "business:contact_data:email", content: "apcelebrationtrender01@gmail.com" },
    
    // Contact Methods
    { name: "contact:phone", content: "+919359604441" },
    { name: "contact:whatsapp", content: "+919359604441" },
    { name: "contact:email", content: "apcelebrationtrender01@gmail.com" },
    { name: "contact:address", content: "Shop No. 5, Near chakor bakery, phutka talav somvar peth, Satara, Maharashtra 415001" },
    
    // Store Information
    { name: "store:location", content: "Near Chakor Bakery, Phutka Talav, Somvar Peth" },
    { name: "store:landmark", content: "Chakor Bakery" },
    { name: "store:area", content: "Somvar Peth" },
    { name: "store:city", content: "Satara" },
    { name: "store:state", content: "Maharashtra" },
    { name: "store:pincode", content: "415001" },
    
    // Services Contact Information
    { name: "service:booking", content: "Call +919359604441 for equipment booking" },
    { name: "service:quotes", content: "Get quotes via phone, WhatsApp, or email" },
    { name: "service:consultation", content: "Free consultation for celebration planning" },
    { name: "service:delivery", content: "Delivery available in Satara and nearby areas" },
    
    // Local Business Tags
    { name: "local-business-type", content: "Fireworks and Celebration Materials Store" },
    { name: "local-business-category", content: "Party Supplies, Celebration Materials, Event Equipment" },
    { name: "business-hours-note", content: "Contact for current business hours" },
    
    // Mobile Optimization
    { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
    { name: "format-detection", content: "telephone=yes" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    
    // Theme Colors
    { name: "theme-color", content: "#FF4500" },
    { name: "msapplication-TileColor", content: "#FF4500" },
    
    // Canonical URL
    { rel: "canonical", href: "https://apcelebrationtraders.com/contact" },
    
    // Breadcrumb Navigation
    { name: "breadcrumb", content: "Home > Contact Us" },
    
    // Contact Page Specific Tags
    { name: "page-type", content: "Contact Information Page" },
    { name: "contact-purpose", content: "Business inquiries, product bookings, quotes, customer support" },
    
    // Emergency/Urgent Contact
    { name: "urgent-contact", content: "Call +919359604441 for immediate assistance" },
    { name: "quick-response", content: "WhatsApp +919359604441 for quick responses" },
    
    // Booking & Inquiry Tags
    { name: "booking-methods", content: "Phone, WhatsApp, Email, In-person visit" },
    { name: "quote-request", content: "Free quotes available for all celebration materials" },
    { name: "consultation", content: "Expert consultation for event planning" },
    
    // Location-Based Contact
    { name: "directions", content: "Near Chakor Bakery, Phutka Talav, Somvar Peth, Satara" },
    { name: "parking", content: "Street parking available near store" },
    { name: "accessibility", content: "Ground floor shop easily accessible" },
    
    // Response Time
    { name: "response-time", content: "Quick response on phone and WhatsApp" },
    { name: "availability", content: "Available for customer service and bookings" },
    
    // Rich Snippets Support
    { name: "application-name", content: "A.P. Celebration Traders - Contact" },
    { name: "msapplication-tooltip", content: "Contact Satara's trusted celebration materials supplier" },
    
    // Contact Page Keywords
    { name: "contact-page-keywords", content: "fireworks store near me Satara, celebration materials shop contact, party supplies store phone number, cold pyro machine booking contact, wedding decoration contact Satara, birthday party supplies contact, corporate event contact, fireworks dealer contact Maharashtra, celebration materials store location, party equipment rental contact" },
    
    // Schema Markup Hints
    { name: "schema-type", content: "LocalBusiness, ContactPoint" },
    { name: "contact-type", content: "Customer Service, Sales, Booking" },
    
    // Call-to-Action Tags
    { name: "primary-cta", content: "Call Now +919359604441" },
    { name: "secondary-cta", content: "WhatsApp for Quick Response" },
    { name: "tertiary-cta", content: "Visit Our Store in Satara" },
    
    // Service Area
    { name: "service-area", content: "Satara, Maharashtra and surrounding areas" },
    { name: "delivery-area", content: "Satara city and nearby locations" }
  ];
};


export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Client-side validation
  function validate() {
    const errors: Record<string, string> = {};
    if (!/^[A-Za-z ]{2,50}$/.test(formData.fullName)) {
      errors.fullName = "Name must be 2-50 letters and spaces only.";
    }
    if (!/^\+91[6-9][0-9]{9}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Enter a valid Indian phone number (e.g. +919876543210).";
    }
    if (!/^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(formData.email)) {
      errors.email = "Enter a valid Gmail address.";
    }
    if (!formData.message || formData.message.length < 5) {
      errors.message = "Message is required (min 5 chars).";
    }
    return errors;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setShowSuccess(false);
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSubmitting(true);
    // Submit directly to Formspree
    const form = e.target as HTMLFormElement;
    form.submit();
    setShowSuccess(true);
    setIsSubmitting(false);
    setFormData({ fullName: "", email: "", contactNumber: "", message: "" });
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

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
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider animate-fade-in-up font-heading">
              Contact AP Celebration Trader
            </h1>
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
            <p className="text-orange-500 font-semibold mb-2 animate-pulse font-subheading">
              Have questions about firecrackers or celebration materials?
            </p>
            <h2 className="text-4xl font-bold text-gray-900 font-heading">
              We're here to help you celebrate safely and joyfully.
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Call Us */}
            <div
              className={`text-center transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <a href="tel:+919359604441" className="block group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float group-hover:scale-110 transform">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading group-hover:text-red-600">
                  Call Us:
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text group-hover:text-red-600">
                  +919359604441
                </p>
              </a>
            </div>

            {/* WhatsApp */}
            <div
              className={`text-center transition-all duration-700 delay-250 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <a href="https://wa.me/919359604441" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 hover:bg-green-200 transition-colors duration-300 animate-float group-hover:scale-110 transform">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-300 font-subheading group-hover:text-green-600">
                  WhatsApp:
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text group-hover:text-green-600">
                  +919359604441
                </p>
              </a>
            </div>

            {/* Mail Us */}
            <div
              className={`text-center transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <a href="mailto:apcelebrationtrender01@gmail.com" className="block group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float group-hover:scale-110 transform">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading group-hover:text-red-600">
                  Mail Us:
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text group-hover:text-red-600 break-all">
                  apcelebrationtrender01@gmail.com
                </p>
              </a>
            </div>

            {/* Location */}
            <div
              className={`text-center transition-all duration-700 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <a href="https://maps.app.goo.gl/rtJi8xN2YteosCG58" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 hover:bg-orange-200 transition-colors duration-300 animate-float group-hover:scale-110 transform">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300 font-subheading group-hover:text-red-600">
                  Location:
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-text group-hover:text-red-600">
                  Shop No. 5, Near chakor bakery, phutka talav somvar peth Satara, Maharashtra 415001
                </p>
              </a>
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
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                </div>
              )}
              <form
                action="https://formspree.io/f/xjkogqky"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={e => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text ${
                      formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {formErrors.fullName && <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={e => handleInputChange('contactNumber', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 font-text ${
                      formErrors.contactNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {formErrors.contactNumber && <p className="text-red-600 text-sm mt-1">{formErrors.contactNumber}</p>}
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 resize-vertical font-text ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
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
            If You Have Any Query Feel Free to Get in Touch with our Support Team that Will Always be Happy to Assist you.
          </h3>
        </div>
      </section>

      <Footer />
    </div>
  )
}