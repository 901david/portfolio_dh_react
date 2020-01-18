// if (process.env.NODE_ENV === "development") {
require("dotenv").config();
// }
const express = require("express");
const mongoose = require("mongoose");
const PORT = 8050;
const app = express();
const dataRouter = require("./Routes/data");

app.use(express.json());
app.use("/data", dataRouter);

mongoose.connect(
  process.env.MONGODB_URI_MINE,
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  }
);
