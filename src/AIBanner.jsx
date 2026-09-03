import React from 'react';
import { TrendingUp, ShieldCheck, BellRing, CalendarCheck, Shield, Heart, Cpu, Home } from 'lucide-react';

const features = [
  { 
    title: "AI Price Insights", 
    desc: "Know the right price, always.",
    icon: TrendingUp 
  },
  { 
    title: "Tenant Screening", 
    desc: "AI verifies tenants for safe leasing.",
    icon: ShieldCheck 
  },
  { 
    title: "Smart Maintenance Alerts", 
    desc: "Never miss a maintenance again.",
    icon: BellRing 
  },
  { 
    title: "Automated Rent Collection", 
    desc: "On-time rent. Every time.",
    icon: CalendarCheck 
  }
];

const AIBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 mb-20 md:mb-12">
      <div className="bg-[#0b1b42] rounded-[2rem] overflow-hidden shadow-2xl relative border border-blue-900/50">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row relative z-10 p-8 lg:p-10">
          
          {/* Left Hero Area */}
          <div className="flex flex-col md:flex-row items-center lg:w-2/5 mb-8 lg:mb-0 lg:pr-8 lg:border-r border-blue-800/50">
            {/* Visual AI Icon Composition */}
            <div className="relative w-32 h-32 shrink-0 mb-6 md:mb-0 md:mr-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-24 h-24 rounded-2xl shadow-xl shadow-blue-900/50 flex items-center justify-center relative z-10 border border-blue-400/30">
                 <Cpu className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg border border-white/20 z-20">
                <Home className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-black italic tracking-tight text-[#d4ff00] uppercase mb-1 drop-shadow-md">
                AI Powered
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold text-white uppercase tracking-wider mb-3">
                Property Management
              </h3>
              <p className="text-blue-200 text-sm font-medium leading-relaxed">
                Smart insights. Better decisions.<br className="hidden md:block"/> Higher value.
              </p>
              <div className="flex justify-center md:justify-start space-x-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]"></span>
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]/60"></span>
                <span className="w-2 h-2 rounded-full bg-[#d4ff00]/30"></span>
              </div>
            </div>
          </div>
          
          {/* Right Features Area */}
          <div className="lg:w-3/5 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="mb-3 relative">
                      <Icon className="w-8 h-8 text-[#d4ff00] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      {/* Decorative dot for alert icons */}
                      {(index === 2 || index === 3) && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0b1b42]"></span>
                      )}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5 leading-tight">{feature.title}</h4>
                    <p className="text-blue-300 text-xs leading-snug">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom White Banner */}
        <div className="bg-white mx-4 mb-4 mt-2 rounded-xl p-3 sm:px-6 flex flex-col md:flex-row items-center justify-between shadow-lg relative z-10 text-xs sm:text-sm font-medium text-slate-700">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Shield className="w-4 h-4 text-success-green" />
            <span>Complete care from finding your dream property to managing it for a lifetime.</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-slate-300 mx-4"></div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-success-green" />
            <span>Trust. Transparency. Professional care. Always.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIBanner;
