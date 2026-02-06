import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "@remix-run/react"

interface FAQProps {
  city?: string;
}

export default function FAQ({ city }: FAQProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
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

  const cityToUse = city || "Satara"

  const faqs = [
    {
      question: "What types of firecrackers and celebration materials do you offer?",
      answer:
        "We offer a wide range of firecrackers, cold pyro, birthday and party supplies, electric lights, decorations, and more. Visit our store or contact us for the full catalog.",
    },
    {
      question: "Are your products safe and legal?",
      answer:
        "Yes, all our firecrackers and celebration materials comply with safety and legal standards. We prioritize customer safety and only sell certified products.",
    },
    {
      question: "How can I place an order?",
      answer:
        `You can visit our store in ${cityToUse}, call us, or contact us through our website to place an order. We offer both retail and wholesale options.`,
    },
    {
      question: `Do you provide delivery in ${cityToUse} and nearby cities?`,
      answer:
        `Yes, we offer delivery services in ${cityToUse} and surrounding areas. Delivery charges may apply based on location and order size.`,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI, and major digital payment methods for your convenience.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "Returns and exchanges are accepted for unopened and unused products within a specified period. Please contact us for details.",
    },
    {
      question: "Do you offer support or guidance on product usage?",
      answer:
        "Absolutely! Our team is happy to guide you on safe and proper usage of all our products. Feel free to ask us any questions in-store or by phone.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-heading">Have a Question?</h2>
            <p className="text-xl text-gray-600 mb-8 font-text">
              Find answers to commonly asked questions about our products and services.
            </p>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                  }`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4 font-heading">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-red-600 transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-lg text-gray-600 leading-relaxed font-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className={`text-center transition-all duration-700 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-gray-900 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-4 font-heading">Still Have Questions?</h3>
              <p className="text-xl text-gray-300 mb-8 font-text">
                Get in touch with our expert team for personalized assistance
              </p>
              <Link to="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-heading">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
