const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      callback(path.join(dirPath));
    }
  });
}

const mappings = {
  'bg-slate-900': 'bg-neutral-900',
  'bg-slate-950': 'bg-neutral-950',
  'border-slate-800': 'border-neutral-800',
  'border-slate-900': 'border-neutral-900',
  'bg-[#0f172a]': 'bg-neutral-950', // dark top bar
  'bg-[#0B1A2C]': 'bg-neutral-950', // dark stats
  
  // Replace leftover indigos (bluish purples) with emeralds (green)
  'indigo-100': 'emerald-100',
  'indigo-200': 'emerald-200',
  'indigo-300': 'emerald-300',
  'indigo-400': 'emerald-400',
  'indigo-500': 'emerald-500',
  'indigo-600': 'emerald-600',
  'indigo-700': 'emerald-700',
  'indigo-800': 'emerald-800',
  'indigo-900': 'emerald-900',
  
  // Replace existing green with emerald for consistency
  'green-100': 'emerald-100',
  'green-200': 'emerald-200',
  'green-300': 'emerald-300',
  'green-400': 'emerald-400',
  'green-500': 'emerald-500',
  'green-600': 'emerald-600',
  'green-700': 'emerald-700',
  'green-800': 'emerald-800',
  'green-900': 'emerald-900',
};

let filesChanged = 0;

walkDir('src', function(filePath) {
  let original = fs.readFileSync(filePath, 'utf8');
  let content = original;
  
  for (let [search, replace] of Object.entries(mappings)) {
    content = content.split(search).join(replace);
  }
  
  // Additional targeted replacements
  if (filePath.includes('WhyChooseSection.tsx')) {
    content = content.replace(/CheckCircle2 className="w-6 h-6 text-orange-500"/g, 'CheckCircle2 className="w-6 h-6 text-emerald-500"');
  }
  
  if (filePath.includes('ProcessSection.tsx')) {
    content = content.replace(/bg-slate-50/g, 'bg-orange-50');
  }

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesChanged++;
    console.log('Updated: ' + filePath);
  }
});

console.log('Total files changed: ' + filesChanged);
