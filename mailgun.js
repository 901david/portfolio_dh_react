// var key = require('./keys.js');
// console.log(key.API_MAIL)
var mailgun = require('mailgun-js')({apiKey: key.API_MAIL || process.env.HIDDEN_KEY, domain: key.domain || process.env.domain});

module.exports = mailgun;
