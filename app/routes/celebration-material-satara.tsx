
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Satara | AP Celebration Traders" },
        { name: "description", content: "Looking for celebration material in Satara? AP Celebration Traders offers wholesale party supplies, firecrackers, and wedding decor in Satara." },
        { name: "keywords", content: "party supplies Satara, celebration material Satara, firecrackers Satara, wedding decor Satara" },
        { name: "geo.placename", content: "Satara, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SataraPage() {
    return <LocationPage city="Satara" />;
}
