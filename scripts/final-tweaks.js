const fs = require('fs');

// 1. Update Testimonials
let testiFile = 'src/components/home/TestimonialsSection.tsx';
let testiContent = fs.readFileSync(testiFile, 'utf8');
testiContent = testiContent.replace(/bg-emerald-950\/20/g, 'bg-white/5');
testiContent = testiContent.replace(/border-emerald-900\/40/g, 'border-white/10');
fs.writeFileSync(testiFile, testiContent, 'utf8');
console.log('Updated Testimonials');

// 2. Update Navbar
let navFile = 'src/components/layout/navbar.tsx';
let navContent = fs.readFileSync(navFile, 'utf8');

// Replace login button on desktop
navContent = navContent.replace(
  /className="px-3 py-1\.5 text-\[13px\] font-bold text-slate-700 border-2 border-slate-200 rounded-full hover:border-orange-500 hover:text-emerald-600 transition-all flex items-center whitespace-nowrap"/g,
  'className="px-5 py-1.5 text-[13px] font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-all flex items-center whitespace-nowrap border-0 shadow-sm"'
);

// Replace login button on mobile
navContent = navContent.replace(
  /<Button variant="outline" className="w-full text-orange-500 border-orange-200 hover:bg-orange-50 py-4 text-sm">/g,
  '<Button className="w-full text-white bg-emerald-500 hover:bg-emerald-600 py-4 text-sm border-0">'
);

// Remove the muddy background pill for active links on desktop
navContent = navContent.replace(
  /"bg-emerald-50 text-emerald-600"/g,
  '"text-emerald-600"'
);

// Clean up mobile active state as well
navContent = navContent.replace(
  /"text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50\/50 rounded-r-md"/g,
  '"text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/30 rounded-r-md"'
);

fs.writeFileSync(navFile, navContent, 'utf8');
console.log('Updated Navbar');
