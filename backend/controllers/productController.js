// controllers/productController.js

const db = require('../utils/db');

// Récupérer tous les produits
exports.getAllProducts = (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des produits:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de la récupération des produits' });
        }
        res.status(200).json({ success: true, products: results });
    });
};

// Ajouter un nouveau produit
exports.addProduct = (req, res) => {
    const { name, category, price } = req.body;
    const sql = "INSERT INTO products (name, category, price) VALUES (?, ?, ?)";
    db.query(sql, [name, category, price], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout du produit:', err);
            return res.status(500).json({ success: false, message: 'Erreur lors de l\'ajout du produit' });
        }
        res.status(201).json({ success: true, message: 'Produit ajouté avec succès' });
    });
};
