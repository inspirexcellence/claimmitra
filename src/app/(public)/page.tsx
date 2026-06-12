import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "InsuranceSarthi | Insurance Claim Assistance in India",
  description: "We help you appeal, negotiate and win your rejected or delayed insurance claim.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
