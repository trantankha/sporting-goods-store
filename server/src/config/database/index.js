const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '070907',
    database: 'myshop'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = db;