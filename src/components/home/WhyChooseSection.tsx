import { CheckCircle2, Scale, ShieldCheck, Clock, FileCheck, HeartHandshake } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const features = [
  {
    title: "Understand Your Policy",
    description: "Insurance terms can be confusing. We help you understand the parts of your policy that matter to your claim.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Get Your Claim Right",
    description: "A small mistake can cause delays. We help you prepare your claim correctly from the start.",
    icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />
  },
  {
    title: "A Careful Review Every Time",
    description: "Every claim is different. We review your documents carefully to help ensure nothing important is missed.",
    icon: <FileCheck className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Support Beyond Submission",
    description: "Filing your claim is just the beginning. We continue to guide you through insurer queries and the next steps.",
    icon: <Clock className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Honest Advice, Always",
    description: "No false promises or unrealistic expectations—just clear, practical guidance you can trust.",
    icon: <Scale className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Tailored to Your Claim",
    description: "Your claim is unique. Our guidance is based on your policy, your circumstances, and your specific situation—not a one-size-fits-all approach.",
    icon: <HeartHandshake className="w-6 h-6 text-orange-500" />
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why People Trust Insurance Sahyog</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Because trust is built through transparency, expertise, and genuine support.
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
