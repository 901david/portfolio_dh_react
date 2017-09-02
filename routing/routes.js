var path = require("path");
var express = require('express');

module.exports = function(app) {
app.use(express.static(path.join(__dirname, "../static")));
console.log(path.join(__dirname, "../static"));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });



};
