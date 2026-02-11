
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Firecrackers in Satara | AP Celebration Traders" },
        { name: "description", content: "Best celebration material and firecrackers in Satara. AP Celebration Traders is the top-rated shop for party supplies, cold pyro, and wedding decor in Satara district." },
        { name: "keywords", content: "party supplies Satara, celebration material Satara, firecrackers Satara, wedding decor Satara, birthday items Satara, event management materials Satara" },
        { name: "long-tail-keywords", content: "best celebration material shop in Satara city, wholesale firecrackers price Satara district, wedding and birthday decoration material Satara" },
        { name: "geo.placename", content: "Satara, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function SataraPage() {
    return <LocationPage city="Satara" />;
}
