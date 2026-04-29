import { type ReactNode } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import "./tailwind.css";

const SITE_URL = "https://apcelebrationtraders.in";
const BUSINESS_NAME = "A.P. Celebration Traders";
const BUSINESS_PHONE = "+919359604441";
const BUSINESS_EMAIL = "apcelebrationtrender01@gmail.com";
const SITE_IMAGE = `${SITE_URL}/logo1.png`;

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/logo1.png" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "A.P. Celebration Traders | Celebration Materials & Firecrackers in Satara" },
    {
      name: "description",
      content:
        "A.P. Celebration Traders supplies firecrackers, cold pyro, CO2 jets, birthday supplies, wedding decor, and event special effects from Satara across Maharashtra.",
    },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "author", content: BUSINESS_NAME },
    { name: "theme-color", content: "#dc2626" },
    { property: "og:title", content: "A.P. Celebration Traders | Celebration Materials & Firecrackers in Satara" },
    {
      property: "og:description",
      content:
        "Wholesale and retail celebration materials, cold pyro, CO2 jets, firecrackers, birthday supplies, and wedding decor in Satara and nearby Maharashtra cities.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:image", content: SITE_IMAGE },
    { property: "og:image:alt", content: "A.P. Celebration Traders logo" },
    { property: "og:site_name", content: BUSINESS_NAME },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "A.P. Celebration Traders | Firecrackers & Party Supplies" },
    {
      name: "twitter:description",
      content:
        "Trusted Satara supplier for celebration materials, cold pyro, fireworks, birthday items, and event supplies.",
    },
    { name: "twitter:image", content: SITE_IMAGE },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const canonicalPath =
    location.pathname === "/" ? "" : location.pathname.replace(/\/$/, "");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      image: SITE_IMAGE,
      logo: SITE_IMAGE,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      priceRange: "INR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No. 5, Near Chakor Bakery, Phutka Talav, Somvar Peth",
        addressLocality: "Satara",
        addressRegion: "Maharashtra",
        postalCode: "415001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.6805,
        longitude: 74.0183,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      areaServed: [
        "Satara",
        "Pune",
        "Baramati",
        "Kolhapur",
        "Sangli",
        "Solapur",
        "Karad",
        "Koregaon",
        "Patan",
        "Khandala",
        "Phalatan",
        "Shirawal",
        "Nagathane",
      ],
      sameAs: [
        "https://www.facebook.com/share/1751U2Rnfr/",
        "https://www.instagram.com/ap_celebration_traders",
        "https://youtube.com/@aniketpimpale585",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#localbusiness`,
      },
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
