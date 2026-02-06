
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Solapur | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials now in Solapur. AP Celebration Traders offers huge discounts on bulk orders." },
        { name: "keywords", content: "party supplies Solapur, celebration material Solapur, firecrackers Solapur, wedding decor Solapur" },
        { name: "geo.placename", content: "Solapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SolapurPage() {
    return <LocationPage city="Solapur" />;
}
