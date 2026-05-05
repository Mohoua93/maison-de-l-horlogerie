import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo Textuel Stylisé */}
        <NavLink to="/" end className="logo-section" onClick={closeMenu}>
          <div className="brand-text">
            <h1 className="brand-title">MAISON DE L'HORLOGERIE</h1>
            <span className="brand-subtitle">EXPERTISE DEPUIS 2000</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" end className={getNavClass} onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={getNavClass} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/maintenance" className={getNavClass} onClick={closeMenu}>
                Maintenance
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getNavClass} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions Rapides */}
        <div className="header-actions">
          <a href="tel:+32496662863" className="action-link" aria-label="Appeler">
            <Phone size={20} />
          </a>

          <button
            className="mobile-menu"
            type="button"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;