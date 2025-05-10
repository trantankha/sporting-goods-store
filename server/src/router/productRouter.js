const express = require('express');
const router = express.Router();
const upload = require('../app/middlewares/HandleUploadFile');
const ProductController = require('../app/controllers/ProductController');

router.post('/create', upload.array('file', 10), ProductController.insertData)
router.get('/', ProductController.getData)

module.exports = router;