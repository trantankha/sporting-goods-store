const ProductModel = require('../models/ProductModel');
const path = require('path');

class ProductController {
    static getData(req, res) {
        ProductModel.getAll((err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
    static insertData(req, res) {
        const product = {
            typeId: parseInt(req.body.typeId),
            categoryId: parseInt(req.body.categoryId),
            trademark: req.body.trademark,
            name: req.body.name,
            color: req.body.color,
            size: req.body.size,
            quantity: parseInt(req.body.quantity),
            price: parseInt(req.body.price),
            describe: req.body.describe,
            parameter: req.body.parameter,
            image: req.body.file,
            decrease: req.body.decrease,
            percent: parseInt(req.body.percent),
            viewer: parseInt(req.body.viewer)
        }
        ProductModel.insertProduct(product, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
    static updateData(req, res) {
        const product = req.body;
        ProductModel.updateProduct(product, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
    static deleteData(req, res) {
        const id = req.params.id;
        ProductModel.deleteProduct(id, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
    static getDataById(req, res) {
        const id = req.params.id;
        ProductModel.getProductById(id, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

}

module.exports = ProductController;
