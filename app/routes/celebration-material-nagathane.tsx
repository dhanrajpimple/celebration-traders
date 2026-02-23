
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Nagathane | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Nagathane. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Nagathane, celebration material Nagathane, firecrackers Nagathane, wedding decor Nagathane, wholesale fireworks Nagathane, cold pyro machine Nagathane" },
        { name: "long-tail-keywords", content: "best celebration material shop in Nagathane, wholesale fireworks market Nagathane, party decoration items supplier Nagathane" },
        { name: "geo.placename", content: "Nagathane, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function NagathanePage() {
    return <LocationPage city="Nagathane" />;
}
