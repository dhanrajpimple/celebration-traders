
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Phalatan | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Phalatan. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Phalatan, celebration material Phalatan, firecrackers Phalatan, wedding decor Phalatan, wholesale fireworks Phalatan, cold pyro machine Phalatan, फलटण पार्टी सप्लायज, फलटण सेलिब्रेशन मटेरियल, फलटण फटके, फलटण लग्न सजावट, फलटण थोक फटके, फलटण कोल्ड पायरो मशीन, Phalatan fataka dukan, Phalatan celebration samagri, Phalatan lagna decoration, Phalatan vadhdivs items, Phalatan party decoration, Phalatan wedding supplies, Phalatan cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Phalatan, wholesale fireworks market Phalatan, party decoration items supplier Phalatan, फलटणात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, फलटण थोक फटके मार्केट, फलटण पार्टी डेकोरेशन आयटम्स पुरवठादार, Phalatan celebration material near me, Phalatan fireworks wholesale market, Phalatan wedding decoration items, Phalatan birthday party supplies, Phalatan event decoration services, Phalatan cold pyro machine price" },
        { name: "geo.placename", content: "Phalatan, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PhalatanPage() {
    return <LocationPage city="Phalatan" />;
}
