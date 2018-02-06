require('dotenv').config()
const express = require('express');
const cors = require('cors');
const request = require('request');
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });

  var mailgun;


app.post('/api/contact', (req, res)=>{
  mailgun = require('mailgun-js')({apiKey: process.env.HIDDEN_KEY, domain: 'vdavidhammond.com'});

  console.log(req.body);
  var data = {
    from: req.body.email,
    to: 'vdavidhammond@gmail.com',
    subject: req.body.subject,
    text: req.body.body
  };
  mailgun.messages().send(data, function (error, body) {
    console.log(mailgun);
    if(error) {
      console.log(error);
    }
    if(!error) {
      console.log(body);
      res.send(body);
    }
  });
});

};
