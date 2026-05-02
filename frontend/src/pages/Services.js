import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Wrench, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import '../styles/Services.css';

import heroService from '../assets/service-hero.jpeg';

import serviceImage1 from '../assets/service-1.jpeg';
import serviceImage2 from '../assets/service-2.jpeg';
import serviceImage3 from '../assets/service-3.png';


const Services = () => {
  return (
    <main className="services-page">
      {/* HERO */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${heroService})` }}
      >
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <p className="services-label">Nos services</p>

          <h1>Entretien et restauration d’horlogerie ancienne</h1>

          <p>
            Nous accompagnons chaque pièce avec exigence, précision et respect
            de son histoire. De la simple révision à la restauration complète,
            notre atelier met son savoir-faire au service des mécanismes anciens.
          </p>

          <Link to="/maintenance" className="services-hero-btn">
            Planifier une maintenance
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* BANDEAU PHOTOS */}
      <section className="services-gallery-section">
        <div className="services-gallery">
          

          <div className="gallery-item">
            <img src={serviceImage1} alt="Mécanisme d’horlogerie ancienne" />
          </div>

          <div className="gallery-item">
            <img src={serviceImage2} alt="Atelier d’horlogerie traditionnelle" />
          </div>

          <div className="gallery-item">
            <img src={serviceImage3} alt="Détail d’une montre mécanique ancienne" />
          </div>

          
        </div>
      </section>

      {/* TEXTE EXPLICATIF */}
      <section className="services-intro">
        <div className="services-intro-container">
          <div className="services-intro-left">
            <p className="section-label">Savoir-faire artisanal</p>

            <h2>Préserver la précision, respecter l’authenticité.</h2>
          </div>

          <div className="services-intro-right">
            <p>
              L’horlogerie ancienne demande une attention particulière. Chaque
              mécanisme possède son histoire, ses matériaux, son usure et ses
              spécificités techniques. Notre rôle est d’intervenir avec méthode,
              patience et précision afin de préserver l’âme de chaque pièce.
            </p>

            <p>
              Nous réalisons l’entretien, le diagnostic, la révision et la
              restauration d’horloges anciennes, pendules, montres mécaniques et
              mécanismes de collection. Chaque intervention est effectuée dans
              le respect des techniques traditionnelles, avec une recherche
              constante de fiabilité, d’esthétique et de durabilité.
            </p>
          </div>
        </div>
      </section>

      {/* CARTES SERVICES */}
      <section className="services-cards-section">
        <div className="services-cards-container">
          <article className="service-card">
            <div className="service-icon">
              <Clock size={28} />
            </div>

            <h3>Entretien régulier</h3>

            <p>
              Nettoyage, contrôle du mouvement, lubrification et vérification du
              bon fonctionnement afin de prolonger la durée de vie de votre pièce.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">
              <Wrench size={28} />
            </div>

            <h3>Révision complète</h3>

            <p>
              Démontage, diagnostic précis, nettoyage des composants, réglage et
              remise en fonctionnement du mécanisme horloger.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">
              <Sparkles size={28} />
            </div>

            <h3>Restauration ancienne</h3>

            <p>
              Intervention minutieuse sur les mécanismes anciens, cadrans,
              aiguilles, boîtiers ou éléments décoratifs, dans le respect de
              l’authenticité.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">
              <ShieldCheck size={28} />
            </div>

            <h3>Diagnostic horloger</h3>

            <p>
              Analyse complète de l’état de votre horloge ou montre ancienne
              afin d’identifier les réparations nécessaires avant intervention.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Une horloge ancienne à entretenir ou restaurer ?</h2>

          <p>
            Confiez votre pièce à un atelier spécialisé dans la précision,
            la transmission et la restauration du patrimoine horloger.
          </p>

          <Link to="/maintenance" className="services-cta-btn">
            Demander une intervention
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;