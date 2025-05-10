const express = require('express');
const router = express.Router();
const DiscountController = require('../app/controllers/DiscountController');

router.post('/create', DiscountController.insertData);
router.get('/', DiscountController.getData);

module.exports = router;