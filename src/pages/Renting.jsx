import React from 'react';

const Renting = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Renting</h1>
      <p className="text-lg text-slate-500 max-w-xl text-center">
        This is a sample page for Renting properties. Showcase rental listings, tenant screening, and rent collection tools here.
      </p>
      <a href="/" className="mt-8 text-primary-blue hover:underline">← Back to Home</a>
    </div>
  );
};

export default Renting;
