"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const faqs = [
  {
    question: "Can you guarantee my insurance claim will be approved?",
    answer: "No. The final decision always rests with the insurance company and depends on your policy terms, supporting documents, and the details of your claim. Our role is to help you prepare your claim thoroughly, identify any gaps, and guide you through the process."
  },
  {
    question: "How do I know if my claim can be filed or refiled?",
    answer: "During your initial consultation, we'll review your policy, claim details, and supporting documents to understand your situation. Based on our assessment, we'll advise you on the most appropriate way forward."
  },
  {
    question: "My claim has already been rejected. Is it too late to take action?",
    answer: "Not necessarily. Some rejected claims may still have options available, depending on the reason for rejection and your policy terms. We'll review your case and help you understand the next steps that may be available."
  },
  {
    question: "Do I need a lawyer to file or refile my insurance claim?",
    answer: "Not always. Many claims can be resolved with proper documentation, accurate filing, and the right guidance. If your case requires legal assistance, we'll let you know and guide you accordingly."
  },
  {
    question: "How much does your claim assistance service cost?",
    answer: "The cost depends on the type and complexity of your claim. During your initial consultation, we'll explain the applicable charges clearly before you decide to proceed."
  },
  {
    question: "What if I don't have all the required documents?",
    answer: "That's completely okay. We'll review the documents you already have, identify what's missing, and guide you on how to obtain the remaining documents wherever possible."
  },
  {
    question: "How long does the insurance claim process usually take?",
    answer: "The timeline varies depending on the type of insurance, the complexity of the claim, and the insurer's review process. While we help you prepare and submit your claim efficiently, the final processing time is determined by the insurance company."
  },
  {
    question: "Why should I choose Insurance Sahyog instead of handling the claim myself?",
    answer: "Insurance claims often involve detailed documentation, policy terms, and procedural requirements. We help you understand the process, prepare your claim carefully, and avoid common mistakes—so you can move forward with greater clarity and confidence."
  }
];

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
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all hover:border-orange-300 shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-slate-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`} 
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
