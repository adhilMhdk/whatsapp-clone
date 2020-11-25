var express = require('express');
var router = express.Router();
const AUTH_HELPER = require('../helpers/auth-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/genOtp',(req,res)=>{
  console.log(req.body);
  AUTH_HELPER.generateOtp(req.body.phone,(status,code)=>{
    res.status(status).send(JSON.stringify({otp:code}))
  })
})

module.exports = router;
