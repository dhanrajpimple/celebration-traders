
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Event Supplies in Sangli | AP Celebration Traders" },
        { name: "description", content: "Complete celebration material and event supplies in Sangli. We provide high-quality party decorations, firecrackers, and special effects for all your occasions." },
        { name: "keywords", content: "party supplies Sangli, celebration material Sangli, firecrackers Sangli, wedding decor Sangli, event supplies Sangli, birthday party materials Sangli, सांगली पार्टी सप्लायज, सांगली सेलिब्रेशन मटेरियल, सांगली फटके, सांगली लग्न सजावट, सांगली इव्हेंट सप्लायज, सांगली वाढदिवस पार्टी मटेरियल, Sangli fataka dukan, Sangli celebration samagri, Sangli lagna decoration, Sangli vadhdivs items, Sangli party decoration, Sangli wedding supplies, Sangli event materials" },
        { name: "long-tail-keywords", content: "best celebration material shop in Sangli, wholesale firecrackers price Sangli, party supplies and decoration Sangli, सांगलीत सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, सांगली थोक फटके किंमत, सांगली पार्टी सप्लायज आणि डेकोरेशन, Sangli celebration material near me, Sangli fireworks wholesale price, Sangli wedding decoration items, Sangli birthday party supplies, Sangli event decoration services, Sangli party decoration wholesale" },
        { name: "geo.placename", content: "Sangli, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SangliPage() {
    return <LocationPage city="Sangli" />;
}
