const db = require('../../config/database/index');

class CustomerModel {
    static getAll(callback) {
        db.query('select * from customer', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = CustomerModel;