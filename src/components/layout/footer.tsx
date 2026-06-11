import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 pr-4">
            <h3 className="text-2xl font-black mb-6 flex items-center tracking-tight">
              <span className="text-orange-500">Insurence</span>
              <span className="text-white">Sarthi</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed pr-2">
              We help you appeal & negotiate with insurers. Turning Insurance Challenges into Triumphs: From Denied Claims to Approved Success.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+919985060600" className="flex items-center text-gray-400 hover:text-white transition group whitespace-nowrap">
                <Phone className="w-4 h-4 mr-3 text-orange-500 group-hover:text-orange-400 shrink-0" />
                +91 99850 60600
              </a>
              <a href="mailto:support@insurencesarthi.com" className="flex items-center text-gray-400 hover:text-white transition group whitespace-nowrap">
                <Mail className="w-4 h-4 mr-3 text-orange-500 group-hover:text-orange-400 shrink-0" />
                support@insurencesarthi.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition">Services</Link></li>
              <li><Link href="/faq" className="hover:text-orange-400 transition">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
              <li className="pt-2"><Link href="/login" className="text-orange-400 hover:text-white transition font-semibold">Login / Dashboard</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base mb-5 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/mis-selling" className="text-slate-400 hover:text-white transition-colors">Mis-selling of Policy</Link></li>
              <li><Link href="/services/refile-claim" className="text-slate-400 hover:text-white transition-colors">Claim Rejection</Link></li>
              <li><Link href="/services/delay-in-claim" className="text-slate-400 hover:text-white transition-colors">Delay in Process</Link></li>
              <li><Link href="/services/short-settled" className="text-slate-400 hover:text-white transition-colors">Claim Short-settled</Link></li>
              <li><Link href="/services/health-reimbursement" className="text-slate-400 hover:text-white transition-colors">Health Reimbursement</Link></li>
              <li><Link href="/services/policy-review" className="text-slate-400 hover:text-white transition-colors">Know Your Policy (₹99)</Link></li>
            </ul>
          </div>

          {/* Insights & Legal */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base mb-5 text-white">Insights</h3>
            <ul className="space-y-3 mb-8 text-sm">
              <li><Link href="/testimonials" className="text-slate-400 hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/media-coverage" className="text-slate-400 hover:text-white transition-colors">Media Coverage</Link></li>
              <li><Link href="/awards" className="text-slate-400 hover:text-white transition-colors">Awards & Recognition</Link></li>
              <li><Link href="/career" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
            
            <h3 className="font-semibold text-base mb-5 text-white">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacy-policy" className="hover:text-orange-400 transition text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition text-sm">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-orange-400 transition text-sm">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-base mb-5">Our Locations</h4>
            <div className="space-y-5">
              <div>
                <h5 className="text-white text-sm font-medium mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-orange-500"/> Hyderabad (HQ)</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Plot no: 12, Road no: 1, Dharmareddy colony, Near JNTU metro, Hyderabad.
                </p>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-orange-500"/> Delhi</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  311-315, 3rd Floor, Naurang House, KG Marg, Delhi-110001.
                </p>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-orange-500"/> Mumbai</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  #27, 7th Floor, Mumbai Coworks, Next to Sai Service, Andheri East.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} InsurenceSarthi. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-sm">Empowering policyholders across India.</p>
        </div>
      </div>
    </footer>
  );
}
