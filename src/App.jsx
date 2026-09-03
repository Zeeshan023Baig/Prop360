import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PropertyDetails from './pages/PropertyDetails';
import Selling from './pages/Selling';
import Renting from './pages/Renting';
import Buying from './pages/Buying';
import Navbar from './Navbar';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/renting" element={<Renting />} />
          <Route path="/buying" element={<Buying />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
