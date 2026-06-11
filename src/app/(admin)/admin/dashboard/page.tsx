"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ShieldAlert, Search, CreditCard, FileText, Mail } from "lucide-react";

const stats = [
  { title: "Total Claims", value: "0", icon: Shield, color: "text-orange-500", bg: "bg-orange-100" },
  { title: "Rejected Claims", value: "0", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-100" },
  { title: "Policy Reviews", value: "0", icon: Search, color: "text-indigo-600", bg: "bg-indigo-100" },
  { title: "Total Payments", value: "₹0", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-100" },
  { title: "Published Blogs", value: "0", icon: FileText, color: "text-purple-600", bg: "bg-purple-100" },
  { title: "Contact Requests", value: "0", icon: Mail, color: "text-sky-600", bg: "bg-sky-100" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of your platform's performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-center">
                <div className={`${stat.bg} w-16 h-16 rounded-xl flex items-center justify-center mr-6`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
