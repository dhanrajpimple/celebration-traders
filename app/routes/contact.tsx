import { useState, useEffect, useRef } from "react"
import type React from "react"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import video from "../assests/bg.mp4"
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "Contact A.P. Celebration Traders | Best Selection of Celebration Materials & Fireworks" },
    { name: "description", content: "Contact A.P. Celebration Traders for all your celebration material needs. Best rates on firecrackers, party supplies, and stage effects in Satara District. Call +919359604441." },

    // SEO Keywords - Short Tail, Long Tail, High Rank
    { name: "keywords", "content": "contact A.P. Celebration Traders, buy celebration materials Satara, firecrackers near me, party supply shop Satara, cold pyro booking, birthday items shop, wedding decor supplier, AP celebration traders samparka, Celebration dukan phone number Satara, Fataka dukan address Maharashtra, Celebration samagri order karnyasathi samparka, Lagna samagri enquiry, Bulk order celebration items Maharashtra, Celebration items home delivery contact, Celebration dukan near me Satara, Fataka dukan WhatsApp number, Vishwasniy celebration dukan Maharashtra, AP celebration traders baaddal mahiti, Celebration samagri supplier Maharashtra, Anubhavi celebration traders, Maharashtra madhe pratishthit fataka dukan, Wholesale celebration items supplier, Celebration items manufacturer Maharashtra, Swasta ani darja celebration samagri, एपी सेलिब्रेशन ट्रेडर्स संपर्क, सेलिब्रेशन दुकान फोन नंबर सातारा, फटके दुकान पत्ता महाराष्ट्र, सण सामग्री ऑर्डर करण्यासाठी संपर्क, लग्न सामग्री चौकशी, बल्क ऑर्डर सेलिब्रेशन आयटम्स महाराष्ट्र, सेलिब्रेशन आयटम्स होम डिलिव्हरी संपर्क, सेलिब्रेशन दुकान जवळ मी सातारा, फटके दुकान व्हाट्सअॅप नंबर, विश्वासार्ह सेलिब्रेशन दुकान महाराष्ट्र, एपी सेलिब्रेशन ट्रेडर्स बद्दल माहिती, सण सामग्री पुरवठादार महाराष्ट्र, अनुभवी सेलिब्रेशन ट्रेडर्स, महाराष्ट्रात स्थापित फटके दुकान, थोक सेलिब्रेशन आयटम्स पुरवठादार, सेलिब्रेशन आयटम्स निर्माते महाराष्ट्र, स्वस्त आणि दर्जा सण सामग्री, Diwali fataka kharedi online, Diwali decoration items Maharashtra, Diwali phatakyachi yadi, Diwali gift pack celebration, Lakshmi puja decoration samagri, Ganpati decoration samagri, Ganesh utsav saaj decoration, Ganpati visarjan fataka, Eco friendly Ganpati decoration, Navratri decoration items, Dasara celebration samagri, Garba event decoration, Lagna season decoration offer, Muhurt lagna samagri package, Saatat lagna decoration items, New year party items Maharashtra, Christmas decoration items, 31 December party samagri, Holi celebration items Maharashtra, Holi rang decoration samagri, LED decoration lights party, Backdrop decoration stand set, Foil balloon decoration set, Neon sign party decoration, Customized banner party, दिवाळी फटके खरेदी ऑनलाइन, दिवाळी डेकोरेशन वस्तू महाराष्ट्र, दिवाळी फटक्यांची यादी, दिवाळी गिफ्ट पॅक सेलिब्रेशन, लक्ष्मी पूजा डेकोरेशन सामग्री, गणपती डेकोरेशन सामग्री, गणेशोत्सव साज डेकोरेशन, गणपती विसर्जन फटके, इको फ्रेंडली गणपती डेकोरेशन, नवरात्री डेकोरेशन वस्तू, दसरा सेलिब्रेशन सामग्री, गरबा इव्हेंट डेकोरेशन, लग्न सीजन डेकोरेशन ऑफर, मुहूर्त लग्न सामग्री पॅकेज, सातात लग्न डेकोरेशन वस्तू, नवीन वर्ष पार्टी आयटम्स महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू, ३१ डिसेंबर पार्टी सामग्री, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री, एलईडी डेकोरेशन लाइट्स पार्टी, बॅकड्रॉप डेकोरेशन स्टँड सेट, फॉइल बलून डेकोरेशन सेट, नियॉन साइन पार्टी डेकोरेशन, कस्टमाइज्ड बॅनर पार्टी" },

    // Intent-based Long Tail Keywords
    { name: "long-tail-keywords", "content": "where to buy celebration materials in Satara, best firecrackers wholesale shop contact, urgent party supplies delivery Satara, event fireworks booking phone number, AP celebration traders contact details, Satara celebration dukan phone number, Maharashtra fataka dukan address information, celebration samagri booking contact, lagna samagri enquiry phone, bulk celebration items order Maharashtra, home delivery celebration items contact, nearby celebration dukan Satara, fataka dukan WhatsApp contact, trusted celebration shop Maharashtra, AP celebration traders information, reliable celebration samagri supplier Maharashtra, experienced celebration traders, established fataka dukan Maharashtra, wholesale celebration items supplier contact, celebration items manufacturer Maharashtra, affordable quality celebration samagri, एपी सेलिब्रेशन ट्रेडर्स संपर्क क्रमांक, सातारा सेलिब्रेशन दुकान फोन नंबर, महाराष्ट्र फटके दुकान पत्ता माहिती, सण सामग्री बुकिंग संपर्क, लग्न सामग्री चौकशी फोन, बल्क सेलिब्रेशन आयटम्स ऑर्डर महाराष्ट्र, घरची डिलिव्हरी सेलिब्रेशन आयटम्स संपर्क, जवळचे सेलिब्रेशन दुकान सातारा, फटके दुकान व्हाट्सअॅप संपर्क, विश्वसनीय सेलिब्रेशन दुकान महाराष्ट्र, एपी सेलिब्रेशन ट्रेडर्स माहिती, विश्वसनीय सण सामग्री पुरवठादार महाराष्ट्र, अनुभवी सेलिब्रेशन ट्रेडर्स, स्थापित फटके दुकान महाराष्ट्र, थोक सेलिब्रेशन आयटम्स पुरवठादार संपर्क, सेलिब्रेशन आयटम्स निर्माते महाराष्ट्र, स्वस्त दर्जेदार सण सामग्री, Diwali fataka online booking Maharashtra, Diwali decoration items wholesale Satara, Diwali phatakyachi complete yadi, Diwali gift pack for home celebration, Lakshmi puja decoration items online, Ganpati decoration samagri for home, Ganesh utsav saaj decoration set, Ganpati visarjan special fataka, Eco friendly Ganpati decoration ideas, Navratri decoration items for garba, Dasara celebration samagri Maharashtra, Garba event decoration services, Lagna season special decoration offers, Muhurt lagna samagri complete package, Saatat lagna decoration items set, New year party items wholesale Maharashtra, Christmas decoration items for home, 31 December party samagri online, Holi celebration items Maharashtra, Holi rang decoration samagri set, LED decoration lights for party, Backdrop decoration stand for events, Foil balloon decoration set wholesale, Neon sign party decoration custom, Customized banner party design, दिवाळी फटके ऑनलाइन बुकिंग महाराष्ट्र, दिवाळी डेकोरेशन वस्तू थोक सातारा, दिवाळी फटक्यांची संपूर्ण यादी, दिवाळी गिफ्ट पॅक घरच्या सेलिब्रेशनसाठी, लक्ष्मी पूजा डेकोरेशन वस्तू ऑनलाइन, गणपती डेकोरेशन सामग्री घरासाठी, गणेशोत्सव साज डेकोरेशन सेट, गणपती विसर्जन विशेष फटके, इको फ्रेंडली गणपती डेकोरेशन आयडियाज, नवरात्री डेकोरेशन वस्तू गरबासाठी, दसरा सेलिब्रेशन सामग्री महाराष्ट्र, गरबा इव्हेंट डेकोरेशन सर्व्हिसेस, लग्न सीजन विशेष डेकोरेशन ऑफर्स, मुहूर्त लग्न सामग्री संपूर्ण पॅकेज, सातात लग्न डेकोरेशन वस्तू सेट, नवीन वर्ष पार्टी आयटम्स थोक महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू घरासाठी, ३१ डिसेंबर पार्टी सामग्री ऑनलाइन, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री सेट, एलईडी डेकोरेशन लाइट्स पार्टीसाठी, बॅकड्रॉप डेकोरेशन स्टँड इव्हेंट्ससाठी, फॉइल बलून डेकोरेशन सेट थोक, नियॉन साइन पार्टी डेकोरेशन कस्टम, कस्टमाइज्ड बॅनर पार्टी डिझाइन" },

    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },

    { name: "format-detection", content: "telephone=yes" },

    // Canonical URL
    { rel: "canonical", href: "https://apcelebrationtraders.in/contact" },

    // Call-to-Action Tags
    { name: "primary-cta", content: "Call Now +919359604441" },
    { name: "secondary-cta", content: "WhatsApp for Celebration Materials" }
  ];
};


