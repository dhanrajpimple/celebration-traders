
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Patan | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Patan. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Patan, celebration material Patan, firecrackers Patan, wedding decor Patan, wholesale fireworks Patan, cold pyro machine Patan, पाटण पार्टी सप्लायज, पाटण सेलिब्रेशन मटेरियल, पाटण फटके, पाटण लग्न सजावट, पाटण थोक फटके, पाटण कोल्ड पायरो मशीन, Patan fataka dukan, Patan celebration samagri, Patan lagna decoration, Patan vadhdivs items, Patan party decoration, Patan wedding supplies, Patan cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Patan, wholesale fireworks market Patan, party decoration items supplier Patan, पाटणात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, पाटण थोक फटके मार्केट, पाटण पार्टी डेकोरेशन आयटम्स पुरवठादार, Patan celebration material near me, Patan fireworks wholesale market, Patan wedding decoration items, Patan birthday party supplies, Patan event decoration services, Patan cold pyro machine price" },
        { name: "geo.placename", content: "Patan, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PatanPage() {
    return <LocationPage city="Patan" />;
}
