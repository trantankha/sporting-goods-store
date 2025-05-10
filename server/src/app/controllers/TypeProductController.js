const TypeProductModel = require('../models/TypeProductModel');

class TypeProductController {
    static getData(req, res) {
        TypeProductModel.getAll((err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        })
    }
    static insertData(req, res) {
        const typeproduct = req.body;
        TypeProductModel.insertTypeProduct(typeproduct, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
}

module.exports = TypeProductController;