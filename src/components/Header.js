import React from 'react';
import { NavLink } from 'react-router-dom';
import { Watch, Menu, Phone, User } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const getNavClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo & Nom */}
        <NavLink to="/" end className="logo-section">
          <Watch size={32} strokeWidth={1.5} className="logo-icon" />
          <div className="brand-text">
            <h1>MAISON DE L'HORLOGERIE</h1>
            <span>Expertise depuis 2000</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/" end className={getNavClass}>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/restauration" className={getNavClass}>
                Restauration
              </NavLink>
            </li>

            <li>
              <NavLink to="/maintenance" className={getNavClass}>
                Maintenance
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={getNavClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions Rapides */}
        <div className="header-actions">
          <a href="tel:+33123456789" className="action-link">
            <Phone size={20} />
          </a>

          <button className="account-btn" type="button">
            <User size={20} />
            <span>Espace Client</span>
          </button>

          <button className="mobile-menu" type="button">
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;