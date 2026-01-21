import React, { type ReactNode } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
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

export const meta: MetaFunction = () => {
  return [
    { title: "AP Celebration Trader | Best Firecrackers & Celebration Materials in Satara District" },
    { name: "description", content: "AP Celebration Trader is the #1 supplier of firecrackers, cold pyro, party supplies, and celebration materials in Satara District. Exclusive range of mask machines, sparks, and wedding decor." },
    { name: "keywords", content: "firecrackers Satara, celebration materials Satara district, cold pyro Satara, party supplies Satara, mask machine Satara, AP Celebration Trader, fireworks wholesale Satara, wedding materials Satara" },
    { property: "og:title", content: "AP Celebration Trader | Firecrackers & Celebration Materials in Satara District" },
    { property: "og:description", content: "Quality firecrackers, cold pyro, and party supplies in Satara District. Wholesale and retail celebration materials for weddings, birthdays, and events." },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_IN" },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
