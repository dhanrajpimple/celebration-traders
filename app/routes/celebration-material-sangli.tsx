
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Sangli | AP Celebration Traders" },
        { name: "description", content: "Searching for celebration material in Sangli? We offer complete party solutions including cold pyro and decorations." },
        { name: "keywords", content: "party supplies Sangli, celebration material Sangli, firecrackers Sangli, wedding decor Sangli" },
        { name: "geo.placename", content: "Sangli, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SangliPage() {
    return <LocationPage city="Sangli" />;
}
