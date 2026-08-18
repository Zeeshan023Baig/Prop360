import React from 'react';
import Hero from './Hero';
import HomeServices from './HomeServices';
import TrustBanner from './TrustBanner';
import AIBanner from './AIBanner';
import MobileNav from './MobileNav';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16 md:pb-0 selection:bg-primary-blue/20">
      <Hero />
      <TrustBanner />
      <HomeServices />
      <AIBanner />
      <MobileNav />
    </div>
  );
};

export default LandingPage;
