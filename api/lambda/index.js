const mailgun = require("mailgun-js")({
  apiKey: "",
  domain: "vdavidhammond.com"
});

exports.handler = (event, context, callback) => {
  const { from, subject, text } = event;

  const data = {
    from,
    to: "vdavidhammond@gmail.com",
    subject,
    text
  };

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      callback(error, undefined);
    }
    callback(undefined, { status: 200, message: body.message });
  });
};
