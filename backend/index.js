const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://maisondelhorlogerie.fr',
  'https://www.maisondelhorlogerie.fr',
];

// Middleware CORS
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

// Configuration SMTP IONOS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp.ionos.com
  port: Number(process.env.SMTP_PORT), // 465 recommandé
  secure: Number(process.env.SMTP_PORT) === 465, // true pour 465, false pour 587
  auth: {
    user: process.env.SMTP_USER, // email complet IONOS
    pass: process.env.SMTP_PASS, // mot de passe du mail IONOS
  },
});

// Route de test
app.get('/', (req, res) => {
  res.send("Backend Maison de l'Horlogerie en ligne");
});

app.get('/api/status', (req, res) => {
  res.json({
    status: "Le serveur de la Maison de l'Horlogerie est à l'heure",
    time: new Date().toLocaleTimeString('fr-BE'),
  });
});

// Route formulaire contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, city, subject, message } = req.body;

    if (!name || !email || !city || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.',
      });
    }

    await transporter.sendMail({
      from: `"Maison de l'Horlogerie" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER,
      subject: `Nouvelle demande contact - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
          <h2>Nouvelle demande depuis le formulaire de contact</h2>

          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Ville :</strong> ${city}</p>
          <p><strong>Sujet :</strong> ${subject}</p>

          <hr />

          <p><strong>Message :</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès.',
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi du message.",
    });
  }
});

// Route formulaire maintenance
app.post('/api/maintenance', async (req, res) => {
  try {
    const {
      nom,
      email,
      telephone,
      ville,
      typeHorloge,
      marque,
      annee,
      etat,
      description,
    } = req.body;

    if (!nom || !email || !telephone || !ville || !typeHorloge || !etat || !description) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.',
      });
    }

    await transporter.sendMail({
      from: `"Maison de l'Horlogerie" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER,
      subject: `Nouvelle demande de diagnostic - ${typeHorloge}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
          <h2>Nouvelle demande de diagnostic horloger</h2>

          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Ville :</strong> ${ville}</p>

          <hr />

          <p><strong>Type de pièce :</strong> ${typeHorloge}</p>
          <p><strong>Marque ou signature :</strong> ${marque || 'Non renseigné'}</p>
          <p><strong>Époque approximative :</strong> ${annee || 'Non renseignée'}</p>
          <p><strong>État / problème :</strong> ${etat}</p>

          <hr />

          <p><strong>Description :</strong></p>
          <p>${description}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Demande de diagnostic envoyée avec succès.',
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la demande de maintenance :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi de la demande.",
    });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur de précision démarré sur le port ${PORT}`);
});