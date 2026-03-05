
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Firecrackers in Baramati | AP Celebration Traders" },
        { name: "description", content: "Leading celebration material supplier in Baramati. Wholesale fireworks, party supplies, cold pyro, and wedding decorations. Best quality celebration items in Baramati." },
        { name: "keywords", content: "party supplies Baramati, celebration material Baramati, firecrackers Baramati, wedding decor Baramati, birthday items wholesale Baramati, event decoration Baramati, बारामती पार्टी सप्लायज, बारामती सेलिब्रेशन मटेरियल, बारामती फटके, बारामती लग्न सजावट, बारामती वाढदिवस आयटम्स, बारामती इव्हेंट डेकोरेशन, Baramati fataka dukan, Baramati celebration samagri, Baramati lagna decoration, Baramati vadhdivs items, Baramati party decoration, Baramati wedding supplies" },
        { name: "long-tail-keywords", content: "best celebration material shop in Baramati, wholesale firecrackers price Baramati, wedding special effects Baramati, party decoration materials supplier, बारामतीत सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, बारामती थोक फटके किंमत, बारामती लग्न विशेष इफेक्ट्स, बारामती पार्टी डेकोरेशन मटेरियल पुरवठादार, Baramati celebration material near me, Baramati fireworks wholesale price, Baramati wedding decoration items, Baramati birthday party supplies, Baramati event decoration services" },
        { name: "geo.placename", content: "Baramati, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function BaramatiPage() {
    return <LocationPage city="Baramati" />;
}
