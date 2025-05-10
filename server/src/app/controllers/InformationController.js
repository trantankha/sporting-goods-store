const ProductModel = require('../models/ProductModel');

class InformationController {
    static getDataById(req, res) {
        const ID = req.params.id;
        ProductModel.getProductById(ID, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        })
    }
}

module.exports = InformationController;