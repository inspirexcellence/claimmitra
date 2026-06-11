import { Metadata } from "next";
import { Newspaper, Tv, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Media Coverage | InsurenceSarthi",
  description: "See where InsurenceSarthi has been featured in the news, including Shark Tank India, Mint, Economic Times, and more.",
};

const pressReleases = [
  {
    title: "InsurenceSarthi pitches on Shark Tank India and secures funding",
    source: "Shark Tank India (Sony Entertainment)",
    date: "March 2025",
    type: "tv"
  },
  {
    title: "How this startup is helping Indians fight insurance frauds",
    source: "The Economic Times",
    date: "January 2025",
    type: "print"
  },
  {
    title: "InsurenceSarthi resolves over ₹50 Crores in rejected health claims",
    source: "LiveMint",
    date: "December 2024",
    type: "print"
  },
  {
    title: "The dark reality of Mis-selling in the Indian Insurance Sector",
    source: "CNBC TV18",
    date: "October 2024",
    type: "tv"
  }
];

export default function MediaCoveragePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              In The News
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Our mission to bring transparency and justice to the Indian insurance sector has caught the attention of major news outlets and television networks.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((press, i) => (
              <StaggerItem key={i} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full ${press.type === 'tv' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                    {press.type === 'tv' ? <Tv className="w-5 h-5" /> : <Newspaper className="w-5 h-5" />}
                  </div>
                  <span className="font-semibold text-slate-500">{press.source}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {press.title}
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-slate-500 text-sm">{press.date}</span>
                  <span className="text-blue-600 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
