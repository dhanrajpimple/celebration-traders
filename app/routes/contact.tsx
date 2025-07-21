import { useState, useEffect, useRef } from "react"
import type React from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import video from "../assests/bg.mp4"
import { json, type LoaderFunction, type ActionFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { parse } from "cookie";

export const loader: LoaderFunction = async ({ request }) => {
  // Check for cookie to disable form if already submitted
  const cookie = request.headers.get("Cookie") || "";
  const cookies = parse(cookie);
  return json({ alreadySubmitted: !!cookies.contactSubmitted });
};





export const action: ActionFunction = async ({ request }) => {
  const cookie = request.headers.get("Cookie") || "";
  const cookies = parse(cookie);
  
  if (cookies.contactSubmitted) {
    return json({ error: "You have already submitted the form from this device." }, { status: 400 });
  }
  
  const formData = await request.formData();
  const fullName = formData.get("fullName")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const contactNumber = formData.get("contactNumber")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!/^[A-Za-z ]{2,50}$/.test(fullName)) {
    errors.fullName = "Name must be 2-50 letters and spaces only.";
  }
  if (!/^\+91[6-9][0-9]{9}$/.test(contactNumber)) {
    errors.contactNumber = "Enter a valid Indian phone number (e.g. +919876543210).";
  }
  if (!/^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(email)) {
    errors.email = "Enter a valid Gmail address.";
  }
  if (!message || message.length < 5) {
    errors.message = "Message is required (min 5 chars).";
  }
  
  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  // Send to API - Fixed API call
  const apiBase = "https://formspree.io/f/xjkogqky"
  

  if (!apiBase) {
    console.error('PUBLIC_API_BASE_URL environment variable is not set');
    return json({ error: "Server configuration error. Please contact support." }, { status: 500 });
  }
  
  try {
    const apiUrl = `${apiBase}`;
    console.log('Full API URL:', apiUrl); // Debug log
    
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json" // Add Accept header
      },
      body: JSON.stringify({ fullName, email, contactNumber, message }),
    });
    
    console.log('API Response status:', res.status); // Debug log
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('API Error Response:', errorText);
      return json({ error: `Failed to send message. Server responded with: ${res.status}` }, { status: 500 });
    }
    
    const responseData = await res.json();
    console.log('API Success Response:', responseData); // Debug log
    
  } catch (error) {
    console.error('API Request Error:', error);
    return json({ error: "Failed to send message. Network error occurred." }, { status: 500 });
  }

  // Set cookie so user can't submit again
  return json({ success: true }, {
    headers: {
      "Set-Cookie": `contactSubmitted=true; Path=/; Max-Age=31536000; HttpOnly`,
    },
  });
};

export default function ContactPage() {
  const { alreadySubmitted } = useLoaderData<{ alreadySubmitted: boolean }>();
  const fetcher = useFetcher();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setShowSuccess(false);
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Create FormData object for submission
    const submitData = new FormData();
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('contactNumber', formData.contactNumber);
    submitData.append('message', formData.message);
    
    fetcher.submit(submitData, { method: "post" });
  };

  // Handle fetcher state changes
  useEffect(() => {
    const data = fetcher.data as any;
    
    if (data?.errors) {
      setFormErrors(data.errors);
      setIsSubmitting(false);
    } else if (data?.success) {
      setFormData({ fullName: "", email: "", contactNumber: "", message: "" });
      setIsSubmitting(false);
      setShowSuccess(true);
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } else if (data?.error) {
      setFormErrors({ general: data.error });
      setIsSubmitting(false);
    }
  }, [fetcher.data]);

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
              <a href="https://www.google.com/maps?q=17.67959,73.99093" target="_blank" rel="noopener noreferrer" className="block group">
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
              
              <fetcher.Form method="post" className="space-y-6" onSubmit={handleSubmit}>
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
                    disabled={isSubmitting || alreadySubmitted}
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
                    disabled={isSubmitting || alreadySubmitted}
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
                    disabled={isSubmitting || alreadySubmitted}
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
                    disabled={isSubmitting || alreadySubmitted}
                  />
                  {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                {formErrors.general && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {formErrors.general}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting || alreadySubmitted}
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
                    alreadySubmitted ? "Already Submitted" : "Submit"
                  )}
                </button>
              </fetcher.Form>
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