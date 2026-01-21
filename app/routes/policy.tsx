import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy | AP Celebration Trader" },
  { name: "description", content: "Read the privacy policy for AP Celebration Trader's website and services." },
];

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 font-heading border-b-2 border-red-600 pb-2 inline-block">Privacy Policy</h1>

        <div className="prose prose-red max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              At AP Celebration Trader, we value your privacy and are committed to protecting your personal data. This Privacy Policy informs you how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. The Data We Collect</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6 font-text">
              <li><strong>Identity Data</strong> includes first name, last name, or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Personal Data</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6 font-text">
              <li>To register you as a new customer at our Satara store.</li>
              <li>To process and deliver your order for firecrackers, cold pyro, or celebration materials.</li>
              <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy.</li>
              <li>To use data analytics to improve our website, products/services, marketing, and customer experiences.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Data Security</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Your Legal Rights</h2>
            <p className="text-gray-700 mb-4 font-text leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Contact Us</h2>
            <p className="text-gray-700 mb-4 font-text">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <strong>Email:</strong> apcelebrationtrender01@gmail.com
              <br />
              <strong>Address:</strong> Shop No. 5, Near Chakor Bakery, Satara, Maharashtra 415001
            </p>
          </section>
        </div>

        <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200 font-text text-center">
          &copy; 2026 AP Celebration Trader. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}