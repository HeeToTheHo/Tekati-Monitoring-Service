module.exports = {
    Destination: { /* required */
      CcAddresses: [
      ],
      ToAddresses: [
        process.env.receiveemail,
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: "SERVICE " + process.env.moniturl + " IS UP"
        },
        Text: {
         Charset: "UTF-8",
         Data: "SERVICE " + process.env.moniturl + " IS UP"
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'UP'
       }
      },
    Source: process.env.senderemail, /* required */
    ReplyToAddresses: [
    ],
  };