
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Event Supplies in Sangli | AP Celebration Traders" },
        { name: "description", content: "Complete celebration material and event supplies in Sangli. We provide high-quality party decorations, firecrackers, and special effects for all your occasions." },
        { name: "keywords", content: "party supplies Sangli, celebration material Sangli, firecrackers Sangli, wedding decor Sangli, event supplies Sangli, birthday party materials Sangli" },
        { name: "long-tail-keywords", content: "best celebration material shop in Sangli, wholesale firecrackers price Sangli, party supplies and decoration Sangli" },
        { name: "geo.placename", content: "Sangli, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SangliPage() {
    return <LocationPage city="Sangli" />;
}
