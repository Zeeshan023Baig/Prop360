import React from 'react';
import { Home, Paintbrush, Briefcase, Key, Globe, FileText, Wrench, Wallet, ArrowRight } from 'lucide-react';

const services = [
  { id: 1, title: 'New Projects', subtitle: 'Explore latest developments', icon: Home, color: 'bg-blue-50 text-blue-600' },
  { id: 2, title: 'Home Interiors', subtitle: 'Design your dream space', icon: Paintbrush, color: 'bg-purple-50 text-purple-600' },
  { id: 3, title: 'Buy / Sell Assistance', subtitle: 'Expert guidance', icon: Briefcase, color: 'bg-green-50 text-green-600' },
  { id: 4, title: 'Property Management', subtitle: 'End-to-end care', icon: Key, color: 'bg-orange-50 text-orange-600' },
  { id: 5, title: 'NRI Property Care', subtitle: 'Manage from anywhere', icon: Globe, color: 'bg-teal-50 text-teal-600' },
  { id: 6, title: 'Legal & Documentation', subtitle: 'Hassle-free process', icon: FileText, color: 'bg-rose-50 text-rose-600' },
  { id: 7, title: 'Home Maintenance', subtitle: 'Reliable repair services', icon: Wrench, color: 'bg-amber-50 text-amber-600' },
  { id: 8, title: 'Home Finance', subtitle: 'Best loan offers', icon: Wallet, color: 'bg-indigo-50 text-indigo-600' },
];

const HomeServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Home Services</h2>
          <p className="text-slate-500 mt-1 text-sm md:text-base">Everything you need for your property</p>
        </div>
        <a href="#" className="text-primary-blue font-semibold flex items-center hover:text-primary-dark transition-colors group text-sm md:text-base">
          See All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-primary-blue/30 transition-all duration-200 group cursor-pointer flex flex-col h-full relative overflow-hidden">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">{service.title}</h3>
              <p className="text-xs text-slate-500">{service.subtitle}</p>
              
              <div className="mt-auto pt-4 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
