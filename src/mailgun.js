const key = require('../ignore/apikey.js');
var mailgun = require('mailgun-js')({apiKey: key.mailgunKey, domain: key.domain});

module.exports = mailgun;
