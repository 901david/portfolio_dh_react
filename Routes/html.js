const htmlRouter = require("express").Router();
const path = require("path");

htmlRouter.get("/", (req, { sendFile }) => {
  sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = htmlRouter;
