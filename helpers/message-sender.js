const request = require('request-promise');
const otp = require('../helpers/otpHelper')

module.exports = {
    send: (phone, msg, callback) => {
        console.log(msg);
        otp.push({body:msg,phone:phone})
        otp.log()
        callback(200)
    }
}