const db = require('../../config/database/index');

class TypeProductModel {
    static getAll(callback) {
        db.query('select * from typeproduct', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static insertTypeProduct(typeProduct, callback) {
        db.query('INSERT INTO typeproduct (Name, Quantity) VALUES (?, ?)', [typeProduct.name, typeProduct.quantity], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = TypeProductModel;