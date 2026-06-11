"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const claimSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Insurance company name is required"),
  policyNumber: z.string().min(2, "Policy number is required"),
  details: z.string().min(10, "Please provide some details about the claim"),
  documents: z.any().refine((files) => files?.length > 0, "At least one document is required")
});

type ClaimFormValues = z.infer<typeof claimSchema>;

export default function FileClaimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClaimFormValues>({
    resolver: zodResolver(claimSchema),
  });

  const onSubmit = async (data: ClaimFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("company", data.company);
      formData.append("policyNumber", data.policyNumber);
      formData.append("details", data.details);
      
      if (data.documents) {
        for (let i = 0; i < data.documents.length; i++) {
          formData.append("documents", data.documents[i]);
        }
      }

      const response = await fetch("/api/claims", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast.success("Claim submitted successfully! Our team will contact you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to submit claim. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">File Your Insurance Claim</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Submit your details below and our experts will ensure your claim is filed flawlessly to avoid any chance of rejection.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200 shadow-sm border-t-4 border-t-orange-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="As per policy document" {...register("name")} className={errors.name ? "border-red-500" : ""} />
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
                      <Label htmlFor="company">Insurance Company *</Label>
                      <Input id="company" placeholder="e.g. Star Health, HDFC Ergo" {...register("company")} className={errors.company ? "border-red-500" : ""} />
                      {errors.company && <p className="text-sm text-red-500">{errors.company.message as string}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Policy Number *</Label>
                    <Input id="policyNumber" placeholder="Enter policy number" {...register("policyNumber")} className={errors.policyNumber ? "border-red-500" : ""} />
                    {errors.policyNumber && <p className="text-sm text-red-500">{errors.policyNumber.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Claim Details / Medical Condition *</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Briefly describe the hospitalization reason or claim incident..." 
                      className={`min-h-[120px] ${errors.details ? "border-red-500" : ""}`}
                      {...register("details")} 
                    />
                    {errors.details && <p className="text-sm text-red-500">{errors.details.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documents">Upload Documents (PDF/Images) *</Label>
                    <Input 
                      id="documents" 
                      type="file" 
                      multiple 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`cursor-pointer ${errors.documents ? "border-red-500" : ""}`}
                      {...register("documents")} 
                    />
                    <p className="text-xs text-slate-500 mt-1">Please upload policy copy, ID proof, and discharge summary if available.</p>
                    {errors.documents && <p className="text-sm text-red-500">{errors.documents.message as string}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 mt-4">
                    {isSubmitting ? "Submitting..." : "Submit Claim for Review"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-orange-50 border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 text-orange-700">
                  <FileText className="w-6 h-6 mr-2" />
                  <h3 className="font-bold text-lg">What happens next?</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-orange-200 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</div>
                    <p className="text-slate-700 text-sm">We securely receive your documents and details.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-200 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</div>
                    <p className="text-slate-700 text-sm">An expert case manager is assigned within 24 hours.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-200 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</div>
                    <p className="text-slate-700 text-sm">We analyze your policy and draft the flawless claim narrative.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-200 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">4</div>
                    <p className="text-slate-700 text-sm">We coordinate directly with the TPA to ensure fast approval.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Required Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Policy Copy / e-Card</li>
                  <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Patient's ID Proof (Aadhar/PAN)</li>
                  <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Discharge Summary (if discharged)</li>
                  <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Final Hospital Bill</li>
                  <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Cancelled Cheque</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
