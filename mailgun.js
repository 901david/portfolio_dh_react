require('dotenv').config()

var mailgun = require('mailgun-js')({apiKey: process.env.HIDDEN_KEY, domain: process.env.DOMAIN});

module.exports = mailgun;
