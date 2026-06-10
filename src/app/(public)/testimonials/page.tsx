import { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | ClaimMitra",
  description: "Read real stories from customers who successfully resolved their insurance claims, recovered their money, and found justice with ClaimMitra.",
};

const reviews = [
  {
    name: "Ravi Sharma",
    type: "Health Claim",
    rating: 5,
    text: "My health insurance claim of ₹4.5 Lakhs was rejected citing 'non-disclosure of PED'. ClaimMitra's team took my case, gathered medical certificates from my doctor, and fought with the ombudsman. We won! I got my money with interest.",
  },
  {
    name: "Anjali Gupta",
    type: "Mis-selling",
    rating: 5,
    text: "I was sold a life insurance policy under the false promise of getting an interest-free loan. When I realized the fraud, the bank washed its hands off it. ClaimMitra got my entire ₹1 Lakh premium refunded within 45 days.",
  },
  {
    name: "Vikram Reddy",
    type: "Motor Claim Delay",
    rating: 5,
    text: "My car was in the garage for 3 months because the insurance surveyor kept delaying the approval. One legal notice drafted by ClaimMitra and the insurance company cleared the bill in 4 days. Highly recommended!",
  },
  {
    name: "Pooja Desai",
    type: "Short-Settled Claim",
    rating: 4,
    text: "I was charged ₹80,000 extra by the hospital for PPE kits and consumables, which my TPA refused to pay. ClaimMitra audited the bill and forced the TPA to reimburse ₹50,000 back to me under IRDAI guidelines.",
  },
  {
    name: "Suresh Menon",
    type: "Life Insurance Claim",
    rating: 5,
    text: "After my father's demise, the insurance company rejected the death claim. It was a very dark time for us. ClaimMitra handled everything with empathy and extreme professionalism. They secured the ₹50 Lakh claim for us.",
  },
  {
    name: "Meera Iyer",
    type: "Travel Insurance",
    rating: 5,
    text: "My baggage was lost in transit and the insurance company offered a measly ₹5000 as compensation. ClaimMitra helped me claim the actual value of my lost items up to the sub-limit of $1000.",
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SlideUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Real Stories, Real Results.
            </h1>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              We measure our success by the money we put back into the hands of wronged policyholders. Here is what our clients have to say about us.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <StaggerItem key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative h-full flex flex-col">
                <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-6 z-0" />
                <div className="flex text-yellow-400 mb-4 relative z-10">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10">
                  "{review.text}"
                </p>
                <div className="border-t border-slate-100 pt-4 mt-auto relative z-10">
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <span className="text-sm text-blue-600 font-medium">{review.type}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
