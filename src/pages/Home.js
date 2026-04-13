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
          <span className="hero-since">Expertise depuis 2000</span>
          
          <h1 className="hero-title">
            Redonnez vie à vos garde-temps de collection
          </h1>
          
          <p className="hero-description">
            La Maison de l'Horlogerie met 20 ans de savoir-faire au service de la restauration d'art et de la maintenance de précision. De la pendule de collection au mouvement mécanique de haute horlogerie, chaque intervention est une affaire de passion.
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