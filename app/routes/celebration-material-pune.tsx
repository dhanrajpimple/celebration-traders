
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Pune | AP Celebration Traders" },
        { name: "description", content: "Best celebration material supplier in Pune. We provide wholesale party supplies, cold pyro, and event decorations in Pune with fast delivery." },
        { name: "keywords", content: "party supplies Pune, celebration material Pune, firecrackers Pune, wedding decor Pune" },
        { name: "geo.placename", content: "Pune, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PunePage() {
    return <LocationPage city="Pune" />;
}
