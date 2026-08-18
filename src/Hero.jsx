import React from 'react';
import { CheckCircle, Search, Home, Key, User, Star, Shield, ThumbsUp, ChevronRight, MessageSquare, Zap, BarChart3, Clock, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
      {/* Left Text Column */}
      <div className="flex flex-col space-y-6">
        <div className="inline-block bg-primary-dark/10 text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold w-max border border-primary-dark/20">
          ✨ AI powered Property Management
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
          BUY. SELL. RENT. <span className="text-primary-blue">MANAGE.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-500 max-w-xl">
          One platform for everything your property needs.
        </p>

        <ul className="space-y-4 pt-2">
          {[
            "Verified Properties & Owners",
            "No Brokerage. No Hidden Charges",
            "End-to-End Property Care",
            "Trusted by Owners, Loved by Tenants"
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-success-green shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <button className="bg-primary-blue hover:bg-primary-dark transition-all duration-200 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl w-full sm:w-auto text-lg flex justify-center items-center">
            Post FREE Property Ad
            <span className="text-sm font-normal ml-2 opacity-90">- It's Fast, Easy & 100% Free</span>
          </button>
        </div>
      </div>

      {/* Right Visual Column */}
      <div className="relative w-full max-w-md mx-auto lg:max-w-full flex justify-center mt-10 lg:mt-0">
        <div className="relative w-72 sm:w-80 h-[580px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border-8 border-slate-800/90 z-10">
          <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col relative">
            {/* Phone Top Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-2xl w-32 mx-auto z-20"></div>
            
            {/* Dashboard UI Mockup */}
            <div className="bg-primary-blue p-6 pt-10 text-white rounded-b-3xl">
              <p className="text-sm opacity-80 mb-1">Total Property Value</p>
              <p className="text-3xl font-bold">₹1.25 Cr</p>
            </div>
            
            <div className="flex-1 p-4 space-y-4 overflow-hidden">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Rent Collection</p>
                  <p className="text-lg font-bold text-slate-800">₹45,000 <span className="text-xs text-success-green ml-1">+12%</span></p>
                </div>
                <div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center text-success-green">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Maintenance Requests</p>
                  <p className="text-lg font-bold text-slate-800">2 <span className="text-xs text-red-500 ml-1">Open</span></p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Occupancy Rate</p>
                  <p className="text-lg font-bold text-slate-800">92%</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                  <User className="w-5 h-5" />
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-accent-purple/5 border border-accent-purple/20 rounded-2xl">
                 <p className="text-xs text-accent-purple font-bold mb-2 flex items-center"><Zap className="w-4 h-4 mr-1" /> AI INSIGHT</p>
                 <p className="text-sm text-slate-700">Rent for similar properties in your area has increased by 5%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Nodes */}
        <div className="hidden lg:flex absolute top-12 -left-12 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 items-center space-x-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
          <div className="bg-blue-100 p-2 rounded-full text-primary-blue"><BarChart3 className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">AI Price Insights</p>
          </div>
        </div>
        
        <div className="hidden lg:flex absolute bottom-32 -left-16 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 items-center space-x-3 z-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          <div className="bg-purple-100 p-2 rounded-full text-accent-purple"><Shield className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Tenant Screening</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute top-40 -right-8 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 items-center space-x-3 z-20 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
          <div className="bg-green-100 p-2 rounded-full text-success-green"><MessageSquare className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-bold text-slate-800">Smart Alerts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
