
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Firecrackers in Satara | AP Celebration Traders" },
        { name: "description", content: "Best celebration material and firecrackers in Satara. AP Celebration Traders is the top-rated shop for party supplies, cold pyro, and wedding decor in Satara district." },
        { name: "keywords", content: "party supplies Satara, celebration material Satara, firecrackers Satara, wedding decor Satara, birthday items Satara, event management materials Satara, सातारा पार्टी सप्लायज, सातारा सेलिब्रेशन मटेरियल, सातारा फटके, सातारा लग्न सजावट, सातारा वाढदिवस आयटम्स, सातारा इव्हेंट मॅनेजमेंट मटेरियल, Satara fataka dukan, Satara celebration samagri, Satara lagna decoration, Satara vadhdivs items, Satara party decoration, Satara wedding supplies, Satara event materials" },
        { name: "long-tail-keywords", content: "best celebration material shop in Satara city, wholesale firecrackers price Satara district, wedding and birthday decoration material Satara, सातारात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, सातारा जिल्हा थोक फटके किंमत, सातारा लग्न आणि वाढदिवस डेकोरेशन मटेरियल, Satara celebration material near me, Satara fireworks wholesale price, Satara wedding decoration items, Satara birthday party supplies, Satara event decoration services, Satara party decoration wholesale" },
        { name: "geo.placename", content: "Satara, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SataraPage() {
    return <LocationPage city="Satara" />;
}
