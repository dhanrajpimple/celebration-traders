
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Shirawal | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Shirawal. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Shirawal, celebration material Shirawal, firecrackers Shirawal, wedding decor Shirawal, wholesale fireworks Shirawal, cold pyro machine Shirawal, शिरवळ पार्टी सप्लायज, शिरवळ सेलिब्रेशन मटेरियल, शिरवळ फटके, शिरवळ लग्न सजावट, शिरवळ थोक फटके, शिरवळ कोल्ड पायरो मशीन, Shirawal fataka dukan, Shirawal celebration samagri, Shirawal lagna decoration, Shirawal vadhdivs items, Shirawal party decoration, Shirawal wedding supplies, Shirawal cold pyro effects" },
        { name: "long-tail-keywords", content: "best celebration material shop in Shirawal, wholesale fireworks market Shirawal, party decoration items supplier Shirawal, शिरवळात सर्वोत्तम सेलिब्रेशन मटेरियल दुकान, शिरवळ थोक फटके मार्केट, शिरवळ पार्टी डेकोरेशन आयटम्स पुरवठादार, Shirawal celebration material near me, Shirawal fireworks wholesale market, Shirawal wedding decoration items, Shirawal birthday party supplies, Shirawal event decoration services, Shirawal cold pyro machine price" },
        { name: "geo.placename", content: "Shirawal, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function ShirawalPage() {
    return <LocationPage city="Shirawal" />;
}
