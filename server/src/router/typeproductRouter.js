const express = require('express');
const router = express.Router();
const upload = require('../app/middlewares/HandleUploadFile');
const TypeProductController = require('../app/controllers/TypeProductController');

router.get('/', TypeProductController.getData)
router.post('/create', upload.none(), TypeProductController.insertData)

module.exports = router;