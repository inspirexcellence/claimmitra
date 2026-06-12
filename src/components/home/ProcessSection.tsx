"use client";

import { ClipboardCheck, FileSearch, Handshake, Scale } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We review your case, policy details, and rejection letters to determine the best course of action.",
    icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />
  },
  {
    number: "02",
    title: "Documentation",
    description: "Our experts gather all necessary medical records, bills, and legal paperwork required for the appeal.",
    icon: <FileSearch className="w-8 h-8 text-orange-500" />
  },
  {
    number: "03",
    title: "Negotiation",
    description: "We represent you and negotiate directly with the insurance company's grievance redressal team.",
    icon: <Handshake className="w-8 h-8 text-orange-500" />
  },
  {
    number: "04",
    title: "Legal Assistance",
    description: "If required, we escalate your case to the Insurance Ombudsman or Consumer Court for final resolution.",
    icon: <Scale className="w-8 h-8 text-orange-500" />
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Help You</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven, step-by-step methodology to get your insurance claim approved.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="text-5xl font-extrabold text-emerald-600/20 absolute top-4 right-6">
                  {step.number}
                </div>
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 relative z-10">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
