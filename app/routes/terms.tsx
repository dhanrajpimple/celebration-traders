import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  { title: "Terms of Use | AP Celebration Trader" },
  { name: "description", content: "Read the terms of use for AP Celebration Trader's website and services." },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 font-heading">Terms of Use</h1>
        <p className="text-gray-700 mb-4 font-text">
          Welcome to AP Celebration Trader. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8 font-text">
          <li>Use of this website is subject to all applicable laws and regulations.</li>
          <li>All content is for informational purposes only and may be updated at any time.</li>
          <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
          <li>We reserve the right to modify these terms at any time without notice.</li>
        </ul>
        <p className="text-gray-700 font-text">For more information, please contact us.</p>
      </div>
    </main>
  );
} 