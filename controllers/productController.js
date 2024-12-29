const productModel = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    productModel.getAllProducts((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Server error', error: err });
        }
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    productModel.getProductById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Server error', error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result);
    });
};

exports.createProduct = (req, res) => {
    const product = req.body;
    productModel.createProduct(product, (err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Error creating product', error: err });
        }
        res.status(201).json({ message: 'Product created successfully', productId: result.insertId });
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const product = req.body;
    productModel.updateProduct(id, product, (err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Error updating product', error: err });
        }
        res.json({ message: 'Product updated successfully' });
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    productModel.deleteProduct(id, (err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Error deleting product', error: err });
        }
        res.json({ message: 'Product deleted successfully' });
    });
};
