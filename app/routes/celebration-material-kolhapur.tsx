
import type { MetaFunction } from "@remix-run/cloudflare";
import LocationPage from "~/components/LocationPage";

export const meta: MetaFunction = () => {
    return [
        { title: "Celebration Material & Fireworks in Kolhapur | AP Celebration Traders" },
        { name: "description", content: "Your go-to shop for celebration materials in Kolhapur. We offer wholesale prices on firecrackers, cold pyro, and party decorations for all events." },
        { name: "keywords", content: "party supplies Kolhapur, celebration material Kolhapur, firecrackers Kolhapur, wedding decor Kolhapur, birthday decoration Kolhapur, wholesale fireworks Kolhapur" },
        { name: "long-tail-keywords", content: "best celebration material shop in Kolhapur, wholesale fireworks market Kolhapur, event management supplies Kolhapur" },
        { name: "geo.placename", content: "Kolhapur, Maharashtra" },
        { name: "geo.region", content: "IN-MH" }
    ];
};

export default function KolhapurPage() {
    return <LocationPage city="Kolhapur" />;
}
