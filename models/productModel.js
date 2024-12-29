const db = require('../config/db');

const getAllProducts = (callback) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const getProductById = (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

// Fungsi untuk menambahkan produk baru
const createProduct = (product, callback) => {
    const { brand, model, price, image_url, frame } = product;
    db.query('INSERT INTO products (brand, model, price, image_url, frame) VALUES (?, ?, ?, ?, ?)', 
    [brand, model, price, image_url, frame], 
    (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const updateProduct = (id, product, callback) => {
    const { brand, model, price, image_url, frame } = product;
    db.query('UPDATE products SET brand = ?, model = ?, price = ?, image_url = ?, frame = ? WHERE id = ?', 
    [brand, model, price, image_url, frame, id], 
    (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const deleteProduct = (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
