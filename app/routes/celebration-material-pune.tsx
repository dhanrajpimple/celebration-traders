
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Special Effects in Pune | AP Celebration Traders" },
        { name: "description", content: "Premium celebration material and special effects in Pune. Wholesale firecrackers, CO2 jets, and party supplies for weddings and corporate events in Pune." },
        { name: "keywords", content: "party supplies Pune, celebration material Pune, firecrackers Pune, wedding decor Pune, cold pyro Pune, event special effects Pune, birthday party items Pune, पुणे पार्टी सप्लायज, पुणे सेलिब्रेशन मटेरियल, पुणे फटके, पुणे लग्न सजावट, पुणे कोल्ड पायरो, पुणे इव्हेंट स्पेशल इफेक्ट्स, पुणे वाढदिवस पार्टी आयटम्स, Pune fataka dukan, Pune celebration samagri, Pune lagna decoration, Pune vadhdivs items, Pune party decoration, Pune wedding supplies, Pune cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Pune city, wholesale firecrackers price Pune, event decoration materials wholesale Pune, पुण्यात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, पुणे थोक फटके किंमत, पुणे इव्हेंट डेकोरेशन मटेरियल थोक, Pune celebration material near me, Pune fireworks wholesale price, Pune wedding decoration items, Pune birthday party supplies, Pune event decoration services, Pune cold pyro machine price" },
        { name: "geo.placename", content: "Pune, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PunePage() {
    return <LocationPage city="Pune" />;
}
