import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Takeaway from './pages/Takeaway';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Menu />} />

        {/* Your pages */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/takeaway" element={<Takeaway />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

