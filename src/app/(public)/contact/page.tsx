"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast.success("Message sent successfully! Our team will contact you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question about your insurance claim? Our experts are here to help. Send us a message or visit one of our offices.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-slate-200 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" {...register("name")} className={errors.name ? "border-red-500" : ""} />
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 99850 60600" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help you? *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your insurance claim issue..." 
                      className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                      {...register("message")} 
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-slate-200 bg-orange-800 text-white shadow-md border-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-300 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">+91 99850 60600</p>
                      <p className="text-orange-200 text-sm">Mon-Sat, 9am - 7pm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-orange-300 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">support@insurancesarthi.com</p>
                      <p className="text-orange-200 text-sm">Online support 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-300 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Response Time</p>
                      <p className="text-orange-200 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 pl-2">Our Locations</h3>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Hyderabad (Head Office)</h4>
                    <p className="text-slate-600 text-sm">Plot no: 12, Road no: 1, Dharmareddy colony, Near JNTU metro station, Vasanth Nagar, Kukatpally, Hyderabad - 500 085.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Delhi</h4>
                    <p className="text-slate-600 text-sm">MYDESK CO-WORKING SPACE 311-315, 3RD FLOOR, B BLOCK, NAURANG HOUSE, 21, KG MARG, DELHI-110001.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Mumbai</h4>
                    <p className="text-slate-600 text-sm">#27, 7th Floor, Mumbai Coworks, Times Square, Next to Sai Service W. Exp Highway, Andheri East, Mumbai-400069</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
