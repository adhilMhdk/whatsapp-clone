var otpGenerator = require('otp-generator')
const fs = require('fs')
const messageSender = require('./message-sender')


module.exports = {
    generateOtp: async (phone, callback) => {
        let num = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, number: true, alphabets: false });
        let message = "Your whatsApp clone code:\n" + num + "\nDon't share this code with others"
        messageSender.send(phone, message, (status) => {
            callback(status, num)
        })

    },
    newUser: (body, callback) => {
        console.log(body);
        var dir = './database/users'+body.phone;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            callback(200)
        }
    }
}