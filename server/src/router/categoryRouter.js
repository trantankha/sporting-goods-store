const express = require('express');
const router = express.Router();
const upload = require('../app/middlewares/HandleUploadFile')
const CategoryController = require('../app/controllers/CategoryController');

router.post('/create', upload.single('file'), CategoryController.insertData)
router.get('/', CategoryController.getData)

module.exports = router;