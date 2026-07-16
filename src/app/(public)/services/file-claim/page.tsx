"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileSearch, 
  Send, 
  Headphones 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const challenges = [
  {
    title: "Unsure What Documents You Need",
    description: "Missing paperwork can slow down the claims process.",
    icon: <FileText className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Confused by Policy Terms",
    description: "Insurance policies can be difficult to understand without expert guidance.",
    icon: <HelpCircle className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Worried About Filing Incorrectly",
    description: "Even small mistakes can result in unnecessary delays or additional queries.",
    icon: <AlertCircle className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Don't Know Where to Start",
    description: "Many policyholders simply don't know what comes next.",
    icon: <Compass className="w-8 h-8 text-orange-500" />
  }
];

const steps = [
  {
    number: "01",
    title: "Understand Your Policy",
    description: "We explain what your policy covers, the documents required, and the process involved.",
    icon: <FileSearch className="w-8 h-8 text-orange-500" />
  },
  {
    number: "02",
    title: "Review Your Documents",
    description: "Every document is checked to help ensure your claim is complete before submission.",
    icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />
  },
  {
    number: "03",
    title: "File Your Claim",
    description: "We guide you through filing your claim correctly with the necessary paperwork.",
    icon: <Send className="w-8 h-8 text-orange-500" />
  },
  {
    number: "04",
    title: "Continued Guidance",
    description: "If the insurer requests additional information, we'll help you understand what's needed and what to do next.",
    icon: <Headphones className="w-8 h-8 text-orange-500" />
  }
];

const benefits = [
  "Avoid common filing mistakes",
  "Better prepared documentation",
  "Clear understanding of the process",
  "Guidance whenever you need it"
];

export default function FileClaimPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-100 opacity-50 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 border border-emerald-200 mb-6"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600" />
            File Your Insurance Claim
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            File Your Claim with <span className="text-orange-500">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Filing an insurance claim doesn't have to be confusing. Whether it's your first claim or you're unsure about the process, we'll help you understand the requirements, prepare the right documents, and file your claim correctly from the start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/submit-claim">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-orange-500/25 transition-all">
                File My Claim
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Common Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Challenges</h2>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Why filing an insurance claim on your own can feel stressful and uncertain.
              </p>
            </SlideUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((item, index) => (
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
                Our guided approach ensures your claim is complete, accurate, and ready for fast approval.
              </p>
            </SlideUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="text-5xl font-extrabold text-emerald-600/15 absolute top-4 right-6">
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
              <p className="text-emerald-200/80 text-lg">A well-prepared claim drastically improves your approval chances.</p>
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
              Ready to File Your Claim?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto">
              Let our experts help you get started.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-orange-500/25 transition-all">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
