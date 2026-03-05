
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Nagathane | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Nagathane. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Nagathane, celebration material Nagathane, firecrackers Nagathane, wedding decor Nagathane, wholesale fireworks Nagathane, cold pyro machine Nagathane, नागठाणे पार्टी सप्लायज, नागठाणे सेलिब्रेशन मटेरियल, नागठाणे फटके, नागठाणे लग्न सजावट, नागठाणे थोक फटके, नागठाणे कोल्ड पायरो मशीन, Nagathane fataka dukan, Nagathane celebration samagri, Nagathane lagna decoration, Nagathane vadhdivs items, Nagathane party decoration, Nagathane wedding supplies, Nagathane cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Nagathane, wholesale fireworks market Nagathane, party decoration items supplier Nagathane, नागठाण्यात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, नागठाणे थोक फटके मार्केट, नागठाणे पार्टी डेकोरेशन आयटम्स पुरवठादार, Nagathane celebration material near me, Nagathane fireworks wholesale market, Nagathane wedding decoration items, Nagathane birthday party supplies, Nagathane event decoration services, Nagathane cold pyro machine price" },
        { name: "geo.placename", content: "Nagathane, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function NagathanePage() {
    return <LocationPage city="Nagathane" />;
}
