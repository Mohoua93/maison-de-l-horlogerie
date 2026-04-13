import React from 'react';
import { Watch, Menu, Phone, User } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo & Nom */}
        <div className="logo-section">
          <Watch size={32} strokeWidth={1.5} className="logo-icon" />
          <div className="brand-text">
            <h1>MAISON DE L'HORLOGERIE</h1>
            <span>Expertise depuis 2000</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#restauration">Restauration</a></li>
            <li><a href="#maintenance">Maintenance</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Actions Rapides */}
        <div className="header-actions">
          <a href="tel:+33123456789" className="action-link">
            <Phone size={20} />
          </a>
          <button className="account-btn">
            <User size={20} />
            <span>Espace Client</span>
          </button>
          <button className="mobile-menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;