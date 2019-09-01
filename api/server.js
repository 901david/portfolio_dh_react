require("dotenv").config();
const express = require("express");
const mailgunRouter = require("./Routes/mailgun");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mailgunRouter);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
