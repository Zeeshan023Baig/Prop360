import React from 'react';
import { Users, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

const metrics = [
  { id: 1, title: 'Verified Tenants & Buyers', value: '1M+', icon: Users },
  { id: 2, title: 'Transparent Process', value: '100%', icon: ShieldCheck },
  { id: 3, title: 'Dedicated Support', value: '24/7', icon: HeartHandshake },
  { id: 4, title: 'Best Value Guaranteed', value: 'Top Rated', icon: Award },
];

const TrustBanner = () => {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary-blue shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-800">{metric.value}</p>
                  <p className="text-sm text-slate-500 font-medium">{metric.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
