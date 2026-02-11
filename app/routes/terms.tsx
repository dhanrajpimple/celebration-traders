import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  { title: "Terms of Use & Safety | AP Celebration Trader" },
  { name: "description", content: "Terms of service and safety guidelines for using products and services from AP Celebration Trader, Satara." },
  { name: "keywords", content: "terms of use, safety guidelines, firecrackers safety, celebration materials terms, Satara shop terms" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 font-heading border-b-2 border-red-600 pb-2 inline-block">Terms of Use & Safety Guidelines</h1>

        <div className="prose prose-red max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              Welcome to AP Celebration Trader. By accessing or using our website, services, or purchasing products from our store in Satara, you agree to comply with and be bound by the following terms and conditions. These terms apply to all visitors, users, and customers of AP Celebration Trader.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Firecracker & SFX Safety Regulations</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              As a leading supplier of firecrackers and special effects (SFX) in the Satara District, safety is our top priority. By purchasing our products, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6 font-text">
              <li>Always follow the manufacturer's instructions printed on the product packaging.</li>
              <li>Only use firecrackers and cold pyro equipment in open, well-ventilated outdoor areas.</li>
              <li>Keep a safe distance from buildings, flammable materials, and people while operating fireworks.</li>
              <li>Ensure adult supervision at all times when children are around celebration materials.</li>
              <li>Dispose of used fireworks properly by soaking them in water before throwing them away.</li>
              <li>Comply with all local Satara municipal regulations regarding noise and time restrictions for fireworks.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Product Information & Availability</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              While we strive to provide accurate information on our website about our mask machines, cold pyro jets, and party supplies, please note:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6 font-text">
              <li>Product images are for illustrative purposes and may slightly differ from the actual item.</li>
              <li>Prices and availability are subject to change without prior notice, especially during peak festival seasons.</li>
              <li>We reserve the right to limit the quantity of items purchased per customer to ensure fair distribution.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Purchases & Payments</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              For wholesale and retail orders, we accept various payment methods including Cash, UPI, and Bank Transfers. All sales are final once the product has left our store premises near Chakor Bakery, Satara, due to the nature of combustible materials.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              AP Celebration Trader shall not be held liable for any damages, injuries, or legal issues arising from the misuse or negligent handling of our products. Users assume all risks associated with the operation of fireworks and SFX equipment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Contact Information</h2>
            <p className="text-gray-700 mb-4 font-text">
              For any clarifications regarding these terms, please visit us at:
              <br />
              <strong>Shop No. 5, Near Chakor Bakery, Phutka Talav, Somvar Peth, Satara, Maharashtra 415001</strong>
              <br />
              Or call us at: <a href="tel:+919359604441" className="text-red-600 hover:underline">+91 9359604441</a>
            </p>
          </section>
        </div>

        <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200 font-text text-center">
          Last Updated: January 2026 | &copy; AP Celebration Trader Satara.
        </p>
      </div>
    </main>
  );
}