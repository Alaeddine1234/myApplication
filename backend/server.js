// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('../backend/utils/db');  // Importer la connexion MySQL

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Créer une application Express
const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Middleware CORS pour autoriser les requêtes de toutes les origines
app.use(cors());

// Route de test de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de MonApplication');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
