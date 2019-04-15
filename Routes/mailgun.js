const mailgun = require("mailgun-js")({
  apiKey: process.env.HIDDEN_KEY,
  domain: "vdavidhammond.com"
});
const mailgunRouter = require("express").Router();

mailgunRouter.post(
  "/contact",
  ({ body: { email: from, subject, body: text } }, { send }) => {
    const data = {
      from,
      to: "vdavidhammond@gmail.com",
      subject,
      text
    };
    mailgun.messages().send(data, function(error, body) {
      if (error) throw error;

      send(body);
    });
  }
);

module.exports = mailgunRouter;
