import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'New Projects', subtitle: 'Explore latest developments', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80', color: 'bg-blue-50 text-blue-600', link: '/property/1' },
  { id: 2, title: 'Home Interiors', subtitle: 'Design your dream space', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80', color: 'bg-purple-50 text-purple-600', link: '/property/2' },
  { id: 3, title: 'Buy / Sell Assistance', subtitle: 'Expert guidance', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80', color: 'bg-green-50 text-green-600', link: '/property/3' },
  { id: 4, title: 'Property Management', subtitle: 'End-to-end care', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80', color: 'bg-orange-50 text-orange-600', link: '/dashboard' },
  { id: 5, title: 'NRI Property Care', subtitle: 'Manage from anywhere', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80', color: 'bg-teal-50 text-teal-600', link: '/dashboard' },
  { id: 6, title: 'Legal & Documentation', subtitle: 'Hassle-free process', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80', color: 'bg-rose-50 text-rose-600', link: '/' },
  { id: 7, title: 'Home Maintenance', subtitle: 'Reliable repair services', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80', color: 'bg-amber-50 text-amber-600', link: '/' },
  { id: 8, title: 'Home Finance', subtitle: 'Best loan offers', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80', color: 'bg-indigo-50 text-indigo-600', link: '/' },
];

const HomeServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Home Services</h2>
          <p className="text-slate-500 mt-1 text-sm md:text-base">Everything you need for your property</p>
        </div>
        <Link to="/property/1" className="text-primary-blue font-semibold flex items-center hover:text-primary-dark transition-colors group text-sm md:text-base">
          See All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => {
          return (
            <Link to={service.link} key={service.id} className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer flex flex-col h-full overflow-hidden">
              {/* Image Thumbnail */}
              <div className="w-full h-32 sm:h-36 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Card Content */}
              <div className={`p-4 sm:p-5 flex-1 flex flex-col ${service.color.split(' ')[0]} bg-opacity-20`}>
                <h3 className="font-bold text-slate-800 mb-1">{service.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{service.subtitle}</p>
                
                <div className="mt-auto flex justify-end">
                  <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center ${service.color.split(' ')[1]} group-hover:bg-primary-blue group-hover:text-white transition-colors`}>
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
