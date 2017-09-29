// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const favicon = require('serve-favicon')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'client', 'build', 'favicon.png')));

require("./routes.js")(app);

// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(__dirname);
});
