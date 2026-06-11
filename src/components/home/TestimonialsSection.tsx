"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const testimonials = [
  {
    quote: "My father's ₹8 Lakh health insurance claim was rejected citing 'pre-existing disease'. InsurenceSarthi's experts stepped in, proved the rejection was invalid using medical records, and got the full amount approved in 40 days.",
    name: "Rajesh Sharma",
    title: "Mumbai, Maharashtra"
  },
  {
    quote: "I was struggling for 6 months to get my car insurance claim settled after a major accident. The insurer kept delaying. Within 2 weeks of hiring InsurenceSarthi, the settlement amount was credited to my account.",
    name: "Priya Desai",
    title: "Pune, Maharashtra"
  },
  {
    quote: "After my husband passed away, his life insurance company denied the claim due to a minor signature mismatch. I was completely lost. InsurenceSarthi handled the entire legal battle and won the ₹50 Lakh claim for my family.",
    name: "Sunita Reddy",
    title: "Hyderabad, Telangana"
  },
  {
    quote: "The 'Understand My Policy' service is brilliant. For just ₹99, they found two major gaps in my health policy that would have caused rejections later. Highly recommended before you renew!",
    name: "Anand Iyer",
    title: "Chennai, Tamil Nadu"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real stories from people who successfully fought their insurance rejections with our help.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="bg-emerald-950/20 border-emerald-900/40 h-full hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-emerald-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-slate-400">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
