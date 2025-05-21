const db = require('../../config/database/index');

class ProductModel {
    static getAll(callback) {
        db.query('call GetProducts()', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static insertProduct(product, callback) {
        db.query('call InsertProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [product.typeId, product.categoryId,
        product.trademark, product.name, product.color, product.size, product.quantity, product.price,
        product.describe, product.parameter, product.image, product.decrease, product.percent, product.viewer], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static updateProduct(product, callback) {
        db.query('call UpdateProduct(?, ?, ?, ?, ?)', [product.id, product.name, product.price, product.category, product.image], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static deleteProduct(id, callback) {
        db.query('call DeleteProduct(?)', [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static getProductById(id, callback) {
        db.query('CALL GetProductById(?)', [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
    static getProductByPagination(item, callback) {
        db.query('select * from product limit ? offset ?', [item.limit, item.size], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        })
    }
    static searchProducts(searchTerm, callback) {
        db.query('call SearchProducts(?)', [`%${searchTerm}%`], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
}

module.exports = ProductModel;