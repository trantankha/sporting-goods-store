const db = require('../../config/database/index');

class DiscountModel {
    static getAll(callback) {
        db.query('CALL GetDiscount()', (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    }
    static create(discountData, callback) {
        db.query('insert into discount(?, ?, ?, ?)', [discountData.productId, discountData.decrease, discountData.percent, discountData.viewer], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = DiscountModel;