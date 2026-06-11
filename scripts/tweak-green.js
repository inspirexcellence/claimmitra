const fs = require('fs');

// 1. Update Testimonials
let testiFile = 'src/components/home/TestimonialsSection.tsx';
let testiContent = fs.readFileSync(testiFile, 'utf8');
testiContent = testiContent.replace(/text-yellow-400/g, 'text-emerald-500'); // make stars green
testiContent = testiContent.replace(/bg-slate-800/g, 'bg-emerald-950/20'); // give cards a green tint
testiContent = testiContent.replace(/border-slate-700/g, 'border-emerald-900/40');
fs.writeFileSync(testiFile, testiContent, 'utf8');
console.log('Updated Testimonials');

// 2. Update Footer link hover
let footerFile = 'src/components/layout/footer.tsx';
let footerContent = fs.readFileSync(footerFile, 'utf8');
footerContent = footerContent.replace(/hover:text-orange-400/g, 'hover:text-emerald-400'); // Green on hover
fs.writeFileSync(footerFile, footerContent, 'utf8');
console.log('Updated Footer');

// 3. Update Navbar active/hover states
let navFile = 'src/components/layout/navbar.tsx';
let navContent = fs.readFileSync(navFile, 'utf8');
// Mobile menu active
navContent = navContent.replace(/text-orange-500 pl-2 border-l-4 border-l-orange-500 bg-orange-50\/50/g, 'text-emerald-600 pl-2 border-l-4 border-l-emerald-500 bg-emerald-50/50');
// Desktop active badge
navContent = navContent.replace(/bg-orange-50 text-orange-600/g, 'bg-emerald-50 text-emerald-600');
// Link hover
navContent = navContent.replace(/hover:text-orange-500 hover:bg-slate-50/g, 'hover:text-emerald-600 hover:bg-emerald-50/50');
navContent = navContent.replace(/hover:text-orange-500/g, 'hover:text-emerald-600');
navContent = navContent.replace(/hover:text-orange-600/g, 'hover:text-emerald-600');
fs.writeFileSync(navFile, navContent, 'utf8');
console.log('Updated Navbar');

