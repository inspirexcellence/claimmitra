import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | ClaimMitra",
  description: "Legal disclaimer for ClaimMitra.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>
        
        <p className="text-slate-600 mb-6">
          The information provided on ClaimMitra (the "Website") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Not Legal or Financial Advice</h2>
          <p className="text-slate-600 text-sm">
            ClaimMitra is an insurance claim consultancy platform. The content on this website does not constitute legal, financial, or professional advice. While we employ legal experts and industry professionals, your use of the site or our services does not create an attorney-client relationship. You should consult with a qualified professional before making any financial or legal decisions regarding your insurance policies.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">No Guarantees</h2>
        <p className="text-slate-600 mb-4">
          While we highlight our 95% success rate based on past performance, we cannot and do not guarantee the successful resolution or approval of any specific insurance claim. Every case is evaluated on its individual merits, and the final decision is made by the respective insurance company, regulatory body, or court of law.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">External Links</h2>
        <p className="text-slate-600 mb-4">
          The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.
        </p>
      </div>
    </div>
  );
}
