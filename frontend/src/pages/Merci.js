import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Merci.css';

const Merci = () => {
  return (
    <main className="merci-page">
      <section className="merci-card">
        <p className="merci-label">Demande envoyée</p>

        <h1>Merci pour votre demande</h1>

        <p>
          Votre message a bien été transmis. L’atelier vous recontactera dans
          les meilleurs délais pour étudier votre pièce d’horlogerie.
        </p>

        <Link to="/" className="merci-btn">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
};

export default Merci;