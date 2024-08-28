// utils/db.js

const mysql = require('mysql2');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Configurer la connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT  // Utiliser la variable d'environnement pour le port MySQL
});

// Connecter à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL en tant que id ' + connection.threadId);
});

module.exports = connection;
