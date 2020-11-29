var express = require('express');
var router = express.Router();
const AUTH_HELPER = require('../helpers/auth-helper')

var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto');



// Include the node file module
var fs = require('fs');

storage = multer.diskStorage({
  destination: './private/profile_images',
  filename: function (req, file, cb) {
    return crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) {
        console.log(err);
        return cb(err);
      }
      return cb(null, file.originalname);
    });
  }
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/genOtp', (req, res) => {
  console.log(req.body);
  AUTH_HELPER.generateOtp(req.body.phone, (status, code) => {
    res.status(status).send(JSON.stringify({ otp: code }))
  })
})


router.post('/user', (req, res) => {
  AUTH_HELPER.newUser(req, body, (status) => {
    res.sendStatus(status)
  })
})
router.post('/profileImg',
  multer({
    storage: storage
  }).single('upload'), function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.sendStatus(200);
    console.log(req.file.filename);
    return res.status(200).end();
  });




module.exports = router;
