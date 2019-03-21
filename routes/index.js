var express = require('express');
var router = express.Router();

let landing =require('../controllers/landing');

/* GET home page. */
router.post('/', landing.getLanding);

module.exports = router;
