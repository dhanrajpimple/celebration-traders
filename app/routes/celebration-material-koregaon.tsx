
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Koregaon | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Koregaon. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Koregaon, celebration material Koregaon, firecrackers Koregaon, wedding decor Koregaon, wholesale fireworks Koregaon, cold pyro machine Koregaon, कोरेगाव पार्टी सप्लायज, कोरेगाव सेलिब्रेशन मटेरियल, कोरेगाव फटके, कोरेगाव लग्न सजावट, कोरेगाव थोक फटके, कोरेगाव कोल्ड पायरो मशीन, Koregaon fataka dukan, Koregaon celebration samagri, Koregaon lagna decoration, Koregaon vadhdivs items, Koregaon party decoration, Koregaon wedding supplies, Koregaon cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Koregaon, wholesale fireworks market Koregaon, party decoration items supplier Koregaon, कोरेगावात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, कोरेगाव थोक फटके मार्केट, कोरेगाव पार्टी डेकोरेशन आयटम्स पुरवठादार, Koregaon celebration material near me, Koregaon fireworks wholesale market, Koregaon wedding decoration items, Koregaon birthday party supplies, Koregaon event decoration services, Koregaon cold pyro machine price" },
        { name: "geo.placename", content: "Koregaon, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KoregaonPage() {
    return <LocationPage city="Koregaon" />;
}
