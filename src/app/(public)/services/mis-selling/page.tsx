import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Mis-selling of Insurance Policy | InsuranceSarthi",
  description: "Were you sold an insurance policy with false promises like a guaranteed loan or high returns? Get expert help to resolve mis-selling cases and get your money back.",
};

export default function MisSellingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> Mis-selling Support
            </div>
          </FadeIn>
          <SlideUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Were You Sold a Policy on a False Promise?
            </h1>
          </SlideUp>
          <SlideUp delay={0.3}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Mis-selling is when an insurance policy is sold to you under false pretenses—like a promise of an interest-free loan, a fixed deposit, or recovering a lapsed policy premium. You don't have to lose your hard-earned money.
            </p>
          </SlideUp>
          <SlideUp delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/submit-claim?type=mis-selling">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-lg">
                  Report Mis-selling
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 h-14 text-lg border-slate-300">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SlideUp>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mis-selling Frauds</h2>
              </SlideUp>
              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Loan Against Policy</h3>
                    <p className="text-slate-600">Agents promise an interest-free loan if you buy a new life insurance policy. After you pay the premium, the loan never materializes.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Fixed Deposit Scam</h3>
                    <p className="text-slate-600">Bank employees sell insurance policies by convincing the customer that it is a high-return Fixed Deposit (FD).</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Lapsed Policy Recovery</h3>
                    <p className="text-slate-600">Fraudsters claim they can help you recover money from an old lapsed policy if you buy a new one today.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
            <SlideUp delay={0.2} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How We Help You</h3>
              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex gap-4">
                  <span className="text-orange-500 font-bold text-xl">01</span>
                  <p className="text-slate-700"><strong>Evaluate the Pitch:</strong> We analyze the communications, recordings, or messages that led to the sale.</p>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <span className="text-orange-500 font-bold text-xl">02</span>
                  <p className="text-slate-700"><strong>Legal Framing:</strong> Our legal experts draft a robust complaint detailing the misrepresentation.</p>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <span className="text-orange-500 font-bold text-xl">03</span>
                  <p className="text-slate-700"><strong>Ombudsman Representation:</strong> We escalate the matter to the Insurance Ombudsman or Consumer Court if the insurer denies a refund.</p>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <span className="text-orange-500 font-bold text-xl">04</span>
                  <p className="text-slate-700"><strong>Refund Secured:</strong> We fight until your premium is refunded with applicable interest.</p>
                </StaggerItem>
              </StaggerContainer>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-orange-800 py-20 text-center">
        <FadeIn className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't Let Fraudsters Keep Your Money</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">Upload your policy documents today and let our experts review your case for free.</p>
          <Link href="/submit-claim?type=mis-selling">
            <Button size="lg" className="bg-white text-orange-800 hover:bg-slate-100 h-14 px-8 text-lg hover:scale-105 transition-transform">
              Start Your Resolution <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
