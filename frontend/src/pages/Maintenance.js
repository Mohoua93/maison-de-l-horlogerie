import React, { useState } from 'react';
import { Send, Clock, Wrench, FileText } from 'lucide-react'; // Tool remplacé par Wrench
import '../styles/Maintenance.css';

const Maintenance = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeHorloge: 'montre-bracelet',
    marque: '',
    annee: '',
    etat: 'ne-marche-plus',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées au backend :", formData);
    alert("Demande de prise en charge envoyée avec succès !");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="maintenance-page">
      <div className="form-container">
        <div className="form-header">
          <h2>Demande de Prise en Charge</h2>
          <p>Expertise de votre garde-temps sous 48h</p>
        </div>

        <form onSubmit={handleSubmit} className="repair-form">
          {/* Section Client */}
          <section className="form-section">
            <h3><FileText size={18} /> Informations Client</h3>
            <div className="input-group">
              <input type="text" name="nom" placeholder="Nom complet" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange} required />
            </div>
          </section>

          {/* Section Horlogerie */}
          <section className="form-section">
            <h3><Clock size={18} /> Détails de l'objet</h3>
            <div className="input-grid">
              <select name="typeHorloge" onChange={handleChange}>
                <option value="montre-bracelet">Montre Bracelet</option>
                <option value="montre-gousset">Montre à Gousset</option>
                <option value="pendule">Pendule Ancienne</option>
                <option value="comtoise">Horloge Comtoise</option>
                <option value="autre">Autre</option>
              </select>
              <input type="text" name="marque" placeholder="Marque (ex: Omega, Cartier...)" onChange={handleChange} />
              <input type="text" name="annee" placeholder="Année approximative" onChange={handleChange} />
            </div>
          </section>

          {/* Section Symptômes */}
          <section className="form-section">
            {/* Tool remplacé par Wrench ici également */}
            <h3><Wrench size={18} /> État et Symptômes</h3>
            <select name="etat" onChange={handleChange} className="full-width">
              <option value="revision">Révision périodique (entretien)</option>
              <option value="ne-marche-plus">Ne marche plus du tout</option>
              <option value="retard-avance">Prend du retard ou de l'avance</option>
              <option value="verre-casse">Verre brisé ou cadran abîmé</option>
              <option value="restauration-esthetique">Restauration esthétique (polissage/aiguilles)</option>
            </select>
            <textarea 
              name="description" 
              placeholder="Décrivez ici l'historique ou les bruits inhabituels de l'appareil..." 
              rows="4"
              onChange={handleChange}
            ></textarea>
          </section>

          <button type="submit" className="submit-btn">
            <Send size={18} />
            Envoyer la demande au Maître Horloger
          </button>
        </form>
      </div>
    </div>
  );
};

export default Maintenance;