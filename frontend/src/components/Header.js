import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const getNavClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo Textuel Stylisé */}
        <NavLink to="/" end className="logo-section">
          <div className="brand-text">
            <h1 className="brand-title">MAISON DE L'HORLOGERIE</h1>
            <span className="brand-subtitle">EXPERTISE DEPUIS 2000</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li><NavLink to="/" end className={getNavClass}>Accueil</NavLink></li>
            <li><NavLink to="/services" className={getNavClass}>Services</NavLink></li>
            <li><NavLink to="/maintenance" className={getNavClass}>Maintenance</NavLink></li>
            <li><NavLink to="/contact" className={getNavClass}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Actions Rapides */}
        <div className="header-actions">
          <a href="tel:+32496662863" className="action-link" aria-label="Appeler">
            <Phone size={20} />
          </a>
          <button className="mobile-menu" type="button" aria-label="Ouvrir le menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;