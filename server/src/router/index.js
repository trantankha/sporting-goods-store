const express = require('express');
const router = express.Router();
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const typeproductRouter = require('./typeproductRouter');
const discountRouter = require('./discountRouter');
const informationRouter = require('./informationRouter');
const customerRouter = require('./customerRouter');

router.use('/discount', discountRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/typeproduct', typeproductRouter)
router.use('/information', informationRouter);
router.use('/customer', customerRouter)

module.exports = router;