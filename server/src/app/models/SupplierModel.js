const db = require('../../config/database/index');

class SupplierModel {
    static getAll(callback) {
        db.query('select * from supplier', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = SupplierModel;