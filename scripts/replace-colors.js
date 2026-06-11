const fs = require('fs');

const files = [
  'src/components/layout/navbar.tsx',
  'src/components/layout/footer.tsx',
  'src/components/home/hero.tsx',
  'src/components/home/CtaSection.tsx',
  'src/components/home/FaqSection.tsx',
  'src/components/home/ProcessSection.tsx',
  'src/components/home/ServicesSection.tsx',
  'src/components/home/StatsSection.tsx',
  'src/components/home/WhyChooseSection.tsx'
];

const mappings = {
  'blue-50': 'orange-50',
  'blue-100': 'orange-100',
  'blue-200': 'orange-200',
  'blue-300': 'orange-300',
  'blue-400': 'orange-400',
  'blue-500': 'orange-500',
  'blue-600': 'orange-500',
  'blue-700': 'orange-600',
  'blue-800': 'orange-700',
  'blue-900': 'orange-800',
  'blue-950': 'orange-900',
  'rgba(37,99,235,': 'rgba(249,115,22,'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace rgba first
  content = content.replace(/rgba\(37,99,235,/g, mappings['rgba(37,99,235,']);

  // Replace colors
  // Sort keys by length descending to avoid partial matches
  const keys = Object.keys(mappings).filter(k => k.startsWith('blue-')).sort((a, b) => b.length - a.length);
  
  keys.forEach(key => {
    const regex = new RegExp(key + '(?![0-9])', 'g');
    content = content.replace(regex, mappings[key]);
  });
  
  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
