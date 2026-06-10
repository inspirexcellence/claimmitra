import Link from "next/link";
import { FileText, ShieldAlert, Search, ArrowRight, AlertTriangle, Clock, DollarSign, HeartPulse } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const services = [
  {
    title: "Mis-selling of Policy",
    description: "Were you sold a policy under false pretenses like a guaranteed loan or FD? We help you get your money back.",
    icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
    link: "/services/mis-selling",
  },
  {
    title: "Refile Rejected Claim",
    description: "Was your claim unfairly denied? We analyze the rejection reason and legally challenge the insurer.",
    icon: <ShieldAlert className="w-10 h-10 text-orange-500" />,
    link: "/services/refile-claim",
  },
  {
    title: "Delay In Claim",
    description: "Tired of waiting? We legally force insurance companies to adhere to IRDAI's mandated turnaround times.",
    icon: <Clock className="w-10 h-10 text-blue-500" />,
    link: "/services/delay-in-claim",
  },
  {
    title: "Claim Short-settled",
    description: "Did you receive a lower payout than expected? We challenge unfair deductions and recover your balance.",
    icon: <DollarSign className="w-10 h-10 text-emerald-600" />,
    link: "/services/short-settled",
  },
  {
    title: "Health Reimbursement",
    description: "Facing issues clearing your medical bills after a cashless denial? We simplify the reimbursement process.",
    icon: <HeartPulse className="w-10 h-10 text-teal-600" />,
    link: "/services/health-reimbursement",
  },
  {
    title: "Understand My Policy",
    description: "Stop guessing. Our experts will review your policy document and give you a plain-English breakdown.",
    icon: <Search className="w-10 h-10 text-indigo-600" />,
    link: "/services/policy-review",
    price: "₹99",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive assistance for all your insurance needs. We handle the complexity so you don't have to.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group">
                <CardHeader>
                  <div className="mb-4 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title} {service.price && <span className="text-blue-600 text-sm ml-2 bg-blue-50 px-2 py-1 rounded-full">{service.price}</span>}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <CardDescription className="text-base text-slate-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
