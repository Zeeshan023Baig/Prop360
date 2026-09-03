import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-slate-800 tracking-tight leading-none">
                MyProperties
              </span>
              <span className="text-xs font-semibold text-primary-blue tracking-wide mt-1">
                With a touch of AI.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/buying" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">
              Buy
            </Link>
            <Link to="/renting" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">
              Rent
            </Link>
            <Link to="/selling" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">
              Sell
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-slate-600 hover:text-primary-blue font-medium px-4 py-2">
              Log in
            </Link>
            <Link to="/dashboard" className="bg-primary-blue hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
