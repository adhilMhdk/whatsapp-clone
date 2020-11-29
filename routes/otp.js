var express = require('express');
const otpHelper = require('../helpers/otpHelper');
const requests = require('../helpers/otpHelper');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.status(200).send(JSON.stringify(otpHelper.get()))
});



module.exports = router;
