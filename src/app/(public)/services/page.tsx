import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ShieldAlert, Search, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services | InsuranceSarthi",
  description: "Comprehensive insurance claim assistance, refiling, and policy review services.",
};

const services = [
  {
    id: "file-claim",
    title: "File Your Insurance Claim",
    description: "Don't risk a rejection due to improper paperwork. Let our experts file your claim with the exact documentation and phrasing required by insurance companies.",
    icon: <FileText className="w-12 h-12 text-orange-500" />,
    features: [
      "Complete documentation review before submission",
      "Drafting of the claim narrative",
      "Direct coordination with hospital/garage",
      "Follow-up with the TPA (Third Party Administrator)",
    ],
    cta: "Learn More",
    link: "/services/file-claim",
    price: "Free Evaluation",
  },
  {
    id: "refile-claim",
    title: "Refile Rejected Claim",
    description: "Was your claim unfairly denied? We analyze the rejection reason, gather necessary medical or legal evidence, and legally challenge the insurer to overturn the decision.",
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
    features: [
      "Deep analysis of rejection letter",
      "Collection of counter-evidence",
      "Drafting of formal grievance and appeals",
      "Escalation to Insurance Ombudsman if needed",
    ],
    cta: "Refile Now",
    link: "/services/refile-claim",
    price: "Success Fee Model",
  },
  {
    id: "policy-review",
    title: "Understand My Policy",
    description: "Stop guessing what your policy covers. Our experts will review your policy document and give you a plain-English breakdown of your coverage, limits, and exclusions.",
    icon: <Search className="w-12 h-12 text-emerald-600" />,
    features: [
      "Summary of inclusions and exclusions",
      "Identification of hidden waiting periods",
      "Co-pay and sub-limit analysis",
      "Recommendations for add-on covers",
    ],
    cta: "Get Review for ₹99",
    link: "/services/policy-review",
    price: "₹99 Flat Fee",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you are filing a new claim, fighting a rejection, or just want to understand your coverage, we have a specialized service to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all h-full">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <div className="inline-block bg-orange-50 text-orange-600 font-semibold px-4 py-1 rounded-full text-sm mb-4">
                  {service.price}
                </div>
                <CardDescription className="text-base text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="w-full mt-auto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-xl">
                    {service.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
