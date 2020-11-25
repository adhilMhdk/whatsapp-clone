var AWS = require('aws-sdk');
// Set region
AWS.config.update({
    region: "us-east-2",
    endpoint: "https://sns.us-east-2.amazonaws.com",
    accessKeyId: "AKIAI4KHDSKYVCQ2N2OA",
    secretAccessKey: "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"
})
var sns = new AWS.SNS();

module.exports = {
    send: (phone, msg, callback) => {
        var params = {
            Message: msg,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                   DataType: 'String',
                   StringValue: 'Transactional'
                }
            },
            PhoneNumber: phone
        };

        sns.publish(params, function (err, data) {
            if (err) {
                console.log(err);
                callback(404)
            } // an error occurred
            else {
                console.log(data);
                callback(200)
            } // successful response
        });
    }
}