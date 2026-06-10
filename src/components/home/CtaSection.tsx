import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Resolve Your Insurance Claim?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Don't let insurance companies wear you down. Get our experts on your side and claim what is rightfully yours.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-100 hover:text-blue-800 rounded-full px-10 py-6 text-lg font-bold shadow-lg">
            Get Free Claim Evaluation
          </Button>
        </Link>
        <p className="mt-6 text-sm text-blue-200">
          No commitment required. 100% confidential.
        </p>
      </div>
    </section>
  );
}
