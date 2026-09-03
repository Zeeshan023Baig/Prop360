import React from 'react';

const Buying = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Buying</h1>
      <p className="text-lg text-slate-500 max-w-xl text-center">
        This is a sample page for Buying properties. Buyers can browse, use AI filters, and connect with sellers here.
      </p>
      <a href="/" className="mt-8 text-primary-blue hover:underline">← Back to Home</a>
    </div>
  );
};

export default Buying;
