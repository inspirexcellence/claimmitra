import Link from "next/link";
import { FileText, ShieldAlert, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const services = [
  {
    title: "New Claim Assistance",
    description: "From reviewing your policy to preparing the required documentation, we help you file your insurance claim with clarity and confidence.",
    icon: <FileText className="w-10 h-10 text-emerald-600" />,
    link: "/services/file-claim",
  },
  {
    title: "Rejected Claim Assistance",
    description: "Our experts assess the reasons behind your claim rejection and guide you through the process of preparing and refiling your claim.",
    icon: <ShieldAlert className="w-10 h-10 text-orange-500" />,
    link: "/services/refile-claim",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Get Started</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting the right support starts here. Tell us what you need help with, and we'll guide you from there.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group">
                <CardHeader>
                  <div className="mb-4 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="text-base text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-auto pt-2">
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
