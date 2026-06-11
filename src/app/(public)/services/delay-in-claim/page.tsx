import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldAlert, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Delay in Claim Process | InsurenceSarthi",
  description: "Is your insurance claim stuck or taking too long? We expedite delayed claims and force insurance companies to process your settlement.",
};

export default function DelayClaimPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" /> Claim Expedite Service
          </div>
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Tired of Waiting for Your Claim Settlement?
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Insurance companies can be slow, asking for the same documents repeatedly, or simply going silent. We step in to legally force them to adhere to IRDAI's mandated turnaround times.
            </p>
          </SlideUp>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/submit-claim?type=delay-in-claim">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-lg">
                Expedite My Claim
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why is your claim delayed?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Insurers use various tactics to delay payouts. Recognizing them is the first step to beating them.</p>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <ShieldAlert className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Endless Document Requests</h3>
              <p className="text-slate-600">The TPA or insurer keeps asking for piecemeal documents instead of a single consolidated list, resetting the clock every time.</p>
            </StaggerItem>
            <StaggerItem className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <ShieldAlert className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Investigation Delays</h3>
              <p className="text-slate-600">They place your claim under "investigation" and take months to conclude it, far beyond the IRDAI 30-day limit.</p>
            </StaggerItem>
            <StaggerItem className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <ShieldAlert className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Silent Treatment</h3>
              <p className="text-slate-600">Emails go unanswered, phone lines are always busy, and customer support has no real update on your file.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">IRDAI Rules You Should Know</h2>
          <div className="bg-slate-800 p-8 rounded-2xl text-left">
            <StaggerContainer className="space-y-4 text-lg text-slate-300">
              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                <p>Insurers must ask for all required documents in <strong>one go</strong> within 15 days of intimation.</p>
              </StaggerItem>
              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                <p>If an investigation is required, it must be completed within <strong>30 days</strong>.</p>
              </StaggerItem>
              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                <p>Payment must be made within <strong>30 days</strong> of receiving the final document.</p>
              </StaggerItem>
              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                <p>If delayed beyond this, the insurer is liable to pay <strong>interest at 2% above the bank rate</strong>.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
