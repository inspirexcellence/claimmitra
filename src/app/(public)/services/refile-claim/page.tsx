"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  FileText, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  FileSearch, 
  FolderSearch, 
  FileCheck, 
  Scale, 
  Headphones 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const rejectionReasons = [
  {
    title: "Incomplete Documents",
    description: "Missing or incorrect paperwork can affect the outcome.",
    icon: <FileText className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Policy Conditions",
    description: "Some claims are rejected because specific policy terms aren't met or understood.",
    icon: <AlertTriangle className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Missing Information",
    description: "Incomplete claim details may lead to delays or rejection.",
    icon: <HelpCircle className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Supporting Evidence",
    description: "Certain claims require additional documentation to support them.",
    icon: <FolderSearch className="w-8 h-8 text-orange-500" />
  }
];

const steps = [
  {
    number: "01",
    title: "Review Your Claim",
    description: "We carefully examine your policy, claim documents, and rejection letter.",
    icon: <FileSearch className="w-8 h-8 text-orange-500" />
  },
  {
    number: "02",
    title: "Identify the Gaps",
    description: "We'll explain what may have contributed to the rejection and discuss the available options.",
    icon: <Scale className="w-8 h-8 text-orange-500" />
  },
  {
    number: "03",
    title: "Prepare for Resubmission",
    description: "Our experts help organize the required documents and prepare your claim for refiling.",
    icon: <FileCheck className="w-8 h-8 text-orange-500" />
  },
  {
    number: "04",
    title: "Guide You Through the Process",
    description: "From resubmission to follow-up, we'll continue to support you throughout the process.",
    icon: <Headphones className="w-8 h-8 text-orange-500" />
  }
];

const benefits = [
  "Understand why your claim was rejected",
  "Review your available options",
  "Prepare a stronger submission",
  "Ongoing guidance throughout the process"
];

export default function RefileClaimPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-100 opacity-40 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 border border-orange-200 mb-6"
          >
            <ShieldAlert className="w-4 h-4 mr-2 text-orange-600" />
            Refile a Rejected Claim
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Claim Rejected? <span className="text-orange-500">Let's Review It Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            A rejected claim doesn't always mean your journey ends there. Understanding why your claim was rejected is the first step toward deciding what to do next. We'll help you review your case, understand your options, and prepare your claim for resubmission where applicable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/submit-claim">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-orange-500/25 transition-all">
                Review My Claim
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Claims Get Rejected Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Claims Get Rejected</h2>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Understanding the most common roadblocks behind insurance claim denials.
              </p>
            </SlideUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rejectionReasons.map((item, index) => (
              <StaggerItem key={index}>
                <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="mb-6 bg-orange-100/60 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. How Insurance Sahyog Helps Section */}
      <section className="py-24 bg-orange-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Insurance Sahyog Helps</h2>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our structured review and resubmission methodology helps turn rejections around.
              </p>
            </SlideUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="text-5xl font-extrabold text-orange-500/15 absolute top-4 right-6">
                    {step.number}
                  </div>
                  <div className="mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 relative z-10 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Why This Service Matters Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-950 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-900/30 pointer-events-none" />
            <div className="relative z-10 text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Why This Service Matters</h2>
              <p className="text-emerald-200/80 text-lg">Expert scrutiny gives your rejected claim the best chance at approval.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15">
                  <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white font-bold" />
                  </div>
                  <span className="font-semibold text-lg text-emerald-50">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Need Help with a Rejected Claim?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto">
              Let's review your case together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-orange-500/25 transition-all">
                Talk to an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
