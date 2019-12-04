if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const mailgunRouter = require("./Routes/mailgun");
const app = express();
const PORT = 8051;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mailgunRouter);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
