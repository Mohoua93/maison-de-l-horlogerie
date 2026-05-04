import React, { useState } from 'react';
import {
  Send,
  Clock,
  Wrench,
  FileText,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import '../styles/Maintenance.css';

const Maintenance = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    typeHorloge: '',
    marque: '',
    annee: '',
    etat: 'ne-marche-plus',
    description: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Données envoyées au backend :', formData);

    alert('Votre demande de diagnostic a bien été envoyée.');

    // À activer plus tard quand la page /merci sera créée :
    // window.location.href = '/merci';
  };

  return (
    <main className="maintenance-page">
      {/* HERO */}
      <section className="maintenance-hero">
        <div className="maintenance-hero-overlay"></div>

        <div className="maintenance-hero-content">
          <p className="maintenance-label">Horlogerie ancienne en Belgique</p>

          <h1>Maintenance, réparation et restauration d’horlogerie ancienne</h1>

          <p>
            Confiez votre horloge ancienne, pendule, comtoise, carillon ou mécanisme
            horloger à un atelier spécialisé intervenant en Belgique. Décrivez votre
            pièce afin de recevoir un premier avis et une prise en charge adaptée.
          </p>

          <div className="maintenance-hero-actions">
            <a href="#formulaire-maintenance" className="primary-cta">
              Demander un diagnostic
              <ArrowRight size={18} />
            </a>

            <a href="tel:+32XXXXXXXXX" className="secondary-cta">
              <Phone size={18} />
              Appeler l’atelier
            </a>
          </div>

          <div className="maintenance-hero-features">
            <div className="maintenance-feature">
              <Clock size={20} />
              <span>Premier avis sous 48h</span>
            </div>

            <div className="maintenance-feature">
              <Wrench size={20} />
              <span>Révision, réglage & restauration</span>
            </div>

            <div className="maintenance-feature">
              <ShieldCheck size={20} />
              <span>Savoir-faire artisanal</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire-maintenance" className="maintenance-form-section">
        <div className="maintenance-container">
          <div className="maintenance-info">
            <p className="section-label">Votre demande</p>

            <h2>Un diagnostic pour votre horloge ancienne, pendule ou mécanisme</h2>

            <p>
              Chaque horloge ancienne possède son histoire, son mécanisme et ses signes
              d’usure. Ce formulaire nous permet de comprendre votre besoin avant toute
              intervention : entretien, réparation, réglage, remise en marche ou
              restauration complète.
            </p>

            <div className="maintenance-steps">
              <div className="maintenance-step">
                <span>01</span>
                <div>
                  <h3>Décrivez votre pièce</h3>
                  <p>
                    Type d’horloge, marque ou signature, époque approximative, ville
                    et état général.
                  </p>
                </div>
              </div>

              <div className="maintenance-step">
                <span>02</span>
                <div>
                  <h3>Analyse de la demande</h3>
                  <p>
                    Les informations transmises permettent d’orienter le diagnostic et
                    d’évaluer la prise en charge possible.
                  </p>
                </div>
              </div>

              <div className="maintenance-step">
                <span>03</span>
                <div>
                  <h3>Retour personnalisé</h3>
                  <p>
                    Vous recevez une première réponse concernant l’entretien, la
                    réparation ou la restauration de votre pièce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <div className="form-header">
              <p>Formulaire de diagnostic</p>
              <h2>Demande de prise en charge</h2>
            </div>

            <form onSubmit={handleSubmit} className="repair-form">
              {/* Informations client */}
              <section className="form-section">
                <h3>
                  <FileText size={18} />
                  Informations client
                </h3>

                <div className="input-grid">
                  <div className="form-group">
                    <label htmlFor="nom">Nom complet</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      placeholder="Votre nom"
                      value={formData.nom}
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

                  <div className="form-group">
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      placeholder="Votre numéro"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ville">Ville en Belgique</label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      placeholder="Ex : Bruxelles, Liège, Namur..."
                      value={formData.ville}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Détails de l'objet */}
              <section className="form-section">
                <h3>
                  <Clock size={18} />
                  Détails de l’objet
                </h3>

                <div className="input-grid">
                  <div className="form-group">
                    <label htmlFor="typeHorloge">Type de pièce</label>
                    <select
                      id="typeHorloge"
                      name="typeHorloge"
                      value={formData.typeHorloge}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez le type de pièce</option>
                      <option value="pendule">Pendule ancienne</option>
                      <option value="comtoise">Horloge comtoise</option>
                      <option value="horloge-murale">Horloge murale ancienne</option>
                      <option value="carillon">Carillon ancien</option>
                      <option value="mecanisme">Mécanisme horloger ancien</option>
                      <option value="montre-gousset">Montre à gousset</option>
                      <option value="montre-bracelet">Montre bracelet</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="marque">Marque ou signature</label>
                    <input
                      type="text"
                      id="marque"
                      name="marque"
                      placeholder="Ex : Lepaute, comtoise, Omega..."
                      value={formData.marque}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="annee">Époque approximative</label>
                    <input
                      type="text"
                      id="annee"
                      name="annee"
                      placeholder="Ex : XIXe siècle, 1950..."
                      value={formData.annee}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="photo">Photo de la pièce</label>
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </section>

              {/* État */}
              <section className="form-section">
                <h3>
                  <Wrench size={18} />
                  État et symptômes
                </h3>

                <div className="form-group">
                  <label htmlFor="etat">Type de problème</label>
                  <select
                    id="etat"
                    name="etat"
                    value={formData.etat}
                    onChange={handleChange}
                  >
                    <option value="revision">Révision périodique / entretien</option>
                    <option value="ne-marche-plus">Ne fonctionne plus du tout</option>
                    <option value="retard-avance">Prend du retard ou de l’avance</option>
                    <option value="sonnerie">Problème de sonnerie ou de carillon</option>
                    <option value="verre-casse">Verre brisé ou cadran abîmé</option>
                    <option value="restauration-esthetique">Restauration esthétique</option>
                    <option value="mecanisme-bloque">Mécanisme bloqué</option>
                    <option value="remise-en-marche">Remise en marche</option>
                    <option value="autre">Autre problème</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description détaillée</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Décrivez l’historique de la pièce, les symptômes observés, les bruits inhabituels ou le type d’intervention souhaité..."
                    rows="6"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </section>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                Demander un diagnostic
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Maintenance;