// controllers/authController.js

const db = require('../utils/db');

// Inscription d'un nouvel utilisateur
exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'inscription:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de l\'inscription' });
        }
        res.status(201).json({ success: true, message: 'Utilisateur créé avec succès' });
    });
};

// Connexion d'un utilisateur
exports.login = (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Erreur lors de la connexion:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la connexion' });
        }
        if (results.length > 0) {
            res.status(200).json({ success: true, message: 'Connexion réussie' });
        } else {
            res.status(401).json({ success: false, message: 'Email ou mot de passe incorrect' });
        }
    });
};
