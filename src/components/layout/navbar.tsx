"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, ChevronDown, User as UserIcon, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ session }: { session?: Session | null }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hideDropdowns, setHideDropdowns] = useState(false);

  const handleDropdownClick = () => {
    setHideDropdowns(true);
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-950 text-slate-300 py-2.5 px-4 sm:px-6 md:px-8 lg:px-8 text-xs font-medium tracking-wide">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-2 sm:mb-0">
            <a href="tel:+919985060600" className="flex items-center hover:text-white transition-colors text-[10px] sm:text-xs">
              <Phone className="w-3.5 h-3.5 mr-2 text-orange-400" />
              +91 99850 60600
            </a>
            <a href="mailto:support@insurancesarthi.com" className="flex items-center hover:text-white transition-colors text-[10px] sm:text-xs">
              <Mail className="w-3.5 h-3.5 mr-2 text-orange-400" />
              support@insurancesarthi.com
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-slate-400">India's Most Trusted Insurance Claim Experts</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl lg:text-3xl font-black flex items-center tracking-tight">
                <span className="text-orange-500">Insurance</span>
                <span className="text-emerald-600">Sarthi</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center gap-4 lg:gap-6 xl:gap-8">
              
              <Link href="/" className={cn("py-2 text-[14px] font-bold transition-all whitespace-nowrap", pathname === "/" ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                Home
              </Link>
              
              <div className="relative group py-2" onMouseEnter={() => setHideDropdowns(false)}>
                <button className={cn("py-2 text-[14px] font-bold transition-all flex items-center gap-1 whitespace-nowrap", pathname.startsWith("/services") ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                  Services <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
                </button>
                <div className={cn("absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 z-50", !hideDropdowns && "group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible")}>
                  <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 flex flex-col gap-1" onClick={handleDropdownClick}>
                    <Link href="/services/mis-selling" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Mis-selling of Insurance</Link>
                    <Link href="/services/refile-claim" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Claim Rejection</Link>
                    <Link href="/services/delay-in-claim" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Delay In Claim Process</Link>
                    <Link href="/services/short-settled" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Claim Short-settled</Link>
                    <Link href="/services/health-reimbursement" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Health Claim Reimbursement</Link>
                    <Link href="/services/policy-review" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Know Your Policy</Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className={cn("py-2 text-[14px] font-bold transition-all whitespace-nowrap", pathname === "/about" ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                About
              </Link>

              <div className="relative group py-2" onMouseEnter={() => setHideDropdowns(false)}>
                <button className={cn("py-2 text-[14px] font-bold transition-all flex items-center gap-1 whitespace-nowrap", ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                  Insights <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
                </button>
                <div className={cn("absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 opacity-0 invisible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 z-50", !hideDropdowns && "group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible")}>
                  <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 flex flex-col gap-1" onClick={handleDropdownClick}>
                    <Link href="/testimonials" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Customer Reviews</Link>
                    <Link href="/media-coverage" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Media Coverage</Link>
                    <Link href="/awards" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">Awards & Recognition</Link>
                  </div>
                </div>
              </div>

              <Link href="/blog" className={cn("py-2 text-[14px] font-bold transition-all whitespace-nowrap", pathname.startsWith("/blog") ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                Blog
              </Link>
              
              <Link href="/career" className={cn("py-2 text-[14px] font-bold transition-all whitespace-nowrap", pathname === "/career" ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600")}>
                Career
              </Link>

            </nav>
            
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              {session?.user ? (
                <div className="relative group px-1 py-2" onMouseEnter={() => setHideDropdowns(false)}>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-orange-500 transition-all bg-white shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs uppercase">
                      {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                    </div>
                    <span className="text-[13px] font-bold text-slate-700 max-w-[80px] truncate">
                      {session.user.name?.split(' ')[0] || 'Profile'}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-300 text-slate-500" />
                  </button>
                  
                  <div className={cn("absolute top-full right-0 pt-2 w-64 opacity-0 invisible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 z-50", !hideDropdowns && "group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible")}>
                    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 flex flex-col gap-1" onClick={handleDropdownClick}>
                      <div className="px-4 py-3 border-b border-slate-100 mb-1">
                        <p className="text-sm font-bold text-slate-800 truncate">{session.user.name}</p>
                        <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                      </div>
                      
                      <Link href={(session.user as any).role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">
                        <LayoutDashboard className="w-4 h-4 mr-3" /> Dashboard
                      </Link>
                      
                      <Link href="/profile" className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors">
                        <UserIcon className="w-4 h-4 mr-3" /> My Profile
                      </Link>
                      
                      <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left w-full">
                        <LogOut className="w-4 h-4 mr-3" /> Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="px-5 py-1.5 text-[13px] font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-600 transition-all flex items-center whitespace-nowrap border-0 shadow-sm">
                  Login
                </Link>
              )}
              <Link href="/contact" className="whitespace-nowrap">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 lg:px-5 py-4 text-[13px] font-bold shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                  Request a Claim Review
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden px-5 flex items-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger className="p-2 hover:bg-slate-100 rounded-md">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  {/* Mobile Header Branding */}
                  <div className="flex items-center pb-3 pt-1 px-4 border-b border-slate-100">
                    <span className="text-xl font-black tracking-tight">
                      <span className="text-orange-500">Insurance</span>
                      <span className="text-emerald-600">Sarthi</span>
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1 mt-3 overflow-y-auto max-h-[85vh] pb-4 px-4">
                    <Link 
                      href="/" 
                      className={cn("text-base font-medium py-2.5 border-b border-slate-100 transition-colors", pathname === "/" ? "text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    {/* Services Accordion */}
                    <div className="border-b border-slate-100">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                        className={cn("flex items-center justify-between w-full py-2.5 text-base font-medium transition-colors", pathname.startsWith("/services") ? "text-orange-500" : "text-slate-900")}
                      >
                        Services
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", openDropdown === 'services' ? "rotate-180 text-orange-500" : "text-slate-500")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openDropdown === 'services' || pathname.startsWith("/services") ? "max-h-96 opacity-100 mb-2" : "max-h-0 opacity-0")}>
                        <div className="flex flex-col space-y-0.5 pl-3 border-l-2 border-slate-100 ml-1 py-1">
                          <Link href="/services/mis-selling" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/mis-selling" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Mis-selling of Insurance</Link>
                          <Link href="/services/refile-claim" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/refile-claim" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Claim Rejection</Link>
                          <Link href="/services/delay-in-claim" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/delay-in-claim" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Delay In Claim Process</Link>
                          <Link href="/services/short-settled" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/short-settled" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Claim Short-settled</Link>
                          <Link href="/services/health-reimbursement" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/health-reimbursement" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Health Claim Reimbursement</Link>
                          <Link href="/services/policy-review" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/services/policy-review" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Know Your Policy</Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/about" 
                      className={cn("text-base font-medium py-2.5 border-b border-slate-100 transition-colors", pathname === "/about" ? "text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Insights Accordion */}
                    <div className="border-b border-slate-100">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === 'insights' ? null : 'insights')}
                        className={cn("flex items-center justify-between w-full py-2.5 text-base font-medium transition-colors", ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "text-orange-500" : "text-slate-900")}
                      >
                        Insights
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", openDropdown === 'insights' ? "rotate-180 text-orange-500" : "text-slate-500")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openDropdown === 'insights' || ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "max-h-64 opacity-100 mb-2" : "max-h-0 opacity-0")}>
                        <div className="flex flex-col space-y-0.5 pl-3 border-l-2 border-slate-100 ml-1 py-1">
                          <Link href="/testimonials" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/testimonials" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Customer Reviews</Link>
                          <Link href="/media-coverage" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/media-coverage" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Media Coverage</Link>
                          <Link href="/awards" className={cn("text-sm py-1.5 pl-2 rounded-md", pathname === "/awards" ? "text-orange-600 font-medium bg-orange-50" : "text-slate-600 hover:text-emerald-600")} onClick={() => setIsMobileMenuOpen(false)}>Awards & Recognition</Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/blog" 
                      className={cn("text-base font-medium py-2.5 border-b border-slate-100 transition-colors", pathname.startsWith("/blog") ? "text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/career" 
                      className={cn("text-base font-medium py-2.5 border-b border-slate-100 transition-colors", pathname === "/career" ? "text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Career
                    </Link>
                    <Link 
                      href="/contact" 
                      className={cn("text-base font-medium py-2.5 border-b border-slate-100 transition-colors", pathname === "/contact" ? "text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    <div className="pt-3 mt-1">
                      {session?.user ? (
                        <div className="border-t border-slate-100 pt-3">
                          <div className="flex items-center gap-3 px-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg uppercase">
                              {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                            </div>
                            <div className="overflow-hidden flex-1">
                              <p className="text-sm font-bold text-slate-800 truncate">{session.user.name}</p>
                              <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                            </div>
                          </div>
                          
                          <Link href={(session.user as any).role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center w-full py-2 px-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                            <LayoutDashboard className="w-4 h-4 mr-3 text-slate-400" /> Dashboard
                          </Link>
                          
                          <Link href="/profile" className="flex items-center w-full py-2 px-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                            <UserIcon className="w-4 h-4 mr-3 text-slate-400" /> My Profile
                          </Link>
                          
                          <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center w-full py-2 px-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left mb-4">
                            <LogOut className="w-4 h-4 mr-3" /> Sign Out
                          </button>
                        </div>
                      ) : (
                        <Link href="/login" className="block w-full mb-2" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button className="w-full text-white bg-emerald-500 hover:bg-emerald-600 py-4 text-sm border-0">
                            Login / Dashboard
                          </Button>
                        </Link>
                      )}
                      <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-sm">
                          Request a Claim Review
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
