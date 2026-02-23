
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Patan | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Patan. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Patan, celebration material Patan, firecrackers Patan, wedding decor Patan, wholesale fireworks Patan, cold pyro machine Patan" },
        { name: "long-tail-keywords", content: "best celebration material shop in Patan, wholesale fireworks market Patan, party decoration items supplier Patan" },
        { name: "geo.placename", content: "Patan, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PatanPage() {
    return <LocationPage city="Patan" />;
}
