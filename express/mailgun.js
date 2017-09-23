const key = require('./apikey.js');
var mailgun = require('mailgun-js')({apiKey: process.env.HIDDEN_KEY || key.mailgunKey, domain: process.env.domain || key.domain});

module.exports = mailgun;
