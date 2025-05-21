const CustomerModel = require('../models/CustomerModel');
const sendOTP = require('../middlewares/HandleSendOTP');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const path = require('path');

function randomInit(length, type) {
    const characters = '0123456789';
    let number = '';
    for (let i = 0; i < length; i++) {
        number += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (type === 'number') {
        return '09' + number;
    }
    return 'User' + number + '@gmail.com';
}

class CustomerController {
    static getData(req, res) {
        CustomerModel.getAll((err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

    static insertData(req, res) {
        const password = req.body.password;
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ error: "Lỗi mã hóa mật khẩu!" });
            const customer = {
                name: req.body.family + ' ' + req.body.name,
                email: randomInit(4, 'email'),
                address: 'Hà Nội',
                phone: randomInit(8, 'number'),
                username: req.body.username,
                password: hashedPassword,
            };
            CustomerModel.create(customer, (err, data) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json(data);
            });
        })
    }

    static updateData(req, res) {
        const customer = req.body;
        CustomerModel.updateCustomer(customer, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

    static deleteData(req, res) {
        const id = req.params.id;
        CustomerModel.deleteCustomer(id, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

    static getDataById(req, res) {
        const id = req.params.id;
        CustomerModel.getCustomerById(id, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        });
    }

    static sendOTP(req, res) {
        const email = req.body.email;
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        sendOTP(email, otp)
            .then(() => {
                CustomerModel.saveOTP(email, otp, (err) => {
                    if (err) return res.status(500).json({ error: err.message });
                    res.json({ message: 'OTP sent successfully' });
                });
            })
            .catch((error) => {
                console.error('Error sending OTP:', error);
                res.status(500).json({ error: 'Failed to send OTP' });
            });
    }
    static userLogin(req, res) {
        const { username, password } = req.body;
        CustomerModel.findByUsername(username, (err, data) => {
            const user = data[0];
            if (err) return res.status(500).json({ message: err.message });
            if (!user) return res.status(401).json({ message: 'Tài khoản không tồn tại !' });
            bcrypt.compare(password, user.Passwords)
                .then((match) => {
                    if (!match) return res.status(401).json({ message: 'Mật khẩu không chính xác !' });

                    const accessToken = jwt.sign(
                        { id: user.Id, username: user.Account },
                        process.env.JWT_SECRET,
                        { expiresIn: '1m' }
                    );

                    const refreshToken = jwt.sign(
                        { id: user.Id, username: user.Account },
                        process.env.JWT_REFRESH_SECRET,
                        { expiresIn: '1d' }
                    );

                    res.json({
                        accessToken,
                        refreshToken,
                        user: { id: user.Id, username: user.Account }
                    });
                });
        });
    }
}

module.exports = CustomerController;