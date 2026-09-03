import React from 'react';
import { Settings, User, Bell, Search, LayoutDashboard, PlusCircle, Activity, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200 fixed inset-y-0 z-10">
        <div className="p-6 flex items-center space-x-2 text-primary-blue">
          <LayoutDashboard className="w-8 h-8" />
          <span className="text-2xl font-extrabold text-slate-800 tracking-tight">MyProperties</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 bg-primary-blue/10 text-primary-blue rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5" /> <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-colors">
            <Activity className="w-5 h-5" /> <span>Properties</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-colors">
            <CreditCard className="w-5 h-5" /> <span>Payments</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-colors">
            <User className="w-5 h-5" /> <span>Tenants</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-200">
           <Link to="/" className="flex items-center space-x-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-colors">
             <Settings className="w-5 h-5" /> <span>Back to Site</span>
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 sm:p-8 pb-24 md:pb-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back, John!</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold">
              J
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Monthly Revenue</p>
            <h3 className="text-3xl font-bold text-slate-800">₹1,25,000</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-accent-purple flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Active Properties</p>
            <h3 className="text-3xl font-bold text-slate-800">4</h3>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm border-dashed border-2 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center h-full min-h-[160px]">
            <PlusCircle className="w-8 h-8 text-primary-blue mb-2" />
            <p className="font-semibold text-slate-800">Add New Property</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
            <button className="text-primary-blue text-sm font-semibold">View All</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="p-4 sm:p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm sm:text-base">Rent paid by Sarah Jenkins</p>
                    <p className="text-slate-500 text-xs sm:text-sm">Apartment 4B, Sunset Boulevard</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success-green">+₹45,000</p>
                  <p className="text-slate-400 text-xs">Today, 9:41 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
