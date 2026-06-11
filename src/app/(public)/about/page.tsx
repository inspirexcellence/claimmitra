import type { Metadata } from "next";
import { Users, Award, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | InsurenceSarthi",
  description: "Learn about InsurenceSarthi, India's most trusted insurance claim resolution platform.",
};

const leaders = [
  { name: "Vinaya Kumar N", title: "MD & CEO", initial: "V", color: "bg-blue-600" },
  { name: "Sankaraiah Ch", title: "Director", initial: "S", color: "bg-indigo-600" },
  { name: "Santosh Choubey", title: "Director", initial: "S", color: "bg-teal-600" },
  { name: "Prakash P S S", title: "Director & COO", initial: "P", color: "bg-sky-600" },
];

export default function AboutPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About InsurenceSarthi</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of former insurance professionals, legal experts, and doctors dedicated to fighting for policyholders' rights. Our mission is to ensure every legitimate insurance claim gets paid.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower policyholders by providing expert assistance in resolving delayed, disputed, and denied insurance claims, ensuring justice and financial security.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To become India's most trusted and transparent platform for insurance claim resolution, creating an ecosystem where no legitimate claim goes unpaid.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-24 h-24 mx-auto rounded-full ${leader.color} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-inner`}>
                  {leader.initial}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-blue-600 font-medium mt-1">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-slate-400 text-sm">We operate with complete transparency and honesty in every case.</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-First</h3>
              <p className="text-slate-400 text-sm">Your financial recovery and peace of mind are our absolute priorities.</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-slate-400 text-sm">We leverage deep industry expertise to deliver the highest success rates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
