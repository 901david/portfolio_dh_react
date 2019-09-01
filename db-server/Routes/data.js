const mongoose = require("mongoose");
const dataRouter = require("express").Router();
const db = require("../Models");

dataRouter.get("/", (req, res) => {
  db.PortfolioData.find()
    .then(data => {
      res.json({ data });
    })
    .catch(err => console.log(err));
});

dataRouter.post("/", ({ body: portfolioItem }, res) => {
  db.PortfolioData.create(portfolioItem)
    .then(data => {
      console.log(data);
      res.json({ succes: data });
    })
    .catch(err => console.log(err));
});

module.exports = dataRouter;
