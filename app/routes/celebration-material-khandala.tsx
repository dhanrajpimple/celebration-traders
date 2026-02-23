
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Khandala | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Khandala. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Khandala, celebration material Khandala, firecrackers Khandala, wedding decor Khandala, wholesale fireworks Khandala, cold pyro machine Khandala" },
        { name: "long-tail-keywords", content: "best celebration material shop in Khandala, wholesale fireworks market Khandala, party decoration items supplier Khandala" },
        { name: "geo.placename", content: "Khandala, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KhandalaPage() {
    return <LocationPage city="Khandala" />;
}
