"use client";

import { useState, useTransition, Suspense } from "react";
import { submitClaim } from "@/app/actions/claims";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { Loader2, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

function SubmitClaimForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "general";
  
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("type", initialType);

    startTransition(async () => {
      const result = await submitClaim(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        toast.error(result.error);
      }
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Submitted Successfully!</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          Thank you for reaching out. Our insurance experts are reviewing your details and will contact you shortly to begin the resolution process.
        </p>
        <a href="/dashboard" className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
          Go to Dashboard <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6 flex gap-4">
        <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
        <div>
          <h3 className="font-semibold text-blue-900">Secure Submission</h3>
          <p className="text-sm text-blue-700 mt-1">Your data is fully encrypted. We will never share your personal information with third parties without your consent.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
          <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all" placeholder="John Doe" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all" placeholder="john@example.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
          <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all" placeholder="+91 98765 43210" />
        </div>

        {initialType !== 'policy-review' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Company</label>
              <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all" placeholder="e.g. HDFC Ergo" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Policy Number</label>
              <input type="text" name="policyNumber" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all" placeholder="Enter your policy number" />
            </div>
          </>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Please describe your issue in detail *</label>
        <textarea name="details" required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 focus:bg-white transition-all resize-none" placeholder="Provide as much detail as possible about your claim or policy issue..."></textarea>
      </div>

      <div className="pt-4">
        <button type="submit" disabled={isPending} className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] hover:-translate-y-0.5">
          {isPending ? (
            <><Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" /> Submitting securely...</>
          ) : (
            <><ShieldCheck className="-ml-1 mr-3 h-5 w-5" /> Submit Request</>
          )}
        </button>
      </div>
    </form>
  );
}

export default function SubmitClaimPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Start Your Claim Process</h1>
          <p className="text-lg text-slate-600">Please provide your details below. Our experts will analyze your case and get back to you with the next steps.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10">
          <Suspense fallback={<div className="flex justify-center p-12"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>}>
            <SubmitClaimForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
