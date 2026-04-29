import Hero from "~/components/Hero";
import ProductShowcase from "~/components/ProductShowcase";
import WhyChooseUs from "~/components/WhyChooseUs";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

interface LocationPageProps {
    city: string;
}

const siteUrl = "https://apcelebrationtraders.in";
const businessPhone = "+919359604441";
const cityHighlights: Record<string, string> = {
    Baramati: "popular for weddings, birthdays, school events, and festival celebrations around Baramati and nearby Pune district areas",
    Karad: "serving weddings, political events, birthdays, store openings, and festive functions across Karad and nearby Satara district towns",
    Khandala: "supporting local family functions, birthday parties, wedding entries, and festival events across Khandala and nearby villages",
    Kolhapur: "helping event planners, families, and wedding decorators source cold pyro, CO2 jets, party props, and decoration materials in Kolhapur",
    Koregaon: "covering birthdays, wedding ceremonies, haldi functions, and seasonal celebrations throughout Koregaon and nearby Satara district areas",
    Nagathane: "supplying celebration material for local weddings, birthdays, mandal functions, and festival events in and around Nagathane",
    Patan: "serving wedding decorators, families, and event organizers with party supplies, cold pyro, and firecracker options around Patan",
    Phalatan: "supporting birthday parties, wedding entries, haldi events, and festival celebrations in Phalatan and nearby local markets",
    Pune: "serving weddings, corporate events, birthday parties, college functions, and stage special effects requirements across Pune",
    Sangli: "supplying event materials for weddings, birthdays, cultural programs, and celebration planners across Sangli",
    Satara: "based from our Satara store and trusted for local firecrackers, birthday items, wedding decor, and cold pyro event supplies",
    Shirawal: "covering birthday parties, wedding programs, local events, and festival celebrations around Shirawal and nearby industrial areas",
    Solapur: "supporting large family functions, weddings, birthdays, festive events, and stage special effects needs across Solapur",
};

export default function LocationPage({ city }: LocationPageProps) {
    const pageUrl = `${siteUrl}/celebration-material-${city.toLowerCase()}`;
    const cityHighlight = cityHighlights[city] || `serving celebration material needs in ${city} and nearby areas`;
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "A.P. Celebration Traders",
        "image": `${siteUrl}/logo1.png`,
        "@id": `${siteUrl}/#localbusiness`,
        "url": pageUrl,
        "telephone": businessPhone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 5, Near Chakor Bakery, Phutka Talav, Somvar Peth",
            "addressLocality": "Satara",
            "addressRegion": "Maharashtra",
            "postalCode": "415001",
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
        "priceRange": "INR"
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
                    "text": `Yes, we provide bulk celebration materials including balloons, banners, lights, cold pyro, CO2 jets, and firecracker options in ${city}.`
                }
            },
            {
                "@type": "Question",
                "name": `Where can I buy party props in ${city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `A.P. Celebration Traders supplies birthday props, wedding decor, event special effects, and celebration materials for ${city}, with phone support for retail and wholesale orders.`
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": `Celebration Material in ${city}`,
                "item": pageUrl
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                    <p className="text-gray-700 max-w-4xl mx-auto mt-3 font-text">
                        We are {cityHighlight}, with phone support for product selection, safe usage guidance, and bulk orders.
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
                                Whether it is a grand wedding or an intimate birthday bash, getting the right supplies is crucial.
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
