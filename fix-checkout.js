const fs = require('fs');

let content = fs.readFileSync('src/app/checkout/page.tsx', 'utf8');

content = content.replace(
  '<input type="email" placeholder="custodian@atelier.com" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />',
  '<input type="email" placeholder="custodian@atelier.com" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" value={customerInfo.email} onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})} />'
);

content = content.replace(
  '<input type="tel" placeholder="+1 (000) 000-0000" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />',
  '<input type="tel" placeholder="+1 (000) 000-0000" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" value={customerInfo.phone} onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})} />'
);

content = content.replace(
  '<input type="text" placeholder="Artifact Receipt Address" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />',
  '<input type="text" placeholder="Artifact Receipt Address" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" value={customerInfo.address} onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})} />'
);

content = content.replace(
  '<input type="text" placeholder="Suite / Atelier" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />',
  '<input type="text" placeholder="Suite / Atelier" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" value={customerInfo.suite} onChange={(e) => setCustomerInfo({...customerInfo, suite: e.target.value})} />'
);

content = content.replace(
  '<input type="text" placeholder="Postal Protocol" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />',
  '<input type="text" placeholder="Postal Protocol" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" value={customerInfo.postal} onChange={(e) => setCustomerInfo({...customerInfo, postal: e.target.value})} />'
);

fs.writeFileSync('src/app/checkout/page.tsx', content);
console.log('Fixed checkout inputs');