export default function ContactPage() {
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

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider animate-fade-in-up font-heading">
              Get in Touch
            </h1>
            <p className="text-xl mt-4 opacity-90">Best Celebration Materials in Satara District</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 animate-fade-in-up"></div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
              Call Us to Place Your Order
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-text">
              We have removed our contact form to provide you with faster service. Please call or WhatsApp us directly for inquiries about firecrackers, mask machines, and all celebration materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Call Now Button Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600 text-center flex flex-col items-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-6">Available from 9:00 AM to 9:00 PM</p>
              <a
                href="tel:+919359604441"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 active:scale-95"
              >
                +91 9359604441
              </a>
            </div>

            {/* WhatsApp Button Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500 text-center flex flex-col items-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message on WhatsApp</h3>
              <p className="text-gray-600 mb-6">Get instant replies and product photos</p>
              <a
                href="https://wa.me/919359604441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 active:scale-95"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 py-10">
            {/* Map / Location */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Our Store Location</h4>
              <p className="text-gray-600 mb-4">Shop No. 5, Near chakor bakery, phutka talav somvar peth Satara, Maharashtra 415001</p>
              <a
                href="https://maps.app.goo.gl/rtJi8xN2YteosCG58"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Email Inquiry</h4>
              <p className="text-gray-600 mb-4">apcelebrationtrender01@gmail.com</p>
              <a
                href="mailto:apcelebrationtrender01@gmail.com"
                className="text-red-600 font-semibold hover:underline"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-subheading">
            At A.P. Celebration Traders, we prioritize personal connection.
            <br />
            Call us today for the best deals in Satara District!
          </h3>
        </div>
      </section>

      <Footer />
    </div>
  )
}