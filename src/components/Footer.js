import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Camera, Globe } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Clock size={30} />
            <span>La Maison de l’Horlogerie</span>
          </div>

          <p className="footer-description">
            Atelier spécialisé dans l’entretien, la restauration et la maintenance
            d’horloges anciennes, montres de collection et mécanismes d’exception.
          </p>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>

          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/maintenance">Maintenance</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Révision complète</li>
            <li>Restauration ancienne</li>
            <li>Diagnostic horloger</li>
            <li>Entretien de mécanismes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>Paris, France</span>
            </li>
            <li>
              <Phone size={18} />
              <span>01 23 45 67 89</span>
            </li>
            <li>
              <Mail size={18} />
              <span>contact@horlogerie.fr</span>
            </li>
          </ul>

          <div className="footer-socials">
  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
    <Camera size={20} />
  </a>

  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
    <Globe size={20} />
  </a>
</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} La Maison de l’Horlogerie. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;