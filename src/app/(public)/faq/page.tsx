import type { Metadata } from "next";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "FAQs | Insurance Sahyog",
  description: "Frequently asked questions about Insurance Sahyog and our insurance claim support services.",
};

export default function FaqPage() {
  return (
    <div className="pt-20 pb-10 bg-slate-50 min-h-screen">
      <FaqSection />
    </div>
  );
}
