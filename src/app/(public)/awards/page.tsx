import { Metadata } from "next";
import { Award, Trophy, Medal } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Awards & Recognition | ClaimMitra",
  description: "Recognized as India's most trusted platform for resolving insurance grievances. Explore our industry awards and milestones.",
};

const awards = [
  {
    title: "Best InsurTech Startup of the Year",
    organization: "Fintech India Awards 2025",
    icon: <Trophy className="w-10 h-10 text-yellow-600" />
  },
  {
    title: "Excellence in Consumer Grievance Redressal",
    organization: "National Consumer Protection Council",
    icon: <Award className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Top 50 Most Innovative Startups",
    organization: "Startup India Innovation Week",
    icon: <Medal className="w-10 h-10 text-teal-600" />
  }
];

export default function AwardsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Awards & Recognition
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Our relentless pursuit of consumer justice hasn't gone unnoticed. We are proud to be recognized by leading industry bodies.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <StaggerItem key={i} className="bg-white p-10 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6">
                  {award.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{award.title}</h3>
                <div className="w-12 h-1 bg-slate-200 mx-auto mb-4"></div>
                <p className="text-slate-600 font-medium">{award.organization}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-20 bg-blue-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Our Biggest Award is Your Trust</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              While industry accolades validate our business model, resolving over 20,000+ claims and bringing a smile to distraught families remains our greatest achievement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
