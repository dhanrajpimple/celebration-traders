import type { MetaFunction } from "@remix-run/cloudflare";
import About from "~/components/About";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import ProductDetails from "~/components/ProductDetails";
import ProductShowcase from "~/components/ProductShowcase";
import WhyChooseUs from "~/components/WhyChooseUs";

export const meta: MetaFunction = () => {
  return [
    // Basic Meta Tags
    { title: "A.P. Celebration Traders | Best Celebration Materials & Firecrackers in Satara District" },
    { name: "description", content: "A.P. Celebration Traders - Satara District's leading supplier of firecrackers, mask machines, cold pyro, birthday & wedding supplies. Wholesale & retail available. Quality celebration materials for all events." },

    // SEO Keywords - Short Tail, Long Tail, High Rank
    { name: "keywords", "content": "celebration materials, firecrackers Satara, mask machine, cold pyro, party supplies, wedding decorations, birthday items, stage special effects, event decor, sparkling candles, CO2 jets, confetti blasters, gender reveal smoke, dry ice fog machine, electric crackers, remote control fireworks, Fatakyache dukan Maharashtra, Celebration samagri Maharashtra, Lagna decoration samagri, Vadhdivs party samagri, Sana fataka online, Party decoration Maharashtra, Satara celebration dukan, Lagna samagri Pune, Balloon decoration samagri, Sanstha celebration samagri, Diwali fataka dukan, Ganeshotsav decoration items, Navratri decoration samagri, Haldi ceremony samagri, Maharashtra madhil fataka shop, Swasta celebration items, Celebration traders Maharashtra, AP celebration traders, Puja decoration samagri, Rang barang decoration, फटक्यांचे दुकान महाराष्ट्र, सण सामग्री महाराष्ट्र, लग्न सजावट सामग्री, वाढदिवस पार्टी सामग्री, सन फटके ऑनलाइन, पार्टी डेकोरेशन महाराष्ट्र, सातारा सेलिब्रेशन दुकान, लग्न सामग्री पुणे, बलून डेकोरेशन सामग्री, संस्था सेलिब्रेशन सामग्री, दिवाळी फटके दुकान, गणेशोत्सव डेकोरेशन वस्तू, नवरात्री डेकोरेशन सामग्री, हळदी समारंभ सामग्री, महाराष्ट्र मधील फटके शॉप, स्वस्त सेलिब्रेशन आयटम्स, सेलिब्रेशन ट्रेडर्स महाराष्ट्र, एपी सेलिब्रेशन ट्रेडर्स, पूजा डेकोरेशन सामग्री, रंग बारांग डेकोरेशन, महाराष्ट्र फटके विक्रेते, सातारा फटके दुकान, पुणे लग्न सामग्री, मुंबई पार्टी डेकोरेशन, नागपूर सेलिब्रेशन आयटम्स, Diwali fataka kharedi online, Diwali decoration items Maharashtra, Diwali phatakyachi yadi, Diwali gift pack celebration, Lakshmi puja decoration samagri, Ganpati decoration samagri, Ganesh utsav saaj decoration, Ganpati visarjan fataka, Eco friendly Ganpati decoration, Navratri decoration items, Dasara celebration samagri, Garba event decoration, Lagna season decoration offer, Muhurt lagna samagri package, Saatat lagna decoration items, New year party items Maharashtra, Christmas decoration items, 31 December party samagri, Holi celebration items Maharashtra, Holi rang decoration samagri, LED decoration lights party, Backdrop decoration stand set, Foil balloon decoration set, Neon sign party decoration, Customized banner party, दिवाळी फटके खरेदी ऑनलाइन, दिवाळी डेकोरेशन वस्तू महाराष्ट्र, दिवाळी फटक्यांची यादी, दिवाळी गिफ्ट पॅक सेलिब्रेशन, लक्ष्मी पूजा डेकोरेशन सामग्री, गणपती डेकोरेशन सामग्री, गणेशोत्सव साज डेकोरेशन, गणपती विसर्जन फटके, इको फ्रेंडली गणपती डेकोरेशन, नवरात्री डेकोरेशन वस्तू, दसरा सेलिब्रेशन सामग्री, गरबा इव्हेंट डेकोरेशन, लग्न सीजन डेकोरेशन ऑफर, मुहूर्त लग्न सामग्री पॅकेज, सातात लग्न डेकोरेशन वस्तू, नवीन वर्ष पार्टी आयटम्स महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू, ३१ डिसेंबर पार्टी सामग्री, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री, एलईडी डेकोरेशन लाइट्स पार्टी, बॅकड्रॉप डेकोरेशन स्टँड सेट, फॉइल बलून डेकोरेशन सेट, नियॉन साइन पार्टी डेकोरेशन, कस्टमाइज्ड बॅनर पार्टी" },

    // Long-tail Keywords for Better Ranking
    { name: "long-tail-keywords", "content": "best celebration material shop in Satara, wholesale fireworks dealer in Maharashtra, wedding cold pyro machine price, birthday decoration material wholesale market, event management materials supplier, stage effects for weddings Satara, buy cold pyro online India, electronic crackers for events, Fatakyache dukan Satara district, Celebration samagri wholesale Maharashtra, Lagna decoration items price Pune, Vadhdivs party decoration Maharashtra, Sana fataka online delivery, Party decoration items Satara, Balloon decoration wholesale Pune, Sanstha celebration samagri supplier, Diwali fataka dukan near me, Ganeshotsav decoration items Maharashtra, Navratri decoration samagri online, Haldi ceremony decoration items, Maharashtra madhil fataka best shop, Swasta celebration items wholesale, Celebration traders Satara Maharashtra, AP celebration traders contact, Puja decoration samagri online, Rang barang decoration items, Diwali fataka online booking Maharashtra, Diwali decoration items wholesale Satara, Diwali phatakyachi complete yadi, Diwali gift pack for home celebration, Lakshmi puja decoration items online, Ganpati decoration samagri for home, Ganesh utsav saaj decoration set, Ganpati visarjan special fataka, Eco friendly Ganpati decoration ideas, Navratri decoration items for garba, Dasara celebration samagri Maharashtra, Garba event decoration services, Lagna season special decoration offers, Muhurt lagna samagri complete package, Saatat lagna decoration items set, New year party items wholesale Maharashtra, Christmas decoration items for home, 31 December party samagri online, Holi celebration items Maharashtra, Holi rang decoration samagri set, LED decoration lights for party, Backdrop decoration stand for events, Foil balloon decoration set wholesale, Neon sign party decoration custom, Customized banner party design, दिवाळी फटके ऑनलाइन बुकिंग महाराष्ट्र, दिवाळी डेकोरेशन वस्तू थोक सातारा, दिवाळी फटक्यांची संपूर्ण यादी, दिवाळी गिफ्ट पॅक घरच्या सेलिब्रेशनसाठी, लक्ष्मी पूजा डेकोरेशन वस्तू ऑनलाइन, गणपती डेकोरेशन सामग्री घरासाठी, गणेशोत्सव साज डेकोरेशन सेट, गणपती विसर्जन विशेष फटके, इको फ्रेंडली गणपती डेकोरेशन आयडियाज, नवरात्री डेकोरेशन वस्तू गरबासाठी, दसरा सेलिब्रेशन सामग्री महाराष्ट्र, गरबा इव्हेंट डेकोरेशन सर्व्हिसेस, लग्न सीजन विशेष डेकोरेशन ऑफर्स, मुहूर्त लग्न सामग्री संपूर्ण पॅकेज, सातात लग्न डेकोरेशन वस्तू सेट, नवीन वर्ष पार्टी आयटम्स थोक महाराष्ट्र, ख्रिसमस डेकोरेशन वस्तू घरासाठी, ३१ डिसेंबर पार्टी सामग्री ऑनलाइन, होळी सेलिब्रेशन आयटम्स महाराष्ट्र, होळी रंग डेकोरेशन सामग्री सेट, एलईडी डेकोरेशन लाइट्स पार्टीसाठी, बॅकड्रॉप डेकोरेशन स्टँड इव्हेंट्ससाठी, फॉइल बलून डेकोरेशन सेट थोक, नियॉन साइन पार्टी डेकोरेशन कस्टम, कस्टमाइज्ड बॅनर पार्टी डिझाइन" },

    // Open Graph Tags
    { property: "og:title", content: "A.P. Celebration Traders - Best Firecrackers & Party Supplies in Satara District" },
    { property: "og:description", content: "Satara District's trusted supplier of firecrackers, mask machines, cold pyro, and party supplies. Complete celebration solutions for weddings & events." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://apcelebrationtraders.in" },
    { property: "og:image", content: "https://apcelebrationtraders.in/assets/logo1.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "A.P. Celebration Traders" },
    { property: "og:locale", content: "en_IN" },

    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "A.P. Celebration Traders - Premium Firecrackers & Party Supplies in Satara District" },
    { name: "twitter:description", content: "Satara District's best for firecrackers, mask machines, and celebration materials." },
    { name: "twitter:image", content: "https://apcelebrationtraders.in/images/ap-celebration-twitter-image.jpg" },

    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en-IN" },
    { name: "revisit-after", content: "7 days" },
    { name: "author", content: "A.P. Celebration Traders" },

    // Geographic Tags
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Maharashtra" },
    { name: "geo.position", content: "17.6805;74.0183" },
    { name: "ICBM", content: "17.6805, 74.0183" },

    // Additional Local SEO
    { name: "locality", content: "Satara" },
    { name: "region", content: "Maharashtra" },
    { name: "country", content: "India" },
    { name: "district", content: "Satara District" }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <ProductDetails />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}

