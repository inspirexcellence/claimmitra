"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: { from: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const easedProgress = easeOutQuart(percentage);
      const currentCount = Math.floor(from + (to - from) * easedProgress);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
}

import { CheckCircle2, Wallet, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { label: "Claims Resolved", to: 15000, suffix: "+", icon: CheckCircle2 },
  { label: "Money Recovered", to: 120, prefix: "₹", suffix: " Cr+", icon: Wallet },
  { label: "Success Rate", to: 95, suffix: "%", icon: TrendingUp },
  { label: "Cities Covered", to: 400, suffix: "+", icon: MapPin },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-[#0B1A2C] to-orange-900 rounded-[2.5rem] shadow-2xl p-8 lg:p-14 overflow-hidden relative">
          
          {/* Dynamic background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center relative z-10">
            {stats.map((stat, i) => (
              <StaggerItem key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group">
                
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-orange-500/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </div>
                
                <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-white tracking-tight drop-shadow-sm">
                  <Counter from={0} to={stat.to} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                
                <p className="text-orange-200/80 font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
                
              </StaggerItem>
            ))}
          </StaggerContainer>
          
        </div>
      </div>
    </section>
  );
}
