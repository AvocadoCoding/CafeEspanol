import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Takeaway from './pages/Takeaway';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/CafeEspanol">
      <div>
        <Header />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/takeaway" element={<Takeaway />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
