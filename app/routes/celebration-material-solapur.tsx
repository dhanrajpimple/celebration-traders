
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Solapur | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Solapur. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Solapur, celebration material Solapur, firecrackers Solapur, wedding decor Solapur, wholesale fireworks Solapur, cold pyro machine Solapur" },
        { name: "long-tail-keywords", content: "best celebration material shop in Solapur, wholesale fireworks market Solapur, party decoration items supplier Solapur" },
        { name: "geo.placename", content: "Solapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SolapurPage() {
    return <LocationPage city="Solapur" />;
}
