import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance'; // Importez votre nouvelle page
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
          </Routes>
        </main>
        
        {/* Vous pourrez faire la même chose plus tard pour un Footer */}
      </div>
    </Router>
  );
}

export default App;
