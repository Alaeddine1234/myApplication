// controllers/orderController.js

const db = require('../utils/db');

// Récupérer toutes les commandes
exports.getAllOrders = (req, res) => {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des commandes:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la récupération des commandes' });
        }
        res.status(200).json({ success: true, orders: results });
    });
};

// Créer une nouvelle commande
exports.createOrder = (req, res) => {
    const { tableNumber, details, status } = req.body;
    const sql = "INSERT INTO orders (tableNumber, details, status) VALUES (?, ?, ?)";
    db.query(sql, [tableNumber, details, status], (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la commande:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la création de la commande' });
        }
        res.status(201).json({ success: true, message: 'Commande créée avec succès' });
    });
};
