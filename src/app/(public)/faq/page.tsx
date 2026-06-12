import type { Metadata } from "next";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "FAQs | InsuranceSarthi",
  description: "Frequently asked questions about our insurance claim resolution services.",
};

export default function FaqPage() {
  return (
    <div className="pt-20 pb-10 bg-slate-50 min-h-screen">
      <FaqSection />
    </div>
  );
}
