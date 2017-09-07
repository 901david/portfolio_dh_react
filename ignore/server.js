// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/routes.js")(app);
app.get('/test', (req, res) => {

  res.sendFile(path.join(__dirname + "./js/testMain.html"));
});
// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
