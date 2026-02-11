
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Firecrackers in Baramati | AP Celebration Traders" },
        { name: "description", content: "Leading celebration material supplier in Baramati. Wholesale fireworks, party supplies, cold pyro, and wedding decorations. Best quality celebration items in Baramati." },
        { name: "keywords", content: "party supplies Baramati, celebration material Baramati, firecrackers Baramati, wedding decor Baramati, birthday items wholesale Baramati, event decoration Baramati" },
        { name: "long-tail-keywords", content: "best celebration material shop in Baramati, wholesale firecrackers price Baramati, wedding special effects Baramati, party decoration materials supplier" },
        { name: "geo.placename", content: "Baramati, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function BaramatiPage() {
    return <LocationPage city="Baramati" />;
}
