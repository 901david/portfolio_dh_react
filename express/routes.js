const path = require("path");
const express = require('express');
const mailgun = require('./mailgun.js');
module.exports = function(app) {
app.use(express.static(path.join(__dirname, "./public")));
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, './index.html'));
});
app.post('/api/contact', (req, res)=>{
  console.log(req.body);
  let data = {
    from: req.body.email,
    to: 'vdavidhammond@gmail.com',
    subject: req.body.subject,
    text: req.body.body
  };
  mailgun.messages().send(data, function (error, body) {
    res.send(body);
  });
});
};
