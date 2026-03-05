
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Khandala | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Khandala. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Khandala, celebration material Khandala, firecrackers Khandala, wedding decor Khandala, wholesale fireworks Khandala, cold pyro machine Khandala, खंडाळा पार्टी सप्लायज, खंडाळा सेलिब्रेशन मटेरियल, खंडाळा फटके, खंडाळा लग्न सजावट, खंडाळा थोक फटके, खंडाळा कोल्ड पायरो मशीन, Khandala fataka dukan, Khandala celebration samagri, Khandala lagna decoration, Khandala vadhdivs items, Khandala party decoration, Khandala wedding supplies, Khandala cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Khandala, wholesale fireworks market Khandala, party decoration items supplier Khandala, खंडाळात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, खंडाळा थोक फटके मार्केट, खंडाळा पार्टी डेकोरेशन आयटम्स पुरवठादार, Khandala celebration material near me, Khandala fireworks wholesale market, Khandala wedding decoration items, Khandala birthday party supplies, Khandala event decoration services, Khandala cold pyro machine price" },
        { name: "geo.placename", content: "Khandala, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KhandalaPage() {
    return <LocationPage city="Khandala" />;
}
