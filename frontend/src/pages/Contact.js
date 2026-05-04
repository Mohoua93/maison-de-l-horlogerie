import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l’envoi du message.');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        subject: '',
        message: '',
      });

      navigate('/merci');
    } catch (error) {
      console.error('Erreur formulaire contact :', error);
      setFormError(
        'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="contact-label">Contact</p>

          <h1>Contactez un atelier d’horlogerie ancienne en Belgique</h1>

          <p>
            Une horloge ancienne à restaurer, une pendule à entretenir ou un mécanisme
            à diagnostiquer ? Contactez notre atelier situé à Bruxelles et intervenant
            en Belgique pour une demande personnalisée.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="section-label">Nous contacter</p>

            <h2>Parlons de votre projet horloger</h2>

            <p className="contact-description">
              Décrivez-nous votre besoin : entretien, réparation, restauration
              ou diagnostic. Nous prendrons le temps d’étudier votre demande
              avec soin afin de vous proposer une intervention adaptée.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <a href="tel:+32496662863">+32 496 66 28 63</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <a href="mailto:contact@maisondelhorlogerie.fr">
                    contact@maisondelhorlogerie.fr
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <p>Bruxelles, Belgique</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <Clock size={22} />
                </div>

                <div>
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="formulaire" value="Contact général" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adresse email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">Ville en Belgique</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ex : Bruxelles, Liège, Namur..."
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisir un sujet</option>
                  <option value="Entretien">Entretien régulier</option>
                  <option value="Réparation">Réparation</option>
                  <option value="Restauration">Restauration ancienne</option>
                  <option value="Diagnostic">Diagnostic horloger</option>
                  <option value="Horloge ancienne">Horloge ancienne</option>
                  <option value="Pendule ancienne">Pendule ancienne</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre horloge, son état, le problème rencontré ou le type d’intervention souhaité..."
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {formError && <p className="form-error">{formError}</p>}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;