import { CheckCircle2, Scale, Zap, IndianRupee, ShieldCheck, Clock } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const features = [
  {
    title: "95% Success Rate",
    description: "We have an industry-leading success rate in resolving rejected health and life insurance claims.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Expert Legal Team",
    description: "Our panel includes former insurance ombudsmen, legal experts, and senior doctors.",
    icon: <Scale className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Fast Resolution",
    description: "We aim to resolve most claims within 30 to 45 days, cutting through the usual red tape.",
    icon: <Zap className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. We work on a flat fee or success-fee model depending on the case type.",
    icon: <IndianRupee className="w-6 h-6 text-orange-500" />
  },
  {
    title: "All Insurance Types",
    description: "We handle Health, Life, Term, Motor, Property, and Corporate insurance disputes.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />
  },
  {
    title: "24/7 Support",
    description: "Dedicated case managers keep you updated throughout the entire resolution process.",
    icon: <Clock className="w-6 h-6 text-orange-500" />
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose InsurenceSarthi?</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are India's most trusted insurance claim resolution platform.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
