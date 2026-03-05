
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Fireworks in Kolhapur | AP Celebration Traders" },
        { name: "description", content: "Your go-to shop for celebration materials in Kolhapur. We offer wholesale prices on firecrackers, cold pyro, and party decorations for all events." },
        { name: "keywords", content: "party supplies Kolhapur, celebration material Kolhapur, firecrackers Kolhapur, wedding decor Kolhapur, birthday decoration Kolhapur, wholesale fireworks Kolhapur, कोल्हापूर पार्टी सप्लायज, कोल्हापूर सेलिब्रेशन मटेरियल, कोल्हापूर फटके, कोल्हापूर लग्न सजावट, कोल्हापूर वाढदिवस डेकोरेशन, कोल्हापूर थोक फटके, Kolhapur fataka dukan, Kolhapur celebration samagri, Kolhapur lagna decoration, Kolhapur vadhdivs items, Kolhapur party decoration, Kolhapur wedding supplies, Kolhapur birthday decoration" },
        { name: "long-tail-keywords", content: "best celebration material shop in Kolhapur, wholesale fireworks market Kolhapur, event management supplies Kolhapur, कोल्हापूरात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, कोल्हापूर थोक फटके मार्केट, कोल्हापूर इव्हेंट मॅनेजमेंट सप्लायज, Kolhapur celebration material near me, Kolhapur fireworks wholesale market, Kolhapur wedding decoration items, Kolhapur birthday party supplies, Kolhapur event decoration services, Kolhapur party decoration wholesale" },
        { name: "geo.placename", content: "Kolhapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KolhapurPage() {
    return <LocationPage city="Kolhapur" />;
}
