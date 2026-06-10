"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of insurance claims do you handle?",
    answer: "We handle all types of insurance claims including Health Insurance, Life Insurance, Term Life, Motor/Car Insurance, Property Insurance, and Corporate/Business Insurance."
  },
  {
    question: "How long does it take to resolve a rejected claim?",
    answer: "The resolution time depends on the complexity of the case and the insurance company. However, most of our cases are resolved within 30 to 45 days."
  },
  {
    question: "Do I have to pay upfront fees?",
    answer: "We offer a free initial consultation. Depending on your case, we may work on a fixed fee model or a success-fee model where you only pay a percentage if we successfully recover your claim amount."
  },
  {
    question: "Can you help if my claim was rejected 2 years ago?",
    answer: "Yes, you can file a complaint against an insurance rejection within 3 years from the date of rejection. Contact us immediately so we can evaluate your documents."
  },
  {
    question: "What is the ₹99 Policy Review service?",
    answer: "Our experts will review your entire policy document (up to 50 pages) and provide a simplified summary of what is covered, what is excluded, and identify any hidden clauses that could cause future rejections."
  },
  {
    question: "Are you affiliated with any insurance companies?",
    answer: "No, we are a completely independent platform. We work exclusively on behalf of the policyholder to ensure you get the settlement you deserve."
  }
];

import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-600">
              Everything you need to know about our services and the claim resolution process.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all hover:border-blue-300 shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-slate-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
