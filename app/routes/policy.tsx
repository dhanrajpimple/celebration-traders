import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy | AP Celebration Trader" },
  { name: "description", content: "Read the privacy policy for AP Celebration Trader's website and services." },
];

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 font-heading">Privacy Policy</h1>
        <p className="text-gray-700 mb-4 font-text">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8 font-text">
          <li>We may collect personal information such as your name, email, and contact details when you use our services.</li>
          <li>Your information will not be shared with third parties except as required by law.</li>
          <li>We use cookies to enhance your browsing experience.</li>
          <li>By using our website, you consent to our privacy policy.</li>
        </ul>
        <p className="text-gray-700 font-text">If you have any questions about our privacy practices, please contact us.</p>
      </div>
    </main>
  );
} 