var key = require('./keys.js');
// console.log(key.API_MAIL)
var mailgun = require('mailgun-js')({apiKey: key.API_MAIL, domain: key.domain});

module.exports = mailgun;
