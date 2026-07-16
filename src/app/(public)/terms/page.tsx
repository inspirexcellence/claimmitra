import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | INSURANCE SAHYOG",
  description: "Terms and conditions for using INSURANCE SAHYOG services.",
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: June 10, 2026</p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-slate-600 mb-4">
          By accessing or using the INSURANCE SAHYOG website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Description of Service</h2>
        <p className="text-slate-600 mb-4">
          INSURANCE SAHYOG acts as a facilitator and consultant to help policyholders resolve delayed or rejected insurance claims. We are not an insurance company, insurance broker, or a law firm (unless specifically stated in a separate legal representation agreement).
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Fees and Payments</h2>
        <p className="text-slate-600 mb-4">
          Our Policy Review service requires an upfront payment of ₹99. For claim resolutions, we operate on a fixed fee or success-fee model. You agree to pay the agreed-upon percentage or fee upon the successful settlement of your claim.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Client Responsibilities</h2>
        <p className="text-slate-600 mb-4">
          You agree to provide true, accurate, and complete information regarding your policy, medical history, and the incident leading to the claim. Providing false or forged documents may result in immediate termination of our services without refund.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="text-slate-600 mb-4">
          While we maintain a high success rate, INSURANCE SAHYOG does not guarantee that your claim will be approved. The final decision rests with the insurance company, the Ombudsman, or the Court. We are not liable for the outcome of the claim process.
        </p>
      </div>
    </div>
  );
}
