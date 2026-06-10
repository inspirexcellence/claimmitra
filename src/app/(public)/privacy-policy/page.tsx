import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ClaimMitra",
  description: "Privacy policy for ClaimMitra insurance services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: June 10, 2026</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-slate-600 mb-4">
          When you use ClaimMitra, we collect information you provide directly to us, including your name, contact information (email, phone number), policy documents, medical records (if applicable to your claim), and communication history.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-slate-600 mb-4">
          We use the collected information exclusively to:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li>Evaluate and process your insurance claim.</li>
          <li>Communicate with insurance companies and relevant authorities on your behalf.</li>
          <li>Contact you regarding updates to your case.</li>
          <li>Improve our platform and services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Data Security</h2>
        <p className="text-slate-600 mb-4">
          We implement industry-standard security measures to protect your sensitive personal and medical data. Your documents are stored securely in encrypted cloud storage (Cloudflare R2) and access is strictly limited to authorized case managers handling your specific file.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="text-slate-600 mb-4">
          We do not sell your personal data. We only share your information with your insurance company, legal representatives (if required), and the Insurance Ombudsman/Consumer Court to facilitate the resolution of your claim.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
        <p className="text-slate-600 mb-4">
          If you have any questions about this Privacy Policy, please contact us at <strong>privacy@claimmitra.com</strong>.
        </p>
      </div>
    </div>
  );
}
