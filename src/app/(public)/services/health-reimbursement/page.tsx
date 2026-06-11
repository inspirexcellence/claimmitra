import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, FileText, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Health Claim Reimbursement | InsurenceSarthi",
  description: "Facing issues with your health insurance reimbursement? Get expert help to clear your medical bills and secure your rightful payout.",
};

export default function HealthReimbursementPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            <HeartPulse className="w-4 h-4" /> Health Insurance Expert
          </div>
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Struggling with Health Reimbursement?
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              When Cashless is denied or unavailable, you pay out of pocket. But getting that money reimbursed shouldn't feel like a second hospitalization. We simplify the reimbursement process.
            </p>
          </SlideUp>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/submit-claim?type=health-reimbursement">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg">
                Resolve Health Claim
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">The Anatomy of a Reimbursement Rejection</h2>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <FileText className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Disclosure of PED</h3>
              <p className="text-slate-600">The insurer claims you hid a Pre-Existing Disease (PED) because a doctor loosely wrote "patient has history of hypertension" on the discharge summary.</p>
            </StaggerItem>
            <StaggerItem className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <Activity className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unnecessary Hospitalization</h3>
              <p className="text-slate-600">The TPA doctor, who never examined the patient, decides that the treatment could have been done in OPD and rejects the inpatient claim.</p>
            </StaggerItem>
            <StaggerItem className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <FileText className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missing Paperwork</h3>
              <p className="text-slate-600">Endless loops of queries demanding "indoor case papers", "exact onset duration", or "justification for ICU" to wear you down.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-teal-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let Medical Experts Fight Your Case</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">Our team includes medical professionals who can counter the TPA's technical medical rejections with solid evidence and IRDAI regulations.</p>
          <Link href="/submit-claim?type=health-reimbursement">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-slate-100 h-14 px-8 text-lg">
              Get Help Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
