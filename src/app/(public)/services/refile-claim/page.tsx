"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ShieldAlert, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const refileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  policyNumber: z.string().optional(),
  reason: z.string().min(10, "Please provide the reason for rejection"),
  documents: z.any().refine((files) => files?.length > 0, "Please upload the rejection letter")
});

type RefileFormValues = z.infer<typeof refileSchema>;

export default function RefileClaimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RefileFormValues>({
    resolver: zodResolver(refileSchema),
  });

  const onSubmit = async (data: RefileFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      if (data.policyNumber) formData.append("policyNumber", data.policyNumber);
      formData.append("reason", data.reason);
      
      if (data.documents) {
        for (let i = 0; i < data.documents.length; i++) {
          formData.append("documents", data.documents[i]);
        }
      }

      const response = await fetch("/api/rejected-claims", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast.success("Rejected claim submitted! Our legal experts will review it immediately.");
      reset();
    } catch (error) {
      toast.error("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Refile a Rejected Claim</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't accept a wrongful denial. Upload your rejection letter below and let our legal experts challenge the insurance company on your behalf.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200 shadow-sm border-t-4 border-t-red-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policyNumber">Policy Number (Optional)</Label>
                      <Input id="policyNumber" placeholder="Enter policy number" {...register("policyNumber")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">What was the reason for rejection? *</Label>
                    <Textarea 
                      id="reason" 
                      placeholder="E.g., They said it was a pre-existing disease, or non-disclosure of facts..." 
                      className={`min-h-[120px] ${errors.reason ? "border-red-500" : ""}`}
                      {...register("reason")} 
                    />
                    {errors.reason && <p className="text-sm text-red-500">{errors.reason.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Rejection Letter & Documents *</Label>
                    <Input 
                      id="documents" 
                      type="file" 
                      multiple 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`cursor-pointer ${errors.documents ? "border-red-500" : ""}`}
                      {...register("documents")} 
                    />
                    <p className="text-xs text-slate-500 mt-1">Please upload the official denial email/letter from the TPA.</p>
                    {errors.documents && <p className="text-sm text-red-500">{errors.documents.message as string}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 mt-4">
                    {isSubmitting ? "Submitting Case..." : "Challenge the Rejection"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 text-red-800">
                  <ShieldAlert className="w-6 h-6 mr-2" />
                  <h3 className="font-bold text-lg">Common Rejection Reasons We Overturn</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">Non-disclosure of Pre-existing Diseases (PED)</p>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">Hospitalization deemed "not necessary"</p>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">Delay in intimating the claim to TPA</p>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">Signature mismatch or paperwork errors</p>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">Active waiting period clause misinterpretations</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-slate-900 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">No Win, No Fee!</h3>
                <p className="text-slate-300 text-sm mb-4">We believe in our experts. For most rejection cases, we only charge a success fee if we recover your money.</p>
                <p className="font-bold text-blue-400">95% Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
