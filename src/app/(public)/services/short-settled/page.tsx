import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Claim Short-Settled | InsurenceSarthi",
  description: "Did you receive a lower insurance payout than expected? We help you challenge short-settled claims and recover your rightful balance.",
};

export default function ShortSettledPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" /> Recovery Service
          </div>
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Did You Receive a Lower Claim Amount?
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Insurance companies often apply hidden sub-limits, disproportionate deductions, or arbitrary depreciation to short-settle your claim. We challenge these unfair deductions.
            </p>
          </SlideUp>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/submit-claim?type=short-settled">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg">
                Recover Balance Amount
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Common Excuses for Deductions</h3>
              <StaggerContainer className="space-y-4">
                <StaggerItem className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                  <p className="text-slate-700"><strong>Room Rent Capping:</strong> "Proportionate deduction" applied to all hospital bills just because your room rent exceeded the limit.</p>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                  <p className="text-slate-700"><strong>Reasonable & Customary Charges:</strong> Claiming the hospital charged more than the "standard" rate for a procedure in that city.</p>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                  <p className="text-slate-700"><strong>Non-Medical Expenses:</strong> Excessively broad interpretation of "consumables" to reject valid medical costs.</p>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                  <p className="text-slate-700"><strong>Depreciation (Motor):</strong> Unfair depreciation rates applied to parts during an accident repair.</p>
                </StaggerItem>
              </StaggerContainer>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't settle for less than you deserve.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Accepting a short-settled amount does not mean you surrender your right to the balance. Many policyholders believe that once money hits their account, the case is closed. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Legally, you can challenge the deductions. Our experts audit your settlement letter line-by-line, compare it with your policy wording, and force the insurer to pay the unjustifiably deducted amount.
              </p>
              <Link href="/submit-claim?type=short-settled" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 text-lg">
                Audit my settlement letter <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
