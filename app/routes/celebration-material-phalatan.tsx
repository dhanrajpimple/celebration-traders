
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Phalatan | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Phalatan. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Phalatan, celebration material Phalatan, firecrackers Phalatan, wedding decor Phalatan, wholesale fireworks Phalatan, cold pyro machine Phalatan" },
        { name: "long-tail-keywords", content: "best celebration material shop in Phalatan, wholesale fireworks market Phalatan, party decoration items supplier Phalatan" },
        { name: "geo.placename", content: "Phalatan, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PhalatanPage() {
    return <LocationPage city="Phalatan" />;
}
