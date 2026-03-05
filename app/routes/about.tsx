import { useEffect, useRef, useState } from "react"
import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import shop from "../assests/35.webp"
import owner from "../assests/owner.jpg"
import video from "../assests/bg.mp4"

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "About A.P. Celebration Traders | Leading Celebration Materials & Fireworks Supplier" },
    { name: "description", content: "Discover A.P. Celebration Traders, the premier supplier of celebration materials, cold pyro, and firecrackers in Satara. Delivering quality event supplies across Maharashtra." },

    // SEO Keywords - Short Tail, Long Tail, High Rank
    { name: "keywords", "content": "about AP Celebration Traders, fireworks supplier Satara, celebration materials distributor, party supplies wholesale Maharashtra, mask machine supplier, event decor expert, AP celebration traders samparka, Celebration dukan phone number Satara, Fataka dukan address Maharashtra, Celebration samagri order karnyasathi samparka, Lagna samagri enquiry, Bulk order celebration items Maharashtra, Celebration items home delivery contact, Celebration dukan near me Satara, Fataka dukan WhatsApp number, Vishwasniy celebration dukan Maharashtra, AP celebration traders baaddal mahiti, Celebration samagri supplier Maharashtra, Anubhavi celebration traders, Maharashtra madhe pratishthit fataka dukan, Wholesale celebration items supplier, Celebration items manufacturer Maharashtra, Swasta ani darja celebration samagri, एपी सेलिब्रेशन ट्रेडर्स संपर्क, सेलिब्रेशन दुकान फोन नंबर सातारा, फटके दुकान पत्ता महाराष्ट्र, सण सामग्री ऑर्डर करण्यासाठी संपर्क, लग्न सामग्री चौकशी, बल्क ऑर्डर सेलिब्रेशन आयटम्स महाराष्ट्र, सेलिब्रेशन आयटम्स होम डिलिव्हरी संपर्क, सेलिब्रेशन दुकान जवळ मी सातारा, फटके दुकान व्हाट्सअॅप नंबर, विश्वासार्ह सेलिब्रेशन दुकान महाराष्ट्र, एपी सेलिब्रेशन ट्रेडर्स बद्दल माहिती, सण सामग्री पुरवठादार महाराष्ट्र, अनुभवी सेलिब्रेशन ट्रेडर्स, महाराष्ट्रात स्थापित फटके दुकान, थोक सेलिब्रेशन आयटम्स पुरवठादार, सेलिब्रेशन आयटम्स निर्माते महाराष्ट्र, स्वस्त आणि दर्जा सण सामग्री, Diwali fataka kharedi online, Diwali decoration items Maharashtra, Diwali phatakyachi yadi, Diwali gift pack celebration, Lakshmi puja decoration samagri, Ganpati decoration samagri, Ganesh utsav saaj decoration, Ganpati visarjan fataka, Eco friendly Ganpati decoration, Navratri decoration items, Dasara celebration samagri, Garba event decoration, Lagna season decoration offer, Muhurt lagna samagri package, Saatat lagna decoration items, New year party items Maharashtra, Christmas decoration items, 31 December party samagri, Holi celebration items Maharashtra, Holi rang decoration samagri, LED decoration lights party, Backdrop decoration stand set, Foil balloon decoration set, Neon sign party decoration, Customized banner party, दिवाळी फटके खरेदी ऑनलाइन, दिवाळी डेकोरेशन वस्तू महाराष्ट्र, दिवाळी फटक्यांची यादी, दिवाळी गिफ्ट पॅक सेलिब्रेशन, लक्ष्मी पूजा डेकोरेशन सामग्री, गणपती डेकोरेशन सामग्री, गणेशोत्सव साज डेकोरेशन, गणपती विसर्जन फटके, इको फ्रेंडली गणपती डेकोरेशन, नवरात्री डेकोरेशन वस्तू, दसरा सेलिब्रेशन सामग्री, गरबा इव्हेंट डेकोरेशन, लग्न सीजन डेकोरेशन ऑफर, मुहूर्त लग्न सामग्री पॅकेज, सातात लग्न डेकोरेशन वस्तू, नवीन वर्ष पार्टी आयटम्स महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू, ३१ डिसेंबर पार्टी सामग्री, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री, एलईडी डेकोरेशन लाइट्स पार्टी, बॅकड्रॉप डेकोरेशन स्टँड सेट, फॉइल बलून डेकोरेशन सेट, नियॉन साइन पार्टी डेकोरेशन, कस्टमाइज्ड बॅनर पार्टी" },

    // Long-tail & High Rank Keywords
    { name: "long-tail-keywords", "content": "trusted fireworks dealer in Satara District, professional stage effects provider, wedding celebration materials wholesale, best firecrackers shop in Maharashtra, leader in sfx celebration tools, AP celebration traders contact details, Satara celebration dukan phone number, Maharashtra fataka dukan address information, celebration samagri booking contact, lagna samagri enquiry phone, bulk celebration items order Maharashtra, home delivery celebration items contact, nearby celebration dukan Satara, fataka dukan WhatsApp contact, trusted celebration shop Maharashtra, AP celebration traders information, reliable celebration samagri supplier Maharashtra, experienced celebration traders, established fataka dukan Maharashtra, wholesale celebration items supplier contact, celebration items manufacturer Maharashtra, affordable quality celebration samagri, एपी सेलिब्रेशन ट्रेडर्स संपर्क क्रमांक, सातारा सेलिब्रेशन दुकान फोन नंबर, महाराष्ट्र फटके दुकान पत्ता माहिती, सण सामग्री बुकिंग संपर्क, लग्न सामग्री चौकशी फोन, बल्क सेलिब्रेशन आयटम्स ऑर्डर महाराष्ट्र, घरची डिलिव्हरी सेलिब्रेशन आयटम्स संपर्क, जवळचे सेलिब्रेशन दुकान सातारा, फटके दुकान व्हाट्सअॅप संपर्क, विश्वसनीय सेलिब्रेशन दुकान महाराष्ट्र, एपी सेलिब्रेशन ट्रेडर्स माहिती, विश्वसनीय सण सामग्री पुरवठादार महाराष्ट्र, अनुभवी सेलिब्रेशन ट्रेडर्स, स्थापित फटके दुकान महाराष्ट्र, थोक सेलिब्रेशन आयटम्स पुरवठादार संपर्क, सेलिब्रेशन आयटम्स निर्माते महाराष्ट्र, स्वस्त दर्जेदार सण सामग्री, Diwali fataka online booking Maharashtra, Diwali decoration items wholesale Satara, Diwali phatakyachi complete yadi, Diwali gift pack for home celebration, Lakshmi puja decoration items online, Ganpati decoration samagri for home, Ganesh utsav saaj decoration set, Ganpati visarjan special fataka, Eco friendly Ganpati decoration ideas, Navratri decoration items for garba, Dasara celebration samagri Maharashtra, Garba event decoration services, Lagna season special decoration offers, Muhurt lagna samagri complete package, Saatat lagna decoration items set, New year party items wholesale Maharashtra, Christmas decoration items for home, 31 December party samagri online, Holi celebration items Maharashtra, Holi rang decoration samagri set, LED decoration lights for party, Backdrop decoration stand for events, Foil balloon decoration set wholesale, Neon sign party decoration custom, Customized banner party design, दिवाळी फटके ऑनलाइन बुकिंग महाराष्ट्र, दिवाळी डेकोरेशन वस्तू थोक सातारा, दिवाळी फटक्यांची संपूर्ण यादी, दिवाळी गिफ्ट पॅक घरच्या सेलिब्रेशनसाठी, लक्ष्मी पूजा डेकोरेशन वस्तू ऑनलाइन, गणपती डेकोरेशन सामग्री घरासाठी, गणेशोत्सव साज डेकोरेशन सेट, गणपती विसर्जन विशेष फटके, इको फ्रेंडली गणपती डेकोरेशन आयडियाज, नवरात्री डेकोरेशन वस्तू गरबासाठी, दसरा सेलिब्रेशन सामग्री महाराष्ट्र, गरबा इव्हेंट डेकोरेशन सर्व्हिसेस, लग्न सीजन विशेष डेकोरेशन ऑफर्स, मुहूर्त लग्न सामग्री संपूर्ण पॅकेज, सातात लग्न डेकोरेशन वस्तू सेट, नवीन वर्ष पार्टी आयटम्स थोक महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू घरासाठी, ३१ डिसेंबर पार्टी सामग्री ऑनलाइन, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री सेट, एलईडी डेकोरेशन लाइट्स पार्टीसाठी, बॅकड्रॉप डेकोरेशन स्टँड इव्हेंट्ससाठी, फॉइल बलून डेकोरेशन सेट थोक, नियॉन साइन पार्टी डेकोरेशन कस्टम, कस्टमाइज्ड बॅनर पार्टी डिझाइन" },

    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },

    // Canonical URL
    { rel: "canonical", href: "https://apcelebrationtraders.in/about" }
  ];
};

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
