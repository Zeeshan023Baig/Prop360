import React from 'react';
import { Home, Key, Tag, Settings, User } from 'lucide-react';

const navItems = [
  { label: 'Buy', icon: Home, active: false },
  { label: 'Rent', icon: Key, active: false },
  { label: 'Sell', icon: Tag, active: false },
  { label: 'Manage', icon: Settings, active: true },
  { label: 'My Property', icon: User, active: false },
];

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a 
              key={index} 
              href="#" 
              className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] px-2 py-1 ${
                item.active ? 'text-primary-blue' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${item.active ? 'fill-primary-blue/10' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
