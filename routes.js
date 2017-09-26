
var express = require('express');

var mailgun = require('./mailgun.js');
module.exports = function(app) {





app.post('/api/contact', (req, res)=>{
  console.log(req.body);
  var data = {
    from: req.body.email,
    to: 'vdavidhammond@gmail.com',
    subject: req.body.subject,
    text: req.body.body
  };
  mailgun.messages().send(data, function (error, body) {
    console.log(error);
    res.send(body);
  });
});
};
