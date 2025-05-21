const db = require('../../config/database/index');

class CustomerModel {
    static getAll(callback) {
        db.query('select * from customer', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static create(customer, callback) {
        db.query('CALL InsertCustomer(?, ?, ?, ?, ?, ?)', [customer.name, customer.email, customer.address, customer.phone, customer.username, customer.password], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static findByUsername(username, callback) {
        db.query('select * from customer where Account = ?', [username], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = CustomerModel;