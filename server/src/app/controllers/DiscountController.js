const DiscountModel = require('../models/DiscountModel');

class DiscountController {
    static getData(req, res) {
        DiscountModel.getAll((err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }
    static insertData(req, res) {
        const discount = req.body;
        DiscountModel.create(discount, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Discount created successfully', data });
        });
    }
}

module.exports = DiscountController;