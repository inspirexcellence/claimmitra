import { Metadata } from "next";
import { Briefcase, Users, HeartHandshake, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Career | Join InsuranceSarthi",
  description: "Join InsuranceSarthi and build a career with purpose. Help us fight for justice in the insurance sector.",
};

const openings = [
  {
    role: "Legal Advisor (Insurance)",
    location: "Hyderabad, Telangana (On-site)",
    type: "Full-time",
    exp: "3-5 Years"
  },
  {
    role: "Customer Success Manager",
    location: "Remote (India)",
    type: "Full-time",
    exp: "1-3 Years"
  },
  {
    role: "Medical Claims Analyst (MBBS/BDS)",
    location: "New Delhi (Hybrid)",
    type: "Full-time",
    exp: "2+ Years"
  }
];

export default function CareerPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Build a Career with Purpose.
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              At InsuranceSarthi, we don't just process paperwork. We fight for justice, right wrongs, and restore faith for thousands of Indian families. Come join our mission.
            </p>
          </SlideUp>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-lg">
            View Open Roles
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
            <StaggerItem className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real Impact</h3>
              <p className="text-slate-600">Every single day, you will be directly responsible for helping people get their rightful money back.</p>
            </StaggerItem>
            <StaggerItem className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Growth</h3>
              <p className="text-slate-600">We are scaling rapidly. Outstanding performers are recognized and promoted quickly.</p>
            </StaggerItem>
            <StaggerItem className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inclusive Culture</h3>
              <p className="text-slate-600">We value diversity, empathy, and a strong sense of ethics in our workspace.</p>
            </StaggerItem>
          </StaggerContainer>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Current Openings</h2>
          <StaggerContainer className="space-y-4">
            {openings.map((job, i) => (
              <StaggerItem key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200 p-6 rounded-2xl hover:border-orange-400 hover:shadow-md transition">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Exp: {job.exp}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="mailto:careers@insurancesarthi.com">
                    <Button variant="outline" className="w-full md:w-auto text-orange-500 border-orange-200 hover:bg-orange-50">Apply Now</Button>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-12 bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
            <p className="text-slate-600 text-lg mb-4">Don't see a role that fits your profile?</p>
            <p className="text-slate-900 font-medium">Drop your resume at <a href="mailto:careers@insurancesarthi.com" className="text-orange-500 hover:underline">careers@insurancesarthi.com</a> and we'll reach out when there's an opening.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
