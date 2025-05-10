const db = require('../../config/database/index');

class StaffModel {
    static getAll(callback) {
        db.query('select * from staff', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = StaffModel;