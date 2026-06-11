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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0f172a] text-slate-300 py-2.5 px-4 sm:px-6 md:px-8 lg:px-8 text-xs font-medium tracking-wide">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-2 sm:mb-0">
            <a href="tel:+919985060600" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-blue-400" />
              +91 99850 60600
            </a>
            <a href="mailto:support@insurencesarthi.com" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-blue-400" />
              support@insurencesarthi.com
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-slate-400">India's Most Trusted Insurance Claim Experts</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl lg:text-3xl font-black flex items-center tracking-tight">
                <span className="text-blue-600">Insurence</span>
                <span className="text-slate-900">Sarthi</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex flex-1 justify-center items-center gap-4 xl:gap-6 px-8">
              
              <Link href="/" className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all whitespace-nowrap", pathname === "/" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group px-1 py-2">
                <button className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all flex items-center gap-1 whitespace-nowrap", pathname.startsWith("/services") ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                  Services <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 flex flex-col gap-1">
                    <Link href="/services/mis-selling" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Mis-selling of Insurance</Link>
                    <Link href="/services/refile-claim" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Claim Rejection</Link>
                    <Link href="/services/delay-in-claim" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Delay In Claim Process</Link>
                    <Link href="/services/short-settled" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Claim Short-settled</Link>
                    <Link href="/services/health-reimbursement" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Health Claim Reimbursement</Link>
                    <Link href="/services/policy-review" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Know Your Policy</Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all whitespace-nowrap", pathname === "/about" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                About
              </Link>

              {/* Insights Dropdown */}
              <div className="relative group px-1 py-2">
                <button className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all flex items-center gap-1 whitespace-nowrap", ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                  Insights <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 flex flex-col gap-1">
                    <Link href="/testimonials" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Customer Reviews</Link>
                    <Link href="/media-coverage" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Media Coverage</Link>
                    <Link href="/awards" className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">Awards & Recognition</Link>
                  </div>
                </div>
              </div>

              <Link href="/blog" className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all whitespace-nowrap", pathname.startsWith("/blog") ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                Blog
              </Link>
              
              <Link href="/career" className={cn("lg:px-2 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold rounded-full transition-all whitespace-nowrap", pathname === "/career" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50")}>
                Career
              </Link>

            </nav>
            
            {/* Desktop Buttons */}
            <div className="hidden xl:flex items-center lg:gap-2 xl:gap-4">
              {session?.user ? (
                <div className="relative group px-1 py-2">
                  <button className="flex items-center gap-2 lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 rounded-full border border-slate-200 hover:border-blue-600 transition-all bg-white shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs uppercase">
                      {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                    </div>
                    <span className="text-[13px] xl:text-[14px] font-bold text-slate-700 max-w-[100px] truncate">
                      {session.user.name?.split(' ')[0] || 'Profile'}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform duration-300 text-slate-500" />
                  </button>
                  
                  <div className="absolute top-full right-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 flex flex-col gap-1">
                      <div className="px-4 py-3 border-b border-slate-100 mb-1">
                        <p className="text-sm font-bold text-slate-800 truncate">{session.user.name}</p>
                        <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                      </div>
                      
                      <Link href={(session.user as any).role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">
                        <LayoutDashboard className="w-4 h-4 mr-3" /> Dashboard
                      </Link>
                      
                      <Link href="/profile" className="flex items-center px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 rounded-xl transition-colors">
                        <UserIcon className="w-4 h-4 mr-3" /> My Profile
                      </Link>
                      
                      <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left w-full">
                        <LogOut className="w-4 h-4 mr-3" /> Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="lg:px-3 xl:px-5 lg:py-1.5 xl:py-2.5 text-[13px] xl:text-[15px] font-bold text-slate-700 border-2 border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all flex items-center whitespace-nowrap">
                  Login
                </Link>
              )}
              <Link href="/contact" className="whitespace-nowrap">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full lg:px-4 xl:px-7 lg:py-4 xl:py-6 text-[13px] xl:text-[15px] font-bold shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                  Request a Claim Review
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="xl:hidden px-5 flex items-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger className="p-2 hover:bg-slate-100 rounded-md">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  {/* Mobile Header Branding */}
                  <div className="flex items-center pb-6 pt-2 border-b border-slate-100">
                    <span className="text-2xl font-black tracking-tight">
                      <span className="text-blue-600">Insurence</span>
                      <span className="text-slate-900">Sarthi</span>
                    </span>
                  </div>

                  <div className="flex flex-col space-y-2 mt-6 overflow-y-auto max-h-[75vh] pb-8 px-2">
                    <Link 
                      href="/" 
                      className={cn("text-lg font-medium py-3 border-b border-slate-100 transition-colors", pathname === "/" ? "text-blue-600 pl-2 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    {/* Services Accordion */}
                    <div className="border-b border-slate-100">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                        className={cn("flex items-center justify-between w-full py-3 text-lg font-medium transition-colors", pathname.startsWith("/services") ? "text-blue-600" : "text-slate-900")}
                      >
                        Services
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", openDropdown === 'services' ? "rotate-180 text-blue-600" : "text-slate-500")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openDropdown === 'services' || pathname.startsWith("/services") ? "max-h-96 opacity-100 mb-3" : "max-h-0 opacity-0")}>
                        <div className="flex flex-col space-y-1 pl-4 border-l-2 border-slate-100 ml-2 py-2">
                          <Link href="/services/mis-selling" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/mis-selling" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Mis-selling of Insurance</Link>
                          <Link href="/services/refile-claim" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/refile-claim" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Claim Rejection</Link>
                          <Link href="/services/delay-in-claim" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/delay-in-claim" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Delay In Claim Process</Link>
                          <Link href="/services/short-settled" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/short-settled" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Claim Short-settled</Link>
                          <Link href="/services/health-reimbursement" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/health-reimbursement" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Health Claim Reimbursement</Link>
                          <Link href="/services/policy-review" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/services/policy-review" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Know Your Policy</Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/about" 
                      className={cn("text-lg font-medium py-3 border-b border-slate-100 transition-colors", pathname === "/about" ? "text-blue-600 pl-2 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Insights Accordion */}
                    <div className="border-b border-slate-100">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === 'insights' ? null : 'insights')}
                        className={cn("flex items-center justify-between w-full py-3 text-lg font-medium transition-colors", ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "text-blue-600" : "text-slate-900")}
                      >
                        Insights
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", openDropdown === 'insights' ? "rotate-180 text-blue-600" : "text-slate-500")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openDropdown === 'insights' || ["/testimonials", "/media-coverage", "/awards"].includes(pathname) ? "max-h-64 opacity-100 mb-3" : "max-h-0 opacity-0")}>
                        <div className="flex flex-col space-y-1 pl-4 border-l-2 border-slate-100 ml-2 py-2">
                          <Link href="/testimonials" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/testimonials" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Customer Reviews</Link>
                          <Link href="/media-coverage" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/media-coverage" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Media Coverage</Link>
                          <Link href="/awards" className={cn("text-base py-2 pl-2 rounded-md", pathname === "/awards" ? "text-blue-700 font-medium bg-blue-50" : "text-slate-600 hover:text-blue-600")} onClick={() => setIsMobileMenuOpen(false)}>Awards & Recognition</Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      href="/blog" 
                      className={cn("text-lg font-medium py-3 border-b border-slate-100 transition-colors", pathname.startsWith("/blog") ? "text-blue-600 pl-2 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/career" 
                      className={cn("text-lg font-medium py-3 border-b border-slate-100 transition-colors", pathname === "/career" ? "text-blue-600 pl-2 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Career
                    </Link>
                    <Link 
                      href="/contact" 
                      className={cn("text-lg font-medium py-3 border-b border-slate-100 transition-colors", pathname === "/contact" ? "text-blue-600 pl-2 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-md" : "text-slate-900")} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    <div className="pt-6 mt-2">
                      {session?.user ? (
                        <div className="border-t border-slate-100 pt-6">
                          <div className="flex items-center gap-3 px-2 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl uppercase">
                              {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                            </div>
                            <div className="overflow-hidden flex-1">
                              <p className="text-base font-bold text-slate-800 truncate">{session.user.name}</p>
                              <p className="text-sm text-slate-500 truncate">{session.user.email}</p>
                            </div>
                          </div>
                          
                          <Link href={(session.user as any).role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center w-full py-3 px-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                            <LayoutDashboard className="w-5 h-5 mr-3 text-slate-400" /> Dashboard
                          </Link>
                          
                          <Link href="/profile" className="flex items-center w-full py-3 px-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                            <UserIcon className="w-5 h-5 mr-3 text-slate-400" /> My Profile
                          </Link>
                          
                          <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center w-full py-3 px-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left mb-6">
                            <LogOut className="w-5 h-5 mr-3" /> Sign Out
                          </button>
                        </div>
                      ) : (
                        <Link href="/login" className="block w-full mb-3" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 py-6 text-base">
                            Login / Dashboard
                          </Button>
                        </Link>
                      )}
                      <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base">
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
