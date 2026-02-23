
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Wholesale Fireworks in Shirawal | AP Celebration Traders" },
        { name: "description", content: "Premium celebration materials and wholesale firecrackers in Shirawal. AP Celebration Traders offers the best rates for event decorations, cold pyro, and party supplies." },
        { name: "keywords", content: "party supplies Shirawal, celebration material Shirawal, firecrackers Shirawal, wedding decor Shirawal, wholesale fireworks Shirawal, cold pyro machine Shirawal" },
        { name: "long-tail-keywords", content: "best celebration material shop in Shirawal, wholesale fireworks market Shirawal, party decoration items supplier Shirawal" },
        { name: "geo.placename", content: "Shirawal, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function ShirawalPage() {
    return <LocationPage city="Shirawal" />;
}
