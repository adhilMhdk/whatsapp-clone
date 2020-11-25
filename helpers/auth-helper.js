var otpGenerator = require('otp-generator')
const messageSender = require('./message-sender')


module.exports = {
    generateOtp:async (phone, callback) => {
        let num = otpGenerator.generate(6, { upperCase: false, specialChars: false,digits:true,number:true,alphabets:false });
        let message = "Your whatsApp clone code:\n"+num+"\nDon't share this code with others"
        messageSender.send(phone,message,(status)=>{
            callback(status,num)
        })

    }
}