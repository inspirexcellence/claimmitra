"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-10 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex mb-6"
            >
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Health & Life Insurance Claim Rejection Support
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              We Help You <span className="text-blue-600">Appeal, Negotiate and Win</span> Your Claim
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Are you tired of fighting with insurance companies over denied or delayed claims? InsurenceSarthi is India's most trusted platform for resolving complex insurance disputes. Our experts handle the paperwork, legalities, and negotiations so you get the money you deserve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                  Request a Claim Review
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full px-8 py-6 text-lg border-2 border-slate-200 hover:bg-slate-100 text-slate-700">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500 font-medium"
            >
              <span className="flex items-center">✓ No Win, No Fee*</span>
              <span className="flex items-center">✓ 95% Success Rate</span>
              <span className="flex items-center">✓ Free Initial Consultation</span>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-16 lg:mt-12"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[2rem] transform rotate-3 scale-105 opacity-10"></div>
            <Image
              src="/images/hero_family.png"
              alt="Happy family outside hospital"
              width={800}
              height={800}
              className="rounded-[2rem] shadow-2xl relative z-10 object-cover aspect-square"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
