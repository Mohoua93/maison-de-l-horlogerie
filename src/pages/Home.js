import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react'; // Icône technique pour la maintenance
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* L'image de fond est gérée en CSS */}
        <div className="hero-content">
          <h1 className="hero-since">Expertise depuis 20ans</h1>
          <p className="hero-description">
            Depuis trois générations, La Maison de l'Horlogerie perpétue la passion de la précision et l'amour du travail bien fait. Notre atelier est le fruit d'un véritable héritage familial où les secrets de l'artisanat se transmettent avec ferveur de père en fils.
          </p>
          
          <Link to="/maintenance" className="maintenance-btn">
            <Settings size={20} className="btn-icon" />
            Planifier une Maintenance
          </Link>
        </div>
      </section>

      {/* D'autres sections viendront ici plus tard (Services, Marques, etc.) */}
    </div>
  );
};

export default Home;