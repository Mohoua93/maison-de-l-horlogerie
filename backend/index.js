const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://maisondelhorlogerie.fr',
  'https://www.maisondelhorlogerie.fr',
];

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send("Backend Maison de l'Horlogerie en ligne");
});

app.get('/api/status', (req, res) => {
  res.json({
    status: "Le serveur de la Maison de l'Horlogerie est à l'heure",
    time: new Date().toLocaleTimeString(),
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur de précision démarré sur le port ${PORT}`);
});