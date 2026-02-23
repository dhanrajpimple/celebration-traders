
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Koregaon | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Koregaon. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Koregaon, celebration material Koregaon, firecrackers Koregaon, wedding decor Koregaon, wholesale fireworks Koregaon, cold pyro machine Koregaon" },
        { name: "long-tail-keywords", content: "best celebration material shop in Koregaon, wholesale fireworks market Koregaon, party decoration items supplier Koregaon" },
        { name: "geo.placename", content: "Koregaon, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KoregaonPage() {
    return <LocationPage city="Koregaon" />;
}
