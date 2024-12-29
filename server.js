const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname)));

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'optiview'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected');
    }
});

app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/api/contact', (req, res) => {
    const { account_id, purpose, firstname, lastname, email, phone, message } = req.body;
    const query = `
        INSERT INTO contactus (account_id, purpose, firstname, lastname, email, phone, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [account_id || null, purpose, firstname, lastname, email, phone, message], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ success: true, message: 'Pesan Anda berhasil dikirim!' });
        }
    });
});

app.post('/api/transaction', (req, res) => {
    const { product_id, account_id, location, payment } = req.body;
    const query = `
        INSERT INTO transaction (product_id, account_id, location, payment)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [product_id, account_id, location, payment], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ success: true, message: 'Transaksi berhasil disimpan.' });
        }
    });
});

app.post('/api/signup', (req, res) => {
    const { username, email, pass } = req.body;

    const query = 'INSERT INTO account (username, email, pass) VALUES (?, ?, ?)';
    db.query(query, [username, email, pass], (err, result) => {
        if (err) {
            console.error('Error saat menyimpan ke database:', err);
            return res.status(500).json({ success: false, message: 'Terjadi kesalahan di server.' });
        }
        res.json({ success: true, message: 'Akun berhasil dibuat.' });
    });
});

 app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
