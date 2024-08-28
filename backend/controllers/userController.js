// controllers/userController.js

const db = require('../utils/db');

// Récupérer tous les utilisateurs
exports.getAllUsers = (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la récupération des utilisateurs' });
        }
        res.status(200).json({ success: true, users: results });
    });
};

// Récupérer un utilisateur par ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'utilisateur:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la récupération de l\'utilisateur' });
        }
        if (results.length > 0) {
            res.status(200).json({ success: true, user: results[0] });
        } else {
            res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
        }
    });
};
