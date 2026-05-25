const express = require('express');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  'http://localhost:3000',
  'https://maisondelhorlogerie.fr',
  'https://www.maisondelhorlogerie.fr',
];

// Logs de vérification des variables d'environnement
console.log('==============================');
console.log('🔍 Vérification configuration backend');
console.log('PORT :', process.env.PORT);
console.log('RESEND_API_KEY existe :', !!process.env.RESEND_API_KEY);
console.log('CONTACT_RECEIVER :', process.env.CONTACT_RECEIVER);
console.log('==============================');

// Middleware CORS manuel
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

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
    console.log('📩 Requête reçue sur /api/contact');
    console.log('Données reçues :', req.body);

    const { name, email, phone, city, subject, message } = req.body;

    if (!name || !email || !city || !subject || !message) {
      console.log('⚠️ Champs obligatoires manquants');
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.',
      });
    }

    await resend.emails.send({
      from: "Maison de l'Horlogerie <contact@maisondelhorlogerie.fr>",
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

    console.log('✅ Email contact envoyé avec succès');
    return res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès.',
    });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du message :", error);
    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi du message.",
      error: error.message,
    });
  }
});

// Route formulaire maintenance
app.post('/api/maintenance', async (req, res) => {
  try {
    console.log('🛠️ Requête reçue sur /api/maintenance');
    console.log('Données reçues :', req.body);

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
      console.log('⚠️ Champs obligatoires manquants');
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.',
      });
    }

    await resend.emails.send({
      from: "Maison de l'Horlogerie <contact@maisondelhorlogerie.fr>",
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

    console.log('✅ Email maintenance envoyé avec succès');
    return res.status(200).json({
      success: true,
      message: 'Demande de diagnostic envoyée avec succès.',
    });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de la demande de maintenance :", error);
    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi de la demande.",
      error: error.message,
    });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur de précision démarré sur le port ${PORT}`);
});