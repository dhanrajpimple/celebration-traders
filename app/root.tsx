import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AP Celebration Trader | Firecrackers & Celebration Materials in Satara</title>
        <meta name="description" content="AP Celebration Trader is your trusted supplier of firecrackers, cold pyro, party supplies, and celebration materials in Satara and nearby cities. Wholesale & retail available. Safe, certified, and quality products." />
        <meta name="keywords" content="firecrackers, celebration materials, cold pyro, party supplies, Satara, AP Celebration Trader, wholesale, retail, birthday, wedding, festival, decoration, electric lights" />
        <meta property="og:title" content="AP Celebration Trader | Firecrackers & Celebration Materials in Satara" />
        <meta property="og:description" content="Your one-stop shop for firecrackers, cold pyro, and all celebration materials in Satara and nearby cities. Safe, certified, and quality products for every occasion." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
