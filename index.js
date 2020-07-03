/* Written by HeeToTheHo.
Environment variables that you need:
moniturl: put in the site you want monitored
recieveemail: the email address that will recieve the status email
senderemail: the email address that will send the email.
*/

var AWS = require("aws-sdk");
var https = require('https');

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    else
    console.log("Access Key:", AWS.config.credentials.accessKeyId);
});

https.get(process.env.moniturl, function(res) { // reads the enviorment url moniturl instead of hardcoding
    console.log("StatusCode: ", res.statusCode);
    if (res.statusCode == 200 || res.statusCode == 301 || res.statusCode == 302) {
        const params = require("./extras/UP.js")
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01', region: 'us-east-1'}).sendEmail(params).promise(); //TODO: figure out SESV2 API
        sendPromise.then(
            function(data) {
                console.log(data.MessageId);
            }).catch(
                function(err) {
                    console.error(err, err.stack);
                });
    } else {
        const params = require("./extras/DOWN.js")
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01', region: 'us-east-1'}).sendEmail(params).promise(); //TODO: figure out SESV2 API
        sendPromise.then(
            function(data) {
                console.log(data.MessageId);
            }).catch(
                function(err) {
                    console.error(err, err.stack);
            });
            
    }
});