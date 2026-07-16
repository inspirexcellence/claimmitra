"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { PhoneCall, FileSearch, Handshake, ClipboardCheck } from "lucide-react";

const stats = [
  { label: "Free Initial Consultation", icon: PhoneCall },
  { label: "Claim & Policy Review", icon: FileSearch },
  { label: "Appeals & Negotiation Support", icon: Handshake },
  { label: "End-to-End Claim Assistance", icon: ClipboardCheck },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-emerald-950 rounded-[2.5rem] shadow-2xl p-8 lg:p-14 overflow-hidden relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-emerald-900/20 pointer-events-none" />
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center relative z-10">
            {stats.map((stat, i) => (
              <StaggerItem key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group h-full">
                
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-orange-500/30 transition-all duration-300 shadow-inner">
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-sm leading-snug">
                  {stat.label}
                </h3>
                
              </StaggerItem>
            ))}
          </StaggerContainer>
          
        </div>
      </div>
    </section>
  );
}
