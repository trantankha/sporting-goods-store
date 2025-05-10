const express = require('express');
const router = express.Router();
const InformationController = require('../app/controllers/InformationController');

router.get('/:id', InformationController.getDataById);

module.exports = router;