const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.post('/transaction', (req, res) => {
    const { product_id, account_id, location, payment } = req.body;
    const db = connectDB();
    const query = `
        INSERT INTO transaction (product_id, account_id, location, payment)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [product_id, account_id, location, payment], (err, results) => {
        if (err) {
            console.error('Error saving transaction:', err);
            res.status(500).json({ success: false, error: err });
        } else {
            res.json({ success: true, message: 'Transaksi berhasil disimpan.' });
        }
    });
});

module.exports = router;
