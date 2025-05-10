const db = require('../../config/database/index');
// const { v4: uuidv4 } = require('uuid');

class CategoryModel {
    static getAll(callback) {
        db.query('SELECT * FROM category', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM category WHERE Id = ?', [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]);
        });
    }

    static create(categoryData, callback) {
        db.query('CALL InsertCategory(?, ?, ?)', [categoryData.name, categoryData.describe, categoryData.image], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = CategoryModel;