const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.get('/products', (req, res) => {
    const db = connectDB();
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
