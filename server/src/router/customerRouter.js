const express = require('express');
const router = express.Router();
const CustomerController = require('../app/controllers/CustomerController');
const authenticate = require('../app/middlewares/Authenticate');

router.post('/login', CustomerController.userLogin);
router.post('/create', CustomerController.insertData);
router.get('/', CustomerController.getData);

module.exports = router;