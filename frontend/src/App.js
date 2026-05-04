import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Merci from './pages/Merci';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merci" element={<Merci />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;