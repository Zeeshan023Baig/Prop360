import React from 'react';
import { ArrowLeft, Home, Building, DollarSign, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-0">
      {/* Top Navbar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="text-slate-500 hover:text-slate-800 transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <span className="ml-4 font-semibold text-slate-800">Property Details</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery Mock */}
            <div className="rounded-3xl overflow-hidden aspect-video bg-slate-200 relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Modern luxury house" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                Featured
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-white flex items-center shadow-sm">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> Verified Listing
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">Modern Luxury Villa with Pool</h1>
                  <p className="text-slate-500 mt-2 flex items-center">
                    <Building className="w-4 h-4 mr-1.5" />
                    Beverly Hills, California
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-3xl font-extrabold text-primary-blue">$2,450,000</p>
                  <p className="text-sm text-slate-500 font-medium mt-1">Est. $11,200/mo</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-100 mb-6">
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl">
                  <span className="text-slate-500 text-sm mb-1">Beds</span>
                  <span className="text-xl font-bold text-slate-800">4</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl">
                  <span className="text-slate-500 text-sm mb-1">Baths</span>
                  <span className="text-xl font-bold text-slate-800">3.5</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl">
                  <span className="text-slate-500 text-sm mb-1">Area</span>
                  <span className="text-xl font-bold text-slate-800">3,200<span className="text-sm ml-1 font-medium">sqft</span></span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl">
                  <span className="text-slate-500 text-sm mb-1">Built</span>
                  <span className="text-xl font-bold text-slate-800">2021</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">About this property</h3>
                <p className="text-slate-600 leading-relaxed">
                  Experience unparalleled luxury in this stunning modern villa. Featuring floor-to-ceiling windows, a state-of-the-art chef's kitchen, and a master suite that feels like a private resort. The expansive backyard includes an infinity pool and multiple entertaining areas.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Agent</h3>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Michael Scott</p>
                  <p className="text-sm text-slate-500 flex items-center mt-0.5"><ShieldCheck className="w-3.5 h-3.5 mr-1 text-success-green" /> Premium Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary-blue hover:bg-primary-dark transition-colors text-white font-semibold py-3.5 px-4 rounded-xl shadow-md">
                  Request Tour
                </button>
                <button className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-slate-800 font-semibold py-3.5 px-4 rounded-xl">
                  Message Agent
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-success-green mr-2" /> Quick response time
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-success-green mr-2" /> Top rated by 50+ clients
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
