
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Kolhapur | AP Celebration Traders" },
        { name: "description", content: "Wholesale celebration material in Kolhapur. AP Celebration Traders brings you the best quality firecrackers and event supplies." },
        { name: "keywords", content: "party supplies Kolhapur, celebration material Kolhapur, firecrackers Kolhapur, wedding decor Kolhapur" },
        { name: "geo.placename", content: "Kolhapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KolhapurPage() {
    return <LocationPage city="Kolhapur" />;
}
