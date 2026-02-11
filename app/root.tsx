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
    { title: "AP Celebration Trader | #1 Celebration Materials & Firecrackers Supplier" },
    { name: "description", content: "AP Celebration Trader - Leading distributor of celebration materials, firecrackers, cold pyro, and party supplies. Best quality and wholesale rates for event decor." },
    { name: "keywords", content: "celebration materials, firecrackers, cold pyro, party supplies, wedding decor, mask machine, event special effects, AP Celebration Trader, fireworks wholesale" },
    { property: "og:title", content: "AP Celebration Trader | Best Celebration Materials & Fireworks" },
    { property: "og:description", content: "Premium celebration materials, cold pyro, and firecrackers. Wholesale and retail event supplies for weddings, birthdays, and festivals." },
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
