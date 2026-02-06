
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material in Baramati | AP Celebration Traders" },
        { name: "description", content: "Top-rated celebration material shop in Baramati. Get wholesale rates on balloons, banners, and firecrackers. Visit AP Celebration Traders." },
        { name: "keywords", content: "party supplies Baramati, celebration material Baramati, firecrackers Baramati, wedding decor Baramati" },
        { name: "geo.placename", content: "Baramati, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function BaramatiPage() {
    return <LocationPage city="Baramati" />;
}
