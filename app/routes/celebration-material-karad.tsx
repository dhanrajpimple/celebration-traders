
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Karad | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Karad. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Karad, celebration material Karad, firecrackers Karad, wedding decor Karad, wholesale fireworks Karad, cold pyro machine Karad" },
        { name: "long-tail-keywords", content: "best celebration material shop in Karad, wholesale fireworks market Karad, party decoration items supplier Karad" },
        { name: "geo.placename", content: "Karad, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KaradPage() {
    return <LocationPage city="Karad" />;
}
