import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Clock, ShieldCheck, Wrench } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-label">Atelier d’horlogerie ancienne</p>

          <h1 className="hero-title">
            Préserver le temps, restaurer l’excellence.
          </h1>

          <p className="hero-since">
            Expertise depuis plus de 20 ans
          </p>

          <p className="hero-description">
            Depuis trois générations, notre maison perpétue l’art de la précision
            et le respect des mécanismes anciens. Chaque montre, pendule ou horloge
            confiée à notre atelier bénéficie d’un savoir-faire minutieux, transmis
            avec passion et exigence.
          </p>

          <div className="hero-actions">
            <Link to="/maintenance" className="maintenance-btn">
              <Settings size={20} className="btn-icon" />
              Planifier une maintenance
            </Link>

            <Link to="/services" className="secondary-btn">
              Découvrir nos services
            </Link>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <Clock size={22} />
              <span>Montres anciennes</span>
            </div>

            <div className="feature-item">
              <Wrench size={22} />
              <span>Révision & restauration</span>
            </div>

            <div className="feature-item">
              <ShieldCheck size={22} />
              <span>Savoir-faire artisanal</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;