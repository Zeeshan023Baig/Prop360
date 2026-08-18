import React from 'react';
import { Sparkles, TrendingUp, ShieldAlert, BellRing, Coins } from 'lucide-react';

const features = [
  { text: "AI Price Insights", icon: TrendingUp },
  { text: "Tenant Screening", icon: ShieldAlert },
  { text: "Smart Maintenance Alerts", icon: BellRing },
  { text: "Automated Rent Collection", icon: Coins }
];

const AIBanner = () => {
  return (
    <section className="bg-gradient-to-r from-primary-dark via-[#1e40af] to-primary-blue py-10 mt-12 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0 flex items-center space-x-3">
             <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-yellow-300" />
             </div>
             <div>
               <h3 className="text-xl font-bold">Prop360 AI Manager</h3>
               <p className="text-blue-100 text-sm">Your property, intelligently managed.</p>
             </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  <Icon className="w-4 h-4 text-blue-200" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBanner;
