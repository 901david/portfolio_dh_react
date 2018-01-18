require('dotenv').config()
var express = require('express');

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

app.use(cors()).post('/pendant/mail', (req, res)=>{
  mailgun = require('mailgun-js')({apiKey: process.env.HIDDEN_KEY, domain: 'pendantwrapper.com'});

  console.log(req.body);
  var dataTwo = {
    from: req.body.email,
    to: 'candyjkramer@gmail.com',
    subject: req.body.subject,
    text: req.body.body
  };
  mailgun.messages().send(dataTwo, function (error, body) {
    console.log(req.headers);
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
