const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.post('/contact', (req, res) => {
    const { account_id, purpose, firstname, lastname, email, phone, message } = req.body;
    const db = connectDB();
    const query = `
        INSERT INTO contactus (account_id, purpose, firstname, lastname, email, phone, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [account_id || null, purpose, firstname, lastname, email, phone, message], (err, results) => {
        if (err) {
            console.error('Error saving contact:', err);
            res.status(500).send(err);
        } else {
            res.send({ success: true, message: 'Pesan Anda berhasil dikirim!' });
        }
    });
});

module.exports = router;
