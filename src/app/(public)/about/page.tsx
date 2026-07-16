import type { Metadata } from "next";
import { Users, Award, ShieldCheck, Target, Eye, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Insurance Sahyog",
  description: "Learn about Insurance Sahyog, making the insurance claims process simpler, more transparent, and easier to navigate.",
};

const leaders = [
  { name: "Vinaya Kumar N", title: "MD & CEO", initial: "V", color: "bg-orange-500" },
  { name: "Sankaraiah Ch", title: "Director", initial: "S", color: "bg-emerald-600" },
  { name: "Santosh Choubey", title: "Director", initial: "S", color: "bg-teal-600" },
  { name: "Prakash P S S", title: "Director & COO", initial: "P", color: "bg-sky-600" },
];

export default function AboutPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-slate-100 mb-16 text-center">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 border border-emerald-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-600" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">About Insurance Sahyog</h1>
          
          <div className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto space-y-6 leading-relaxed text-left md:text-center">
            <p className="font-semibold text-slate-800 text-xl md:text-2xl">
              Insurance Sahyog was founded on a simple belief: every policyholder deserves clear guidance when navigating an insurance claim.
            </p>
            <p>
              An insurance claim often comes at a difficult time. The process can quickly become overwhelming, from understanding complex policy terms to preparing the right documentation. Even a small mistake can lead to delays, confusion, or uncertainty.
            </p>
            <p className="font-medium text-slate-800">
              That’s where Insurance Sahyog comes in.
            </p>
            <p>
              Our role goes beyond assisting with paperwork. We help our clients understand the process, make informed decisions, and navigate their claims with confidence.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="italic text-emerald-800 font-semibold">
                Because an insurance claim is more than just a process. It is about ensuring that, during a difficult time, you have the right guidance and support by your side.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 shrink-0">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To make the insurance claims process simpler, more transparent, and easier to navigate by providing expert guidance, practical support, and honest advice to every policyholder.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 shrink-0">
              <Eye className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To become a trusted name in insurance claim support by helping policyholders make informed decisions and navigate every stage of the claims process with confidence.
            </p>
          </div>
        </div>

        {/* Core Values (What We Stand For) */}
        <div className="bg-emerald-950 text-white rounded-3xl p-10 md:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-emerald-900/20 pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What We Stand For</h2>
            <p className="text-orange-300 font-semibold tracking-widest uppercase text-sm">Core Values</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/15 h-full flex flex-col">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Clarity</h3>
              <p className="text-emerald-100/90 leading-relaxed">
                We believe insurance should be understood, not feared. Every step of the claims process should be explained in simple, easy-to-understand language.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/15 h-full flex flex-col">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-lg">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Transparency</h3>
              <p className="text-emerald-100/90 leading-relaxed">
                We believe in honest conversations, realistic expectations, and keeping our clients informed throughout their claims journey.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/15 h-full flex flex-col">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Care</h3>
              <p className="text-emerald-100/90 leading-relaxed">
                Every claim represents someone's health, family, business, or future. That's why we approach every case with empathy, patience, and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-24 h-24 mx-auto rounded-full ${leader.color} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-inner`}>
                  {leader.initial}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-orange-500 font-medium mt-1">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
