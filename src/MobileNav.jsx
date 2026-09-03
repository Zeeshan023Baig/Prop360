import React from 'react';
import { Home, Key, Tag, Settings, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Buy', icon: Home, path: '/buying' },
  { label: 'Rent', icon: Key, path: '/renting' },
  { label: 'Sell', icon: Tag, path: '/selling' },
  { label: 'Manage', icon: Settings, path: '/dashboard' },
  { label: 'My Property', icon: User, path: '/login' },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '');
          return (
            <Link 
              key={index} 
              to={item.path} 
              className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] px-2 py-1 ${
                isActive ? 'text-primary-blue' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'fill-primary-blue/10' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
