const CategoryModel = require('../models/CategoryModel');
const path = require('path');

class CategoryController {
    static getData(req, res) {
        CategoryModel.getAll((err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

    static insertData(req, res) {
        const categoryData = {
            name: req.body.name,
            describe: req.body.describe,
            image: req.file ? path.join('uploads', req.file.filename) : null,
        };
        CategoryModel.create(categoryData, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Category created successfully', data });
        });
    }
}

module.exports = CategoryController;
