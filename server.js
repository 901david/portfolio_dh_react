// require("dotenv").config();
const express = require("express");
const path = require("path");
const htmlRouter = require("./Routes/html");
const mailgunRouter = require("./Routes/mailgun");
const dataRouter = require("./Routes/data");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname, "public")));

app.use(htmlRouter);
app.use("/api", mailgunRouter);
app.use("/api", dataRouter);

mongoose.connect(process.env.MONGODB_URI_MINE, { useNewUrlParser: true }, err => {
  if (err) throw err;
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
