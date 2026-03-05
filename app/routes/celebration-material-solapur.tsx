
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Solapur | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Solapur. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Solapur, celebration material Solapur, firecrackers Solapur, wedding decor Solapur, wholesale fireworks Solapur, cold pyro machine Solapur, सोलापूर पार्टी सप्लायज, सोलापूर सेलिब्रेशन मटेरियल, सोलापूर फटके, सोलापूर लग्न सजावट, सोलापूर थोक फटके, सोलापूर कोल्ड पायरो मशीन, Solapur fataka dukan, Solapur celebration samagri, Solapur lagna decoration, Solapur vadhdivs items, Solapur party decoration, Solapur wedding supplies, Solapur cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Solapur, wholesale fireworks market Solapur, party decoration items supplier Solapur, सोलापूरात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, सोलापूर थोक फटके मार्केट, सोलापूर पार्टी डेकोरेशन आयटम्स पुरवठादार, Solapur celebration material near me, Solapur fireworks wholesale market, Solapur wedding decoration items, Solapur birthday party supplies, Solapur event decoration services, Solapur cold pyro machine price" },
        { name: "geo.placename", content: "Solapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SolapurPage() {
    return <LocationPage city="Solapur" />;
}
