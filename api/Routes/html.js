const htmlRouter = require("express").Router();
const path = require("path");


htmlRouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'public', "build", "index.html"));
});
module.exports = htmlRouter;
