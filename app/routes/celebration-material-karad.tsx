
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Karad | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Karad. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Karad, celebration material Karad, firecrackers Karad, wedding decor Karad, wholesale fireworks Karad, cold pyro machine Karad, कराड पार्टी सप्लायज, कराड सेलिब्रेशन मटेरियल, कराड फटके, कराड लग्न सजावट, कराड थोक फटके, कराड कोल्ड पायरो मशीन, Karad fataka dukan, Karad celebration samagri, Karad lagna decoration, Karad vadhdivs items, Karad party decoration, Karad wedding supplies, Karad cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Karad, wholesale fireworks market Karad, party decoration items supplier Karad, कराडात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, कराड थोक फटके मार्केट, कराड पार्टी डेकोरेशन आयटम्स पुरवठादार, Karad celebration material near me, Karad fireworks wholesale market, Karad wedding decoration items, Karad birthday party supplies, Karad event decoration services, Karad cold pyro machine price" },
        { name: "geo.placename", content: "Karad, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KaradPage() {
    return <LocationPage city="Karad" />;
}
