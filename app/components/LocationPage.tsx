
import Hero from "~/components/Hero";
import ProductShowcase from "~/components/ProductShowcase";
import WhyChooseUs from "~/components/WhyChooseUs";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Link } from "@remix-run/react";

interface LocationPageProps {
    city: string;
}

export default function LocationPage({ city }: LocationPageProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "A.P. Celebration Traders",
        "image": "https://apcelebrationtraders.in/assets/logo1.png",
        "@id": "https://apcelebrationtraders.in",
        "url": `https://apcelebrationtraders.in/celebration-material-${city.toLowerCase()}`,
        "telephone": "+919876543210", // Example phone, user should update
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Somvar Peth",
            "addressLocality": "Satara",
            "addressRegion": "Maharashtra",
            "postalCode": "415002",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6805,
            "longitude": 74.0183
        },
        "areaServed": {
            "@type": "City",
            "name": city
        },
        "priceRange": "₹₹"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Do you provide wholesale celebration material in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, we provide bulk celebration materials including balloons, banners, and lights in ${city} with doorstep delivery.`
                }
            },
            {
                "@type": "Question",
                "name": `Where can I buy party props in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `AP Celebration Traders is the leading supplier of birthday, wedding, and event decor in ${city}, offering wholesale prices and same-day delivery.`
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            <Hero title={`Celebration Material Supplier in ${city}`} />

            {/* TL;DR Summary - GEO Optimization */}
            <section className="bg-red-50 py-8 border-b border-red-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-lg font-bold text-red-700 mb-2 uppercase tracking-wide">
                        Quick Summary
                    </h2>
                    <p className="text-xl text-gray-800 font-medium max-w-4xl mx-auto leading-relaxed">
                        AP Celebration Traders is the leading supplier of birthday, wedding, and event decor in <span className="text-red-600 font-bold">{city}</span>, offering wholesale prices and same-day delivery.
                    </p>
                </div>
            </section>

            {/* Local Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Your One-Stop Shop for Celebration Supplies in {city}
                        </h2>
                        <div className="prose lg:prose-xl text-gray-600">
                            <p className="mb-4">
                                If you are planning a surprise party in <strong>{city}</strong>, we recommend choosing from our wide range of premium party props and cold pyro effects.
                                Whether it's a grand wedding or an intimate birthday bash, getting the right supplies is crucial.
                            </p>
                            <p className="mb-4">
                                We have been serving the <strong>{city}</strong> region with high-quality firecrackers, mask machines, and event decorations.
                                Our team ensures that every product meets safety standards and adds that extra sparkle to your events.
                            </p>
                            <p>
                                Looking for wholesale rates? We offer special discounts for event planners and bulk buyers in <strong>{city}</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProductShowcase />
            <WhyChooseUs />

            <FAQ city={city} />

            <Footer />
        </div>
    );
}
