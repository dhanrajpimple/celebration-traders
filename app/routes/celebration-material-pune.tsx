
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Special Effects in Pune | AP Celebration Traders" },
        { name: "description", content: "Premium celebration material and special effects in Pune. Wholesale firecrackers, CO2 jets, and party supplies for weddings and corporate events in Pune." },
        { name: "keywords", content: "party supplies Pune, celebration material Pune, firecrackers Pune, wedding decor Pune, cold pyro Pune, event special effects Pune, birthday party items Pune" },
        { name: "long-tail-keywords", content: "best celebration material shop in Pune city, wholesale firecrackers price Pune, event decoration materials wholesale Pune" },
        { name: "geo.placename", content: "Pune, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function PunePage() {
    return <LocationPage city="Pune" />;
}
