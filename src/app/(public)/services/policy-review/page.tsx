"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const reviewSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  policyPdf: z.any().refine((files) => files?.length === 1, "Please upload your policy PDF")
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

export default function PolicyReviewPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormValues) => {
    if (!razorpayLoaded) {
      toast.error("Payment gateway is still loading. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Create order
      const orderRes = await fetch("/api/razorpay/create-order", { method: "POST" });
      const orderData = await orderRes.json();

      if (!orderData.orderId) throw new Error("Failed to create order");

      // 2. Open Razorpay Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "InsuranceSarthi",
        description: "Policy Review Service",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // 3. Verify Payment and Upload PDF
          toast.loading("Verifying payment and uploading document...");
          
          const formData = new FormData();
          formData.append("razorpay_order_id", response.razorpay_order_id);
          formData.append("razorpay_payment_id", response.razorpay_payment_id);
          formData.append("razorpay_signature", response.razorpay_signature);
          formData.append("name", data.name);
          formData.append("phone", data.phone);
          formData.append("email", data.email);
          formData.append("policyPdf", data.policyPdf[0]);

          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            body: formData,
          });

          if (verifyRes.ok) {
            toast.dismiss();
            toast.success("Payment successful! Your policy is under review.");
            reset();
          } else {
            toast.dismiss();
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        theme: {
          color: "#2563eb",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        toast.error(`Payment Failed: ${response.error.description}`);
      });
      rzp.open();

    } catch (error) {
      toast.error("Failed to initiate payment. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js" 
        onLoad={() => setRazorpayLoaded(true)}
      />
      
      <div className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Understand Your Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              For just ₹99, our experts will thoroughly review your policy document, identify hidden exclusions, and provide a simplified summary of your actual coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Form */}
            <Card className="border-slate-200 shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" {...register("name")} className={errors.name ? "border-red-500" : ""} />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message as string}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message as string}</p>}
                  </div>
                    
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="policyPdf">Upload Policy Document (PDF only) *</Label>
                    <Input 
                      id="policyPdf" 
                      type="file" 
                      accept=".pdf"
                      className={`cursor-pointer ${errors.policyPdf ? "border-red-500" : ""}`}
                      {...register("policyPdf")} 
                    />
                    {errors.policyPdf && <p className="text-sm text-red-500">{errors.policyPdf.message as string}</p>}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-semibold text-slate-700">Total Amount to Pay</span>
                      <span className="text-2xl font-bold text-slate-900">₹99</span>
                    </div>
                    <Button type="submit" disabled={isSubmitting || !razorpayLoaded} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6">
                      {isSubmitting ? "Processing..." : "Pay ₹99 & Submit"}
                    </Button>
                    <p className="text-xs text-center text-slate-500 mt-4">Payments are securely processed via Razorpay.</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="space-y-6">
              <Card className="bg-indigo-50 border-emerald-100 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6 text-emerald-800">
                    <Search className="w-8 h-8 mr-3" />
                    <h3 className="font-bold text-2xl">What's Included in the ₹99 Review?</h3>
                  </div>

                  <div className="mb-6 rounded-xl overflow-hidden shadow-sm relative h-48 w-full">
                    <Image
                      src="/images/policy_review.png"
                      alt="Legal expert reviewing policy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <p className="text-slate-700 mb-8 leading-relaxed">
                    Insurance policies are written in complex legal jargon. We translate it into plain English so you know exactly what you're paying for.
                  </p>

                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">Summary of Inclusions & Exclusions</h4>
                        <p className="text-sm text-slate-600">A clear list of what is covered and what is definitely not covered.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">Waiting Period Analysis</h4>
                        <p className="text-sm text-slate-600">Identification of 30-day, 1-year, 2-year, and pre-existing disease waiting periods.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">Co-Pay & Sub-Limit Identification</h4>
                        <p className="text-sm text-slate-600">We highlight room rent capping, ICU capping, and mandatory co-payments.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">Expert Recommendations</h4>
                        <p className="text-sm text-slate-600">Actionable advice on whether you should port your policy or add riders.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
