"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Shield, ShieldAlert, Search, CreditCard, FileText, LogOut, Menu, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Claims", href: "/admin/claims", icon: Shield },
  { name: "Rejected Claims", href: "/admin/rejected-claims", icon: ShieldAlert },
  { name: "Policy Reviews", href: "/admin/policy-reviews", icon: Search },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="h-20 flex items-center px-6 border-b border-neutral-800 shrink-0">
        <Link href="/admin/dashboard" className="text-xl font-bold flex  items-center tracking-tight" onClick={() => setIsOpen(false)}>
          <span className="text-orange-500">Insurance</span><span className="text-white">Sarthi</span><span className="ml-2 text-slate-400 font-normal text-sm">Admin</span>
        </Link>
      </div>

      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                isActive 
                  ? "bg-orange-500 text-white font-medium shadow-sm" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 mr-3 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="p-3 border-t border-neutral-800 shrink-0 space-y-1">
        <Link
          href="/"
          className="flex items-center w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
        >
          <Globe className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
          Main Website
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center w-full px-3 py-2 text-sm text-slate-300 hover:bg-red-500/10 hover:text-red-400 rounded-md transition-colors"
        >
          <LogOut className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-60 bg-neutral-900 text-white h-screen flex-col flex-shrink-0 fixed left-0 top-0 hidden md:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Header & Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-neutral-900 text-white flex items-center justify-between px-4 z-50 shadow-md">
        <Link href="/admin/dashboard" className="text-lg font-bold flex items-center tracking-tight">
          <span className="text-orange-500">Insurance</span><span className="text-white">Sarthi</span><span className="ml-2 text-slate-400 font-normal text-xs">Admin</span>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="p-2 -mr-2 text-slate-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-neutral-900 border-r-slate-800 p-0 text-white flex flex-col h-full">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
